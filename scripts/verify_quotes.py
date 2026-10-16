
#!/usr/bin/env python3
"""Compare supplied quotations against text on specified PDF pages."""

import argparse
import csv
import re
import sys
import unicodedata
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print(
        "Missing dependency: PyMuPDF. "
        "Install it with: python -m pip install pymupdf",
        file=sys.stderr,
    )
    sys.exit(2)


def normalize(text):
    """Normalize Unicode and whitespace without changing word order."""
    text = unicodedata.normalize("NFKC", text)
    return re.sub(r"\s+", " ", text).strip()


def main():
    parser = argparse.ArgumentParser(
        description="Verify quotations against individual PDF pages."
    )
    parser.add_argument(
        "--quotes",
        default="docs/quotes_to_verify.csv",
    )
    parser.add_argument(
        "--pdf-dir",
        default="audit-results/pdfs",
    )
    parser.add_argument(
        "--output",
        default="audit-results/quotation_results.csv",
    )
    args = parser.parse_args()

    quote_file = Path(args.quotes)
    pdf_dir = Path(args.pdf_dir)
    output_file = Path(args.output)
    output_file.parent.mkdir(parents=True, exist_ok=True)

    required = {"document_id", "page", "quote"}

    with quote_file.open(
        newline="", encoding="utf-8-sig"
    ) as handle:
        reader = csv.DictReader(handle)

        if not reader.fieldnames or not required.issubset(
            reader.fieldnames
        ):
            raise ValueError(
                "Quotation CSV must contain: "
                "document_id,page,quote"
            )

        rows = list(reader)

    results = []

    for row in rows:
        doc_id = (row.get("document_id") or "").strip()
        page_text = (row.get("page") or "").strip()
        quote = (row.get("quote") or "").strip()

        result = {
            "document_id": doc_id,
            "page": page_text,
            "quote": quote,
            "status": "",
            "details": "",
        }

        if not doc_id or not quote:
            result["status"] = "INVALID_INPUT"
            result["details"] = "Missing document ID or quotation."
            results.append(result)
            continue

        if not page_text.isdigit() or int(page_text) < 1:
            result["status"] = "INVALID_PAGE"
            result["details"] = "Page must be a positive 1-based number."
            results.append(result)
            continue

        # IDs are restricted to safe filename characters.
        if not re.fullmatch(r"[A-Za-z0-9_.-]+", doc_id):
            result["status"] = "INVALID_ID"
            result["details"] = "Unsafe document ID."
            results.append(result)
            continue

        pdf_path = pdf_dir / f"{doc_id}.pdf"

        if not pdf_path.is_file():
            result["status"] = "PDF_MISSING"
            result["details"] = str(pdf_path)
            results.append(result)
            continue

        try:
            with fitz.open(pdf_path) as pdf:
                page_index = int(page_text) - 1

                if page_index >= len(pdf):
                    result["status"] = "INVALID_PAGE"
                    result["details"] = (
                        f"PDF has {len(pdf)} pages."
                    )
                else:
                    extracted = pdf[page_index].get_text("text")

                    if not extracted.strip():
                        result["status"] = "NO_EXTRACTABLE_TEXT"
                        result["details"] = (
                            "Page may require OCR or visual inspection."
                        )
                    elif quote in extracted:
                        result["status"] = "EXACT_MATCH"
                        result["details"] = (
                            "Quotation found verbatim in extracted page text."
                        )
                    elif normalize(quote) in normalize(extracted):
                        result["status"] = "NORMALIZED_MATCH"
                        result["details"] = (
                            "Match found after whitespace and Unicode normalization."
                        )
                    else:
                        result["status"] = "NOT_FOUND"
                        result["details"] = (
                            "Quotation not found on the specified page."
                        )

        except Exception as exc:
            result["status"] = "EXTRACTION_ERROR"
            result["details"] = str(exc)[:300]

        results.append(result)
        print(
            f"{doc_id}, page {page_text}: "
            f"{result['status']}"
        )

    fields = [
        "document_id", "page", "quote", "status", "details"
    ]

    with output_file.open(
        "w", newline="", encoding="utf-8"
    ) as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(results)

    print(f"\nQuotation results saved to: {output_file}")
    print(f"Quotations checked: {len(results)}")
    print(
        "Matches: "
        + str(sum(
            r["status"] in {"EXACT_MATCH", "NORMALIZED_MATCH"}
            for r in results
        ))
    )


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, csv.Error) as exc:
        print(f"Verification stopped: {exc}", file=sys.stderr)
        sys.exit(1)
