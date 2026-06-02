# Evidence Audit Batch 2 Rewrite Plan

Updated: 2026-06-03

## 1. Scope

This file is a rewrite plan generated from `EVIDENCE_AUDIT_BATCH2_MANUAL_CHECK.md`.

This plan does not write JSON. It only defines the exact future field scope if the user later authorizes writing.

Allowed future field:

- `simple_explanation` only

Protected fields that must remain unchanged:

- `id`
- `paper`
- question text fields
- options
- `correct_answer`
- `original_explanation`
- `source_page`
- `reference`
- chapter / section fields

## 2. Source Rules Applied

Skills read:

- `project-a-evidence-rewrite`
- `project-a-explanation-style`

Manual audit source:

- `EVIDENCE_AUDIT_BATCH2_MANUAL_CHECK.md`

Selection rules:

- Include only items marked `可进入 rewrite plan` in the manual check.
- Exclude all items marked `人工确认`.
- Exclude Do Not Auto registry hits.
- Exclude evidence-insufficient, answer-conflict, OCR-polluted, and unclear legal/regulatory-boundary items.
- Do not authorize JSON writing from this plan alone.

## 3. Planned IDs

Total planned IDs: 41

P1 planned IDs:

- `P1-710`
- `P1-958`
- `P1-1390`
- `P1-964`
- `P1-969`
- `P1-997`
- `P1-999`
- `P1-799`

P3 planned IDs:

- `P3-008`
- `P3-692`
- `P3-443`
- `P3-444`
- `P3-588`
- `P3-727`
- `P3-745`
- `P3-680`
- `P3-719`
- `P3-404`
- `P3-772`
- `P3-774`
- `P3-382`
- `P3-730`
- `P3-384`
- `P3-570`
- `P3-792`
- `P3-403`
- `P3-410`
- `P3-468`
- `P3-499`
- `P3-506`
- `P3-791`
- `P3-585`
- `P3-587`
- `P3-763`
- `P3-647`
- `P3-687`
- `P3-586`
- `P3-388`
- `P3-580`
- `P3-582`
- `P3-800`

## 4. Explicitly Excluded IDs

Manual-confirmation IDs excluded from this rewrite plan:

- `P1-1211`
- `P1-1080`
- `P1-1114`
- `P1-1070`
- `P1-1071`
- `P1-1304`
- `P1-1305`
- `P1-1306`
- `P1-1307`
- `P1-1326`
- `P1-1342`
- `P1-1174`
- `P1-1175`
- `P1-1191`
- `P1-1168`
- `P1-1179`
- `P1-1166`
- `P1-1167`
- `P1-1264`
- `P1-1088`
- `P1-1095`
- `P1-1096`
- `P1-1336`
- `P1-1341`
- `P1-492`
- `P1-1328`
- `P1-1144`
- `P1-1188`
- `P1-1178`
- `P1-1180`
- `P1-1181`
- `P1-1215`
- `P1-1317`
- `P1-1153`

Other exclusions:

- Do Not Auto registry hits: none among planned IDs.
- Evidence-insufficient items: excluded.
- Answer-conflict items: none identified in manual check.
- OCR-polluted items: none identified in manual check.
- Unclear legal/regulatory-boundary items: excluded.

## 5. Per-ID Rewrite Plan

| ID | paper | planned field | basis from manual check | required style focus |
|---|---|---|---|---|
| `P3-008` | P3 | `simple_explanation` | Broad life insurance definition is supported by extracted original explanation. | Explain simplified definition, then note life insurance also includes savings/investment functions. |
| `P3-692` | P3 | `simple_explanation` | Fund performance factors include investment return, expenses, and claims. | All-items direction; explain each factor. |
| `P3-443` | P3 | `simple_explanation` | Specified-disease categories include cancer, heart, disability, organ, nervous, and immune system categories. | Combination item; include and explain i/ii/iii/iv. |
| `P3-444` | P3 | `simple_explanation` | Specified-disease category list supports i/ii/iv and excludes common cold. | Combination item; explain excluded distractor. |
| `P1-710` | P1 | `simple_explanation` | Abandonment is mainly marine and often disallowed in other property policies. | All-items direction; explain abandonment scenario. |
| `P3-588` | P3 | `simple_explanation` | Contingent beneficiary receives payment if first beneficiary predeceases life insured. | Insurance scenario example with first and contingent beneficiary. |
| `P3-727` | P3 | `simple_explanation` | Financial underwriting considers ability to pay, risk degree, accumulated policies, and excessive sum assured. | Distinguish financial underwriting from technical underwriting. |
| `P3-745` | P3 | `simple_explanation` | Same financial underwriting factor list supports all selected factors. | All-items direction; explain why all factors are financial. |
| `P3-680` | P3 | `simple_explanation` | Actuary considers fund performance, economic outlook, and fairness across policyholders. | Negative item; identify excluded factor. |
| `P3-719` | P3 | `simple_explanation` | Underwriting is risk assessment to decide insurability and terms. | Core definition of underwriting. |
| `P3-404` | P3 | `simple_explanation` | Same accident causing death and dismemberment pays one relevant benefit, not both. | Negative item; avoid reversing the single-benefit rule. |
| `P3-772` | P3 | `simple_explanation` | Group policy administration involves master policy and member-level documents. | All-items direction for group insurance documentation. |
| `P3-774` | P3 | `simple_explanation` | Group policy process supports member certificate/registration. | Explain member-level evidence under group policy. |
| `P3-382` | P3 | `simple_explanation` | Same accident death/dismemberment single-benefit rule is supported. | Negative item; explain why double payment is not expected. |
| `P3-730` | P3 | `simple_explanation` | Physical hazards include obesity, heavy smoking, substance abuse, risky jobs/hobbies, and family/personal medical history. | Negative item; separate physical hazards from other hazard types. |
| `P3-384` | P3 | `simple_explanation` | Same accident death/dismemberment single-benefit rule is supported. | Negative item; state judgment direction first. |
| `P3-570` | P3 | `simple_explanation` | Grace period rules support non-application to first premium. | Negative item; explain first premium exception. |
| `P3-792` | P3 | `simple_explanation` | Date of death affects decreasing term amount, bonus calculation, and policy expiry. | All-items direction; explain each consequence. |
| `P3-403` | P3 | `simple_explanation` | Lower benefit applies to limb/eye loss or other specified minor injuries. | All-items direction; explain lower-benefit concept. |
| `P3-410` | P3 | `simple_explanation` | Lower benefit applies to limb/eye loss or other specified minor injuries. | Explain which injuries fit the lower-benefit category. |
| `P1-958` | P1 | `simple_explanation` | Training, education, qualifications, and internal/external instructors are supported. | Negative item; clarify training vs education. |
| `P1-1390` | P1 | `simple_explanation` | Fraud-prevention practical steps are listed in extracted original explanation. | All-items direction; make steps practical and memorable. |
| `P1-964` | P1 | `simple_explanation` | Long-term business category list supports the answer. | Classification item; explain included long-term classes. |
| `P1-969` | P1 | `simple_explanation` | Long-term business category list supports excluding the non-class. | Negative classification; state what is not in the list. |
| `P3-468` | P3 | `simple_explanation` | Optional medical plans increase benefit limits under a basic plan. | All-items direction; explain add-on benefit purpose. |
| `P3-499` | P3 | `simple_explanation` | Guaranteed insurability option allows extra insurance at specified dates/ages/events without proof. | Explain option mechanics using policyholder scenario. |
| `P3-506` | P3 | `simple_explanation` | Inflation reduces purchasing power and matters for long-term sums insured. | All-items direction; explain why inflation matters. |
| `P3-791` | P3 | `simple_explanation` | Claim payment may deduct policy loans, unpaid premiums, and interest. | All-items direction; explain deduction items. |
| `P3-585` | P3 | `simple_explanation` | Class designation examples include children and siblings, not a named spouse. | Negative item; distinguish class vs named beneficiary. |
| `P3-587` | P3 | `simple_explanation` | Class designation names a group such as children or siblings. | All-items direction; explain group designation. |
| `P3-763` | P3 | `simple_explanation` | Refusal to insure is a substandard-life underwriting measure. | Negative/term item; distinguish refusal from rating or exclusion. |
| `P3-647` | P3 | `simple_explanation` | Supplemental requirements include agent report, premium payment method, evidence of insurability, and underwriting questionnaire. | Negative/combination item; explain excluded payment-by-other-person distractor. |
| `P3-687` | P3 | `simple_explanation` | Bonus fund performance factors include investment return, expenses, and claims, not sales-team ability. | Negative item; explain excluded factor. |
| `P1-997` | P1 | `simple_explanation` | Academic insurance classes include life/person, property, liability, and pecuniary interest. | Classification item; explain why distractors are not academic classes. |
| `P1-999` | P1 | `simple_explanation` | Academic insurance classes include life/person, property, liability, and pecuniary interest. | Classification item; explain selected class and distractors. |
| `P1-799` | P1 | `simple_explanation` | Contribution can be changed by rateable proportion, non-contribution, and partial contribution clauses. | All-items direction; explain each contribution clause. |
| `P3-586` | P3 | `simple_explanation` | Class designation means naming a group rather than each individual. | Definition item; use children/siblings example. |
| `P3-388` | P3 | `simple_explanation` | Accidental death must be directly caused by accidental bodily injury and occur within the specified period. | Explain death-benefit trigger and timing. |
| `P3-580` | P3 | `simple_explanation` | Beneficiary is the person designated to receive life policy death benefit. | Definition item; distinguish from policyowner/life insured. |
| `P3-582` | P3 | `simple_explanation` | Beneficiary is the person designated to receive life policy death benefit. | Definition item; distinguish from policyowner/life insured. |
| `P3-800` | P3 | `simple_explanation` | Original death certificate is the usual proof of death. | Claims evidence item; explain why original certificate is required. |

## 6. Required Explanation Style

Future `simple_explanation` writing must use the card-style explanation standard:

- 大白话考点
- 核心规则
- `1. 第一步`
- `2. 第二步`
- `3. 结论`
- 逐个排错 A/B/C/D
- 举例（保险原题场景）
- 速记口诀

Writing requirements:

- Do not merely say an option does not match the question.
- Explain why each option is correct or wrong.
- For combination questions, explain included and excluded items.
- For negative, exception, and all-items questions, state the judgment direction first.
- For legal, regulatory, or institutional questions, rely on evidence audit and do not invent rules.

## 7. Required Validation Before Any Future JSON Write

Before writing:

- Re-read this plan.
- Confirm planned IDs exactly match Section 3.
- Build protected-field snapshots for both JSON files.

After writing:

- JSON parse.
- P1 count = 1391.
- P3 count = 807.
- total = 2198.
- ID continuity for P1 and P3.
- Changed IDs exactly equal the 41 planned IDs.
- Changed field is only `simple_explanation`.
- Protected field changes = 0.
- Do Not Auto overlap = 0.
- Encoding pollution check passes.
- Generate `EVIDENCE_AUDIT_BATCH2_REWRITE_AUDIT.md`.
- Generate `EVIDENCE_AUDIT_BATCH2_REWRITE_SPOTCHECK.md`.

## 8. Stop Conditions

Stop before writing if any of the following appears:

- planned IDs differ from this file
- manual-confirmation ID is included
- Do Not Auto overlap
- evidence insufficiency
- answer conflict
- option conflict
- OCR pollution
- unclear legal, regulatory, or institutional boundary
- user has not explicitly authorized JSON writing
