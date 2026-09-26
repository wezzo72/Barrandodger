# 02 — Forty-eight agency PDFs are stored as party's copies under original filenames

## Executive proposition

The archive's purpose is not only to talk about documents. It is to keep documents where a stranger can open them. This scan found a dated catalogue of forty-eight government and agency PDFs stored under original filenames in the presentation repository, with binary copies on the public GitHub Pages path docs/official-drive/. Those files are the party's copies. They are not, by being stored, court findings.

## Scope

The object of this essay is the catalogue [data/official-drive-binaries-2026-09-20.json](https://github.com/wezzo72/Barrandodger/blob/main/data/official-drive-binaries-2026-09-20.json) and the files it names. The catalogue's own note says: filenames and covering emails identify source material; they are not findings of wrongdoing; some titles are the author's overlay of official material.

## Documentary findings

The JSON object records generated = 2026-09-20, method = "Downloaded specific Google Drive PDFs by file ID (and unique Gmail agency-letter attachments). Deduped by filename. Not an auto-reply sweep. Binary copies pushed via git." Count = 48.

The 48 filenames include, among others: 2020-04-09-IBAC-CASE-2020712-Outcome-letter.pdf; McLean-determination-Comcare-rejection-26May2021.pdf; ART-2021-7478-McLean-and-Comcare-Decision-12-July-2023.pdf; 2021-11-13-APRA-reject-Whistleblower-Status.pdf; 2023-07-04-AHRC-contact-SECOFFICIALSensitive.pdf; 2021-06-03-NDIS-Quality-Safeguards-Commission-not-an-employee.pdf; Commonwealth-Ombudsman-PID-notification-not-to-allocate.pdf; 2025-08-08-Commonwealth-Ombudsman-Service-Restriction.pdf; FOI decision letters; Disability Royal Commission submission SUB00101440; and a file named THE-DIGITAL-APOCALYPSE-OF-ADMINISTRATIVE-ANNIHILATION.pdf.

The README of wezzo72/Barrandodger, under "Official Drive binaries (20 September 2026)," states: "Forty-eight government / agency PDFs downloaded from Google Drive by file ID (plus unique Gmail agency-letter attachments) are stored in docs/official-drive/. These are the party's copies. They are not court findings."

This scan downloaded and opened several of those binaries (see essays 03–06). They exist as PDFs at public URLs of the form https://wezzo72.github.io/Barrandodger/docs/official-drive/<filename>.

The catalogue is therefore doing the mandate's work: it places a named file at a named path. A third party can fetch the same bytes.

## Primary evidence

- [official-drive-binaries-2026-09-20.json](https://github.com/wezzo72/Barrandodger/blob/main/data/official-drive-binaries-2026-09-20.json)
- [docs/official-drive listing](https://github.com/wezzo72/Barrandodger/tree/main/docs/official-drive)
- [drive-official-binaries.html](https://wezzo72.github.io/Barrandodger/drive-official-binaries.html)
- [wezzo72/Barrandodger README](https://github.com/wezzo72/Barrandodger/blob/main/README.md)

## Corroboration

The same binaries can be requested from GitHub blob URLs and from GitHub Pages URLs. That is two retrieval paths for one git object, not a second provenance.

A larger document pool exists in [wezzo72/Backup](https://github.com/wezzo72/Backup) under client/public/documents/ (statistics.json: 333 files in that folder). The forty-eight are a curated official-drive subset, not the whole Backup tree.

## Contrary evidence

The catalogue's own note warns that some titles are the author's overlay. A filename such as EVIDENCE-NDIS-SOCIAL-SERVICES-MINISTER-JEFF-TRICKER-URGENT-SECOFFICIAL.pdf is a label. It does not, without opening the file, establish what the minister determined. THE-DIGITAL-APOCALYPSE-OF-ADMINISTRATIVE-ANNIHILATION.pdf is an author publication sitting in the same folder as agency letters. Folder membership is not document class.

The 8 August 2025 Commonwealth Ombudsman Service Restriction PDF was downloaded (1,013,561 bytes, 3 pages) and yielded no extractable text in this pass. File existence is established. Letter body is not.

## What the record establishes

- A — A catalogue dated 20 September 2026 names 48 files and states they were downloaded by Google Drive file ID or as unique Gmail agency-letter attachments.
- A — The presentation README calls them party's copies and not court findings.
- A — Named PDFs in that folder were retrievable over HTTPS on 26 September 2026.
- A — At least one file in the folder is an author publication by title, so the folder is not a pure agency series.

## What the record does not establish

Storage does not authenticate a signature, does not prove an agency still holds the same file, and does not convert an allegation in a covering email into a finding. It does not prove that every PDF in Backup is an official record.

## Unresolved questions

Which of the 48 files are unaltered agency originals, which are scans of letters inside author wrappers, and which are author compilations, is only partly resolved by the files this scan opened.

## Evidence classification

Existence of the 48 binaries and of the catalogue: A. Agency authorship of any one file: A only where the opened PDF itself shows agency letterhead and a named officer, as in essays 03–06. Filename overlays: E.

## Provenance

JSON catalogue and README from wezzo72/Barrandodger on 26 September 2026. Direct PDF downloads from the Pages path docs/official-drive/.

## Verification links

- [Catalogue JSON](https://raw.githubusercontent.com/wezzo72/Barrandodger/main/data/official-drive-binaries-2026-09-20.json)
- [Example: Comcare determination PDF](https://wezzo72.github.io/Barrandodger/docs/official-drive/McLean-determination-Comcare-rejection-26May2021.pdf)
- [Example: IBAC outcome PDF](https://wezzo72.github.io/Barrandodger/docs/official-drive/2020-04-09-IBAC-CASE-2020712-Outcome-letter.pdf)

## Conclusion

A third party can conclude that the archive keeps a named set of party's-copy PDFs at public URLs, which is the preservation half of the mandate. A third party cannot conclude that every file in that folder is an official determination, or that the folder as a whole proves the author's case.
