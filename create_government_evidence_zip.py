from pathlib import Path
import zipfile

source = Path("Government Evidence")
output_dir = Path("/home/user/AI_DRIVE_OUTPUT")
output_dir.mkdir(parents=True, exist_ok=True)
output = output_dir / "Government_Evidence_Documents.zip"
script_name = "create_government_evidence_zip.py"

files = sorted(p for p in source.rglob("*") if p.is_file() and p.name != script_name)
if not files:
    raise RuntimeError("No evidence files were supplied from the Government Evidence folder.")

with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for file_path in files:
        archive.write(file_path, arcname=file_path.relative_to(source))

with zipfile.ZipFile(output, "r") as archive:
    bad_file = archive.testzip()
    archived_count = len(archive.infolist())

if bad_file is not None:
    raise RuntimeError(f"ZIP integrity check failed at: {bad_file}")

print(f"Created: {output}")
print(f"Files archived: {archived_count}")
print(f"Size bytes: {output.stat().st_size}")
print("ZIP integrity check: passed")
