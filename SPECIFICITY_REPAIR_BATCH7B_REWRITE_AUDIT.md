# Specificity Repair Batch 7B Rewrite Audit

## Scope

- Batch: 7B
- Planned IDs: 20
- Written IDs: 20
- Field scope: `simple_explanation` only
- JSON files changed:
  - `data/paper1_questions.json`
- JSON files not changed:
  - `data/paper3_questions.json`
- Audit/spotcheck files created:
  - `SPECIFICITY_REPAIR_BATCH7B_REWRITE_AUDIT.md`
  - `SPECIFICITY_REPAIR_BATCH7B_SPOTCHECK.md`
- Commit/push: not performed

## Planned IDs

P1-151, P1-160, P1-163, P1-164, P1-165, P1-166, P1-167, P1-204, P1-210, P1-213, P1-218, P1-219, P1-220, P1-229, P1-235, P1-237, P1-238, P1-246, P1-255, P1-277

## Golden Sample Distribution

| golden_sample_id | Count |
|---|---:|
| P1-244/P1-245 | 17 |
| P1-279 | 3 |

## Rewrite Summary

| question_id | golden_sample_id | rewrite_focus | result |
|---|---|---|---|
| P1-151 | P1-244/P1-245 | Simple contract formed by conduct through paid bus carriage. | keep |
| P1-160 | P1-244/P1-245 | Simple-contract essentials, especially consideration rather than writing or age shorthand. | keep |
| P1-163 | P1-244/P1-245 | Simple contract may be oral or written; distinguish deed formalities. | keep |
| P1-164 | P1-244/P1-245 | True description of simple contract form; avoid deed/seal confusion. | keep |
| P1-165 | P1-244/P1-245 | Necessary simple-contract element is consideration, not writing or simple wording. | keep |
| P1-166 | P1-244/P1-245 | Simple contract does not depend on special procedures. | keep |
| P1-167 | P1-244/P1-245 | Simple contract may be proved by conduct even without oral/written evidence. | keep |
| P1-204 | P1-244/P1-245 | Insured's consideration in insurance contract is premium/payment promise. | keep |
| P1-210 | P1-244/P1-245 | Both insurer and insured provide consideration. | keep |
| P1-213 | P1-244/P1-245 | Consideration definition; all listed aspects are part of the complete answer. | keep |
| P1-218 | P1-244/P1-245 | Capacity to contract as legal ability to enter a contract. | keep |
| P1-219 | P1-244/P1-245 | Capacity restrictions for mentally disordered, minors, and bankrupt persons. | keep |
| P1-220 | P1-244/P1-245 | Capacity to contract definition; reject absolute "completely no capacity" wording. | keep |
| P1-229 | P1-244/P1-245 | Intention to create legal relations; lack of intention means no contract. | keep |
| P1-235 | P1-244/P1-245 | Voidable contract definition and aggrieved party's election. | keep |
| P1-237 | P1-244/P1-245 | Voidable insurance contract distinguished from void and unenforceable. | keep |
| P1-238 | P1-244/P1-245 | Material omission/misstatement can make policy voidable. | keep |
| P1-246 | P1-279 | Agency direction: son as agent, mother as principal, shop as third party. | keep |
| P1-255 | P1-279 | Insurance agent and insurance broker are both agents, but represent different sides. | keep |
| P1-277 | P1-279 | Vicarious liability definition and responsibility direction. | keep |

## Safety Check Results

| Check | Result |
|---|---|
| planned_ids_count = 20 | pass |
| all planned IDs present in JSON | pass |
| protected forbidden IDs absent | pass |
| manual_confirm / do_not_auto absent in plan | pass |
| duplicate planned IDs = 0 | pass |
| JSON parse | pass |
| P1 count = 1391 | pass |
| P3 count = 807 | pass |
| total count = 2198 | pass |
| P1/P3 ID continuity | pass |
| changed_ids equals planned 20 | pass |
| extra_changed_ids = 0 | pass |
| missing_planned_ids = 0 | pass |
| changed_fields only `simple_explanation` | pass |
| protected field changes = 0 | pass |
| `data/paper3_questions.json` diff | pass, no diff |
| UI/README/extract script diff | pass, no diff |
| 4-section headings in written explanations | pass |
| no fifth section in written explanations | pass |
| no internal audit note in written explanations | pass |
| no original/PDF/source reference phrase in written explanations | pass |
| no empty template phrase in written explanations | pass |
| encoding marker check in written explanations | pass |
| generic_explanation_count | 0 |
| format_failure_count | 0 |
| combination_question_failure_count | 0 |
| repair_needed in spotcheck | 0 |

## Write Notes

- Initial sandboxed JSON write returned `EPERM` on `data/paper1_questions.json`.
- Authorized retry wrote the 20 planned fields, but PowerShell pipeline encoding damaged the Chinese text.
- The damaged text was immediately repaired by direct `apply_patch` line replacement for the same 20 `simple_explanation` fields.
- A temporary runner `tmp_batch7b_rewrite.js` was created during repair and deleted after it was no longer needed; final runner residue check found no remaining file.
- No staging, commit, or push was performed.
