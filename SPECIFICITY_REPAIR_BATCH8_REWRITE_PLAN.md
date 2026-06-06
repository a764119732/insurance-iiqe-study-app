# Specificity Repair Batch 8 Rewrite Plan

## Scope

- Planning only; no JSON write authorized in this step.
- Planned rewrite count: 80.
- Golden sample baseline: `GOLDEN_EXPLANATION_SAMPLES.md`.
- Strategy baseline: `SPECIFICITY_REPAIR_BATCH5_STRATEGY.md`.
- Allowed future field if explicitly authorized later: `simple_explanation` only.
- No UI, README, extraction script, or JSON file is modified by this plan.

## Planned IDs

P3-394, P3-396, P1-1240, P1-412, P1-415, P1-416, P1-417, P1-428, P1-438, P1-457, P1-490, P1-572, P1-948, P3-031, P3-042, P3-360, P3-382, P3-384, P3-399, P3-415, P3-429, P3-442, P3-461, P3-547, P3-578, P3-743, P1-072, P1-080, P1-094, P1-1012, P1-1013, P1-1015, P1-1021, P1-1023, P1-1024, P1-1026, P1-1027, P1-1028, P1-1030, P1-1031, P1-1032, P1-1037, P1-1041, P1-1042, P1-1046, P1-1049, P1-1050, P1-1052, P1-1056, P1-1058, P1-1060, P1-1061, P1-1063, P1-1064, P1-1066, P1-1067, P1-1068, P1-1072, P1-1073, P1-1074, P1-1077, P1-1078, P1-1081, P1-1082, P1-1083, P1-1084, P1-1085, P1-1087, P1-1089, P1-1093, P1-1094, P1-1095, P1-1096, P1-1097, P1-1098, P1-1101, P1-1102, P1-1103, P1-1116, P1-1117

## P1/P3 Counts

- P1: 65
- P3: 15

## Golden Sample Distribution

| Golden Sample | Count | Applicable Question Types |
|---|---:|---|
| general_teaching_style | 49 | 监管制度/机构职能/公司管治/风险管理/偿付准备金/适当人选等事实型知识题 |
| P1-244/P1-245 | 16 | 可保权益/合约相对性/保险利益/有/没有可保权益的反向判断 |
| P1-1291 | 9 | 反向题/不正确/不是/不属于/不大可能/否定问法 |
| P1-553 | 3 | 最高诚信/毋须披露/不可异议条款 |
| P1-279 | 3 | i/ii/iii/iv组合题 |

## Rewrite Plan

| question_id | paper | problem_type | current_issue_summary | golden_sample_id | planned_fix | status |
|---|---|---|---|---|---|---|
| P3-394 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 意外死亡保险利益除外责任反向题，旧五段+内部备注+空泛解释 | P1-244/P1-245 | Rewrite 4-section; section 1 states reverse direction; section 2 explains which IS an exclusion and why; section 3 explains non-exclusion options concretely; section 4 memory hook | allow_rewrite |
| P3-396 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 意外保险利益附约除外责任反向题，旧五段+内部备注+空泛解释 | P1-244/P1-245 | Rewrite 4-section; section 1 states "不大可能属于"方向；section 2 explains correct answer as the non-exclusion；section 3 explains why the other items ARE exclusions | allow_rewrite |
| P1-1240 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, combo_not_itemized, traditional_chinese | 适当人选组合题，旧五段+未逐项解释i/ii/iii/iv | P1-279 | Rewrite 4-section; section 3 first judges each sub-item i/ii/iii/iv then explains A/B/C/D with concrete omissions/additions | allow_rewrite |
| P1-412 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有可保权益反向题 | P1-244/P1-245 | Rewrite 4-section; section 1 states "没有"方向；section 2 defines insurable interest and identifies which relationship lacks it；section 3 explains why others DO have insurable interest | allow_rewrite |
| P1-415 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有可保权益保险的处理方法 | P1-244/P1-245 | Rewrite 4-section; section 2 explains legal treatment of insurance without insurable interest；section 3 explains other treatments with concrete legal distinctions | allow_rewrite |
| P1-416 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有可保权益保险的处理方法 | P1-244/P1-245 | Rewrite 4-section; same pattern as P1-415；section 2 states the correct legal treatment；section 3 concretely distinguishes each wrong option | allow_rewrite |
| P1-417 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有可保权益保险的处理方法 | P1-244/P1-245 | Rewrite 4-section; same pattern as P1-415/416 | allow_rewrite |
| P1-428 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 三项有可保权益，一项没有的反向辨识题 | P1-244/P1-245 | Rewrite 4-section; section 1 states "哪一项是没有"方向；section 2 identifies the item without insurable interest and explains why；section 3 explains why the other three items each HAVE insurable interest | allow_rewrite |
| P1-438 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 不会构成可保权益的反向题 | P1-244/P1-245 | Rewrite 4-section; explain which relationship lacks insurable interest under HK law；section 3 distinguishes each option by relationship type | allow_rewrite |
| P1-457 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 财产保险中不会出现可保权益的反向题 | P1-244/P1-245 | Rewrite 4-section; section 1 states "不会出现"方向；section 2 explains the relationship that lacks insurable interest in property insurance；section 3 distinguishes each option | allow_rewrite |
| P1-490 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有可保权益时不会形成拒绝赔偿理由的情况 | P1-244/P1-245 | Rewrite 4-section; section 2 explains exceptions where lack of insurable interest doesn't void claim；section 3 explains why wrong options DO lead to claim denial | allow_rewrite |
| P1-572 | P1 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 没有披露情形下被视为违反最高诚信 | P1-553 | Rewrite 4-section; section 1 states the reverse direction；section 2 explains utmost good faith and which non-disclosure constitutes breach；section 3 distinguishes each option by materiality/disclosure duty scope | allow_rewrite |
| P1-948 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 精算师计算长期索偿的反向题 | P1-1291 | Rewrite 4-section; section 1 states reverse/exclusion direction；section 2 explains long-tail claims and actuarial role；section 3 gives concrete reasons why wrong options don't fit the long-tail pattern | allow_rewrite |
| P3-031 | P3 | old_format_heading, fifth_section, empty_template_phrase, combo_not_itemized, golden_topic_needs_specificity, traditional_chinese | 可保权益为他人购买保险的组合题 | P1-279 | Rewrite 4-section; section 3 first judges i/ii/iii/iv (who can be insured: spouse, child, debtor vs creditor), then explains A/B/C/D with concrete omissions | allow_rewrite |
| P3-042 | P3 | old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 对受保生命没有可保权益的保单法律性质 | P1-244/P1-245 | Rewrite 4-section; section 2 explains s.64B legal status of policies without insurable interest；section 3 distinguishes void/voidable/illegal classifications | allow_rewrite |
| P3-360 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 不是残疾收入附约常用条款的反向题 | P1-1291 | Rewrite 4-section; section 1 states "不是"方向；section 2 identifies the non-standard clause；section 3 explains why other options ARE standard clauses in disability income riders | allow_rewrite |
| P3-382 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 丧失肢体不正确描述的反向题 | P1-1291 | Rewrite 4-section; section 1 states "不正确"方向；section 2 identifies the incorrect description of dismemberment；section 3 explains why other options are correct descriptions | allow_rewrite |
| P3-384 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 丧失肢体不正确描述的反向题（同P3-382变体） | P1-1291 | Rewrite 4-section; same pattern as P3-382；ensure distinct content based on this question's specific options | allow_rewrite |
| P3-399 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, golden_topic_needs_specificity, traditional_chinese | 意外死亡保险利益先决条件时间限定 | P1-244/P1-245 | Rewrite 4-section; section 2 explains the standard time period between accident and death for AD&D benefit；section 3 explains why other time periods don't match the standard clause | allow_rewrite |
| P3-415 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, golden_topic_needs_specificity, traditional_chinese | 其他意外保险利益给付表内容 | P1-244/P1-245 | Rewrite 4-section; section 2 explains what IS included in the benefit schedule；section 3 explains why wrong options are NOT in the schedule | allow_rewrite |
| P3-429 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, golden_topic_needs_specificity, traditional_chinese | 提前支付死亡保险利益行使条件 | P1-244/P1-245 | Rewrite 4-section; section 2 explains conditions for accelerated death benefit；section 3 concretely distinguishes each option re: terminal illness, policy terms, benefit triggers | allow_rewrite |
| P3-442 | P3 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 危疾附约不大可能包括的疾病反向题 | P1-244/P1-245 | Rewrite 4-section; section 1 states "不大可能" direction；section 2 identifies the disease NOT typically covered；section 3 explains why others ARE typically specified diseases | allow_rewrite |
| P3-461 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 一般保险vs人寿保险业务内提供医疗保障的反向题 | P1-1291 | Rewrite 4-section; section 1 states "不是"方向；section 2 explains this arrangement's characteristics；section 3 concretely distinguishes general vs life insurance medical benefit arrangements | allow_rewrite |
| P3-547 | P3 | internal_note_pollution, old_format_heading, fifth_section, reverse_direction_unclear, golden_topic_needs_specificity, traditional_chinese | 不可异议条款+违反最高诚信仍不大可能拒绝赔偿 | P1-553 | Rewrite 4-section; section 1 states reverse "不大可能拒绝赔偿" direction；section 2 explains incontestability clause effect when utmost good faith is breached；section 3 distinguishes scenarios where insurer CAN vs CANNOT deny | allow_rewrite |
| P3-578 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 英式保单宽限期+无现金价值失效时间 | P1-1291 | Rewrite 4-section; section 2 explains English-style policy lapse timing under grace period with no CSV；section 3 distinguishes different lapse timing scenarios | allow_rewrite |
| P3-743 | P3 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, reverse_direction_unclear, traditional_chinese | 风险类别命名（标准风险/次标准风险等） | P1-1291 | Rewrite 4-section; section 2 defines the risk classification term for "no abnormal features, accept at standard rate"；section 3 distinguishes standard/substandard/declined/postponed terminology | allow_rewrite |
| P1-072 | P1 | old_format_heading, fifth_section, combo_not_itemized, reverse_direction_unclear, traditional_chinese | 不可保风险组合题+反向（i/ii/iii/iv） | P1-279 | Rewrite 4-section; section 1 states "不可保风险" exclusion direction；section 3 first judges pure/specific/fundamental/speculative risk items, then explains A/B/C/D with concrete reasons | allow_rewrite |
| P1-080 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 风险管理学科涵盖范围 | general_teaching_style | Rewrite 4-section; section 2 plain-language explanation of risk management scope；section 3 concrete distinctions for each option | allow_rewrite |
| P1-094 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 风险管理步骤 | general_teaching_style | Rewrite 4-section; section 2 explains the standard risk management process steps in plain language；section 3 concrete distinctions per option | allow_rewrite |
| P1-1012 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 获授权保险人 | general_teaching_style | Rewrite 4-section; section 2 explains authorized insurer concept in HK；section 3 concrete distinctions for each option with regulatory basis | allow_rewrite |
| P1-1013 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 综合保险人描述 | general_teaching_style | Rewrite 4-section; section 2 explains composite insurer；section 3 concretely distinguishes from specialist/life-only/general-only | allow_rewrite |
| P1-1015 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 综合保险人术语 | general_teaching_style | Rewrite 4-section; same topic as P1-1013 with different options；ensure distinct content | allow_rewrite |
| P1-1021 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险中介人规定 | general_teaching_style | Rewrite 4-section; section 2 explains insurance intermediary requirements in HK；section 3 distinguishes agent vs broker requirements | allow_rewrite |
| P1-1023 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 为保险人争取利益的团体 | general_teaching_style | Rewrite 4-section; section 2 identifies HKFI as insurer trade body；section 3 distinguishes HKFI from other bodies (IA, CIB, PIBA) | allow_rewrite |
| P1-1024 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港保险业联会正确陈述 | general_teaching_style | Rewrite 4-section; section 2 explains HKFI's role and functions；section 3 concrete distinctions per option | allow_rewrite |
| P1-1026 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险业联会描述 | general_teaching_style | Rewrite 4-section; similar to P1-1024；ensure correct answer is the focus of section 2 | allow_rewrite |
| P1-1027 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港保险业联会陈述 | general_teaching_style | Rewrite 4-section; similar to P1-1024/1026 | allow_rewrite |
| P1-1028 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港保险业联会正确描述 | general_teaching_style | Rewrite 4-section; similar to P1-1024/1026/1027 | allow_rewrite |
| P1-1030 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港保险业联会描述 | general_teaching_style | Rewrite 4-section; similar to P1-1024 cluster | allow_rewrite |
| P1-1031 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港保险业联会描述 | general_teaching_style | Rewrite 4-section; similar to P1-1024 cluster | allow_rewrite |
| P1-1032 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港保险业联会描述 | general_teaching_style | Rewrite 4-section; similar to P1-1024 cluster | allow_rewrite |
| P1-1037 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港汽车保险局工作 | general_teaching_style | Rewrite 4-section; section 2 explains MIB functions；section 3 concretely distinguishes from other compensation bodies | allow_rewrite |
| P1-1041 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港汽车保险局职能 | general_teaching_style | Rewrite 4-section; similar to P1-1037 | allow_rewrite |
| P1-1042 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 香港汽车保险局基本职责 | general_teaching_style | Rewrite 4-section; similar to P1-1037/1041 | allow_rewrite |
| P1-1046 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险公司(雇员补偿)无力偿债管理局职责 | general_teaching_style | Rewrite 4-section; section 2 explains ECIB functions；section 3 distinguishes from other insolvency/compensation schemes | allow_rewrite |
| P1-1049 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险业监管局正确描述 | general_teaching_style | Rewrite 4-section; section 2 explains IA's statutory role；section 3 concretely distinguishes IA functions from trade body functions | allow_rewrite |
| P1-1050 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险业规管改革法例 | general_teaching_style | Rewrite 4-section; section 2 identifies the 2015 amendment ordinance；section 3 distinguishes different insurance-related ordinances | allow_rewrite |
| P1-1052 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 独立保监局成立政策目标 | general_teaching_style | Rewrite 4-section; section 2 explains IA policy objectives in plain language；section 3 concrete distinctions per option | allow_rewrite |
| P1-1056 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保监局成立政策目标 | general_teaching_style | Rewrite 4-section; similar to P1-1052 | allow_rewrite |
| P1-1058 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险业条例执行机构 | general_teaching_style | Rewrite 4-section; section 2 identifies IA as enforcement body；section 3 distinguishes IA from other regulatory/industry bodies | allow_rewrite |
| P1-1060 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保监局职能（function & task） | general_teaching_style | Rewrite 4-section; section 2 lists IA's statutory functions concretely；section 3 explains why wrong options are NOT IA functions | allow_rewrite |
| P1-1061 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 新成立保监局职能 | general_teaching_style | Rewrite 4-section; similar to P1-1060 | allow_rewrite |
| P1-1063 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保监局职能或任务 | general_teaching_style | Rewrite 4-section; similar to P1-1060/1061 | allow_rewrite |
| P1-1064 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 新成立保监局职能 | general_teaching_style | Rewrite 4-section; similar to P1-1060 cluster | allow_rewrite |
| P1-1066 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 新成立保监局职能 | general_teaching_style | Rewrite 4-section; similar to P1-1060 cluster | allow_rewrite |
| P1-1067 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保监局职能或任务 | general_teaching_style | Rewrite 4-section; similar to P1-1060 cluster | allow_rewrite |
| P1-1068 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 确保保险人财政稳健的机构 | general_teaching_style | Rewrite 4-section; section 2 explains IA's role in financial soundness requirements；section 3 distinguishes IA guidance from other bodies' roles | allow_rewrite |
| P1-1072 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 一千万港元实缴股本最低要求适用范围 | general_teaching_style | Rewrite 4-section; section 2 explains paid-up capital requirement tiers；section 3 concretely distinguishes which insurer types need 10M vs other amounts | allow_rewrite |
| P1-1073 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 同时从事一般及长期业务的最低实缴股本 | general_teaching_style | Rewrite 4-section; section 2 explains composite insurer capital requirement；section 3 distinguishes single-line vs composite capital requirements | allow_rewrite |
| P1-1074 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 专属自保保险人实缴股本最低要求 | general_teaching_style | Rewrite 4-section; section 2 explains captive insurer capital requirement；section 3 distinguishes from other insurer types' requirements | allow_rewrite |
| P1-1077 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 偿付准备金计算方法 | general_teaching_style | Rewrite 4-section; section 2 explains solvency margin calculation method；section 3 concretely distinguishes different calculation bases | allow_rewrite |
| P1-1078 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 偿付准备金定义 | general_teaching_style | Rewrite 4-section; section 2 explains what solvency margin is in plain language；section 3 distinguishes from other capital/reserve concepts | allow_rewrite |
| P1-1081 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险人董事或行政总裁要求 | general_teaching_style | Rewrite 4-section; section 2 explains fit and proper requirements for directors/CEOs；section 3 concrete distinctions per option | allow_rewrite |
| P1-1082 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 董事或控权人上任前认可 | general_teaching_style | Rewrite 4-section; section 2 explains IA approval requirement for directors/controllers；section 3 distinguishes who needs vs doesn't need pre-approval | allow_rewrite |
| P1-1083 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 须得到保监局授权才可委任 | general_teaching_style | Rewrite 4-section; section 2 lists positions requiring IA authorization before appointment；section 3 concrete distinctions | allow_rewrite |
| P1-1084 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 适当人选准则适用范围 | general_teaching_style | Rewrite 4-section; section 2 explains fit and proper criteria scope；section 3 concretely distinguishes which positions are covered | allow_rewrite |
| P1-1085 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 适当人选准则适用范围（变体） | general_teaching_style | Rewrite 4-section; similar to P1-1084 with different options | allow_rewrite |
| P1-1087 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 需事前取得保监局认可才可委任 | general_teaching_style | Rewrite 4-section; similar to P1-1083 cluster | allow_rewrite |
| P1-1089 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 须得到保监局授权才可委任（变体） | general_teaching_style | Rewrite 4-section; similar to P1-1083/1087 cluster | allow_rewrite |
| P1-1093 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 公司管治概念 | general_teaching_style | Rewrite 4-section; section 2 explains corporate governance in insurer regulation context；section 3 concrete distinctions per option | allow_rewrite |
| P1-1094 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 获授权保险人公司管治指引描述 | general_teaching_style | Rewrite 4-section; section 2 explains Guideline 10 purpose；section 3 distinguishes from other regulatory guidelines | allow_rewrite |
| P1-1095 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 指引10内容涵盖范围 | general_teaching_style | Rewrite 4-section; section 2 lists Guideline 10 coverage areas；section 3 concrete distinctions per option | allow_rewrite |
| P1-1096 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 指引10内容涵盖范围（变体） | general_teaching_style | Rewrite 4-section; similar to P1-1095 | allow_rewrite |
| P1-1097 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 公司管治指引涵盖范围 | general_teaching_style | Rewrite 4-section; similar to P1-1095/1096 | allow_rewrite |
| P1-1098 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 公司管治指引涵盖范围描述 | general_teaching_style | Rewrite 4-section; similar to P1-1095 cluster | allow_rewrite |
| P1-1101 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 再保险安排规管要求 | general_teaching_style | Rewrite 4-section; section 2 explains reinsurance regulatory requirements；section 3 concrete distinctions per option | allow_rewrite |
| P1-1102 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 与有关公司安排再保险指引的重要性 | general_teaching_style | Rewrite 4-section; section 2 explains related-company reinsurance guideline rationale；section 3 concrete distinctions per option | allow_rewrite |
| P1-1103 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 与有关公司安排再保险指引目的 | general_teaching_style | Rewrite 4-section; section 2 explains the guideline's aim；section 3 concrete distinctions per option | allow_rewrite |
| P1-1116 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 保险业条例呈报规定 | general_teaching_style | Rewrite 4-section; section 2 explains IO reporting requirements；section 3 concrete distinctions per option | allow_rewrite |
| P1-1117 | P1 | internal_note_pollution, old_format_heading, fifth_section, empty_template_phrase, traditional_chinese | 须每年呈交精算调查报告摘要的业务类型 | general_teaching_style | Rewrite 4-section; section 2 explains which business class requires annual actuarial report summary；section 3 distinguishes long-term vs general business reporting | allow_rewrite |

## P1/P3 Final Counts

- P1: 65
- P3: 15
- Total: 80

## Excluded IDs (Confirmed)

- P1-018: excluded (manual_confirm, never in plan)
- P1-091: excluded (manual_confirm, never in plan)
- P3-131: excluded (Do Not Auto, never in plan)
- All Batch 6 IDs (60): excluded (already processed)
- All Batch 7 IDs (80): excluded (already processed)
- Do Not Auto registry: 0 overlap
- manual_confirm registry: 0 overlap

## Plan Check Results

| Check | Result |
|---|---:|
| planned_ids count | 80 |
| P1 count | 65 |
| P3 count | 15 |
| Do Not Auto hit | 0 |
| manual_confirm hit | 0 |
| P1-018/P1-091/P3-131 hit | 0 |
| Duplicate planned IDs | 0 |
| Overlap with Batch 6 IDs | 0 |
| Overlap with Batch 7 IDs | 0 |
| JSON/UI/README/extract_questions.py diff | empty |
| git diff --check | pass |
