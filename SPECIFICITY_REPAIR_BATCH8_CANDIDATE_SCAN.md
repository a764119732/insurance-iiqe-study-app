# Specificity Repair Batch 8 Candidate Scan

## Recovery Summary

- JSON/UI diff before scan: empty.
- main and origin/main: aligned at `8c74cce`.
- JSON parse: P1=1391, P3=807, total=2198, IDs continuous.
- Already processed: Batch 6 (60 IDs) + Batch 7 (80 IDs) = 140 IDs excluded.
- Protected excluded: P1-018, P1-091, P3-131.
- Scope: read-only scan of `simple_explanation` in `data/paper1_questions.json` and `data/paper3_questions.json`.
- Scan method: read-only JSON field scan; no temporary runner remains.

## Remaining Issue Statistics

| Metric | Count |
|---|---:|
| total_questions | 2198 |
| total_flagged (remaining, excluding processed) | 2033 |
| previously_processed_excluded | 140 |
| protected_excluded | 3 |
| selected_for_batch8_plan | 80 |

## Issue Counts

| Issue type | Count |
|---|---:|
| internal_note_pollution | 1795 |
| missing_four_section_heading | 1775 |
| traditional_chinese | 1527 |
| non_fixed_heading | 1492 |
| old_format_heading | 1248 |
| fifth_section | 1248 |
| empty_template_phrase | 506 |
| golden_topic_needs_specificity | 365 |
| combo_not_itemized | 198 |
| reverse_direction_unclear | 178 |
| section3_includes_correct_answer | 2 |

## Selection Rationale

Batch 8 prioritizes remaining high-issue-count questions not yet processed in Batches 6–7:

1. **internal_note_pollution** — user-facing fields still contain audit/rewrite/internal notes;
2. **old_format_heading / non_fixed_heading / fifth_section / missing_four_section_heading** — still using old 5-section format, never converted to strict 4-section;
3. **empty_template_phrase** — generic placeholder explanations ("符合题意", "和正确答案不同", etc.);
4. **traditional_chinese** —繁体字混入简体解析;
5. **combo_not_itemized** — combination questions not yet itemizing i/ii/iii/iv sub-items;
6. **reverse_direction_unclear** — reverse/exception/negation questions not stating question direction;
7. **golden_topic_needs_specificity** — topics matching golden samples (可保权益, 最高诚信, 代理) but not yet rewritten to golden-sample style.

## Selected Candidate IDs (80)

P3-394, P3-396, P1-1240, P1-412, P1-415, P1-416, P1-417, P1-428, P1-438, P1-457, P1-490, P1-572, P1-948, P3-031, P3-042, P3-360, P3-382, P3-384, P3-399, P3-415, P3-429, P3-442, P3-461, P3-547, P3-578, P3-743, P1-072, P1-080, P1-094, P1-1012, P1-1013, P1-1015, P1-1021, P1-1023, P1-1024, P1-1026, P1-1027, P1-1028, P1-1030, P1-1031, P1-1032, P1-1037, P1-1041, P1-1042, P1-1046, P1-1049, P1-1050, P1-1052, P1-1056, P1-1058, P1-1060, P1-1061, P1-1063, P1-1064, P1-1066, P1-1067, P1-1068, P1-1072, P1-1073, P1-1074, P1-1077, P1-1078, P1-1081, P1-1082, P1-1083, P1-1084, P1-1085, P1-1087, P1-1089, P1-1093, P1-1094, P1-1095, P1-1096, P1-1097, P1-1098, P1-1101, P1-1102, P1-1103, P1-1116, P1-1117

## P1/P3 Split

- P1: 65
- P3: 15

## Candidate Table

| question_id | paper | issue_count | issue_types | question_summary | golden_sample_id | status |
|---|---|---|---|---|---|---|
| P3-394 | P3 | 9 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 以下哪项不是意外死亡保险利益的除外责任？ | P1-244/P1-245 | allow_rewrite |
| P3-396 | P3 | 9 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 意外保险利益附约中，哪项较可能不属于附约中的除外责任？ | P1-244/P1-245 | allow_rewrite |
| P1-1240 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, combo_not_itemized, traditional_chinese | 独资经营人/合伙/公司控权人/合伙人/董事必须是适当人选（组合题） | P1-279 | allow_rewrite |
| P1-412 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 以下哪项没有可保权益？ | P1-244/P1-245 | allow_rewrite |
| P1-415 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 如没有可保权益的保险，以下哪项的处理方法是正确? | P1-244/P1-245 | allow_rewrite |
| P1-416 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有可保权益的保险的处理方法 | P1-244/P1-245 | allow_rewrite |
| P1-417 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 如没有可保权益的保险，以下哪项的处理方法是正确? | P1-244/P1-245 | allow_rewrite |
| P1-428 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 三项拥有可保权益，哪一项没有可保权益？ | P1-244/P1-245 | allow_rewrite |
| P1-438 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 在香港，投保人对下列哪项不会构成可保权益？ | P1-244/P1-245 | allow_rewrite |
| P1-457 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 以下哪项购买财产保险的关系中不会出现可保权益？ | P1-244/P1-245 | allow_rewrite |
| P1-490 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有构成可保权益时不会形成拒绝赔偿理由的情况 | P1-244/P1-245 | allow_rewrite |
| P1-572 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 以下哪项情况在没有披露的情形下会被视为违反最高诚信？ | P1-553 | allow_rewrite |
| P1-948 | P1 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 需要长时间才出现的索偿，精算师功不可没，这类索偿属于: | P1-1291 | allow_rewrite |
| P3-031 | P3 | 8 | old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, combo_not_itemized, golden_topic_needs_specificity, traditional_chinese | 根据可保权益，一个人可为以下哪三项人士购买保险（i/ii/iii/iv组合题） | P1-244/P1-245 | allow_rewrite |
| P3-042 | P3 | 8 | old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 对受保生命没有可保权益的保单均属： | P1-244/P1-245 | allow_rewrite |
| P3-360 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 以下哪项不是残疾收入附约的常用条款？ | P1-1291 | allow_rewrite |
| P3-382 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 对意外死亡及丧失肢体中的丧失肢体的不正确描述 | P1-1291 | allow_rewrite |
| P3-384 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 对意外死亡及丧失肢体中的丧失肢体的不正确描述 | P1-1291 | allow_rewrite |
| P3-399 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, golden_topic_needs_specificity, traditional_chinese | 意外死亡保险利益先决条件——死亡必须发生于意外后的一段时间 | P1-244/P1-245 | allow_rewrite |
| P3-415 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, golden_topic_needs_specificity, traditional_chinese | 附加于人寿保险的「其他意外保险利益」之利益给付表 | P1-244/P1-245 | allow_rewrite |
| P3-429 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, golden_topic_needs_specificity, traditional_chinese | 提前支付死亡保险利益——哪种情况可行使此权利？ | P1-244/P1-245 | allow_rewrite |
| P3-442 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 典型危疾保险利益附约所保的「指明疾病」，不大可能包括： | P1-244/P1-245 | allow_rewrite |
| P3-461 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 保险人可能希望在一般保险业务内提供医疗保险利益保障 | P1-1291 | allow_rewrite |
| P3-547 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 按照「不可异议条款」，违反最高诚信仍不大可能拒绝赔偿的情况 | P1-553 | allow_rewrite |
| P3-578 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 英式处理方法——宽限期内未缴清保费，保单中无现金价值 | P1-1291 | allow_rewrite |
| P3-743 | P3 | 8 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, reverse_direction_unclear, traditional_chinese | 保险人将建议风险分成适当类别——没有异常特点可按标准保费接受 | P1-1291 | allow_rewrite |
| P1-072 | P1 | 7 | old_format_heading, non_fixed_heading, fifth_section, missing_four_section_heading, combo_not_itemized, reverse_direction_unclear, traditional_chinese | 下列哪些是不可保风险？i/ii/iii/iv（组合题+反向） | P1-279 | allow_rewrite |
| P1-080 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 作为一门独立的学科，风险管理涉及： | general_teaching_style | allow_rewrite |
| P1-094 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 在知识及研究的范畴中，风险管理的步骤包括： | general_teaching_style | allow_rewrite |
| P1-1012 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 获授权的保险人，在香港的保险业中： | general_teaching_style | allow_rewrite |
| P1-1013 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对「综合」保险人的描述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1015 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 香港『综合保险人』的术语于现代使用意味著保险人: | general_teaching_style | allow_rewrite |
| P1-1021 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项或哪些有关本港「保险中介人」的规定的陈述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1023 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 哪个历史悠久的团体是为保险人争取利益？ | general_teaching_style | allow_rewrite |
| P1-1024 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项是香港保险业联会的正确陈述？ | general_teaching_style | allow_rewrite |
| P1-1026 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对保险业联会的描述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1027 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项或哪些有关香港保险业联会的陈述是合适的？ | general_teaching_style | allow_rewrite |
| P1-1028 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项是有关香港保险业联会的正确描述？ | general_teaching_style | allow_rewrite |
| P1-1030 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对香港保险业联会的描述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1031 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对香港保险业联会的描述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1032 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对香港保险业联会的描述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1037 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 香港汽车保险局的工作包括： | general_teaching_style | allow_rewrite |
| P1-1041 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项属于「香港汽车保险局」的职能？ | general_teaching_style | allow_rewrite |
| P1-1042 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项是香港汽车保险局的基本职责： | general_teaching_style | allow_rewrite |
| P1-1046 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项是保险公司(雇员补偿)无力偿债管理局的职责？ | general_teaching_style | allow_rewrite |
| P1-1049 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项有关保险业监管局是正确的？ | general_teaching_style | allow_rewrite |
| P1-1050 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 立法会制定了以下哪条法例，从而实施保险业规管的改革？ | general_teaching_style | allow_rewrite |
| P1-1052 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 独立保监局成立的政策目标是甚么？ | general_teaching_style | allow_rewrite |
| P1-1056 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 保险业监管局（保监局）成立的政策目标是甚么？ | general_teaching_style | allow_rewrite |
| P1-1058 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《保险业条例》由以下哪个机构负责执行？ | general_teaching_style | allow_rewrite |
| P1-1060 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 根据《保险业条例》，保监局的职能（function & task）是： | general_teaching_style | allow_rewrite |
| P1-1061 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 新成立的保险业监管局的职能（function & task）? | general_teaching_style | allow_rewrite |
| P1-1063 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 保险业监管局的职能或任务（function or task）？ | general_teaching_style | allow_rewrite |
| P1-1064 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 新成立的保险业监管局的职能（function & task）? | general_teaching_style | allow_rewrite |
| P1-1066 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 新成立的保险业监管局的职能（function & task）? | general_teaching_style | allow_rewrite |
| P1-1067 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 保险业监管局的职能或任务（function or task）？ | general_teaching_style | allow_rewrite |
| P1-1068 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 哪个机构为求确保保险人申请者财政稳健加入多项指引？ | general_teaching_style | allow_rewrite |
| P1-1072 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 一千万港元的实缴股本的最低要求适用于: | general_teaching_style | allow_rewrite |
| P1-1073 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 若保险人同时从事一般及长期业务，最低实缴股本为： | general_teaching_style | allow_rewrite |
| P1-1074 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 专属自保保险人的实缴股本最低要求为： | general_teaching_style | allow_rewrite |
| P1-1077 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 偿付准备金的计算方法为： | general_teaching_style | allow_rewrite |
| P1-1078 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《保险业条例》规定保险人必须持有最低的偿付准备金 | general_teaching_style | allow_rewrite |
| P1-1081 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 担当保险人的董事或行政总裁，必须： | general_teaching_style | allow_rewrite |
| P1-1082 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 保险人的董事或控权人在上任前，必先得到以下哪项的认可？ | general_teaching_style | allow_rewrite |
| P1-1083 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 根据『保险业条例』必须得到保险业监管局的授权才可委任: | general_teaching_style | allow_rewrite |
| P1-1084 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 保险公司的重要人士必须是『适当人选』，哪些人士须符合准则 | general_teaching_style | allow_rewrite |
| P1-1085 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 保险公司的重要人员必须是「适当人选」，哪些人员须符合准则 | general_teaching_style | allow_rewrite |
| P1-1087 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 根据保险业条例需事前取得保险业监管局认可才可委任： | general_teaching_style | allow_rewrite |
| P1-1089 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 根据『保险业条例』必须得到保险业监管局的授权才可委任: | general_teaching_style | allow_rewrite |
| P1-1093 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 「公司管治」是保险人监管制度下所涵盖的重要部分，此一词： | general_teaching_style | allow_rewrite |
| P1-1094 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对《获授权保险人的公司管治指引》之描述是正确的 | general_teaching_style | allow_rewrite |
| P1-1095 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《获授权保险人的公司管治指引》（《指引10》）之内容涵盖范围 | general_teaching_style | allow_rewrite |
| P1-1096 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《获授权保险人的公司管治指引》（《指引10》）之内容涵盖范围 | general_teaching_style | allow_rewrite |
| P1-1097 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《获授权保险人的公司管治指引》的内容涵盖获范围？ | general_teaching_style | allow_rewrite |
| P1-1098 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《获授权保险人的公司管治指引》的内容涵盖获范围的描述 | general_teaching_style | allow_rewrite |
| P1-1101 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《保险业条例》对获授权保险人有关再保险安排的规管有何要求 | general_teaching_style | allow_rewrite |
| P1-1102 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《与有关公司安排再保险的指引》很重要，因为： | general_teaching_style | allow_rewrite |
| P1-1103 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《与有关公司安排再保险的指引》旨在： | general_teaching_style | allow_rewrite |
| P1-1116 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 以下哪项对《保险业条例》的呈报规定的描述是正确的？ | general_teaching_style | allow_rewrite |
| P1-1117 | P1 | 7 | internal_note_pollution, old_format_heading, non_fixed_heading, fifth_section, empty_template_phrase, missing_four_section_heading, traditional_chinese | 《保险业条例》要求哪种业务的保险人每年呈交精算调查报告摘要 | general_teaching_style | allow_rewrite |
