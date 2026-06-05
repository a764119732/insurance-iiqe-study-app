# Specificity Repair Batch 7A Rewrite Audit

## Scope

- Batch: 7A
- Planned IDs: 20
- Written IDs: 20
- Field scope: `simple_explanation` only
- JSON files touched:
  - `data/paper1_questions.json`
  - `data/paper3_questions.json`
- Audit/spotcheck files created:
  - `SPECIFICITY_REPAIR_BATCH7A_REWRITE_AUDIT.md`
  - `SPECIFICITY_REPAIR_BATCH7A_SPOTCHECK.md`

## Planned IDs

P1-276, P1-559, P1-1293, P3-525, P3-535, P3-554, P1-489, P1-499, P1-989, P1-1341, P1-1349, P3-585, P3-647, P3-711, P3-730, P3-738, P3-739, P1-134, P1-143, P1-144

## Golden Sample Distribution

| golden_sample_id | Count |
|---|---:|
| P1-1291 | 5 |
| P1-553 | 2 |
| P1-244/P1-245 | 3 |
| general_teaching_style | 10 |

## Rewrite Summary

| question_id | golden_sample_id | rewrite_focus | result |
|---|---|---|---|
| P1-276 | P1-1291 | Reverse liability-direction question; distinguish direct liability from vicarious liability. | keep |
| P1-559 | P1-553 | Highest-good-faith material/non-material fact distinction; explain exception direction. | keep |
| P1-1293 | P1-1291 | Reverse insurance-agent responsibility question; separate agent and broker requirements. | keep |
| P3-525 | P1-1291 | Reverse complete-contract clause question; identify over-narrow "only part" wording. | keep |
| P3-535 | general_teaching_style | Reverse complete-contract feature question; explain who may amend policy terms. | keep |
| P3-554 | P1-553 | Incontestability/non-fraud health disclosure question; explain two-year and fraud boundary. | keep |
| P1-489 | general_teaching_style | Reverse insurable-interest timing question; distinguish life and indemnity policies. | keep |
| P1-499 | general_teaching_style | Reverse assignment-consent question; distinguish freight, cargo, and life/person policies. | keep |
| P1-989 | P1-1291 | Reverse business-source classification question; distinguish channel classes from referrals. | keep |
| P1-1341 | general_teaching_style | Reverse fair-discrimination question; distinguish actuarial basis from prejudice. | keep |
| P1-1349 | general_teaching_style | Reverse money-laundering stage question; explain placement/layering/integration. | keep |
| P3-585 | general_teaching_style | Reverse class-beneficiary definition question; distinguish group class from single spouse. | keep |
| P3-647 | P1-1291 | Reverse supplementary policy details question; separate underwriting details from payer identity. | keep |
| P3-711 | general_teaching_style | Reverse permitted-gift question; distinguish relationship/brand gifts from special bonus. | keep |
| P3-730 | general_teaching_style | Positive underwriting-factor judgment; explain health indicators and personal risk. | keep |
| P3-738 | general_teaching_style | Positive underwriting terminology definition; explain declined-risk term. | keep |
| P3-739 | P1-1291 | Reverse risk-class question; identify non-standard "highest class" wording. | keep |
| P1-134 | P1-244/P1-245 | Contract-definition concept question; explain enforceable agreement and why all three statements matter. | keep |
| P1-143 | P1-244/P1-245 | Social arrangement versus legal intention; explain why dinner plan is not enforceable. | keep |
| P1-144 | P1-244/P1-245 | Social arrangement versus contract; distinguish intention from oral/written form. | keep |

## Safety Check Results

| Check | Result |
|---|---|
| planned_ids_count = 20 | pass |
| protected forbidden IDs absent | pass |
| manual_confirm / do_not_auto absent | pass |
| duplicate planned IDs = 0 | pass |
| JSON/UI diff clean before write | pass |
| all written IDs from Batch 7 plan | pass |
| JSON parse | pass |
| P1 count = 1391 | pass |
| P3 count = 807 | pass |
| total count = 2198 | pass |
| P1/P3 ID continuity | pass |
| actual_changed_ids equals planned 20 | pass |
| extra_changed_ids = 0 | pass |
| missing_planned_ids = 0 | pass |
| changed_fields only `simple_explanation` | pass |
| protected field changes = 0 | pass |
| UI/README/extract_questions.py diff | pass |
| encoding marker scan | pass |
| fixed four headings | pass |
| no fifth section | pass |
| no internal audit note in written explanations | pass |
| no original/source reference phrase in written explanations | pass |
| no empty template phrase | pass |
| reverse question direction check | pass |
| positive definition mislabel check | pass |
| concrete option reason check | pass |
| teaching style check | pass |
| golden sample alignment check | pass |
| generic_explanation_count | 0 |
| format_failure_count | 0 |
| git diff --check | pass |
| temporary runner deleted | not applicable; no temporary runner file created |

## Notes

- Initial sandboxed write attempt returned EPERM on `data/paper1_questions.json`; the authorized retry completed the same planned 20-ID write. Because an EPERM occurred in this run, Batch 7B should not be started in the same turn.
- This audit file is not user-facing explanation text.
