# Evidence Audit Batch 1 Rewrite Plan

Updated: 2026-06-02

## 1. Scope

This file is a rewrite plan only. It does not authorize JSON writing by itself.

Source files read:

- `AGENTS.md`
- `PROJECT_A_MEMORY.md`
- `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md`
- `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md`
- `FULL_EXPLANATION_DO_NOT_AUTO_POLICY.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

Planned IDs are strictly limited to the 13 conditional rewrite-plan candidates from `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md`:

- `P1-965`
- `P1-979`
- `P1-699`
- `P3-354`
- `P3-674`
- `P1-736`
- `P3-372`
- `P1-641`
- `P1-713`
- `P3-633`
- `P3-634`
- `P3-802`
- `P3-643`

Explicit exclusions:

- `P1-484`
- `P1-1366`
- `P1-1339`
- `P1-1218`
- `P1-1219`
- `P1-1354`
- `P1-1104`
- `P1-1133`
- `P1-1316`
- `P1-1347`
- `P1-1194`
- `P1-1195`
- All Do Not Auto questions
- Any item not marked as conditional rewrite-plan candidate in `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md`

Allowed future field scope:

- `simple_explanation` only.

Fields explicitly not planned for modification:

- `original_explanation`
- question text
- options
- `correct_answer`
- `source_page`
- `reference`
- `chapter`
- `section`

## 2. Per-question Plan

### P1-965

- 题号: `P1-965`
- paper: P1
- chapter / section: 5 / 5.1
- correct_answer: C
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，未逐项解释长期业务类别，未清楚说明为何 C 正确、其他选项不适合。
- manual check 结论摘要: 当前 `original_explanation` 明确列出长期业务类别，并包含“永久健康”；题干、选项 C、答案 C 与原始解析方向一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 识别《保险业条例》下哪些属于长期业务。
  2. 为什么正确答案对: 说明“永久健康”在原始解析列出的长期业务类别内。
  3. 其他选项为什么不适合: 按 A/B/D 逐项说明未被本题证据列为正确项，避免扩展到未核对类别。
  4. 记忆口诀: 以“寿、年、婚生、相连、永久健康、联合养老、资本赎回、退休计划”做分类记忆。
  5. 遇到类似题怎么快速判断: 先看选项是否属于长期业务法定类别，命中清单才选。
- 写入前还需要确认的证据: 人工打开 `试卷一.pdf` source_page 132，核对 PDF 原题、A-D 选项、答案 C、`reference` 5.1.1 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P1-979

- 题号: `P1-979`
- paper: P1
- chapter / section: 5 / 5.1
- correct_answer: A
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，未解释为什么“婚姻及出生”属于长期业务，也未排除其他选项。
- manual check 结论摘要: 当前 `original_explanation` 明确列出长期业务类别，并包含“婚姻及出生”；题干、选项 A、答案 A 与原始解析方向一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 识别长期业务类别。
  2. 为什么正确答案对: 说明“婚姻及出生”是原始解析列出的长期业务类别。
  3. 其他选项为什么不适合: 逐项说明本题证据未支持其他选项为本题答案。
  4. 记忆口诀: 用长期业务清单整体记忆，避免只按日常字面理解。
  5. 遇到类似题怎么快速判断: 看到长期业务，优先对照教材/解析列明类别。
- 写入前还需要确认的证据: 人工打开 `试卷一.pdf` source_page 134，核对 PDF 原题、A-D 选项、答案 A、`reference` 5.1.1 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P1-699

- 题号: `P1-699`
- paper: P1
- chapter / section: 3 / 3.4
- correct_answer: D
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，组合项 iii/iv 未清楚拆解，其他组合选项排除理由不足。
- manual check 结论摘要: 当前 `original_explanation` 直接支持“意外保险及人寿保险只可以现金作出赔偿”，与答案 D=iii/iv 方向一致；未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 考“更换”作为赔偿方法的适用限制。
  2. 为什么正确答案对: 说明人身意外保险和人寿保险只可现金赔偿，因此 iii/iv 不适用更换。
  3. 其他选项为什么不适合: 逐项拆 A/B/C 中含有 i 或 ii 的组合，说明其与原始解析支持的 iii/iv 不一致。
  4. 记忆口诀: 人身意外和人寿偏现金，财产类才常见修理或更换。
  5. 遇到类似题怎么快速判断: 先判断题目问“不适用”，再锁定只可现金赔偿的险种。
- 写入前还需要确认的证据: 人工打开 `试卷一.pdf` source_page 94，核对 PDF 原题、组合项 i-iv、答案 D、`reference` 3.4.4(c) 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-354

- 题号: `P3-354`
- paper: P3
- chapter / section: 3 / 3.1
- correct_answer: B
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，组合题 i/ii/iv 与 iii 的排除未清楚说明。
- manual check 结论摘要: 当前 `original_explanation` 支持残疾收入可按收入公式或定额、等候期一至六个月，并说明款项并非贷款或预缴；答案 B=i/ii/iv 与原始解析方向一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 残疾收入附约的特点。
  2. 为什么正确答案对: 分别说明 i、ii、iv 与原始解析相符。
  3. 其他选项为什么不适合: 说明 iii 错在把付款说成贷款或预缴。
  4. 记忆口诀: 残疾收入是收入保障，不是借款；有等候期。
  5. 遇到类似题怎么快速判断: 组合题先逐项判真，再排除含错误项 iii 的选项。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 65，核对 PDF 原题、组合项 i-iv、答案 B、`reference` 3.1.2 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-674

- 题号: `P3-674`
- paper: P3
- chapter / section: 5 / 5.2
- correct_answer: A
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，未解释为什么 0% 是可选择阐述的假设净回报率之一，也未说明其他选项问题。
- manual check 结论摘要: 当前 `original_explanation` 明确列出 0%、3%、6%、9%，并提到也可用较低组合如 0%、2%、5%、7%；答案 A=0% 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 投资相连寿险利益说明文件的假设净回报率。
  2. 为什么正确答案对: 说明 0% 出现在原始解析列明的可用假设净回报率中。
  3. 其他选项为什么不适合: 按选项逐项说明未被原始解析支持为本题答案，尤其不要误把未列入组合的数字当答案。
  4. 记忆口诀: 标准假设回报率记“0、3、6、9”，低组合也从 0 起。
  5. 遇到类似题怎么快速判断: 看到“可选择阐述的假设净回报率”，优先对照列明数字。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 132，核对 PDF 原题、A-D 选项、答案 A、`reference` 5.2.6a 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P1-736

- 题号: `P1-736`
- paper: P1
- chapter / section: 3 / 3.4
- correct_answer: B
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，未逐项解释起赔额、免赔额，以及 i/iii 为何成立、ii/iv 为何不成立。
- manual check 结论摘要: 当前 `original_explanation` 支持 i 和 iii，并排除 ii 和 iv；答案 B=i/iii 与原始解析方向一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 起赔额与免赔额的定义和差别。
  2. 为什么正确答案对: 说明两者都用于减少小额索偿，起赔额超过约定金额时全数赔偿。
  3. 其他选项为什么不适合: 说明 ii 错在两者运作不同，iv 错在少于起赔额不会获赔。
  4. 记忆口诀: 免赔额是每次扣底，起赔额是不到不赔、过了全赔。
  5. 遇到类似题怎么快速判断: 先分清“扣除一部分”和“超过门槛全赔”。
- 写入前还需要确认的证据: 人工打开 `试卷一.pdf` source_page 99，核对 PDF 原题、组合项 i-iv、答案 B、`reference` 3.4.7 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-372

- 题号: `P3-372`
- paper: P3
- chapter / section: 3 / 3.2
- correct_answer: D
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，否定题“不可以索取赔偿”容易讲反，需要明确航空伤残例外边界。
- manual check 结论摘要: 当前 `original_explanation` 支持排除作为舱务员的航空伤残，购票乘客才属例外；题干问“不可以索取赔偿”，答案 D 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 意外死亡附约中的常规除外责任。
  2. 为什么正确答案对: 说明航空伤残通常除外，购票乘客是例外，舱务员不属于购票乘客。
  3. 其他选项为什么不适合: 按 A/B/C 说明它们不是本题原始解析支持的“不可以索赔”情形。
  4. 记忆口诀: 航空例外只保护购票乘客，不保护执行职务的机组人员。
  5. 遇到类似题怎么快速判断: 先看是否否定问法，再查是否属于除外责任。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 67，核对 PDF 原题、A-D 选项、答案 D、`reference` 3.2.1 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P1-641

- 题号: `P1-641`
- paper: P1
- chapter / section: 3 / 3.3
- correct_answer: C
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，未白话解释受保危险、不保危险、除外危险之间的关系。
- manual check 结论摘要: 当前 `original_explanation` 支持 C，即受保危险引致不保危险或不保危险引致受保危险时可获保障，除外危险通常令索偿失败；未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 近因原则下三类危险的赔付关系。
  2. 为什么正确答案对: 说明受保危险与不保危险串联时仍可得到保障。
  3. 其他选项为什么不适合: 逐项排除把除外危险或不保危险说成必然可赔/不可赔的错误表述。
  4. 记忆口诀: 受保和不保可看近因串联，除外危险通常一票否决。
  5. 遇到类似题怎么快速判断: 先判断有没有除外危险，再看受保危险是否是关键近因。
- 写入前还需要确认的证据: 人工打开 `试卷一.pdf` source_page 86，核对 PDF 原题、A-D 选项、答案 C、`reference` 3.3.3 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P1-713

- 题号: `P1-713`
- paper: P1
- chapter / section: 3 / 3.4
- correct_answer: B
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，组合题 i/ii/iv 与 iii 的排除未逐项拆解。
- manual check 结论摘要: 当前 `original_explanation` 支持委付多见于水险、交出损余作为索取全损赔偿条件、保险人可从损余获益，并说明其他财产保单通常列明不容许委付；答案 B=i/ii/iv 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 委付的含义和适用范围。
  2. 为什么正确答案对: 说明 i、ii、iv 与委付定义和保单限制相符。
  3. 其他选项为什么不适合: 说明 iii 错在委付并不适用于任何类型保单。
  4. 记忆口诀: 委付偏水险，交损余给保险人，保险人得损余利益。
  5. 遇到类似题怎么快速判断: 看到“任何类型保单”这类绝对说法要谨慎。
- 写入前还需要确认的证据: 人工打开 `试卷一.pdf` source_page 96，核对 PDF 原题、组合项 i-iv、答案 B、`reference` 3.4.6 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-633

- 题号: `P3-633`
- paper: P3
- chapter / section: 5 / 5.2
- correct_answer: C
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，组合题 i/ii/iii 与 iv 的排除未清楚说明。
- manual check 结论摘要: 当前 `original_explanation` 支持投保时需注明生效日期、证实投保人及受保生命身份、确认下一个/前一个生日年龄及其他个人资料；iv 未列为该重点。答案 C=i/ii/iii 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 人寿保险申请核保时需要考虑的重点资料。
  2. 为什么正确答案对: 分别说明 i、ii、iii 与原始解析列明重点相符。
  3. 其他选项为什么不适合: 说明 iv“过去三年内转换职业的频密程度”未被原始解析列为本题重点。
  4. 记忆口诀: 核保先看身份、年龄、生效日和基本个人资料。
  5. 遇到类似题怎么快速判断: 组合题逐项对照投保/核保资料清单。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 126，核对 PDF 原题、组合项 i-iv、答案 C、`reference` 5.2.1 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-634

- 题号: `P3-634`
- paper: P3
- chapter / section: 5 / 5.2
- correct_answer: B
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，组合题 ii/iii/iv 与 i 的排除未清楚说明。
- manual check 结论摘要: 当前 `original_explanation` 支持受保人身份资料、病历等个人资料及保单生效日期；未支持“代理人的生日日期”。答案 B=ii/iii/iv 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 人寿保险投保单应填写的资料。
  2. 为什么正确答案对: 说明受保人姓名、病历、生效日期都属于投保/核保资料。
  3. 其他选项为什么不适合: 说明代理人的生日日期不是原始解析列明的投保单重点资料。
  4. 记忆口诀: 投保单看投保人/受保人和保单资料，不看代理人私人生日。
  5. 遇到类似题怎么快速判断: 先判断资料是否与投保人、受保生命或保单生效有关。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 126，核对 PDF 原题、组合项 i-iv、答案 B、`reference` 5.2.1 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-802

- 题号: `P3-802`
- paper: P3
- chapter / section: 5 / 5.6
- correct_answer: B
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，否定题“不大可能属于”容易讲反。
- manual check 结论摘要: 当前 `original_explanation` 直接说明退保/期满索偿中索偿人仍在生，因此不需要死亡证；答案 B 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 退保索偿时通常考虑的因素。
  2. 为什么正确答案对: 说明退保索偿下索偿人仍在生，死亡证通常不需要。
  3. 其他选项为什么不适合: 逐项说明其他选项更可能属于退保索偿需考虑事项，不是“不大可能”项。
  4. 记忆口诀: 退保看活人退保，死亡证用于死亡索偿。
  5. 遇到类似题怎么快速判断: 先抓否定词“不大可能”，再判断该文件是否只在死亡索偿中需要。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 150，核对 PDF 原题、A-D 选项、答案 B、`reference` 5.6.3 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

### P3-643

- 题号: `P3-643`
- paper: P3
- chapter / section: 5 / 5.2
- correct_answer: D
- 当前 simple_explanation 问题: 仍是“新增题待人工复核”模板，否定题“不太可能出现”需要逐项排除，避免把常见投保资料讲反。
- manual check 结论摘要: 当前 `original_explanation` 支持生效日期、身份、生日年龄、职业/住址/家族病历、签署等投保重点，未支持“由其他人替投保人支付保费”；答案 D 与原始解析一致，未见直接答案冲突。
- 计划修改字段: `simple_explanation` only.
- 明确不修改字段: `original_explanation`; 题干; 选项; `correct_answer`; `source_page`; `reference`; `chapter / section`.
- 五段式改写方向:
  1. 这题考什么: 人寿保单/投保资料中常见与不常见项目。
  2. 为什么正确答案对: 说明由其他人替投保人支付保费未列入原始解析的常见投保重点。
  3. 其他选项为什么不适合: 说明 A/B/C 分别属于生效日期、身份/年龄或个人资料等常见重点。
  4. 记忆口诀: 投保资料看身份、年龄、生效日、个人资料和签署；代缴保费不是常规列项。
  5. 遇到类似题怎么快速判断: 先看“不太可能”，再对照投保重点清单排除常见项。
- 写入前还需要确认的证据: 人工打开 `试卷三.pdf` source_page 128，核对 PDF 原题、A-D 选项、答案 D、`reference` 5.2.1(b) 与题库抽取一致。
- 是否允许下一步小批量写入: Conditional.

## 3. Report Summary

1. 本计划包含 13 题。
2. 本计划题号严格等于用户指定的 13 题，以及 `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md` 中的 13 个 conditional rewrite-plan candidates。
3. 已排除 `P1-484` 和 11 个需人工确认题：`P1-1366`, `P1-1339`, `P1-1218`, `P1-1219`, `P1-1354`, `P1-1104`, `P1-1133`, `P1-1316`, `P1-1347`, `P1-1194`, `P1-1195`。
4. 本计划只计划修改 `simple_explanation`。
5. 未发现任何不应进入本 rewrite plan 的题；本计划未纳入 Do Not Auto 登记题。
6. 下一步可以请求用户明确授权写入这 13 题的 `simple_explanation`，但写入前仍应人工确认对应 PDF/source page 与题库抽取一致。

## 4. Stop Conditions Before Writing

Do not write JSON if any of the following occurs:

- Human PDF/source-page check does not match the current extracted question, options, answer, or original explanation.
- Any target ID is found in a Do Not Auto registry or later manual-confirmation list.
- Any answer, option, source page, or reference conflict is found.
- The requested write scope is broader than `simple_explanation` for the 13 IDs listed in this file.
- The user does not explicitly authorize JSON writing.

