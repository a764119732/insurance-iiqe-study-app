# Risky 第一批 simple_explanation 字段级重写计划

生成日期：2026-05-30

## 1. 本轮计划题数

本轮依据 `RISKY_BATCH1_MANUAL_AUDIT.md` 第 4 节，仅为 20 道“可自动重写 `simple_explanation`”的 P1 题生成字段级修改计划。

本轮不修改 JSON。下一轮如执行写入，也只允许修改 `simple_explanation`。

| 项目 | 数量 |
| --- | ---: |
| 计划题数 | 20 |
| paper | P1 |
| 计划修改字段 | `simple_explanation` |
| 本轮实际写入 JSON | 0 |

## 2. 20 道题号清单

`P1-316`、`P1-318`、`P1-319`、`P1-321`、`P1-323`、`P1-333`、`P1-337`、`P1-338`、`P1-339`、`P1-340`、`P1-341`、`P1-342`、`P1-343`、`P1-348`、`P1-352`、`P1-356`、`P1-361`、`P1-364`、`P1-365`、`P1-370`

## 3. 统一字段保护计划

下一轮若执行重写，所有 20 题统一遵守：

计划修改字段：

- `simple_explanation`

明确不会修改字段：

- `original_explanation`
- `question_traditional`
- `question_simplified`
- `options_traditional`
- `options_simplified`
- `correct_answer`
- `source_page`
- `reference`
- `chapter`
- `section`
- `chapter_title`
- `section_title`

同时不修改：

- `data/paper3_questions.json`
- `app.js`
- `index.html`
- `style.css`
- `extract_questions.py`
- `README.md`
- PDF
- 离线版
- `sharedFiles`

## 4. 重写标准

下一轮真正重写时，每题 `simple_explanation` 必须使用五段式：

1. 这题考什么
2. 为什么正确答案对
3. 其他选项为什么不适合
4. 记忆口诀
5. 遇到类似题怎么快速判断

具体规则：

- 否定题要明确题干问的是“不正确 / 不适合 / 并非 / 不是 / 没有授权”等反向或排除问法。
- 组合题要解释每个罗马数字或陈述为什么对 / 错。
- “以上各项”题不能机械说其他选项都错；如果答案是“以上各项”，要说明前置选项为何都成立；如果答案不是“以上各项”，要说明其中哪个前置选项不成立。
- 不编造 PDF 原文。
- 可以基于题干、选项、`correct_answer`、`original_explanation` 和教材概念写大白话解析。

## 5. 每题字段级修改计划

| 题号 | paper | chapter / section | correct_answer | 当前风险类型 | 当前 `simple_explanation` 的问题 | 计划修改字段 | 明确不会修改字段 | 建议重写方向 | 是否允许下一轮自动写入 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `P1-316` | P1 | 2 / 2.2 | C | 否定题；`simple_explanation` 过泛 | 仍是“新增题待人工复核”模板，只列答案和原始解析，未区分必要代理、表面代理、不容反悔代理、明示权限 | `simple_explanation` | `original_explanation`、题干、选项、`correct_answer`、`source_page`、`reference`、`chapter` / `section` | 说明“未获授权或追认”不是普通授权；关键在合理、必要、人道或紧急情况下为他人利益行事，所以是必要代理；逐项排除表面代理、不容反悔、明示权限 | Yes |
| `P1-318` | P1 | 2 / 2.2 | C | 否定题；`simple_explanation` 过泛 | 模板解释未说明“未获授权但合理及必要”为必要代理的判别点 | `simple_explanation` | 同上 | 以“没有获授权 + 合理及必要”为核心判断点，解释必要代理人；排除不容反悔、明示权限、实际权限 | Yes |
| `P1-319` | P1 | 2 / 2.2 | A | 否定题；`simple_explanation` 过泛 | 模板解释未解释“事前未获授权但法律上持有权限”的含义，容易与追认混淆 | `simple_explanation` | 同上 | 强调题干不是事后追认，而是情势需要下法律承认必要代理；排除紧急情况下代理人、追溯授权、自动获授权等非教材标准答案 | Yes |
| `P1-321` | P1 | 2 / 2.2 | C | 否定题；`simple_explanation` 过泛 | 模板解释未处理“未授权或追认”与必要代理的关系 | `simple_explanation` | 同上 | 说明即使没有授权或追认，只要符合人道、合理、必要，为他人利益支付开支，可成立必要代理；逐项排除不容反悔、明示权限、表面权限 | Yes |
| `P1-323` | P1 | 2 / 2.2 | C | 否定题；`simple_explanation` 过泛 | 模板解释未区分必要权限、实际权限、表面权限、不容反悔代理权 | `simple_explanation` | 同上 | 解释“迫切或必要 + 没有获授权”对应必要权限；排除实际权限、表面权限、不容反悔代理权的成立基础 | Yes |
| `P1-333` | P1 | 2 / 2.2 | B | 否定题；`simple_explanation` 过泛 | 已非“新增题”模板，但排除项仍用泛化句，未逐项说明为何不是明示、必要或追认权限 | `simple_explanation` | 同上 | 说明委托人允许别人相信某人为代理人，之后不能否定权限，是不容反悔代理权；排除明示权限、必要权限、追认权限 | Yes |
| `P1-337` | P1 | 2 / 2.2 | D | 以上各项题；`simple_explanation` 过泛 | 模板解释未逐项确认 A、B、C 均属委托人责任 | `simple_explanation` | 同上 | 逐项说明委托人责任包括报酬、偿还合理/正当开支、违反义务时可能承担责任，所以 D“以上各项皆是”成立 | Yes |
| `P1-338` | P1 | 2 / 2.2 | A | 组合题；以上各项题；`simple_explanation` 过泛 | 模板解释未逐条说明 i、ii、iii 正确、iv 错误；“以上各项”干扰项未解释 | `simple_explanation` | 同上 | 逐项解释 i 遵从、ii 忠心与诚信、iii 报帐是代理人责任；iv 承担委托人合理开支不是代理人责任，所以选 A，不选 D | Yes |
| `P1-339` | P1 | 2 / 2.2 | C | 否定题；`simple_explanation` 过泛 | 模板解释未突出题干问“不属于”，也未说明电脑形式记录并非教材要求 | `simple_explanation` | 同上 | 明确这是“不属于”题；代理人有遵从、亲自执行、保存足够纪录等责任，但没有规定所有帐目必须用电脑记录 | Yes |
| `P1-340` | P1 | 2 / 2.2 | D | 以上各项题；`simple_explanation` 过泛 | 模板解释未逐项确认金钱、其他物件、代理活动记录都属于报账/记录范围 | `simple_explanation` | 同上 | 说明报账包括代表委托人收取的金钱、其他物件，并须保存足够代理活动记录，所以 D 成立 | Yes |
| `P1-341` | P1 | 2 / 2.2 | C | 否定题；`simple_explanation` 过泛 | 已非模板，但解释仍泛；未明确说明代理人无责任“只介绍有利可图的生意” | `simple_explanation` | 同上 | 明确这是“不是代理人责任”题；代理人要遵从合法指示、忠心诚信、不得随意下放责任，但没有只介绍有利可图生意的责任 | Yes |
| `P1-342` | P1 | 2 / 2.2 | B | 组合题；`simple_explanation` 过泛 | 模板解释未逐项判断；尤其 iii“争取最佳利益”与教材责任边界需解释清楚 | `simple_explanation` | 同上 | 逐项解释 i 遵从、ii 亲自执行、iv 保存清楚帐目正确；iii“争取最佳利益”不是本题教材列明责任，故选 B | Yes |
| `P1-343` | P1 | 2 / 2.2 | C | 组合题；`simple_explanation` 过泛 | 模板解释未说明 i“所有指示”过宽、iii“最高利润”错误，因此容易误导组合题判断 | `simple_explanation` | 同上 | 逐项解释 ii 应有谨慎和技巧、iv 报帐正确；i“所有指示”过宽，应是合法指示；iii“最高利润”不是代理人责任，所以选 C | Yes |
| `P1-348` | P1 | 2 / 2.2 | D | 以上各项题；`simple_explanation` 过泛 | 已非模板，但仍使用泛化排除句；“以上所有评论”应逐项说明为何都正确 | `simple_explanation` | 同上 | 逐项说明代理人须对收取金钱、其他物件报账，并保存足够代理业务记录，所以 D“以上所有评论都是正确”成立 | Yes |
| `P1-352` | P1 | 2 / 2.2 | A | 否定题；以上各项题；`simple_explanation` 过泛 | 模板解释未说明为何“所有办公室支出”“每月或更频密报酬”“以上各项”不成立 | `simple_explanation` | 同上 | 说明无特别约定时，代理人可获偿还为委托人办事而合理招致的支出；不是所有办公室支出，也不是固定每月或更频密报酬，所以 D 不成立 | Yes |
| `P1-356` | P1 | 2 / 2.2 | A | 否定题；`simple_explanation` 过泛 | 模板解释未突出题干问“不是委托人责任”；报账是代理人对委托人的责任，应明确反向排除 | `simple_explanation` | 同上 | 明确这是“不是委托人责任”题；报账属于代理人对委托人的责任，支出、报酬、违反责任才是委托人对代理人的责任 | Yes |
| `P1-361` | P1 | 2 / 2.2 | A | 组合题；`simple_explanation` 过泛 | 模板解释未逐项说明 i、ii 正确，iii、iv 并非教材要求 | `simple_explanation` | 同上 | 逐项解释 i 合理时间内、ii 指定期限内正确；iii 每月发放、iv 每年发放不是必然规则，所以选 A | Yes |
| `P1-364` | P1 | 2 / 2.2 | D | 组合题；`simple_explanation` 过泛 | 已非模板但仍泛；应逐项说明双方同意、撤销、死亡、精神错乱都可导致终止 | `simple_explanation` | 同上 | 逐项说明 i 双方同意、ii 撤销协议、iii 一方辞世、iv 精神错乱均可终止代理关系，所以 D 成立 | Yes |
| `P1-365` | P1 | 2 / 2.2 | D | 组合题；`simple_explanation` 过泛 | 模板解释未逐项说明时限、精神错乱、非法协议等终止原因 | `simple_explanation` | 同上 | 逐项说明双方同意、时限届满、精神错乱、非法协议均可导致代理关系终止，所以 D 成立 | Yes |
| `P1-370` | P1 | 2 / 2.2 | C | 以上各项题；`simple_explanation` 过泛 | 模板解释未说明 A、B 不足以终止，D 因包含错误项而不成立 | `simple_explanation` | 同上 | 说明代理人可因委托人基本违反协议终止代理关系；退休年龄、成立有限公司不是当然终止原因，D 包含错误项所以不选 | Yes |

## 6. 排除题清单和排除原因

本轮必须排除以下 10 题，不进入下一轮自动重写：

| 题号 | 排除原因 |
| --- | --- |
| `P3-036` | 法律边界题；原始解释过短；需人工确认“甲的姓名必须于保单内注明”的法律/教材依据 |
| `P3-060` | 法律边界题；寿险转让与可保权益关系需人工确认 |
| `P3-061` | 法律边界题；寿险转让与可保权益关系需人工确认 |
| `P3-062` | 法律边界题；寿险转让与可保权益关系需人工确认 |
| `P1-357` | 原始解释与选项 C 的语义不完全贴合，需人工确认答案依据或解释错配 |
| `P3-301` | `original_explanation` 过短，仅有参考和答案，缺乏可用于安全重写的解释依据 |
| `P3-302` | `original_explanation` 过短，仅有参考和答案，缺乏可用于安全重写的解释依据 |
| `P3-303` | 否定题且 `original_explanation` 过短，需教材依据确认 |
| `P3-304` | 否定题且 `original_explanation` 过短，需教材依据确认 |
| `P3-305` | 否定题且 `original_explanation` 过短，需教材依据确认 |

## 7. 下一轮是否可以执行 simple_explanation 重写

可以，但范围必须严格限定为本报告第 2 节的 20 道 P1 题，并且只允许写入 `data/paper1_questions.json` 中这 20 题的 `simple_explanation` 字段。

下一轮不应处理：

- 任何 P3 题
- `P1-357`
- 任何 `correct_answer`、题干、选项、来源、章节字段

## 8. 下一轮写入时必须遵守的保护字段

下一轮若执行自动重写，必须遵守：

1. 只修改 `data/paper1_questions.json`。
2. 只修改 20 题的 `simple_explanation`。
3. 不修改 `original_explanation`。
4. 不修改题干、选项、`correct_answer`、`source_page`、`reference`、`chapter` / `section`。
5. 不修改 `data/paper3_questions.json`。
6. 不修改 UI、脚本、README、PDF、离线版、`sharedFiles`。
7. 写入后必须运行：
   - JSON parse 检查；
   - P1/P3 题数检查；
   - P1/P3 ID 范围检查；
   - 20 题以外字段保护抽查。

