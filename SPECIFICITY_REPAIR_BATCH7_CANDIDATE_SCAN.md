# Specificity Repair Batch 7 Candidate Scan

## Recovery Summary

- JSON/UI diff before scan: empty.
- main and origin/main alignment before scan: aligned at latest commit.
- JSON parse: P1=1391, P3=807, total=2198, IDs continuous.
- Local-only untracked files intentionally ignored: `.claude/settings.local.json`; `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`.
- Scope: read-only scan of `simple_explanation` and `memory_tip` in `data/paper1_questions.json` and `data/paper3_questions.json`.
- Batch 5 and Batch 6 planned IDs were excluded from Batch 7 selection unless the current scan still found a clear unresolved issue.

## Remaining Issue Statistics

| Metric | Count |
|---|---:|
| total_questions | 2198 |
| total_flagged | 2152 |
| eligible_after_prior_batch_exclusion | 2038 |
| prior_batch_ids_still_flagged_by_scan | 112 |
| protected_excluded_ids | 2 |
| selected_for_batch7_plan | 80 |

## Issue Counts

| Issue type | Count |
|---|---:|
| internal_note_pollution | 1934 |
| non_fixed_heading | 1857 |
| old_format_heading | 1328 |
| fifth_section | 1328 |
| empty_template_phrase | 601 |
| golden_topic_needs_specificity | 573 |
| combo_not_itemized | 220 |
| reverse_direction_unclear | 153 |
| section3_includes_correct_answer | 45 |
| positive_definition_misread | 1 |

## Selection Rationale

Batch 7 prioritizes high-confidence visible-quality failures:

1. internal notes or source/audit wording in user-facing explanation fields;
2. old five-part format and fifth-section leftovers;
3. empty template phrases such as "符合题意" or "不是本题要选的";
4. reverse or exception questions that do not state the question direction;
5. agency, contract, utmost-good-faith, and related legal principle questions that need golden-sample style specificity;
6. combination questions that still need i/ii/iii/iv item-by-item handling.

The selected 80 avoid protected IDs and avoid previously completed Batch 5/6 IDs where the current scan did not require re-entry.

## Selected Candidate IDs

P1-276, P1-559, P1-1293, P3-525, P3-535, P3-554, P1-489, P1-499, P1-989, P1-1341, P1-1349, P3-585, P3-647, P3-711, P3-730, P3-738, P3-739, P1-134, P1-143, P1-144, P1-151, P1-160, P1-163, P1-164, P1-165, P1-166, P1-167, P1-204, P1-210, P1-213, P1-218, P1-219, P1-220, P1-229, P1-235, P1-237, P1-238, P1-246, P1-255, P1-277, P1-388, P1-391, P1-393, P1-394, P1-397, P1-398, P1-399, P1-549, P1-573, P1-777, P1-913, P1-985, P1-1035, P1-1120, P1-1121, P1-1156, P1-1159, P1-1170, P1-1227, P1-1229, P1-1230, P1-1231, P1-1232, P1-1233, P1-1237, P1-1238, P1-1268, P1-1285, P1-1289, P1-1370, P1-1372, P1-1385, P3-529, P3-636, P3-654, P3-708, P3-756, P3-758, P3-637, P1-684

## Candidate Table

| question_id | P1/P3 | issue_types | current_issue_summary | suggested_golden_sample_id | status |
|---|---|---|---|---|---|
| P1-276 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity | 反向责任题仍有旧五段、内部备注/原始解析痕迹和空泛选项解释。 | P1-1291 | allow_rewrite |
| P1-559 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity | 最高诚信/合约影响题仍有旧格式和反向方向不清。 | P1-553 | allow_rewrite |
| P1-1293 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity | 保险代理人反向题仍有旧五段和模板式错因。 | P1-1291 | allow_rewrite |
| P3-525 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity | 完整合约反向题仍未清楚说明题目方向。 | P1-1291 | allow_rewrite |
| P3-535 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity | 完整合约特点反向题仍有旧五段和模板句。 | general_teaching_style | allow_rewrite |
| P3-554 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear, golden_topic_needs_specificity | 未披露健康事实题仍需按最高诚信方向解释。 | P1-553 | allow_rewrite |
| P1-489 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 可保权益反向题仍有旧格式和空泛错因。 | general_teaching_style | allow_rewrite |
| P1-499 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 保险转让反向题仍有旧五段和方向不清。 | general_teaching_style | allow_rewrite |
| P1-989 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 业务来源分类反向题仍有模板句。 | P1-1291 | allow_rewrite |
| P1-1341 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 公平歧视反向题仍有旧五段和空泛解释。 | general_teaching_style | allow_rewrite |
| P1-1349 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 洗钱阶段反向题仍未说明反向判断方向。 | general_teaching_style | allow_rewrite |
| P3-585 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 受益人定义反向题仍有旧五段和模板句。 | general_teaching_style | allow_rewrite |
| P3-647 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 保单补充详情反向题仍未清楚解释不大可能方向。 | P1-1291 | allow_rewrite |
| P3-711 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 送赠礼品指引反向题仍有旧五段。 | general_teaching_style | allow_rewrite |
| P3-730 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 核保考虑因素题含正反混合问法，现解析方向不清。 | general_teaching_style | allow_rewrite |
| P3-738 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 不可接受风险术语题仍有旧五段和空泛判断。 | general_teaching_style | allow_rewrite |
| P3-739 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, reverse_direction_unclear | 风险类别反向题仍有模板式排除。 | P1-1291 | allow_rewrite |
| P1-134 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 法律开支合约题需要具体合约概念解释。 | P1-244/P1-245 | allow_rewrite |
| P1-143 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 朋友晚饭约会题需要说明法律关系意图。 | P1-244/P1-245 | allow_rewrite |
| P1-144 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 社交约定与合约意图区别仍需具体化。 | P1-244/P1-245 | allow_rewrite |
| P1-151 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 巴士乘客合约题仍有旧格式和模板错因。 | P1-244/P1-245 | allow_rewrite |
| P1-160 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 简单合约必要条件题需要具体区别要约/代价/书面形式。 | P1-244/P1-245 | allow_rewrite |
| P1-163 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 简单合约定义题仍有旧五段和模板句。 | P1-244/P1-245 | allow_rewrite |
| P1-164 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 简单合约真实描述题需要具体化各选项差异。 | P1-244/P1-245 | allow_rewrite |
| P1-165 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 简单合约必要条件题仍有旧五段。 | P1-244/P1-245 | allow_rewrite |
| P1-166 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 简单合约必要条件题仍需具体错因。 | P1-244/P1-245 | allow_rewrite |
| P1-167 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 默示合约题需要说明行为如何显示合约存在。 | P1-244/P1-245 | allow_rewrite |
| P1-204 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险合约代价题需要区别承诺与实际付款。 | P1-244/P1-245 | allow_rewrite |
| P1-210 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险代价双方题仍有旧格式和空泛解释。 | P1-244/P1-245 | allow_rewrite |
| P1-213 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代价定义题仍需用白话说明交换承诺。 | P1-244/P1-245 | allow_rewrite |
| P1-218 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 订约行为能力定义题仍有旧五段。 | P1-244/P1-245 | allow_rewrite |
| P1-219 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 订约行为能力限制题需要具体主体差异。 | P1-244/P1-245 | allow_rewrite |
| P1-220 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 订约行为能力描述题需要具体解释正确概念。 | P1-244/P1-245 | allow_rewrite |
| P1-229 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 法律关系意向题仍有旧格式和空泛错因。 | P1-244/P1-245 | allow_rewrite |
| P1-235 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 可使无效定义题需要区分无效与可撤销。 | P1-244/P1-245 | allow_rewrite |
| P1-237 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 可使无效保险合约题仍有模板句。 | P1-244/P1-245 | allow_rewrite |
| P1-238 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 重要资料遗漏题需要具体说明可使无效。 | P1-244/P1-245 | allow_rewrite |
| P1-246 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 母亲指使儿子购物题需要讲清委托人/代理人/第三方关系。 | P1-279 | allow_rewrite |
| P1-255 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代理法中保险代理人/经纪定义仍需角色区分。 | P1-279 | allow_rewrite |
| P1-277 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 转承责任定义题需要说明责任方向。 | P1-279 | allow_rewrite |
| P1-388 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 公司清盘导致代理协议终止题仍需具体法律后果。 | P1-279 | allow_rewrite |
| P1-391 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险代理人精神错乱题需要说明代理关系终止。 | P1-279 | allow_rewrite |
| P1-393 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 精神错乱终止代理合约题仍需主体区分。 | P1-279 | allow_rewrite |
| P1-394 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 终止代理关系题需要具体说明各选项触发条件。 | P1-279 | allow_rewrite |
| P1-397 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代理关系因法律改变变非法题仍有旧五段。 | P1-279 | allow_rewrite |
| P1-398 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代理关系合法性改变题需要具体说明自动终止。 | P1-279 | allow_rewrite |
| P1-399 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代理协议因法律改变非法题仍需具体错因。 | P1-279 | allow_rewrite |
| P1-549 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 最高诚信披露题需要说明哪些事实影响承保。 | P1-553 | allow_rewrite |
| P1-573 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 误以为不须披露题需要按最高诚信解释。 | P1-553 | allow_rewrite |
| P1-777 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 分担原则题仍有旧格式和模板式选项解释。 | general_teaching_style | allow_rewrite |
| P1-913 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 首期保费确定合约存在题需要具体区分业务类别。 | general_teaching_style | allow_rewrite |
| P1-985 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险业务独立分类题仍有旧五段和空泛错因。 | general_teaching_style | allow_rewrite |
| P1-1035 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 认可保险经纪团体题仍需具体机构差异。 | general_teaching_style | allow_rewrite |
| P1-1120 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 监管披露资料题需要说明披露条件和对象。 | P1-553 | allow_rewrite |
| P1-1121 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 监管披露资料题重复类型，仍有旧格式。 | P1-553 | allow_rewrite |
| P1-1156 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险合约完整条款书面凭据题仍需具体化。 | general_teaching_style | allow_rewrite |
| P1-1159 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 承保商专业守则保单建议题仍有旧五段。 | general_teaching_style | allow_rewrite |
| P1-1170 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代理人遵守守则责任题需要具体主体责任。 | general_teaching_style | allow_rewrite |
| P1-1227 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 持牌个人保险代理委托人题需要角色区分。 | P1-279 | allow_rewrite |
| P1-1229 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 持牌业务代表牌照条件题仍有模板句。 | general_teaching_style | allow_rewrite |
| P1-1230 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 持牌保险经纪发牌机构题需要具体主体差异。 | general_teaching_style | allow_rewrite |
| P1-1231 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 业务代表经纪定义题仍需角色区分。 | general_teaching_style | allow_rewrite |
| P1-1232 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 业务代表代理人定义题仍需角色区分。 | general_teaching_style | allow_rewrite |
| P1-1233 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 持牌保险代理机构定义题需要具体主体解释。 | general_teaching_style | allow_rewrite |
| P1-1237 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险代理人作为转承责任题需要清楚责任方向。 | P1-279 | allow_rewrite |
| P1-1238 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 第68条转承责任题需要说明授权保险人责任。 | P1-279 | allow_rewrite |
| P1-1268 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险经纪专业赔偿保险限额题仍需具体错因。 | general_teaching_style | allow_rewrite |
| P1-1285 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险经纪职责题需要区分经纪与代理。 | P1-279 | allow_rewrite |
| P1-1289 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 保险经纪错误及遗漏题需要具体责任解释。 | P1-1291 | allow_rewrite |
| P1-1370 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 防止贿赂条例代理人行为题仍需主体/行为差异。 | general_teaching_style | allow_rewrite |
| P1-1372 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 代理人接受利益规则题需要具体条件解释。 | general_teaching_style | allow_rewrite |
| P1-1385 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 中介人挪用保费题需要具体罪名与主体解释。 | general_teaching_style | allow_rewrite |
| P3-529 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 完整合约定义题仍有旧五段和空泛解释。 | general_teaching_style | allow_rewrite |
| P3-636 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 投保单填写签署主体题需要具体角色说明。 | general_teaching_style | allow_rewrite |
| P3-654 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 附条件保费收据题需要说明条件未满足的后果。 | general_teaching_style | allow_rewrite |
| P3-708 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 红利实现比率计算题仍有旧格式和模板句。 | general_teaching_style | allow_rewrite |
| P3-756 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 医疗报告来源题需要具体说明核保资料用途。 | general_teaching_style | allow_rewrite |
| P3-758 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, empty_template_phrase, golden_topic_needs_specificity | 主诊医生报告原因题仍需具体核保逻辑。 | general_teaching_style | allow_rewrite |
| P3-637 | P3 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, combo_not_itemized, golden_topic_needs_specificity | 投保手续组合题未按 i/ii/iii/iv 逐项解释。 | P1-279 | allow_rewrite |
| P1-684 | P1 | internal_note_pollution, old_format_heading, fifth_section, non_fixed_heading, reverse_direction_unclear, golden_topic_needs_specificity | 弥偿原则反向题仍未说明"最不密切"判断方向。 | general_teaching_style | allow_rewrite |

## Notes For Rewrite Plan

- Future JSON writing must be split into 7A/7B/7C/7D, 20 questions each.
- Each sub-batch must independently run audit, spotcheck, JSON parse, counts, ID continuity, changed-ID scope, changed-field scope, protected-field diff, encoding checks, and Git diff checks.
- This file is planning evidence only. It does not authorize JSON writing, staging, commit, or push.
