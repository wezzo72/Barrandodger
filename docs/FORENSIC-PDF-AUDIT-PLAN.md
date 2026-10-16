# OPERATION OPEN BOOK
## The Witness Remains — Forensic PDF Audit Plan

Author attribution:
Barran Resonance Dodger, also known as Dr Barran Dodger / Dr Richard William McLean.

## Purpose

Create a reproducible, transparent process for examining PDF documents in The Witness Remains archive.

## Preservation requirements

- Preserve original documents.
- Do not overwrite, rename, delete, or reorder existing evidence.
- Perform analysis on downloaded copies.
- Record document URLs, retrieval results, file sizes, and SHA-256 hashes.
- Record extraction errors and OCR limitations.
- Identify quotations by document and PDF page number.
- Distinguish verified text matches from interpretation and allegations.
- Never represent a hash as proof that a document's contents are true.
- Never represent an unsuccessful check as a successful verification.

## Planned audit components

1. scripts/pdf_audit.py
2. scripts/verify_quotes.py
3. docs/target_documents.csv
4. .github/workflows/forensic-pdf-audit.yml

## Audit status

PLANNED — not yet installed or executed.

## Reporting

The final report should identify:
- Documents attempted and successfully retrieved.
- Documents that could not be retrieved.
- PDF text extraction results.
- OCR-required pages and OCR errors.
- SHA-256 hashes.
- Quotation matches, mismatches, and inconclusive results.
- Execution date and software dependencies.

No allegation or conclusion is independently established by this audit alone.
