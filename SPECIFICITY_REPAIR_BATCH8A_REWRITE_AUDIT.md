# Specificity Repair Batch 8A Rewrite Audit

## Scope

- Batch: 8A
- Planned IDs: 20
- Written IDs: 20
- Field scope: `simple_explanation` only
- JSON files changed:
  - `data/paper1_questions.json`
  - `data/paper3_questions.json`
- UI / docs / extraction files not changed:
  - `app.js`
  - `style.css`
  - `index.html`
  - `README`
  - `extract_questions.py`
- Commit/push: not performed

## Planned IDs

P3-394, P3-396, P1-1240, P1-412, P1-415, P1-416, P1-417, P1-428, P1-438, P1-457, P1-490, P1-572, P1-948, P3-031, P3-042, P3-360, P3-382, P3-384, P3-399, P3-415

## P1/P3 Counts

- P1: 11
- P3: 9

## Rewrite Summary

| question_id | rewrite_focus | result |
|---|---|---|
| P3-394 | AD&D exclusion reverse question; fare-paying passenger aviation exception. | keep |
| P3-396 | Accident benefit rider exclusion reverse question; ordinary traffic accident is not an exclusion. | keep |
| P1-1240 | Licensed intermediary controller threshold; 15% issued share capital. | keep |
| P1-412 | Insurable interest must be lawful; thief has no lawful interest in stolen property. | keep |
| P1-415 | No insurable interest; void contract and general refund/restoration treatment. | keep |
| P1-416 | No insurable interest; legal status is void, not partial non-payment only. | keep |
| P1-417 | No insurable interest; void contract and premium return distinction. | keep |
| P1-428 | Illegal copied software has no legally recognized insurable interest. | keep |
| P1-438 | Life insurable interest categories; fiancee/mother not automatically covered by listed classes. | keep |
| P1-457 | Property insurable interest can exist for bailee, executor, and mortgagee. | keep |
| P1-490 | Timing of insurable interest; life at inception versus indemnity at loss. | keep |
| P1-572 | Utmost good faith; past theft record is a material fact requiring disclosure. | keep |
| P1-948 | Long-tail claims and actuarial support; long-term liability business. | keep |
| P3-031 | Life insurable interest combination question; spouse, minor child, and debtor. | keep |
| P3-042 | No life insurable interest under s.64B; policy is void. | keep |
| P3-360 | Disability income rider terms; sex classification is not a common clause. | keep |
| P3-382 | Dismemberment benefit reverse question; no automatic double payment with death. | keep |
| P3-384 | Dismemberment benefit variant; no automatic double payment with death. | keep |
| P3-399 | Accidental death condition; death usually must occur within one year. | keep |
| P3-415 | Other accidental benefits schedule; includes lighter specified disabilities. | keep |

## Safety Check Results

| Check | Result |
|---|---|
| main...origin/main before write | pass, 0/0 |
| staged diff before write | pass, empty |
| JSON/UI/README/extract diff before write | pass, empty |
| JSON parse after write | pass |
| P1 count = 1391 | pass |
| P3 count = 807 | pass |
| total count = 2198 | pass |
| P1/P3 ID continuity | pass |
| actual_changed_ids equals planned 20 | pass |
| extra_changed_ids | 0 |
| missing_planned_ids | 0 |
| changed_fields only `simple_explanation` | pass |
| protected field changes | 0 |
| UI/README/extract_questions.py diff | pass, no diff |
| fixed four headings in written explanations | pass |
| no fifth section in written explanations | pass |
| no internal audit note in written explanations | pass |
| no original/source reference phrase in written explanations | pass |
| no empty template phrase in written explanations | pass |
| encoding marker scan | pass |
| generic_explanation_count | 0 |
| format_failure_count | 0 |
| `git diff --check` | pass; line-ending warnings only on existing changed files |

## Write Notes

- JSON writes were made with Node object updates and `JSON.stringify(..., null, 2)` after confirming both JSON files already exactly matched that format.
- No PowerShell pipeline was used to write Chinese text.
- No temporary runner file was created.
- No staging, commit, or push was performed.
