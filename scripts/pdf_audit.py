
#!/usr/bin/env python3
"""Download and inventory target PDFs without modifying source documents."""

import argparse
import csv
import hashlib
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

MAX_BYTES = 100 * 1024 * 1024
USER_AGENT = "TheWitnessRemains-PDFAudit/1.0"


def sha256_file(path):
    digest = hashlib.sha256()
    with open(path, "rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def read_targets(path):
    with open(path, newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        if not reader.fieldnames or "url" not in reader.fieldnames:
            raise ValueError("Manifest must contain a 'url' column.")
        return list(reader)


def download_pdf(url, destination):
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme != "https":
        raise ValueError("Only HTTPS URLs are accepted.")

    request = urllib.request.Request(
        url, headers={"User-Agent": USER_AGENT}
    )

    with urllib.request.urlopen(request, timeout=45) as response:
        content_type = response.headers.get("Content-Type", "")
        length = response.headers.get("Content-Length")

        if length and int(length) > MAX_BYTES:
            raise ValueError("File exceeds the 100 MiB size limit.")

        digest = hashlib.sha256()
        total = 0
        first_bytes = b""

        with open(destination, "wb") as output:
            while True:
                chunk = response.read(1024 * 1024)
                if not chunk:
                    break

                total += len(chunk)
                if total > MAX_BYTES:
                    raise ValueError("Download exceeded the size limit.")

                if len(first_bytes) < 5:
                    first_bytes += chunk[:5 - len(first_bytes)]

                digest.update(chunk)
                output.write(chunk)

    if first_bytes != b"%PDF-":
        destination.unlink(missing_ok=True)
        raise ValueError("Downloaded content does not have a PDF signature.")

    return total, digest.hexdigest(), content_type


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--manifest",
        default="docs/target_documents.csv",
    )
    parser.add_argument(
        "--output",
        default="audit-results",
    )
    parser.add_argument("--delay", type=float, default=1.0)
    args = parser.parse_args()

    manifest = Path(args.manifest)
    output = Path(args.output)
    pdf_dir = output / "pdfs"
    pdf_dir.mkdir(parents=True, exist_ok=True)

    targets = read_targets(manifest)
    results = []

    for index, target in enumerate(targets, start=1):
        url = (target.get("url") or "").strip()
        doc_id = (target.get("document_id") or f"doc-{index}").strip()
        title = (target.get("title") or "").strip()

        result = {
            "document_id": doc_id,
            "title": title,
            "url": url,
            "status": "ERROR",
            "bytes": "",
            "sha256": "",
            "content_type": "",
            "retrieved_utc": datetime.now(timezone.utc).isoformat(),
            "error": "",
        }

        if not url:
            result["error"] = "Missing URL"
        else:
            safe_id = "".join(
                char if char.isalnum() or char in "-_." else "_"
                for char in doc_id
            )[:100] or f"doc-{index}"
            destination = pdf_dir / f"{safe_id}.pdf"

            try:
                size, digest, content_type = download_pdf(
                    url, destination
                )
                result.update({
                    "status": "DOWNLOADED",
                    "bytes": size,
                    "sha256": digest,
                    "content_type": content_type,
                })
            except (
                OSError,
                ValueError,
                urllib.error.URLError,
                TimeoutError,
            ) as exc:
                destination.unlink(missing_ok=True)
                result["error"] = str(exc)[:500]

        results.append(result)
        print(f"{doc_id}: {result['status']} {result['error']}")

        if args.delay > 0:
            time.sleep(args.delay)

    report = output / "download_manifest.csv"
    with open(report, "w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(results[0]) if results else [
            "document_id", "title", "url", "status", "bytes",
            "sha256", "content_type", "retrieved_utc", "error"
        ])
        writer.writeheader()
        writer.writerows(results)

    print(f"\nResults: {report}")
    print(f"Documents listed: {len(results)}")
    print(f"Downloads successful: {sum(r['status'] == 'DOWNLOADED' for r in results)}")
    print(f"Downloads failed: {sum(r['status'] != 'DOWNLOADED' for r in results)}")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, csv.Error) as exc:
        print(f"Audit stopped: {exc}", file=sys.stderr)
        sys.exit(1)
