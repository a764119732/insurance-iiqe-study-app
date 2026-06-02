# Evidence Audit Batch 1 Manual Check

Updated: 2026-06-02

## 1. Scope

This file audits the first 25 items from `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md`.

This is a manual evidence check, not a rewrite plan. No JSON writing is authorized by this file.

Files and evidence read:

- `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md`
- `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`
- `FULL_EXPLANATION_DO_NOT_AUTO_POLICY.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- Available PDF file list in `D:/Users/Leo/Desktop/codex/Insurance`

Important limitation:

- The local environment did not have a usable PDF text extraction tool (`fitz`, `pypdf`, `PyPDF2`, `pdfplumber`, `pdftotext`, `mutool`, `qpdf` were unavailable).
- Therefore, this audit uses the question bank's extracted `source_file`, `source_page`, and `original_explanation` as the current evidence base.
- Items marked "可进入 rewrite plan" are conditional: before actual JSON writing, a human should still open the cited PDF/source page and confirm the source text.

## 2. Audit Result Summary

| Result | Count | IDs |
|---|---:|---|
| Audited | 25 | P1-965, P1-979, P1-484, P1-1366, P1-699, P3-354, P3-674, P1-736, P3-372, P1-641, P1-713, P3-633, P3-634, P3-802, P3-643, P1-1339, P1-1218, P1-1219, P1-1354, P1-1104, P1-1133, P1-1316, P1-1347, P1-1194, P1-1195 |
| 可进入 rewrite plan | 13 | P1-965, P1-979, P1-699, P3-354, P3-674, P1-736, P3-372, P1-641, P1-713, P3-633, P3-634, P3-802, P3-643 |
| 需要人工确认 | 11 | P1-1366, P1-1339, P1-1218, P1-1219, P1-1354, P1-1104, P1-1133, P1-1316, P1-1347, P1-1194, P1-1195 |
| 暂缓 | 1 | P1-484 |
| 建议加入 Do Not Auto | 1 | P1-484 |
| 疑似 correct_answer 冲突 | 0 | None |

Next-step decision:

- `EVIDENCE_AUDIT_BATCH1_REWRITE_PLAN.md` can be generated only for the 13 "可进入 rewrite plan" IDs above.
- The rewrite plan must remain field-scoped to `simple_explanation` only.
- The 11 "需要人工确认" items should not enter rewrite plan until a human verifies the exact PDF/source text and current institutional/legal facts.
- `P1-484` should not enter rewrite plan; it involves insurable-interest timing and should be treated as Do Not Auto unless a later deep review removes that restriction.

## 3. Per-question Manual Evidence Check

| # | ID | paper | chapter / section | correct_answer | 当前 simple_explanation 问题 | original_explanation 摘要 | 需要核验的 PDF/教材依据 | 是否找到足够依据 | 自洽性判断 | 是否允许后续只改 simple_explanation | 是否需要人工确认 | 是否应加入 Do Not Auto | 建议处理方式 |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | P1-965 | P1 | 5 / 5.1 | C | 旧解释带有“新增题待人工复核”模板，未逐项解释长期业务类别。 | 长期业务包括人寿及年金、婚姻及出生、相连长期、永久健康、联合养老、资本赎回、退休计划管理 I/II/III 类。 | `试卷一.pdf`, source_page 132；教材 5.1.1 长期业务类别。 | 是，当前原解析明确列出“永久健康”。PDF 页面仍需人工最终确认。 | 题干、选项 C、答案 C 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 2 | P1-979 | P1 | 5 / 5.1 | A | 旧解释带有“新增题待人工复核”模板，未清楚说明为什么其他选项不是长期业务。 | 长期业务包括人寿及年金、婚姻及出生、相连长期、永久健康、联合养老、资本赎回、退休计划管理 I/II/III 类。 | `试卷一.pdf`, source_page 134；教材 5.1.1 长期业务类别。 | 是，当前原解析明确列出“婚姻及出生”。PDF 页面仍需人工最终确认。 | 题干、选项 A、答案 A 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 3 | P1-484 | P1 | 3 / 3.1 | B | 旧解释带有“新增题待人工复核”模板；涉及可保权益时间点，不能只按模板解释。 | 人寿保险中可保权益只须在保单起保时存在；水险和其他弥偿保险只须在损失时存在。 | `试卷一.pdf`, source_page 64；教材 3.1.5 可保权益存在时间。 | 部分。原解析支持答案 B，但该题属于可保权益法律边界，必须人工核对 PDF 和教材原文。 | 当前题干、答案 B 与原解析方向一致；未见直接答案字母冲突。 | 否，除非后续深度人工审计解除 Do Not Auto。 | 是 | 是 | 暂缓；建议加入 Do Not Auto |
| 4 | P1-1366 | P1 | 7 / 7.5 | C | 旧解释带有“新增题待人工复核”模板；贪污定义与选项边界需要更精确。 | 贪污是受托人滥用职权而谋取私利，从而损害他人利益。 | `试卷一.pdf`, source_page 194；教材 7.5 诚信、贪污或相关操守定义。 | 部分。原解析支持 C，但需人工确认 A/B/D 与教材定义的边界。 | 题干、答案 C 与原解析一致；选项 A/D 与贪污、欺诈、挪用之间边界需核实。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 5 | P1-699 | P1 | 3 / 3.4 | D | 旧解释带有“新增题待人工复核”模板；组合项 iii/iv 未清楚拆解。 | 意外保险及人寿保险只可以现金作出赔偿。 | `试卷一.pdf`, source_page 94；教材 3.4.4(c) 更换作为赔偿方法的适用限制。 | 是，当前原解析直接支持 iii 和 iv。PDF 页面仍需人工最终确认。 | 题干问“不适用哪类保单”，答案 D=iii/iv 与原解析一致。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 6 | P3-354 | P3 | 3 / 3.1 | B | 旧解释带有“新增题待人工复核”模板；组合题 i/ii/iv 与 iii 的排除未清楚说明。 | 残疾收入额可按收入公式或定额；等候期一至六个月；并非贷款或预缴，完全残疾期间基本保单仍有效。 | `试卷三.pdf`, source_page 65；教材 3.1.2 残疾收入附约。 | 是，当前原解析充分排除 iii 并支持 i/ii/iv。PDF 页面仍需人工最终确认。 | 答案 B=i/ii/iv 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 7 | P3-674 | P3 | 5 / 5.2 | A | 旧解释带有“新增题待人工复核”模板；未解释为什么 0% 是可选择净回报率之一。 | 假设年度净回报率可用 0%、3%、6%、9%，也可选用较低组合如 0%、2%、5%、7%。 | `试卷三.pdf`, source_page 132；教材 5.2.6a 投资相连寿险利益说明文件。 | 是，当前原解析明确列出 0%。PDF 页面仍需人工最终确认。 | 题干问“可选择阐述的假设净回报率”，答案 A=0% 与原解析一致；D 不成立，因为 4%、8%未列为该组合。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 8 | P1-736 | P1 | 3 / 3.4 | B | 旧解释带有“新增题待人工复核”模板；以上/组合项 i 和 iii 未逐项解释。 | 免赔额从每宗索偿扣除；起赔额低于约定金额不赔，超过则全数赔偿；两者都为消除小额索偿。 | `试卷一.pdf`, source_page 99；教材 3.4.7 起赔额/免赔额。 | 是，当前原解析支持 i 和 iii，排除 ii 和 iv。PDF 页面仍需人工最终确认。 | 答案 B=i/iii 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 9 | P3-372 | P3 | 3 / 3.2 | D | 旧解释带有“新增题待人工复核”模板；否定题容易讲反，需要明确“不可以索偿”。 | 人身意外保险常规除外责任包括航空伤残，但作为购票乘客属例外。 | `试卷三.pdf`, source_page 67；教材 3.2 意外死亡附约/意外除外责任。 | 是，当前原解析支持排除作为舱务员的航空伤残。PDF 页面仍需人工最终确认。 | 题干问“不可以索取赔偿”，D=舱务员而非购票乘客，与原解析一致。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 10 | P1-641 | P1 | 3 / 3.3 | C | 旧解释带有“新增题待人工复核”模板；受保/不保/除外危险关系未白话化。 | 单一成因时受保危险可赔，除外和不保危险不赔；多成因中受保危险引致不保危险，或不保危险引致受保危险，会受到保障；除外危险一般令索偿失败。 | `试卷一.pdf`, source_page 86；教材 3.3.3 近因和危险分类。 | 是，当前原解析支持 C。PDF 页面仍需人工最终确认。 | 题干、答案 C 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 11 | P1-713 | P1 | 3 / 3.4 | B | 旧解释带有“新增题待人工复核”模板；组合题 i/ii/iv 需要逐项拆解。 | 委付多见于水险，是交出保险标的损余作为索取全损赔偿的条件；保险人可从损余获益；其他财产保单通常列明不容许委付。 | `试卷一.pdf`, source_page 96；教材 3.4.6 委付。 | 是，当前原解析支持 i/ii/iv 并排除 iii。PDF 页面仍需人工最终确认。 | 答案 B=i/ii/iv 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 12 | P3-633 | P3 | 5 / 5.2 | C | 旧解释带有“新增题待人工复核”模板；组合题 i/ii/iii 和 iv 的排除未清楚说明。 | 投保时须注明生效日期、证实投保人及受保生命身份、确认下一/前一生日年龄、其他个人资料、签署。 | `试卷三.pdf`, source_page 126；教材 5.2.1 寿险投保及核保重点。 | 是，当前原解析支持 i/ii/iii；iv 的“三年内转换职业频密程度”未列为重点。PDF 页面仍需人工最终确认。 | 答案 C=i/ii/iii 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 13 | P3-634 | P3 | 5 / 5.2 | B | 旧解释带有“新增题待人工复核”模板；组合题 ii/iii/iv 与 i 的排除未清楚说明。 | 投保单应包括生效日期、投保人/受保生命身份、生日年龄、其他个人资料如职业住址家族病历、签署。 | `试卷三.pdf`, source_page 126；教材 5.2.1 寿险投保资料。 | 是，当前原解析支持受保人资料、病历和生效日期；不支持代理人生日。PDF 页面仍需人工最终确认。 | 答案 B=ii/iii/iv 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 14 | P3-802 | P3 | 5 / 5.6 | B | 旧解释带有“新增题待人工复核”模板；否定题“不大可能”需要避免讲反。 | 退保索偿/期满索偿中索偿人仍在生，因此死亡证不需要。 | `试卷三.pdf`, source_page 150；教材 5.6.3 退保索偿考虑因素。 | 是，当前原解析直接支持 B。PDF 页面仍需人工最终确认。 | 题干问“不大可能属于”，B=死亡证与原解析一致。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 15 | P3-643 | P3 | 5 / 5.2 | D | 旧解释带有“新增题待人工复核”模板；否定题“不太可能出现”需要逐项排除。 | 人寿保单投保重点包括生效日期、身份、下一/前一生日年龄、职业住址家族病历、签署。 | `试卷三.pdf`, source_page 128；教材 5.2.1 投保重点。 | 是，当前原解析支持 A/B/C，未支持“由其他人替投保人支付保费”。PDF 页面仍需人工最终确认。 | 题干问“不太可能”，D 与原解析一致；未见答案冲突。 | 是，条件是 PDF 页面核对一致。 | 否 | 否 | 可进入 rewrite plan |
| 16 | P1-1339 | P1 | 7 / 7.3 | A | 旧解释带有“新增题待人工复核”模板；歧视条例例外条件需要精确表达。 | 若待遇参照可合理依据来源所得精算或其他数据，且以该等数据和其他相关因素而言待遇合理，则不致触犯相关条例。 | `试卷一.pdf`, source_page 190；教材 7.3 歧视条例例外。 | 部分。原解析支持 A，但属于条例/法律边界，必须人工核对完整条文式表达。 | 答案 A 与原解析一致；但 B/C/D 分别只覆盖部分条件或过泛，需人工确认。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 17 | P1-1218 | P1 | 6 / 6.1 | B | 旧解释带有“新增题待人工复核”模板；投诉局调解制度需要确认当前制度细节。 | 争议双方无法和解时，可从保险投诉局备存的有经验和资格调解员名单中选择调解员；受理金额上限 100 万港元，投诉人不用付费。 | `试卷一.pdf`, source_page 170；教材 6.1.3c 投诉局调解服务。 | 部分。原解析支持 B，但制度主体、金额和费用规则需人工核对。 | 答案 B 与原解析一致；未见直接答案冲突。 | 暂不允许；人工确认制度事实后再决定。 | 是 | 否 | 人工确认 |
| 18 | P1-1219 | P1 | 6 / 6.1 | B | 旧解释带有“新增题待人工复核”模板；与 P1-1218 同组，需确认费用和调解员选择规则。 | 争议双方可从保险投诉局备存的调解员名单选择调解员；受理金额上限 100 万港元，投诉人不用付费。 | `试卷一.pdf`, source_page 170；教材 6.1.3c 投诉局调解服务。 | 部分。原解析支持 B，但同组制度事实需人工核对。 | 答案 B 与原解析一致；未见直接答案冲突。 | 暂不允许；人工确认制度事实后再决定。 | 是 | 否 | 人工确认 |
| 19 | P1-1354 | P1 | 7 / 7.4 | B | 旧解释带有“新增题待人工复核”模板；AML 法例组合题需精确核对法例名称。 | 打击洗钱及恐怖分子资金筹集活动法例包括 AMLO、贩毒追讨得益条例、有组织及严重罪行条例、联合国反恐措施条例。 | `试卷一.pdf`, source_page 192；教材 7.4.5 AML/CFT 法例。 | 部分。原解析支持 i/ii；但法例清单属于监管/法律事实，需人工确认。 | 答案 B=i/ii 与原解析方向一致；iii/iv 排除需人工核对。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 20 | P1-1104 | P1 | 6 / 6.1 | D | 旧解释带有“新增题待人工复核”模板；“以上各项”监管条文需逐项确认。 | 《保险业条例》还包括维持香港资产、分别备存账目、资产负债估值基准、呈报规定、透明度、新增规管权力等。 | `试卷一.pdf`, source_page 152；教材 6.1.1f 规管保险人条文。 | 部分。原解析支持 A/B/C 全部成立，但属于监管条文事实，需人工核对。 | 答案 D=以上各项与原解析一致；未见直接冲突。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 21 | P1-1133 | P1 | 6 / 6.1 | D | 旧解释带有“新增题待人工复核”模板；“以上各项”干预权力需逐项确认。 | 保险业条例赋予保监局干预权力：限制保费收入、投资限制、限制新业务、由认可受托人保管资产、特别精算调查、委任经理管理、清盘。 | `试卷一.pdf`, source_page 157；教材 6.1.1g 干预权力。 | 部分。原解析支持 A/B/C 全部成立，但属监管权力边界，需人工核对。 | 答案 D=以上各项与原解析一致；未见直接冲突。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 22 | P1-1316 | P1 | 7 / 7.2 | B | 旧解释带有“新增题待人工复核”模板；资料保障原则需按教材逐项表达。 | 除非征得资料当事人同意，个人资料只能按收集目的或直接相关目的使用；私隐权非绝对；保留期限不应超过需要；资料当事人有权查阅及更正。 | `试卷一.pdf`, source_page 187；教材 7.2.1 资料保障原则。 | 部分。原解析支持 B，但个人资料规则属于合规/制度事实，需人工核对。 | 答案 B 与原解析一致；A/C/D 排除也有原解析支持。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 23 | P1-1347 | P1 | 7 / 7.4 | C | 旧解释带有“新增题待人工复核”模板；AML 高风险产品组合题需核对每个项目。 | 容易被洗钱或恐怖分子筹资利用的长期保险合约包括单位相连或可分红整付保费合约、可储存现金价值的整付保费寿险、固定及变额年金、二手储蓄寿险。 | `试卷一.pdf`, source_page 191；教材 7.4.3 AML 高风险产品。 | 部分。原解析支持 ii/iv，但 AML 产品分类属监管事实，需人工核对。 | 答案 C=ii/iv 与原解析一致；选项 D 使用大写 I 也需核对是否 OCR/格式问题。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 24 | P1-1194 | P1 | 6 / 6.1 | D | 旧解释带有“新增题待人工复核”模板；投诉委员会受理范围和金额限制需精确。 | 投诉局不处理争议金额超过 100 万、商业/工业/第三者保险、核保决定或保费；会处理个人保单且索偿或争议金额不超过 100 万的个案。 | `试卷一.pdf`, source_page 166；教材 6.1.3b 投诉委员会受理范围。 | 部分。原解析支持 D，但投诉局制度事实需人工核对。 | 答案 D 与原解析一致；未见直接冲突。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |
| 25 | P1-1195 | P1 | 6 / 6.1 | C | 旧解释带有“新增题待人工复核”模板；投诉委员会处理个案条件需逐项核验。 | 投诉局会处理个人保单、索偿或争议金额不超过 100 万、并于保险人最终决定后 6 个月内书面投诉的个案；不处理核保决定和保费。 | `试卷一.pdf`, source_page 166；教材 6.1.3b 投诉委员会受理范围。 | 部分。原解析支持 C，但制度事实和时限需人工核对。 | 答案 C 与原解析一致；A 的九个月、B 的无索偿折扣、D 的仲裁中个案均需按制度排除。 | 暂不允许；人工确认后再决定。 | 是 | 否 | 人工确认 |

## 4. Stop Conditions Applied

The following rules were applied:

- If the item involves insurable interest, legal boundaries, or source-sensitive institutional facts, it does not move directly into rewrite planning.
- If the current extracted `original_explanation` is detailed and self-consistent, the item may be marked "可进入 rewrite plan", but only conditionally.
- If the item needs exact current institutional, regulatory, ordinance, complaints, discrimination, AML, or privacy wording, it remains "人工确认".
- If a direct mismatch between `correct_answer` and `original_explanation` appears, the item must stop. No such direct mismatch was found in this batch.

## 5. Next Step

Safe next step:

- Generate `EVIDENCE_AUDIT_BATCH1_REWRITE_PLAN.md` only for:
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

Unsafe next steps:

- Do not include `P1-484` in any rewrite plan.
- Do not include the 11 manual-confirmation items until a human verifies the cited PDF/source pages and current institutional facts.
- Do not modify JSON from this audit file alone.
