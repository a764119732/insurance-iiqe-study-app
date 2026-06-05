# Specificity Repair Batch 7C Rewrite Audit

## Scope

- Batch: 7C
- Planned IDs: 20
- Written IDs: 20
- Field scope: `simple_explanation` only
- JSON files changed:
  - `data/paper1_questions.json`
- JSON files not changed:
  - `data/paper3_questions.json`
- UI / docs / extraction files not changed:
  - `app.js`
  - `style.css`
  - `index.html`
  - `README`
  - `extract_questions.py`
- Audit/spotcheck files created:
  - `SPECIFICITY_REPAIR_BATCH7C_REWRITE_AUDIT.md`
  - `SPECIFICITY_REPAIR_BATCH7C_SPOTCHECK.md`
- Commit/push: not performed

## Planned IDs

P1-388, P1-391, P1-393, P1-394, P1-397, P1-398, P1-399, P1-549, P1-573, P1-777, P1-913, P1-985, P1-1035, P1-1120, P1-1121, P1-1156, P1-1159, P1-1170, P1-1227, P1-1229

## Recovery Notes

- Previous Batch 7C write attempt stopped on `EPERM` while a Node runner tried to write `data/paper1_questions.json`.
- Recovery diagnosis found no JSON diff, no UI diff, no staged files, and `main...origin/main` aligned before rewrite.
- Temporary file removed before rewrite:
  - `tmp_batch7c_rewrite.js`
- Two requested skill files were not present in `.agents/skills`; only `project-a-recover` exists there. The rewrite used `GOLDEN_EXPLANATION_SAMPLES.md`, `SPECIFICITY_REPAIR_BATCH7_REWRITE_PLAN.md`, and `CLAUDE.md`.

## Golden Sample Distribution

| golden_sample_id | Count |
|---|---:|
| P1-279 | 8 |
| P1-553 | 2 |
| general_teaching_style | 10 |

## Rewrite Summary

| question_id | golden_sample_id | rewrite_focus | result |
|---|---|---|---|
| P1-388 | P1-279 | Agency termination when a corporate agent is liquidated; reject transfer/purchase distractors. | keep |
| P1-391 | P1-279 | Natural-person agent incapacity and insurer termination right. | keep |
| P1-393 | P1-279 | Natural-person principal/agent incapacity; distinguish corporate directors from the legal entity. | keep |
| P1-394 | P1-279 | Agency termination due to agent incapacity, not ordinary board or management changes. | keep |
| P1-397 | P1-279 | Agency becomes illegal after law change; immediate termination despite remaining term. | keep |
| P1-398 | P1-279 | Legal change makes agency content unlawful; distinguish automatic termination from consent-based termination. | keep |
| P1-399 | P1-279 | Agency agreement becomes illegal within fixed term; explain immediate termination. | keep |
| P1-549 | P1-553 | Highest good faith; material facts that increase risk must be disclosed. | keep |
| P1-573 | P1-553 | Non-fraudulent non-disclosure caused by mistaken belief that disclosure was unnecessary. | keep |
| P1-777 | general_teaching_style | Contribution principle for two indemnity policies covering the same loss. | keep |
| P1-913 | general_teaching_style | First premium importance in life insurance contract existence. | keep |
| P1-985 | general_teaching_style | Statutory general-business class: motor liability. | keep |
| P1-1035 | general_teaching_style | Insurance Authority as the standard-setting approving body for recognized broker bodies. | keep |
| P1-1120 | general_teaching_style | Transparency through regulatory disclosure of insurer and Lloyd's financial/statistical data. | keep |
| P1-1121 | general_teaching_style | Repeated transparency concept; distinguish anti-money-laundering and privacy distractors. | keep |
| P1-1156 | general_teaching_style | Policy as written evidence of complete contract terms. | keep |
| P1-1159 | general_teaching_style | Code recommendation to explain renewal disclosure duty under utmost good faith. | keep |
| P1-1170 | general_teaching_style | Insurer responsibility for ensuring its agents comply with law and codes. | keep |
| P1-1227 | P1-279 | Licensed individual insurance agent's principal is the authorized insurer. | keep |
| P1-1229 | general_teaching_style | Licensed technical representative agent must be licensed by the IA. | keep |

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
| `data/paper3_questions.json` diff | pass, no diff |
| UI/README/extract script diff | pass, no diff |
| encoding marker scan | pass |
| fixed four headings | pass |
| no fifth section | pass |
| no internal audit note in written explanations | pass |
| no original/source reference phrase in written explanations | pass |
| no empty template phrase | pass |
| combination explanation check | pass, no combination questions in Batch 7C |
| reverse question direction check | pass, no reverse questions in Batch 7C |
| positive definition mislabel check | pass |
| concrete option reason check | pass |
| teaching style check | pass |
| golden sample alignment check | pass |
| generic_explanation_count | 0 |
| format_failure_count | 0 |
| `git diff --check` | pass |
| temporary runner residue | pass, none found |

## Write Notes

- JSON was updated by precise `apply_patch` line replacements only.
- No Node/Python whole-file rewrite was used after the EPERM recovery.
- No PowerShell pipeline was used to write Chinese JSON.
- No staging, commit, or push was performed.
