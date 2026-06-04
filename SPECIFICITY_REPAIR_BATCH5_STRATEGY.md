# Specificity Repair Batch 5 Strategy

## Purpose

Batch 5 must be golden-sample driven. It should not blindly chase quantity.

This strategy is a planning and quality-control document only. It does not authorize JSON writing, staging, commit, or push.

## Batch Size

- Select 60-80 questions from the full-library scan.
- Do not expand the batch until spotcheck quality is stable.
- Do not continue if the working tree has JSON/UI diffs unrelated to the planned batch.

## Priority Order

Select candidates in this order:

1. Internal-note pollution in user-visible explanation.
2. Fifth section or old 5-part format.
3. "原始解析" / "PDF 原始解析" / textbook reference leakage.
4. Template or empty phrases.
5. Combination questions without item-by-item i/ii/iii/iv explanation.
6. Reverse questions that do not state the question direction.
7. Positive definition questions mislabelled as reverse questions.
8. Agency / contract / utmost good faith questions similar to the golden samples.

## Golden Sample Baseline

Every planned rewrite must identify the closest golden sample before writing:

| Scenario | Required Golden Sample |
|---|---|
| Utmost good faith / no disclosure / exception question | P1-553 |
| Contract privity / positive legal principle definition | P1-244 / P1-245 |
| Combination question / agency responsibility direction | P1-279 |
| Reverse question / absolute wording / insurance agent liability | P1-1291 |

The rewrite plan must record the chosen sample for each question.

## Combination Question Rule

For any i/ii/iii/iv question:

1. Keep the section title fixed as `3. 逐项解释其他选项为什么错`.
2. First judge each subitem:
   - i 对/错：reason.
   - ii 对/错：reason.
   - iii 对/错：reason.
   - iv 对/错：reason.
3. Then judge A/B/C/D:
   - Correct combination: why it exactly contains the correct subitems.
   - Wrong combinations: exactly which wrong subitem was added, or which correct subitem was omitted.

Forbidden:

- Only saying "多包或少包某个小项".
- Skipping i/ii/iii/iv.
- Guessing A/B/C/D directly.
- Skipping the subitem-judgment step.

## Spotcheck Standard

- Spotcheck at least 50% of the batch.
- Mandatory spotcheck coverage:
  - all golden-sample-like questions,
  - all combination questions,
  - all reverse/exception questions,
  - all questions that previously had internal-note pollution.
- Each sampled question must be marked `keep` or `repair_needed`.
- If any spotcheck result is `repair_needed`, stop and do not commit.

## Stop Conditions

Stop before commit if any of these occurs:

- JSON parse fails.
- P1/P3 count or ID continuity changes.
- Any changed field is not `simple_explanation`.
- Any planned question lacks a golden-sample category.
- Any protected field changes.
- Any JSON/UI file outside the explicit plan changes.
- `generic_explanation_count > 0`.
- `format_failure_count > 0`.
- `combination_question_failure_count > 0`.
- `repair_needed > 0` in spotcheck.

## Commit Policy

Batch 5 requires a separate user approval before staging, committing, or pushing.

Never stage or commit:

- `PROJECT_A_MEMORY.md`
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`
- `.claude/settings.local.json`
- UI files
- PDF / offline / sharedFiles
- temporary files
