# Full Explanation Batch 14 Rewrite Audit

Updated: 2026-06-02

## Actual Writes

- Written IDs: 100
- P1 written: 88
- P3 written: 12
- Modified field: selected IDs' `simple_explanation` only.
- Skipped IDs: 0.

## Written ID List

P1-006, P1-017, P1-021, P1-033, P1-035, P1-036, P1-037, P1-041, P1-044, P1-045, P1-062, P1-067, P1-074, P1-080, P1-082, P1-084, P1-094, P1-113, P1-124, P1-125, P1-127, P1-130, P1-132, P1-133, P1-134, P1-139, P1-141, P1-143, P1-144, P1-146, P1-151, P1-153, P1-155, P1-160, P1-162, P1-163, P1-164, P1-165, P1-166, P1-167, P1-168, P1-174, P1-177, P1-186, P1-188, P1-199, P1-204, P1-205, P1-210, P1-213, P1-218, P1-219, P1-220, P1-229, P1-233, P1-235, P1-237, P1-238, P1-241, P1-244, P1-245, P1-246, P1-255, P1-257, P1-258, P1-263, P1-271, P1-276, P1-278, P1-279, P1-285, P1-286, P1-344, P1-351, P1-355, P1-359, P1-369, P1-374, P1-375, P1-377, P1-384, P1-387, P1-388, P1-389, P1-392, P1-394, P1-395, P1-1290, P3-057, P3-107, P3-111, P3-113, P3-114, P3-119, P3-123, P3-126, P3-132, P3-138, P3-139, P3-140

## Validation

- JSON parse: passed.
- Counts: P1=1391, P3=807, total=2198.
- ID continuity: P1=True, P3=True.
- Changed IDs match selected Batch 14 IDs: True.
- Non-`simple_explanation` field diffs: 0.
- Protected field changes: 0.
- Five-section structure: 100/100.
- Do Not Auto / manual exclusion / Batch 1-13 / Risky rewrite overlap: 0.
- Encoding/template marker hits: 0.

## Explicitly Not Modified

- `original_explanation`
- question text
- options
- `correct_answer`
- `source_page`
- `reference`
- chapter/section fields
- `app.js`
- `style.css`
- `index.html`
- `README.md`
- `extract_questions.py`
- PDFs
- `iiqe_offline_300.html`
- `sharedFiles`
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`

## Repair round 1

- Repaired negative/exception wording pattern after spotcheck found that `P1-006` needed clearer phrasing.
- Scope remained within the same 100 Batch 14 IDs and `simple_explanation` only.
- No protected fields were modified.
