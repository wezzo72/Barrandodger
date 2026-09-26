# 09 — The archive's own verification portal reports SHA-256 matches demonstrated: 0

## Executive proposition

A finding aid that only publishes supporting facts is a brochure. The presentation site publishes a verification portal that reports a negative result. Of 256 filenames in blockchain_manifest.json, inspected on 19 September 2026, SHA-256 matches demonstrated: 0. Bitcoin block 897241 "remains a project-manifest claim." That publication is among the strongest evidence that the archive's mandate — examination, not marketing — is capable of being honoured.

## Scope

Opened: [verification.html](https://wezzo72.github.io/Barrandodger/verification.html) and the statements it makes about blockchain_manifest.json in the evidence repo. This scan did not re-hash 256 files. It reports what the portal itself reports, and treats that report as a public methodological result.

## Documentary findings

The portal states: "Git history establishes repository history, not the truth of a document's contents. A file on GitHub is not, by itself, blockchain authentication."

Inspected result, 19 September 2026: of 256 filenames in blockchain_manifest.json, 10 exist as complete git objects, 134 as pointer/stub files (~131 bytes), and 112 are absent from commit 834959528619cbce355adcda1940ae00c23b198d. All 10 complete objects differ in size from the manifest, so they cannot be the hashed bytes. SHA-256 matches demonstrated: 0. Bitcoin block 897241 remains a project-manifest claim.

The portal tells the reader how to verify: open the GitHub path; check git object size; a ~131-byte PDF path is a pointer or stub; compare size with the manifest; do not upgrade an allegation into a finding.

What the site does not claim, as listed on that page: that every allegation in a filename is established; that git SHA equals SHA-256 of a named PDF; that bitcoin block 897241 anchors every listed file; that pointer files are inspectable primary-source PDFs; that inclusion of a person or organisation establishes liability.

statistics.json, 19 September 2026, records blockchain_manifest_present: true and sha256_of_file_contents_calculated_this_phase: false.

Cover pages on the Tredwell wrapper PDF, by contrast, print SHA-256 fingerprints and the sentence "Bitcoin-sealed · ~15,000 independent nodes." Those covers are archive additions (essay 04). The verification portal is the site's own check on such claims. The two are not the same document class.

## Primary evidence

- [verification.html](https://wezzo72.github.io/Barrandodger/verification.html)
- [statistics.json](https://raw.githubusercontent.com/wezzo72/Barrandodger/main/data/statistics.json)
- [Tredwell wrapper covers, for the contrasting claim](https://github.com/wezzo72/Backup/blob/main/client/public/documents/2023-03-27-federal-court-final-assessment-dr-rich-mclean.pdf)

## Corroboration

The portal and statistics.json agree that a blockchain manifest exists and that SHA-256 of file contents was not demonstrated as matching in the recorded inspection. That is internal agreement about a negative result.

## Contrary evidence

A later re-hash, or a different commit in which LFS objects are present, could change the count. This essay does not assert that no file in the project will ever match a published digest. It asserts that the public portal, as retrieved on 26 September 2026, reports zero demonstrated matches for the 256 manifest names at the cited commit.

Pointer/stub files are consistent with Git LFS. LFS is a storage mechanism. It is not a blockchain.

## What the record establishes

- A — The presentation site publishes a verification portal that reports SHA-256 matches demonstrated: 0 for the 256 manifest names at the cited commit.
- A — The same page states that a GitHub file is not, by itself, blockchain authentication, and that bitcoin block 897241 is a project-manifest claim.
- A — Wrapper pages in at least one Backup PDF continue to print blockchain-sealed language. That language is not validated by the portal's recorded inspection.
- A — Publishing the negative result is consistent with the mandate of examination.

## What the record does not establish

It does not establish that OpenTimestamps was never used. It does not establish that every blockchain sentence on barrandodger.com is false. It establishes that, on the inspection the archive itself published, the named manifest did not demonstrate matches.

## Unresolved questions

Whether the 134 pointer files resolve to real PDFs when Git LFS is fetched, and whether those blobs would then match the manifest sizes, was not tested in this pass.

## Evidence classification

Portal text and the recorded 0 matches: A, as a published inspection result of the archive's own method. Blockchain sealing of the corpus as a whole: not established. Wrapper blockchain language: E, and currently unsupported by the portal's figures.

## Provenance

Live GET of verification.html; raw statistics.json; wrapper text from the Tredwell PDF covers. 26 September 2026.

## Verification links

- [verification.html](https://wezzo72.github.io/Barrandodger/verification.html)
- [statistics.json](https://raw.githubusercontent.com/wezzo72/Barrandodger/main/data/statistics.json)
- [Issue #2 no-fabrication rule](https://github.com/drbarrandodger/barran-dodger-archive/issues/2)

## Conclusion

A third party can conclude that the archive has, in public, reported that its blockchain-manifest inspection produced zero SHA-256 matches. That sentence supports the mandate more than any cover-page seal. A third party cannot conclude from the portal that no document in the project is authentic; authenticity of an agency letter is a different question, answered by opening the letter (essays 03–06), not by a bitcoin block number.
