# 300 题质量修复审计报告

生成日期：2026-05-26

## 本轮范围

本轮只处理 300 题阶段已确认质量问题：

- 不修改原始 PDF。
- 不扩大 `limit`，卷一、卷三仍各 300 题。
- 不修改 `app.js`、`style.css`、`index.html`。
- 不修改任何 `correct_answer`。
- 不修改任何 `source_page`。
- 未处理需人工确认法律边界题：`P3-036`, `P3-060`, `P3-061`, `P3-062`。
- 未覆盖已人工修正题：`P1-082`, `P1-140`, `P1-148`, `P3-176`, `P3-188`。

## 修改题目与字段

| 题号 | 文件 | 修改字段 | correct_answer 是否修改 | source_page 是否修改 |
| --- | --- | --- | --- | --- |
| `P1-274` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 否 | 否 |
| `P3-143` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-144` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-146` | `data/paper3_questions.json` | `chapter`, `chapter_title`, `section`, `section_title`, `simple_explanation` | 否 | 否 |
| `P3-201` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 否 | 否 |
| `P3-211` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-212` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-216` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-224` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-231` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-254` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-260` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-268` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-275` | `data/paper3_questions.json` | `simple_explanation` | 否 | 否 |
| `P3-281` | `data/paper3_questions.json` | `question_traditional`, `question_simplified` | 否 | 否 |
| `P3-288` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 否 | 否 |

另修改 `extract_questions.py`：

- 将章节推断从 `ref.split(".")[0]` 改为读取 reference 开头数字。
- 目的：让 `2 (b)` 这类 reference 归入第 2 章，而不是因 `2 (b)` 不是纯数字而回落到第 1 章。
- 未修改 `limit`。

## 重点题处理说明

### P1-274

- 清除了 `original_explanation` 和 `simple_explanation` 中的页眉、表头、`#INTERNAL`、重复文本。
- 保留核心解释：委托人需要对代理人的行为负上转承责任，透过代理人行事与亲自执行并无分别。

### P3-201

- `original_explanation` 原内容主要是页眉、表头、内部标记和「有颜色背景」提示，无实质解析。
- 已清空 `original_explanation`。
- 已重写 `simple_explanation`，说明抵押赎回寿险与按揭赔偿保险不可等同。

### P3-281

- 已对照原始 PDF 第 45 页抽取文本。
- PDF 文本抽取显示为 `（例2\n0年後）`，语义上应为 `（例如20年後）`。
- 仅修正 `question_traditional` / `question_simplified` 中该处明显断裂：`（例如20年後）` / `（例如20年后）`。

### P3-288

- `original_explanation` 原内容混入上一题、页眉、表头、`#INTERNAL`。
- 当前题在该处没有实质解析，已清空 `original_explanation`。
- 已重写 `simple_explanation`，说明万用寿险首年后保费可加可减但受条款限制。

## P3-146 最终归类

- `reference`: `2 (b)`
- `chapter`: `2`
- `chapter_title`: `人寿保险及年金的种类`
- `section`: `2.1`
- `section_title`: `传统的人寿保险类别`

判断：这是 reference 解析规则造成的错误；已同步修复 `extract_questions.py` 的章节推断逻辑和 `P3-146` 的 JSON 字段。

## High 空解析题补写状态

以下 12 道 High 题已全部补写五段式 `simple_explanation`：

`P3-143`, `P3-144`, `P3-146`, `P3-211`, `P3-212`, `P3-216`, `P3-224`, `P3-231`, `P3-254`, `P3-260`, `P3-268`, `P3-275`

五段式检查结果：全部包含 1-5 段。

原 `EMPTY_EXPLANATION_AUDIT.md` 所列 22 道空 `original_explanation` 中，仍有 10 道 Medium 题尚未补写 `simple_explanation`：

`P3-166`, `P3-172`, `P3-208`, `P3-210`, `P3-228`, `P3-236`, `P3-242`, `P3-245`, `P3-261`, `P3-265`

注意：本轮另将 `P3-201`、`P3-288` 的污染 `original_explanation` 清空；因此当前卷三空 `original_explanation` 总数为 24。

## JSON 与脚本检查结果

- `data/paper1_questions.json`：JSON 可解析。
- `data/paper3_questions.json`：JSON 可解析。
- 卷一题数：300。
- 卷三题数：300。
- `limit` 未扩大。
- 12 道 High 题 `simple_explanation` 非空，且均为五段式。
- 本轮触碰题未发现连续问号编码污染残留。
- `extract_questions.py`：AST 语法解析通过。

## 是否仍建议扩到 400

仍不建议立即扩到 400。

理由：

- 原 22 道空 `original_explanation` 中仍有 10 道 Medium 题尚未补写 `simple_explanation`。
- 当前卷三空 `original_explanation` 总数为 24，其中 `P3-201`、`P3-288` 是本轮按噪声清理后转为空。
- 建议先完成剩余 Medium 题解析补写，再做一次定向抽样审计，然后再进入 400 题扩展。

## 2026-05-26 项目 A 补充修复记录

本轮只处理卷三 300 题阶段的 10 道目标题，不扩题、不改 UI、不改原始 PDF、不改答案、不改页码。

### 本轮处理题目

| 题号 | 修改字段 | correct_answer 是否修改 | source_page 是否修改 | 说明 |
| --- | --- | --- | --- | --- |
| `P3-166` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-172` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-208` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-210` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-228` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-236` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-242` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-245` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-261` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |
| `P3-265` | `simple_explanation` | 否 | 否 | 改为新五段式：正确答案、核心概念、逐项排除、考试提醒、记忆法 |

### 检查结论

- 10 题 `original_explanation` 均为空，本轮保持为空，未编造 PDF 原文。
- 10 题 `chapter` / `section` / `section_title` 均为第 2 章 `2.1 传统的人寿保险类别`，未发现明显归类错误。
- 10 题未发现选项、题干、答案解释之间的明显冲突。
- 未发现这 10 题涉及法律边界而需要人工确认的问题。
- 仍需人工确认法律边界且本轮未处理：`P3-036`, `P3-060`, `P3-061`, `P3-062`。

### 未处理原因

- 未清理全库旧解释字段污染，因为本轮范围限定为上述 10 道卷三目标题。
- 未处理法律边界题，因为需要人工确认。
- 未修改题干、选项、`correct_answer`、`source_page`、章节字段、UI 文件或原始 PDF。

## 2026-05-26 300 题阶段最终全库质量复审

### 检查范围

本轮只读优先，检查文件：

- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `QUALITY_FIX_300_AUDIT.md`
- `extract_questions.py`
- `data/syllabus.js`

未修改题库、UI、原始 PDF、`correct_answer`、`source_page`、`extract_questions.py` 的 `limit`，也未新增题目。

### 结构与答案字段

| 检查项 | 结果 | 等级 | 是否建议立即修复 |
| --- | --- | --- | --- |
| P1 题数 | 300 | - | 否 |
| P3 题数 | 300 | - | 否 |
| 总题数 | 600 | - | 否 |
| ID 连续性 | P1 为 `P1-001` 至 `P1-300`，P3 为 `P3-001` 至 `P3-300`；无缺号、无重复、无乱序 | - | 否 |
| 必要字段 | 未发现缺失；题干和选项采用 `question_simplified` / `question_traditional`、`options_simplified` / `options_traditional` 字段承载 | - | 否 |
| `correct_answer` | 未发现空答案、非法答案或答案不在选项中的情况 | - | 否 |
| 选项数量 | 未发现缺少 A/B/C/D 的题 | - | 否 |
| `source_page` | 未发现非正数、倒退跳页或超过 5 页的大跳 | - | 否 |
| 题干数字断裂 | 未发现类似 `例2\n0年后` 的明显数字断裂 | - | 否 |

### 解释质量问题清单

| 问题 | 题号/范围 | 等级 | 是否建议立即修复 | 是否涉及人工确认 |
| --- | --- | --- | --- | --- |
| `simple_explanation` 为空 | 未发现 | - | 否 | 否 |
| `simple_explanation` 明显过短 | 未发现 | - | 否 | 否 |
| P3 空 `original_explanation` 题的 `simple_explanation` 支撑不足 | 未发现；24 道空原解析题均已有可用五段式解释 | - | 否 | 否 |
| `simple_explanation` 含 PDF 页眉/表头/`#INTERNAL` 等污染 | P1 共 31 题；P3 共 37 题 | Medium | 是，建议下一轮定向清理解释字段污染 | 否 |
| `original_explanation` 含 PDF 页眉/表头/`#INTERNAL` 等污染 | P1 共 33 题；P3 共 41 题 | Medium | 是，建议下一轮定向清理；不要直接覆盖有实质解析的核心内容 | 否 |
| `simple_explanation` 仍有旧模板化表达 | P1 共 267 题；P3 共 244 题 | Low | 不建议立即全量重写；可在扩题前按抽样和重点题逐步优化 | 否 |
| `simple_explanation` 与答案明显冲突 | 未发现自动可判定冲突 | - | 否 | 否 |

污染字段命中的题号如下。

P1 `simple_explanation` 污染题号：

`P1-016`, `P1-024`, `P1-046`, `P1-054`, `P1-063`, `P1-071`, `P1-079`, `P1-087`, `P1-093`, `P1-102`, `P1-110`, `P1-119`, `P1-126`, `P1-132`, `P1-156`, `P1-165`, `P1-173`, `P1-181`, `P1-189`, `P1-198`, `P1-206`, `P1-214`, `P1-223`, `P1-231`, `P1-239`, `P1-248`, `P1-257`, `P1-265`, `P1-282`, `P1-290`, `P1-299`

P3 `simple_explanation` 污染题号：

`P3-025`, `P3-032`, `P3-047`, `P3-055`, `P3-066`, `P3-072`, `P3-079`, `P3-087`, `P3-094`, `P3-102`, `P3-111`, `P3-119`, `P3-127`, `P3-135`, `P3-142`, `P3-145`, `P3-150`, `P3-156`, `P3-165`, `P3-173`, `P3-180`, `P3-187`, `P3-193`, `P3-209`, `P3-215`, `P3-221`, `P3-225`, `P3-233`, `P3-241`, `P3-248`, `P3-256`, `P3-264`, `P3-271`, `P3-278`, `P3-284`, `P3-293`, `P3-299`

### 章节归类问题清单

| 问题 | 题号/范围 | 等级 | 是否建议立即修复 | 是否涉及人工确认 |
| --- | --- | --- | --- | --- |
| `chapter` / `section` / `section_title` 与 `data/syllabus.js` 不匹配 | 未发现 | - | 否 | 否 |
| `reference` 开头章节与当前 `chapter` 不一致 | `P3-145`：`reference = 2 (b)`，当前为 `chapter = 1`, `section = 1.1` | High | 是，建议下一轮定向核对并修正章节归类；不改答案 | 否 |
| 明显放错章节的题 | `P3-145` 疑似与此前 `P3-146` 同类，应优先核对是否归入第 2 章 `2.1 传统的人寿保险类别` | High | 是 | 否 |

`P3-145` 当前信息：

- `reference`: `2 (b)`
- 当前 `chapter`: `1`
- 当前 `section`: `1.1`
- 当前 `section_title`: `寿险定义`
- 题干主题：人寿保险合约的基本变数
- 审计判断：疑似章节归类错误；本轮只记录，不修改。

### 人工确认保留名单

以下题仍需人工确认法律边界，本轮未改答案、未改页码、未改解释：

`P3-036`, `P3-060`, `P3-061`, `P3-062`

当前记录：

| 题号 | correct_answer | source_page | section |
| --- | --- | ---: | --- |
| `P3-036` | B | 8 | `1.2 寿险原则` |
| `P3-060` | C | 11 | `1.2 寿险原则` |
| `P3-061` | A | 12 | `1.2 寿险原则` |
| `P3-062` | A | 12 | `1.2 寿险原则` |

### 是否可以进入扩到 400

暂不建议立即扩到 400。

阻塞原因：

1. `P3-145` 存在明显章节归类疑点，属于 High 优先级，应先定向修正归类。
2. P1/P3 仍有一批解释字段污染，属于 Medium 优先级，建议先做定向清理。
3. `P3-036`, `P3-060`, `P3-061`, `P3-062` 仍需人工确认法律边界。

下一步建议：

1. 先定向处理 `P3-145` 章节归类，不改答案、不改页码。
2. 再按污染题号清理 `simple_explanation` / `original_explanation` 中的页眉、表头、`#INTERNAL`，保留实质解析。
3. 完成人工确认题记录后，再准备扩到 400。

## 2026-05-26 P3-145 章节归类定向修复记录

本轮只处理 `P3-145` 的章节归类问题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 核验依据

- `P3-145` 当前 `reference = 2 (b)`，题干主题为人寿保险合约的基本变数。
- `P3-146` 同为 `reference = 2 (b)`，且已归入 `chapter = 2`、`section = 2.1`、`section_title = 传统的人寿保险类别`。
- `data/syllabus.js` 中 P3 第 2 章为 `人寿保险及年金的种类`，其第一个 section 为 `传统的人寿保险类别`。
- `extract_questions.py` 已具备对 `2 (b)` 这类 reference 开头数字的章节推断修复逻辑。

### 修改前后

| 题号 | 原归类 | 新归类 |
| --- | --- | --- |
| `P3-145` | `chapter = 1`, `section = 1.1`, `section_title = 寿险定义` | `chapter = 2`, `section = 2.1`, `section_title = 传统的人寿保险类别` |

### 实际修改字段

- `data/paper3_questions.json` 中 `P3-145` 的 `chapter`
- `data/paper3_questions.json` 中 `P3-145` 的 `section`
- `data/paper3_questions.json` 中 `P3-145` 的 `section_title`

### 未修改字段

本轮明确未修改 `P3-145` 的 `correct_answer`、`source_page`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`original_explanation`、`simple_explanation`。

## 2026-05-26 P3-145 chapter_title 一致性修复记录

本轮只处理 `P3-145` 的 `chapter_title` 字段一致性问题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 核验依据

- `data/syllabus.js` 中 P3 第 2 章标题为 `人寿保险及年金的种类`。
- `P3-145` 已为 `chapter = 2`、`section = 2.1`、`section_title = 传统的人寿保险类别`。
- 原 `chapter_title = 人寿保险简介` 与 `chapter = 2` 不一致。

### 修改前后

| 题号 | 原 chapter_title | 新 chapter_title |
| --- | --- | --- |
| `P3-145` | `人寿保险简介` | `人寿保险及年金的种类` |

### 修改理由

将 `P3-145` 的 `chapter_title` 与 `chapter = 2` 以及 `data/syllabus.js` 中 P3 第 2 章标题保持一致。

### 未修改范围

本轮明确未修改 `P3-145` 的答案、页码、题干、选项、原始解释、简明解释、`chapter`、`section`、`section_title`；未修改 UI、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-26 P3 解释字段污染第一批安全清理记录

本轮只处理 P3 安全批次 17 题的解释字段污染，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

安全批次 17 题：`P3-145`, `P3-150`, `P3-156`, `P3-165`, `P3-173`, `P3-180`, `P3-187`, `P3-193`, `P3-209`, `P3-215`, `P3-221`, `P3-225`, `P3-233`, `P3-241`, `P3-248`, `P3-256`, `P3-264`。

### 每题处理方式

| 题号 | 修改字段 | original_explanation 处理 | simple_explanation 处理 |
| --- | --- | --- | --- |
| `P3-145` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为章节标题、页眉、表头、`#INTERNAL` 等污染 | 重写为五段式解释 |
| `P3-150` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-156` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-165` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-173` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-180` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-187` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-193` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-209` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-215` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-221` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-225` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`，无实质解析 | 重写为五段式解释 |
| `P3-233` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-241` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-248` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-256` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |
| `P3-264` | `original_explanation`, `simple_explanation` | 清空原解析；原内容仅为页眉、表头、`#INTERNAL`、参考号和答案字母 | 重写为五段式解释 |

### 未修改范围

本轮明确未修改 question、options、`correct_answer`、`source_page`、`chapter`、`chapter_title`、`section`、`section_title`、UI 文件、原始 PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

### 保留未处理范围

- `P3-191`, `P3-214`, `P3-246` 暂未处理，保留为人工核对批次。
- `P3-036`, `P3-060`, `P3-061`, `P3-062` 继续保留为人工确认法律边界题，本轮未处理。

## 2026-05-26 P3 三题相邻题污染最小修复记录

本轮只处理 `P3-191`, `P3-214`, `P3-246` 的题干、选项和解释字段污染。三题已先经过 PDF 原题依据核验，并经人工确认采用以下对应关系；不要将 JSON app ID 当作 PDF 原始题号。

### PDF 原题依据

| JSON 题号 | PDF 页码 | PDF 原题号 | PDF 题目依据 |
| --- | --- | --- | --- |
| `P3-191` | 32 | Q60 | 有一种寿险是直接向贷款人支付贷款余额的，这寿险称为：答案 B 信用寿险 |
| `P3-214` | 35 | Q84 | 以下哪项对于可续保定期寿险的描述是正确的？答案 D 以上所有各项 |
| `P3-246` | 40 | Q117 | 以下哪项并非有关终身寿险的陈述？答案 B i, ii, iv |

### 处理字段

- 实际写入：`data/paper3_questions.json` 中三题的 `original_explanation`、`simple_explanation`
- 实际写入：`P3-214` 的 `question_traditional`、`question_simplified` 标点
- 实际写入：`P3-246` 的 `question_traditional`、`question_simplified` 罗马数字列表格式
- 核验未改值：三题的 `options_traditional`、`options_simplified` 已与人工确认选项一致，未做文本改动
- 核验未改值：`P3-191` 的 `question_traditional`、`question_simplified` 已与 PDF Q60 对应内容一致，未做文本改动

### 处理说明

- 三题 `original_explanation` 统一清空，避免保留同页相邻题残片。
- 三题 `simple_explanation` 按确认后的 PDF 题干、选项和当前 `correct_answer` 重写为五段式中文解释。
- `P3-191` 原污染来自 PDF 第 32 页相邻 Q61 残片。
- `P3-214` 原污染来自 PDF 第 35 页相邻 Q85 残片。
- `P3-246` 原污染来自 PDF 第 40 页相邻 Q118 残片；本轮未在解释中沿用该相邻题定义内容。

### 未修改范围

本轮明确未修改三题的 `correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 UI 文件、PDF、`extract_questions.py`、`data/syllabus.js`、P1 题库或任何 `limit`。

## 2026-05-27 P3 simple_explanation 普通污染第一批清理记录

本轮只处理 P3 `simple_explanation` 普通污染第一批 20 题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P3-025`, `P3-032`, `P3-047`, `P3-055`, `P3-066`, `P3-072`, `P3-079`, `P3-087`, `P3-094`, `P3-102`, `P3-111`, `P3-119`, `P3-127`, `P3-135`, `P3-142`, `P3-271`, `P3-278`, `P3-284`, `P3-293`, `P3-299`。

### 修改字段

每题仅修改 `data/paper3_questions.json` 中的 `simple_explanation` 字段，统一重写为五段式中文解释：

1. 为什么正确答案对
2. 核心保险概念
3. 其他选项为什么不适合
4. IIQE 卷三易错点
5. 通俗记忆法

### 处理说明

- 删除 `simple_explanation` 中的 `原始解析要点`、`#INTERNAL`、内部培训页脚、颜色背景提示、题号/参考/答案/题目解释表头等普通污染。
- 未发现本批题目需要跳过的明显答案错配；本轮未处理 `P3-036`, `P3-060`, `P3-061`, `P3-062`。
- `original_explanation` 保持原样，后续如需清理应另开批次。

### 未修改范围

本轮明确未修改 `original_explanation`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 P1、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-27 P1 simple_explanation 普通污染第一批清理记录

本轮只处理 P1 `simple_explanation` 普通污染第一批 31 题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P1-016`, `P1-024`, `P1-046`, `P1-054`, `P1-063`, `P1-071`, `P1-079`, `P1-087`, `P1-093`, `P1-102`, `P1-110`, `P1-119`, `P1-126`, `P1-132`, `P1-156`, `P1-165`, `P1-173`, `P1-181`, `P1-189`, `P1-198`, `P1-206`, `P1-214`, `P1-223`, `P1-231`, `P1-239`, `P1-248`, `P1-257`, `P1-265`, `P1-282`, `P1-290`, `P1-299`。

### 修改字段

每题仅修改 `data/paper1_questions.json` 中的 `simple_explanation` 字段，统一重写为五段式中文解释：

1. 为什么正确答案对
2. 核心保险概念
3. 其他选项为什么不适合
4. IIQE 卷一易错点
5. 通俗记忆法

### 处理说明

- 删除 `simple_explanation` 中的 `原始解析要点`、`#INTERNAL`、内部培训页脚、题号/参考/答案/解释题号表头等普通污染。
- 本批 31 题全部处理，未发现需要跳过的明显答案错配。
- `original_explanation` 保持原样，后续如需清理应另开批次。

### 未修改范围

本轮明确未修改 `original_explanation`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 P3、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-27 P3 original_explanation 普通污染清理记录

本轮只处理 P3 `original_explanation` 普通污染 23 题，不处理法律边界人工确认题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P3-009`, `P3-018`, `P3-025`, `P3-032`, `P3-039`, `P3-047`, `P3-055`, `P3-066`, `P3-072`, `P3-079`, `P3-087`, `P3-094`, `P3-102`, `P3-111`, `P3-119`, `P3-127`, `P3-135`, `P3-142`, `P3-271`, `P3-278`, `P3-284`, `P3-293`, `P3-299`。

### 每题处理方式

| 题号 | 处理方式 | 说明 |
| --- | --- | --- |
| `P3-009` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-018` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-025` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-032` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-039` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-047` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-055` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-066` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-072` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-079` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-087` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-094` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-102` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-111` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-119` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-127` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-135` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-142` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P3-271` | 清空 | 原内容基本全是页眉、表头、内部培训标记、页码和参考/答案残留，无可靠实质解析 |
| `P3-278` | 清空 | 原内容基本全是页眉、表头、内部培训标记、页码和参考/答案残留，无可靠实质解析 |
| `P3-284` | 清空 | 原内容基本全是页眉、表头、内部培训标记、页码和参考/答案残留，无可靠实质解析 |
| `P3-293` | 清空 | 原内容基本全是页眉、表头、内部培训标记、页码和参考/答案残留，无可靠实质解析 |
| `P3-299` | 清空 | 原内容基本全是页眉、表头、内部培训标记、页码和参考/答案残留，无可靠实质解析 |

### 保留未处理范围

- `P3-060` 本轮明确未处理，继续保留为法律边界人工确认题。
- `P3-036`, `P3-061`, `P3-062` 继续保留为法律边界人工确认题。

### 未修改范围

本轮明确未修改 `simple_explanation`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 P1、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-27 P1 original_explanation 普通污染清理记录：第 1 批

本批只处理 P1 `original_explanation` 普通污染 12 题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P1-016`, `P1-024`, `P1-032`, `P1-039`, `P1-046`, `P1-054`, `P1-063`, `P1-071`, `P1-079`, `P1-087`, `P1-093`, `P1-102`。

### 每题处理方式

| 题号 | 处理方式 | 说明 |
| --- | --- | --- |
| `P1-016` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-024` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-032` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-039` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-046` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-054` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-063` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-071` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-079` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-087` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-093` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-102` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |

### 未修改范围

本批明确未修改 `simple_explanation`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 P3、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-27 300 题阶段最终全库复查

### 本轮最终状态

- P1 题数：300，ID 连续 `P1-001` 至 `P1-300`，无重复、无缺号。
- P3 题数：300，ID 连续 `P3-001` 至 `P3-300`，无重复、无缺号。
- 总题数：600。
- `extract_questions.py` 中两处 `limit` 仍为 `300`。
- P1/P3 `simple_explanation` 普通污染均为 0。
- P1 `original_explanation` 普通污染为 0。
- P3 `original_explanation` 普通污染剩余 1 题：`P3-060`，继续保留为法律边界人工确认题。

### 字段与结构复查

- `correct_answer` 均为 A/B/C/D，未发现非法答案。
- 未发现 `correct_answer` 不在 A/B/C/D 选项中的情况。
- 未发现 `question_traditional` / `question_simplified` 缺失。
- 未发现 `options_traditional` / `options_simplified` 缺少 A/B/C/D。
- 未发现 `simple_explanation` 中「为什么正确答案对：X」与 `correct_answer` 不一致。
- 未发现 `original_explanation` 中完整 A/B/C/D 相邻题块污染。
- 未发现多个答案标记冲突。
- 未发现题干或选项中完整 A/B/C/D 相邻题块污染。
- 未发现 `�` 替换字符。
- 本轮 P1 目标题 `original_explanation` 未发现 ASCII `?` 或 `�` 乱码。

说明：全库题干字段中仍存在若干 ASCII `?`，经扫描位置均在 `question_traditional` / `question_simplified` 字段。本轮禁止修改题干，且这些位置多为问句标点形态，未作为本轮污染自动改动。

### 人工确认保留名单

以下题仍需人工确认，本轮未处理：

`P3-036`, `P3-060`, `P3-061`, `P3-062`

其中 `P3-060` 的 `original_explanation` 仍命中普通污染，但因属于法律边界人工确认题，继续保留不自动清理。

### 是否进入扩题

本轮未扩题，未运行抽题脚本，未进入 400 题阶段。按当前状态，下一轮可以在人工确认法律边界题后再考虑是否扩到 400；本轮到 300 题阶段最终复查为止。

## 2026-05-27 P1 original_explanation 普通污染清理记录：第 3 批

本批只处理 P1 `original_explanation` 普通污染 9 题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P1-223`, `P1-231`, `P1-239`, `P1-248`, `P1-257`, `P1-265`, `P1-282`, `P1-290`, `P1-299`。

### 每题处理方式

| 题号 | 处理方式 | 说明 |
| --- | --- | --- |
| `P1-223` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-231` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-239` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记、reference 残片和重复解析残留 |
| `P1-248` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-257` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-265` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-282` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-290` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-299` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |

### 未修改范围

本批明确未修改 `simple_explanation`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 P3、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-27 P1 original_explanation 普通污染清理记录：第 2 批

本批只处理 P1 `original_explanation` 普通污染 12 题，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P1-110`, `P1-119`, `P1-126`, `P1-132`, `P1-156`, `P1-165`, `P1-173`, `P1-181`, `P1-189`, `P1-198`, `P1-206`, `P1-214`。

### 每题处理方式

| 题号 | 处理方式 | 说明 |
| --- | --- | --- |
| `P1-110` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记、reference 残片和重复解析残留 |
| `P1-119` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-126` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-132` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-156` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-165` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-173` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-181` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-189` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-198` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |
| `P1-206` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记、reference 残片和重复解析残留 |
| `P1-214` | 局部删除污染，保留实质解析 | 删除页眉、表头、内部培训标记和重复解析残留 |

### 未修改范围

本批明确未修改 `simple_explanation`、`question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`。未修改 P3、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

## 2026-05-27 300 题阶段最终停止记录

本轮已完成 P1 `original_explanation` 普通污染清理，并完成 300 题阶段最终全库复查。

- P1：300 题，P3：300 题，总计 600 题。
- P1/P3 ID 连续，无重复、无缺号。
- `extract_questions.py` 两处 `limit` 仍为 `300`。
- P1/P3 `simple_explanation` 普通污染为 0。
- P1 `original_explanation` 普通污染为 0。
- P3 `original_explanation` 可自动清理的普通污染为 0；`P3-060` 因属于法律边界人工确认题继续保留。
- `P3-036`, `P3-060`, `P3-061`, `P3-062` 继续列为人工确认题。
- 本轮未扩题，未运行抽题脚本，未进入 400 题阶段。

## 2026-05-27 P3 人工确认题 original_explanation 最小清理记录

本轮只处理 `data/paper3_questions.json` 中四道人工确认题的 `original_explanation` 字段，不扩题、不改 UI、不改原始 PDF、不改抽题脚本、不改 syllabus。

### 处理范围

`P3-036`, `P3-060`, `P3-061`, `P3-062`。

### 每题处理方式

| 题号 | 处理方式 | 说明 |
| --- | --- | --- |
| `P3-036` | 局部删除重复残留，保留实质解析 | 删除重复 `reference`/答案残留和重复短句，保留“購買人壽的重點” |
| `P3-060` | 局部删除污染，保留实质解析 | 删除颜色背景提示、内部培训页脚、页码、`#INTERNAL`、表头、相邻题干/答案残片和重复解析 |
| `P3-061` | 局部删除污染，保留实质解析 | 删除题干/选项残片、`reference`/答案残留和重复解析；未处理“入仍然”可读性疑点 |
| `P3-062` | 局部删除污染，保留实质解析 | 删除题干/选项残片、`reference`/答案残留和重复解析；未处理“入会”可读性疑点 |

### 未修改范围

本轮明确未修改 `question_traditional`、`question_simplified`、`options_traditional`、`options_simplified`、`correct_answer`、`source_page`、`reference`、`chapter`、`chapter_title`、`section`、`section_title`、`simple_explanation`。未修改 P1、UI 文件、PDF、`extract_questions.py`、`data/syllabus.js` 或任何 `limit`。

### 处理后状态

四题 `original_explanation` 均未清空；本轮仅做机械去污，不代表自动判断香港法律结论。四题仍保留为人工确认题。

