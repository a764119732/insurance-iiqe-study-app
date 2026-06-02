# Evidence Audit Batch 2 Manual Check

Updated: 2026-06-03

## 1. Scope

This file audits the next unprocessed items from `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md` after Batch 1.

This is a manual evidence check, not a rewrite plan. No JSON writing is authorized by this file.

Files and evidence read:

- `.agents/skills/project-a-evidence-audit/SKILL.md`
- `PROJECT_A_MEMORY.md`
- `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md`
- `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

Scope limitation:

- The queue contains 100 items total.
- Batch 1 already audited queue items 1-25.
- Batch 2 therefore audits the remaining queue items 26-100: 75 items.
- This is below the normal 80-120 target only because the current queue has no further unprocessed items.

Evidence limitation:

- This audit uses the question bank's extracted `source_file`, `source_page`, `original_explanation`, question text, answer, and available metadata as the current evidence base.
- Items marked "可进入 rewrite plan" are still conditional. If source-page checking later reveals a mismatch, the item must be removed from rewrite planning.

## 2. Audit Result Summary

| Result | Count | IDs |
|---|---:|---|
| Audited | 75 | P1-1211, P1-1080, P1-1114, P3-008, P3-692, P1-1070, P1-1071, P3-443, P3-444, P1-1304, P1-1305, P1-1306, P1-1307, P1-710, P3-588, P3-727, P3-745, P1-1326, P3-680, P1-1342, P3-719, P3-404, P3-772, P3-774, P1-1174, P1-1175, P1-1191, P3-382, P3-730, P3-384, P3-570, P3-792, P3-403, P3-410, P1-958, P1-1168, P1-1390, P1-964, P1-969, P3-468, P3-499, P1-1179, P1-1166, P1-1167, P3-506, P1-1264, P1-1088, P1-1095, P1-1096, P1-1336, P1-1341, P1-492, P1-1328, P1-1144, P1-1188, P3-791, P1-1178, P1-1180, P1-1181, P3-585, P3-587, P3-763, P1-1215, P3-647, P3-687, P1-997, P1-999, P1-799, P1-1317, P1-1153, P3-586, P3-388, P3-580, P3-582, P3-800 |
| 可进入 rewrite plan | 41 | P3-008, P3-692, P3-443, P3-444, P1-710, P3-588, P3-727, P3-745, P3-680, P3-719, P3-404, P3-772, P3-774, P3-382, P3-730, P3-384, P3-570, P3-792, P3-403, P3-410, P1-958, P1-1390, P1-964, P1-969, P3-468, P3-499, P3-506, P3-791, P3-585, P3-587, P3-763, P3-647, P3-687, P1-997, P1-999, P1-799, P3-586, P3-388, P3-580, P3-582, P3-800 |
| 需要人工确认 | 34 | P1-1211, P1-1080, P1-1114, P1-1070, P1-1071, P1-1304, P1-1305, P1-1306, P1-1307, P1-1326, P1-1342, P1-1174, P1-1175, P1-1191, P1-1168, P1-1179, P1-1166, P1-1167, P1-1264, P1-1088, P1-1095, P1-1096, P1-1336, P1-1341, P1-492, P1-1328, P1-1144, P1-1188, P1-1178, P1-1180, P1-1181, P1-1215, P1-1317, P1-1153 |
| Do Not Auto registry hits | 0 | None |
| Suspected direct answer conflict | 0 | None |

Note: the 41 "可进入 rewrite plan" items are conditional candidates only. This file does not authorize writing `simple_explanation`.

## 3. Per-question Manual Evidence Check

| # | ID | paper | chapter / section | correct_answer | queue risk | current evidence judgment | decision | reason |
|---:|---|---|---|---|---|---|---|---|
| 26 | P1-1211 | P1 | 6 / 6.1 | D | 监管/制度事实 | Original explanation supports complaints handling split, but exact complaints-body scope and monetary limit are institutional facts. | 人工确认 | Do not rewrite until source page confirms current complaints process and limit. |
| 27 | P1-1080 | P1 | 6 / 6.1 | A | 否定题 | Original explanation supports minimum solvency reserve, but amount/rule is regulatory. | 人工确认 | Requires exact regulation wording and amount confirmation. |
| 28 | P1-1114 | P1 | 6 / 6.1 | A | 组合题 | Original explanation supports i/ii and excludes iii, but audited return requirements are regulatory. | 人工确认 | Requires source confirmation of reporting obligations. |
| 29 | P3-008 | P3 | 1 / 1.1 | D | 以上各项题 | Original explanation supports the broad definition as suitable for beginners despite simplification. | 可进入 rewrite plan | Conceptual definition; no direct conflict found. |
| 30 | P3-692 | P3 | 5 / 5.2 | D | 以上各项题 | Original explanation links bonuses to fund performance, investment return, expenses, and claims. | 可进入 rewrite plan | Source basis supports all-items explanation. |
| 31 | P1-1070 | P1 | 6 / 6.1 | A | 否定题 | Original explanation lists minimum paid-up capital amounts, but this is regulatory and negative-worded. | 人工确认 | Requires exact statutory amount confirmation before rewrite. |
| 32 | P1-1071 | P1 | 6 / 6.1 | D | 组合题 | Original explanation lists all four capital requirements, but this is regulatory. | 人工确认 | Requires exact statutory amount confirmation. |
| 33 | P3-443 | P3 | 3 / 3.3 | D | 组合题 | Original explanation lists specified-disease categories and supports i/ii/iii/iv. | 可进入 rewrite plan | Product category evidence is sufficient for a conditional rewrite candidate. |
| 34 | P3-444 | P3 | 3 / 3.3 | B | 组合题 | Original explanation lists specified-disease categories and excludes cold/flu-type distractor. | 可进入 rewrite plan | Supports included and excluded items. |
| 35 | P1-1304 | P1 | 7 / 7.2 | D | 以上各项题 | Original explanation states personal data definition, but this is privacy ordinance wording. | 人工确认 | Legal wording must be source-confirmed. |
| 36 | P1-1305 | P1 | 7 / 7.2 | D | 以上各项题 | Original explanation states personal data definition, but this is privacy ordinance wording. | 人工确认 | Legal wording must be source-confirmed. |
| 37 | P1-1306 | P1 | 7 / 7.2 | B | 否定题 | Original explanation supports excluding corporation-related data, but this is privacy ordinance wording. | 人工确认 | Negative legal definition needs exact source confirmation. |
| 38 | P1-1307 | P1 | 7 / 7.2 | D | 以上各项题 | Original explanation states personal data definition, but this is privacy ordinance wording. | 人工确认 | Legal wording must be source-confirmed. |
| 39 | P1-710 | P1 | 3 / 3.4 | D | 以上各项题 | Original explanation supports abandonment as mainly marine and usually disallowed in other property policies. | 可进入 rewrite plan | Evidence supports the all-items explanation; source-page check still required before writing. |
| 40 | P3-588 | P3 | 4 / 4.4 | C | 以上各项题 | Original explanation supports contingent beneficiary receiving payment if first beneficiary predeceases life insured. | 可进入 rewrite plan | Scenario and answer align with original explanation. |
| 41 | P3-727 | P3 | 5 / 5.3 | C | 以上各项题 | Original explanation lists financial underwriting factors including excessive sum assured. | 可进入 rewrite plan | Evidence supports distinguishing financial from technical underwriting. |
| 42 | P3-745 | P3 | 5 / 5.3 | D | 以上各项题 | Original explanation lists financial underwriting factors and supports all listed factors. | 可进入 rewrite plan | All-items logic is supported. |
| 43 | P1-1326 | P1 | 7 / 7.3 | B | 组合题 | Original explanation discusses unfair discrimination, but this overlaps discrimination-law boundaries. | 人工确认 | Requires legal/source confirmation before rewrite. |
| 44 | P3-680 | P3 | 5 / 5.2 | A | 否定题 | Original explanation supports factors an actuary considers when recommending bonuses. | 可进入 rewrite plan | Negative option can be explained from listed factors. |
| 45 | P1-1342 | P1 | 7 / 7.3 | C | 组合题 | Original explanation discusses unfair discrimination, but this overlaps discrimination-law boundaries. | 人工确认 | Requires legal/source confirmation before rewrite. |
| 46 | P3-719 | P3 | 5 / 5.3 | D | 以上各项题 | Original explanation defines underwriting as risk assessment and insurability decision. | 可进入 rewrite plan | Conceptual underwriting definition is supported. |
| 47 | P3-404 | P3 | 3 / 3.2 | A | 否定题 | Original explanation supports no double payment for death and dismemberment in the same accident. | 可进入 rewrite plan | Negative logic can be explained from original basis. |
| 48 | P3-772 | P3 | 5 / 5.4 | D | 以上各项题 | Original explanation supports group policy administration documents for members. | 可进入 rewrite plan | All-items explanation is supported. |
| 49 | P3-774 | P3 | 5 / 5.4 | A | 以上各项题 | Original explanation supports certificate/member registration under group policy administration. | 可进入 rewrite plan | Evidence supports the selected item. |
| 50 | P1-1174 | P1 | 6 / 6.1 | D | 监管/制度事实 | Original explanation supports complaints mediation scope, but this is institutional process. | 人工确认 | Requires current complaints-body source confirmation. |
| 51 | P1-1175 | P1 | 6 / 6.1 | C | 监管/制度事实 | Original explanation supports mediation for non-claims monetary disputes, but this is institutional process. | 人工确认 | Requires current complaints-body source confirmation. |
| 52 | P1-1191 | P1 | 6 / 6.1 | A | 监管/制度事实 | Original explanation supports claims complaint committee scope and exclusions. | 人工确认 | Requires monetary limit and scope confirmation. |
| 53 | P3-382 | P3 | 3 / 3.2 | C | 否定题 | Original explanation supports only one benefit being payable for death and dismemberment in the same accident. | 可进入 rewrite plan | Negative logic aligns with source explanation. |
| 54 | P3-730 | P3 | 5 / 5.3 | C | 否定题 | Original explanation lists physical hazards and excludes unrelated distractor. | 可进入 rewrite plan | Product underwriting risk list supports rewrite. |
| 55 | P3-384 | P3 | 3 / 3.2 | C | 否定题 | Original explanation supports the single-benefit rule for same accident. | 可进入 rewrite plan | Negative item can be safely explained if source page matches. |
| 56 | P3-570 | P3 | 4 / 4.3 | B | 否定题 | Original explanation lists grace-period rules and says it does not apply to first premium. | 可进入 rewrite plan | Negative rule is directly supported. |
| 57 | P3-792 | P3 | 5 / 5.6 | D | 以上各项题 | Original explanation explains why date of death affects decreasing term, bonus, and policy expiry. | 可进入 rewrite plan | All-items logic is supported. |
| 58 | P3-403 | P3 | 3 / 3.2 | D | 以上各项题 | Original explanation supports lower benefit for loss of limb/eye or specified minor injuries. | 可进入 rewrite plan | Product-benefit facts are supported. |
| 59 | P3-410 | P3 | 3 / 3.2 | C | 以上各项题 | Original explanation supports lower benefit for loss of limb/eye or specified minor injuries. | 可进入 rewrite plan | Product-benefit facts are supported. |
| 60 | P1-958 | P1 | 4 / 4.11 | D | 否定题 | Original explanation distinguishes training and education and supports both internal/external instructors. | 可进入 rewrite plan | Conceptual HR/training distinction is supported. |
| 61 | P1-1168 | P1 | 6 / 6.1 | D | 组合题 | Original explanation refers to the code and third parties acting reasonably and professionally. | 人工确认 | Code-of-practice wording is regulatory and must be confirmed. |
| 62 | P1-1390 | P1 | 7 / 7.6 | C | 以上各项题 | Original explanation lists practical fraud-prevention steps. | 可进入 rewrite plan | Ethics/practical-steps list supports all-items explanation. |
| 63 | P1-964 | P1 | 5 / 5.1 | B | 以上各项题 | Original explanation lists long-term business classes. | 可进入 rewrite plan | Category list supports selected answer. |
| 64 | P1-969 | P1 | 5 / 5.1 | A | 否定题 | Original explanation lists long-term business classes and supports excluding the non-class. | 可进入 rewrite plan | Negative classification can be explained from list. |
| 65 | P3-468 | P3 | 3 / 3.4 | D | 以上各项题 | Original explanation supports optional medical plans increasing limits for basic benefits. | 可进入 rewrite plan | Product feature evidence is sufficient. |
| 66 | P3-499 | P3 | 3 / 3.5 | D | 以上各项题 | Original explanation supports guaranteed insurability option terms. | 可进入 rewrite plan | Product feature evidence is sufficient. |
| 67 | P1-1179 | P1 | 6 / 6.1 | B | 监管/制度事实 | Original explanation states committee chair appointment and approval. | 人工确认 | Institutional appointment rule requires source confirmation. |
| 68 | P1-1166 | P1 | 6 / 6.1 | B | 组合题 | Original explanation refers to the code and third parties acting reasonably and professionally. | 人工确认 | Code-of-practice wording is regulatory and must be confirmed. |
| 69 | P1-1167 | P1 | 6 / 6.1 | D | 组合题 | Original explanation refers to the code and third parties acting reasonably and professionally. | 人工确认 | Code-of-practice wording is regulatory and must be confirmed. |
| 70 | P3-506 | P3 | 3 / 3.6 | D | 以上各项题 | Original explanation supports inflation reducing purchasing power and affecting long-term insured sums. | 可进入 rewrite plan | Concept is directly supported. |
| 71 | P1-1264 | P1 | 6 / 6.2 | D | 以上各项题 | Original explanation lists broker application requirements. | 人工确认 | Broker qualification/capital/insurance requirements are regulatory. |
| 72 | P1-1088 | P1 | 6 / 6.1 | B | 监管/制度事实 | Original explanation lists fit-and-proper persons for insurer roles. | 人工确认 | Regulatory role list requires source confirmation. |
| 73 | P1-1095 | P1 | 6 / 6.1 | D | 以上各项题 | Original explanation lists guideline coverage areas for authorized insurers. | 人工确认 | Guideline content is regulatory and must be confirmed. |
| 74 | P1-1096 | P1 | 6 / 6.1 | D | 以上各项题 | Original explanation lists guideline coverage areas for authorized insurers. | 人工确认 | Guideline content is regulatory and must be confirmed. |
| 75 | P1-1336 | P1 | 7 / 7.3 | B | 组合题 | Original explanation supports unfair sex-discrimination examples. | 人工确认 | Discrimination-law boundary requires source confirmation. |
| 76 | P1-1341 | P1 | 7 / 7.3 | B | 否定题 | Original explanation supports unfair discrimination example. | 人工确认 | Negative discrimination-law question requires source confirmation. |
| 77 | P1-492 | P1 | 3 / 3.1 | D | 以上各项题 | Original explanation supports insurable-interest timing across life, marine, and indemnity insurance. | 人工确认 | Insurable-interest timing is a legal boundary; do not rewrite without deeper confirmation. |
| 78 | P1-1328 | P1 | 7 / 7.3 | A | 否定题 | Original explanation lists four anti-discrimination ordinances. | 人工确认 | Ordinance list requires exact source confirmation. |
| 79 | P1-1144 | P1 | 6 / 6.1 | B | 组合题 | Original explanation states scope of code application. | 人工确认 | Code application scope is regulatory and must be confirmed. |
| 80 | P1-1188 | P1 | 6 / 6.1 | D | 监管/制度事实 | Original explanation lists complaints not handled by the complaints body. | 人工确认 | Monetary limit and exclusions require source confirmation. |
| 81 | P3-791 | P3 | 5 / 5.6 | D | 以上各项题 | Original explanation supports deduction of policy loan, unpaid premium, and interest. | 可进入 rewrite plan | Claims adjustment items are directly supported. |
| 82 | P1-1178 | P1 | 6 / 6.1 | B | 监管/制度事实 | Original explanation states complaints committee composition. | 人工确认 | Committee composition requires source confirmation. |
| 83 | P1-1180 | P1 | 6 / 6.1 | C | 监管/制度事实 | Original explanation states complaints committee composition. | 人工确认 | Committee composition requires source confirmation. |
| 84 | P1-1181 | P1 | 6 / 6.1 | B | 监管/制度事实 | Original explanation states complaints committee composition. | 人工确认 | Committee composition requires source confirmation. |
| 85 | P3-585 | P3 | 4 / 4.4 | A | 否定题 | Original explanation supports class designation examples such as children and siblings. | 可进入 rewrite plan | Negative option can be explained from beneficiary designation examples. |
| 86 | P3-587 | P3 | 4 / 4.4 | D | 以上各项题 | Original explanation supports class designation of beneficiary groups. | 可进入 rewrite plan | All-items logic is supported by examples. |
| 87 | P3-763 | P3 | 5 / 5.3 | A | 否定题 | Original explanation supports refusal to insure as substandard-life underwriting measure. | 可进入 rewrite plan | Product underwriting term is supported. |
| 88 | P1-1215 | P1 | 6 / 6.1 | C | 监管/制度事实 | Original explanation states complaints-body purpose. | 人工确认 | Institutional purpose and scope require source confirmation. |
| 89 | P3-647 | P3 | 5 / 5.2 | B | 组合题 | Original explanation lists supplemental requirements and supports excluding who pays on behalf of policyholder. | 可进入 rewrite plan | Negative/combination logic is supported. |
| 90 | P3-687 | P3 | 5 / 5.2 | B | 否定题 | Original explanation lists bonus fund factors and excludes sales-team ability. | 可进入 rewrite plan | Negative factor can be explained from listed factors. |
| 91 | P1-997 | P1 | 5 / 5.1 | B | 以上各项题 | Original explanation lists academic insurance classes. | 可进入 rewrite plan | Classification basis is supported. |
| 92 | P1-999 | P1 | 5 / 5.1 | B | 以上各项题 | Original explanation lists academic insurance classes. | 可进入 rewrite plan | Classification basis is supported. |
| 93 | P1-799 | P1 | 3 / 3.5 | D | 以上各项题 | Original explanation lists policy clauses used to alter contribution. | 可进入 rewrite plan | Contribution-clause list supports all-items explanation. |
| 94 | P1-1317 | P1 | 7 / 7.2 | A | 否定题 | Original explanation states consent exception for using personal data beyond original purpose. | 人工确认 | Privacy ordinance principle requires source confirmation. |
| 95 | P1-1153 | P1 | 6 / 6.1 | D | 以上各项题 | Original explanation lists code items for advice and sales practice. | 人工确认 | Code content is regulatory and must be confirmed. |
| 96 | P3-586 | P3 | 4 / 4.4 | A | 否定题 | Original explanation supports class designation as naming a group rather than individuals. | 可进入 rewrite plan | Beneficiary designation term is supported. |
| 97 | P3-388 | P3 | 3 / 3.2 | A | 以上各项题 | Original explanation supports death caused directly by accidental bodily injury within one year. | 可进入 rewrite plan | Accidental-death benefit rule is supported. |
| 98 | P3-580 | P3 | 4 / 4.4 | C | 以上各项题 | Original explanation supports beneficiary as person designated to receive death benefit. | 可进入 rewrite plan | Definition is supported. |
| 99 | P3-582 | P3 | 4 / 4.4 | C | 以上各项题 | Original explanation supports beneficiary as person designated to receive death benefit. | 可进入 rewrite plan | Definition is supported. |
| 100 | P3-800 | P3 | 5 / 5.6 | A | 以上各项题 | Original explanation supports original death certificate as usual proof of death. | 可进入 rewrite plan | Claims proof item is supported. |

## 4. Stop Conditions Applied

- Do Not Auto registry overlap among audited IDs: 0.
- Direct answer conflict found: 0.
- Items involving complaints bodies, privacy ordinance, discrimination ordinances, insurer capital/solvency, broker requirements, code-of-practice boundaries, or insurable-interest timing were kept as "人工确认".
- Items with clear extracted original explanation support and lower legal/institutional volatility were marked as conditional rewrite-plan candidates.

## 5. Next Step

Safe next step, only if explicitly requested:

- Generate `EVIDENCE_AUDIT_BATCH2_REWRITE_PLAN.md` for the 41 conditional candidates listed in the summary.
- Planned field must be `simple_explanation` only.
- Do not include the 34 manual-confirmation IDs.
- Do not write JSON from this audit file alone.

Unsafe next steps:

- Do not modify JSON.
- Do not include manual-confirmation items in a rewrite plan.
- Do not commit or push this audit without explicit instruction.
