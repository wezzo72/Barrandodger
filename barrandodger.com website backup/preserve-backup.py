#!/usr/bin/env python3

"""
Barrandodger website backup preservation script.

Purpose:
- Preserve the existing website-backup structure.
- Create a dated preservation manifest.
- Record hashes for files so later changes can be detected.
- Produce a simple inventory of the archived material.

Run from the repository root or from:
barrandodger.com website backup/
"""

from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "preservation"
OUTPUT.mkdir(exist_ok=True)

timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
date_stamp = datetime.now(timezone.utc).strftime("%Y-%m-%d_%H%M%S")

manifest = []

# Files and folders that form part of the website backup.
EXCLUDED = {
    ".git",
    ".github",
    "preservation",
}

for path in sorted(ROOT.rglob("*")):
    if not path.is_file():
        continue

    relative = path.relative_to(ROOT)

    if any(part in EXCLUDED for part in relative.parts):
        continue

    sha256 = hashlib.sha256()

    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            sha256.update(chunk)

    manifest.append({
        "path": str(relative).replace("\\", "/"),
        "size_bytes": path.stat().st_size,
        "sha256": sha256.hexdigest(),
    })

record = {
    "archive": "Barrandodger website backup",
    "preservation_timestamp_utc": timestamp,
    "root": str(ROOT.name),
    "file_count": len(manifest),
    "files": manifest,
}

output_file = OUTPUT / f"manifest-{date_stamp}.json"

with output_file.open("w", encoding="utf-8") as f:
    json.dump(record, f, indent=2, ensure_ascii=False)

# Also maintain a human-readable inventory.
inventory_file = OUTPUT / f"inventory-{date_stamp}.txt"

with inventory_file.open("w", encoding="utf-8") as f:
    f.write("BARRANDODGER WEBSITE BACKUP\n")
    f.write("PRESERVATION INVENTORY\n")
    f.write("=" * 60 + "\n\n")
    f.write(f"Preserved: {timestamp}\n")
    f.write(f"Files recorded: {len(manifest)}\n\n")

    for item in manifest:
        f.write(f"{item['path']}\n")
        f.write(f"  Size: {item['size_bytes']} bytes\n")
        f.write(f"  SHA-256: {item['sha256']}\n\n")

print("Preservation completed.")
print(f"Files recorded: {len(manifest)}")
print(f"Manifest: {output_file}")
print(f"Inventory: {inventory_file}")
