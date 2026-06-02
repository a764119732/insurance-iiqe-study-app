# Full Explanation Batch 16 Candidate Plan

Updated: 2026-06-02

## Objective

Generate Full Explanation Batch 16 for remaining low-risk or sufficiently supported template explanations after Batch 1-15.

Batch 16 will not commit or push. It will only modify `simple_explanation` for audited IDs.

## Source Files Read

- `AGENTS.md`
- `PROJECT_A_MEMORY.md`
- `FULL_EXPLANATION_REWRITE_STRATEGY.md`
- `FULL_EXPLANATION_REWRITE_WORKFLOW.md`
- `FULL_EXPLANATION_DO_NOT_AUTO_POLICY.md`
- `TEMPLATE_EXPLANATION_REWRITE_PLAN.md`
- `FULL_EXPLANATION_BATCH1_REWRITE_AUDIT.md` through `FULL_EXPLANATION_BATCH15_REWRITE_AUDIT.md`
- `FULL_EXPLANATION_BATCH15_REWRITE_SPOTCHECK.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

## Selection Rules

Included only if all checks passed:

- Not written in Batch 1-15.
- Not listed in `RISKY_DO_NOT_AUTO_REGISTRY.md`.
- Not `P1-018`, `P1-091`, or `P3-131`.
- Current `simple_explanation` remains old-template, template-like, or not five-section.
- `original_explanation` is sufficient to support a conservative rewrite.
- No answer/option/original-explanation conflict was found from JSON evidence.
- Only `simple_explanation` will be changed.

Excluded if any of these risks appeared:

- Legal boundary or fragile insurable-interest boundary.
- Incontestability or fraud boundary requiring extra legal precision.
- Regulatory, privacy, anti-corruption, broker, guideline, disclosure, or institution fact where the original explanation was too thin.
- Combination, negative, or all-items logic without enough original-explanation support.
- PDF/OCR or neighboring-question uncertainty.

## Candidate Scan Result

After excluding Batch 1-15, Do Not Auto IDs, and explicit exclusions, the broad ordinary scan found 63 possible remaining candidates. Manual audit removed 15 because they were legal, regulatory, disclosure, or otherwise too thin for automatic rewriting.

Batch 16 approved IDs: 48.

## Approved Batch 16 IDs

P1: 7

- `P1-712`
- `P1-782`
- `P1-786`
- `P1-794`
- `P1-801`
- `P1-957`
- `P1-1024`

P3: 41

- `P3-010`
- `P3-013`
- `P3-084`
- `P3-128`
- `P3-129`
- `P3-320`
- `P3-334`
- `P3-340`
- `P3-359`
- `P3-383`
- `P3-397`
- `P3-450`
- `P3-451`
- `P3-454`
- `P3-455`
- `P3-457`
- `P3-482`
- `P3-486`
- `P3-487`
- `P3-490`
- `P3-492`
- `P3-493`
- `P3-494`
- `P3-495`
- `P3-497`
- `P3-500`
- `P3-502`
- `P3-508`
- `P3-520`
- `P3-526`
- `P3-530`
- `P3-569`
- `P3-598`
- `P3-663`
- `P3-703`
- `P3-705`
- `P3-712`
- `P3-732`
- `P3-766`
- `P3-788`
- `P3-806`

Total approved count: 48.

## Excluded After Manual Review

- `P1-484`: insurable-interest boundary; do not auto.
- `P1-585`: utmost-good-faith legal remedy boundary; defer.
- `P1-596`: same legal remedy boundary; defer.
- `P1-1113`: regulator filing-frequency fact; defer to avoid thin institutional rewrite.
- `P1-1252`: broker/business-entity fitness-and-properness category; defer.
- `P1-1254`: broker/business-entity risk-control category; defer.
- `P1-1256`: civil-liability/reliability category; defer.
- `P1-1274`: broker audit-report negative question; defer.
- `P1-1324`: Personal Data Privacy Ordinance boundary; defer.
- `P1-1333`: equal-opportunity legal category; defer.
- `P1-1340`: discrimination-law exception boundary; defer.
- `P1-1366`: corruption/legal boundary; defer.
- `P3-058`: spouse/divorce insurable-interest boundary; defer.
- `P3-539`: incontestability/fraud boundary; defer.
- `P3-674`: investment-linked benefit-illustration disclosure rule; defer.

## Planned Files

- `FULL_EXPLANATION_BATCH16_MANUAL_AUDIT.md`
- `FULL_EXPLANATION_BATCH16_REWRITE_PLAN.md`
- `FULL_EXPLANATION_BATCH16_REWRITE_AUDIT.md`
- `FULL_EXPLANATION_BATCH16_REWRITE_SPOTCHECK.md`

## Protected Scope

Do not modify:

- `original_explanation`
- question text
- options
- `correct_answer`
- `source_page`
- `reference`
- `chapter`
- `section`
- `app.js`
- `style.css`
- `index.html`
- `README.md`
- `extract_questions.py`
- PDFs
- `iiqe_offline_300.html`
- `sharedFiles`
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`

Do not commit or push.
