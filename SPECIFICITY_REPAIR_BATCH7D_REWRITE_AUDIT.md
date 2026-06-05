# Specificity Repair Batch 7D Rewrite Audit

## Scope

- Batch: 7D
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
- Audit/spotcheck files created:
  - `SPECIFICITY_REPAIR_BATCH7D_REWRITE_AUDIT.md`
  - `SPECIFICITY_REPAIR_BATCH7D_SPOTCHECK.md`

## Planned IDs

P1-1230, P1-1231, P1-1232, P1-1233, P1-1237, P1-1238, P1-1268, P1-1285, P1-1289, P1-1370, P1-1372, P1-1385, P3-529, P3-636, P3-654, P3-708, P3-756, P3-758, P3-637, P1-684

## P1/P3 Counts

- P1: 13
- P3: 7

## Golden Sample Distribution

| golden_sample_id | Count |
|---|---:|
| general_teaching_style | 15 |
| P1-279 | 4 |
| P1-1291 | 1 |

## Rewrite Summary

| question_id | golden_sample_id | rewrite_focus | result |
|---|---|---|---|
| P1-1230 | general_teaching_style | Insurance broker licensing authority; distinguish regulator from professional bodies. | keep |
| P1-1231 | general_teaching_style | Licensed technical representative broker definition; distinguish broker-company representation. | keep |
| P1-1232 | general_teaching_style | Licensed technical representative agent definition; distinguish agency-company representation. | keep |
| P1-1233 | general_teaching_style | Licensed insurance agency entity definition; distinguish entity from individual representatives. | keep |
| P1-1237 | P1-279 | Authorized insurer vicarious liability for appointed insurance agent conduct. | keep |
| P1-1238 | P1-279 | Section 68 vicarious liability scope; explain authority-scope issue. | keep |
| P1-1268 | general_teaching_style | Professional indemnity insurance minimum limit for insurance brokers. | keep |
| P1-1285 | P1-279 | Broker duty to policy holder; distinguish broker from agent. | keep |
| P1-1289 | P1-1291 | Errors and omissions exposure as professional negligence. | keep |
| P1-1370 | general_teaching_style | Anti-bribery agent benefit rule and prohibited benefit-taking behavior. | keep |
| P1-1372 | general_teaching_style | Principal permission condition for agent accepting benefits. | keep |
| P1-1385 | general_teaching_style | Misappropriation of premium by intermediary as theft-type conduct. | keep |
| P3-529 | general_teaching_style | Complete contract components; distinguish policy and attached application copy. | keep |
| P3-636 | general_teaching_style | Applicant/proposer responsibility for completing and signing application. | keep |
| P3-654 | general_teaching_style | Conditional premium receipt; explain failed insurability condition. | keep |
| P3-708 | general_teaching_style | Realized dividend ratio calculation; distinguish non-guaranteed benefits from promises. | keep |
| P3-756 | general_teaching_style | Attending physician report as common underwriting medical report. | keep |
| P3-758 | general_teaching_style | Reasons for requesting attending physician report; all listed reasons apply. | keep |
| P3-637 | P1-279 | Application procedure combination question; judge i/ii/iii/iv before A/B/C/D. | keep |
| P1-684 | general_teaching_style | Reverse "least related to indemnity" direction; distinguish close indemnity principles. | keep |

## Safety Check Results

| Check | Result |
|---|---|
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
| UI/README/extract script diff | pass, no diff |
| encoding marker scan | pass |
| fixed four headings | pass |
| no fifth section | pass |
| no internal audit note in written explanations | pass |
| no original/source reference phrase in written explanations | pass |
| no empty template phrase | pass |
| combination explanation check | pass |
| reverse question direction check | pass |
| positive definition mislabel check | pass |
| concrete option reason check | pass |
| teaching style check | pass |
| golden sample alignment check | pass |
| generic_explanation_count | 0 |
| format_failure_count | 0 |

## Write Notes

- Initial prior attempt stopped on `EPERM` while a temporary runner tried to write `data/paper1_questions.json`.
- This run deleted the old temporary runner first.
- `paper1_questions.json` file attribute check showed `IsReadOnly=False` and `Attributes=Archive`.
- `icacls` showed the current sandbox/user has modify rights on `paper1_questions.json`; administrators and SYSTEM have full control.
- The current process integrity level was Medium Mandatory Level; antivirus state could not be reliably verified from this shell.
- JSON changes in this run were made by targeted `apply_patch` replacements, one planned `simple_explanation` field at a time.
- No temporary runner remained after rewrite.
