# Risky Do Not Auto 登记表

生成日期：2026-05-30

## 1. 本文件用途

本文件汇总项目A Risky 阶段禁止自动处理、必须人工确认的题。

本轮只读读取既有报告和题库 JSON，并新增本 Markdown。未修改 JSON、UI、PDF、离线版、`sharedFiles`、`extract_questions.py` 或 README。

## 2. 登记口径

来源一：既有报告明确列出的禁止自动处理 / 必须人工确认题，包括 `P3-036`、`P3-060`、`P3-061`、`P3-062`、`P1-357`、`P3-301`、`P3-302`、`P3-303`、`P3-304`、`P3-305`、`P3-543`、`P1-1192`、`P3-553`、`P3-555`。

来源二：按 `RISKY_REMAINING_GLOBAL_MAP.md` 的 Do Not Auto 口径，只读复算当前 JSON：排除 Risky 第一批、第二批、第三批已审计题和上述已知禁自动题后，`original_explanation` 去空白后少于 20 字的题。复算结果为 P1=18、P3=177、合计 195，与全局地图一致。

Do Not Auto 含义：当前 JSON 不足以支撑自动重写解释；需要 PDF、教材或人工依据补充后再决定是否处理。

## 3. 总览

| 类别 | P1 | P3 | 合计 |
| --- | ---: | ---: | ---: |
| 既有报告明确禁自动 / 人工确认 | 2 | 12 | 14 |
| 全局地图 Do Not Auto 复算 | 18 | 177 | 195 |
| 合计登记项 | 20 | 189 | 209 |

说明：两类清单按当前口径无重复；若未来人工确认后从 Do Not Auto 移出，应在本文件和 `PROJECT_A_MEMORY.md` 同步记录。

## 4. 既有报告明确禁自动 / 必须人工确认题

| 题号 | 原因 | 风险类型 | 需要核对什么 | 后续建议 |
| --- | --- | --- | --- | --- |
| `P3-036` | 寿险可保权益、保单记名要求存在法律/教材边界，既有计划明确列为政策排除题。 | 法律边界；原始解析依据不足 | 核对 PDF 原题、教材关于寿险可保权益和保单记名要求的表述，以及 correct_answer 是否有充分依据。 | 不得自动改答案或解释；先做人工依据核对。 |
| `P3-060` | 寿险转让、可保权益与转让法律效果边界复杂，既有计划明确排除自动处理。 | 法律边界；寿险转让 | 核对 PDF 和教材关于寿险保单转让、受让人可保权益、法律效果的边界。 | 不得自动改；人工确认后再决定是否只改 simple_explanation。 |
| `P3-061` | 与 P3-060 同组，涉及寿险转让与可保权益法律效果，不能只凭当前 JSON 自动处理。 | 法律边界；相邻题串题风险 | 核对 PDF 相邻题、选项文字和原始解析是否对应本题。 | 保持 Do Not Auto，人工确认后再处理。 |
| `P3-062` | 与 P3-060/P3-061 同组，涉及寿险转让法律效果，自动重写容易扩大法律结论。 | 法律边界；相邻题串题风险 | 核对 PDF 原文、教材依据和 correct_answer。 | 保持 Do Not Auto，不能自动改答案。 |
| `P1-357` | “以上各项”类代理责任题，既有 Risky 计划列入必须继续排除/人工确认题。 | 全项判断；污染清理后仍需解释质量核对 | 核对委托人责任范围、A/B/C 是否全部成立，以及当前解释是否仍有模板或污染清理遗留影响。 | 先人工核对，不自动重写。 |
| `P3-301` | 原始解析过短，且为 P3 新增题开头相邻组，当前 JSON 不足以支撑自动重写。 | 原始解析过短；组合题；相邻题边界 | 核对 PDF 第 301 题原文、选项、答案依据和相邻题边界。 | 不得自动重写；先补人工依据。 |
| `P3-302` | 原始解析过短，当前 JSON 对基本人寿保险合约功能的依据不足。 | 原始解析过短；模板解释 | 核对 PDF 原题和教材关于基本人寿保险合约功能的具体表述。 | 先人工确认，禁止自动改答案或解释。 |
| `P3-303` | 否定题且原始解析过短，与 P3-304/P3-305 相邻，自动处理容易讲反。 | 否定题；原始解析过短；相邻题边界 | 核对题干问法、选项排除逻辑和 PDF 相邻题。 | 保持 Do Not Auto，人工核对后再决定。 |
| `P3-304` | 否定题且原始解析过短，与 P3-303/P3-305 相邻，答案依据不足。 | 否定题；原始解析过短；相邻题边界 | 核对 PDF 原文、选项和答案字母是否与解析匹配。 | 保持 Do Not Auto。 |
| `P3-305` | 否定题且原始解析过短，与 P3-303/P3-304 相邻，当前 JSON 不足以支撑解释重写。 | 否定题；原始解析过短；相邻题边界 | 核对 PDF 原文、相邻题边界和答案依据。 | 保持 Do Not Auto。 |
| `P3-543` | 不可异议条款中涉及无可保权益保单是否受条款限制，属于法律/教材边界。 | 法律边界；不可异议条款；可保权益 | 核对教材/PDF 对无可保权益和不可异议条款关系的明确依据。 | 不得自动重写；人工确认后再处理。 |
| `P1-1192` | 原始解析未完整覆盖“保险人并非会员”排除项，自动重写依据不足。 | 答案依据不完整；投诉委员会职能边界 | 核对投诉委员会/投诉局是否排除非会员保险人及相关金额、法律程序限制。 | 暂不自动重写；人工确认 B 项依据后再决定。 |
| `P3-553` | 选项 C 写“保单持有人必须生存”，原始解析为“受保生命在世”，语义不完全一致。 | 题干/选项语义风险；不可异议条款 | 核对 PDF 原题选项 C 是否抽取错误，以及 correct_answer 是否仍成立。 | 不得自动重写；先人工核对题干/选项。 |
| `P3-555` | 与 P3-553 同组，选项 C 与原始解析存在“保单持有人/受保生命”语义差异。 | 题干/选项语义风险；不可异议条款；相邻题边界 | 核对 PDF 原题、选项 C 和原始解析是否对应。 | 不得自动重写；人工确认后再处理。 |

## 5. 全局地图 Do Not Auto 逐题登记

以下题来自 `RISKY_REMAINING_GLOBAL_MAP.md` 的 Do Not Auto 层级复算。每题均不得自动重写；默认也不得修改答案、题干、选项或来源字段。

| 题号 | chapter / section | source_page | correct_answer | 原因 | 风险类型 | 需要核对什么 | 后续建议 |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| `P1-079` | 1 / 1.1 | 13 | D | original_explanation 去空白后仅 19 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-1034` | 5 / 5.5 | 141 | B | original_explanation 去空白后仅 17 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-1242` | 6 / 6.2 | 173 | C | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-1248` | 6 / 6.2 | 174 | B | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-1255` | 6 / 6.2 | 175 | A | original_explanation 去空白后仅 11 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-1352` | 7 / 7.4 | 191 | A | original_explanation 去空白后仅 11 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-181` | 2 / 2.1 | 26 | C | original_explanation 去空白后仅 17 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-223` | 2 / 2.1 | 31 | D | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-248` | 2 / 2.2 | 34 | D | original_explanation 去空白后仅 17 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-577` | 3 / 3.2 | 77 | D | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-735` | 3 / 3.4 | 98 | C | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-776` | 3 / 3.5 | 104 | A | original_explanation 去空白后仅 13 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-880` | 4 / 4.4 | 119 | B | original_explanation 去空白后仅 13 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-902` | 4 / 4.5 | 122 | B | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-916` | 4 / 4.7 | 124 | D | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-924` | 4 / 4.7 | 125 | A | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-967` | 5 / 5.1 | 132 | C | original_explanation 去空白后仅 12 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P1-983` | 5 / 5.1 | 134 | C | original_explanation 去空白后仅 13 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-032` | 1 / 1.2 | 7 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-034` | 1 / 1.2 | 8 | B | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-066` | 1 / 1.2 | 12 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-067` | 1 / 1.2 | 13 | C | original_explanation 去空白后仅 12 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-069` | 1 / 1.2 | 13 | C | original_explanation 去空白后仅 12 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-071` | 1 / 1.2 | 13 | B | original_explanation 去空白后仅 12 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-074` | 1 / 1.2 | 14 | A | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-075` | 1 / 1.2 | 14 | C | original_explanation 去空白后仅 18 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-127` | 1 / 1.3 | 20 | C | original_explanation 去空白后仅 12 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-135` | 1 / 1.3 | 21 | C | original_explanation 去空白后仅 8 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-143` | 2 / 2.1 | 23 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-144` | 2 / 2.1 | 23 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-145` | 2 / 2.1 | 23 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-146` | 2 / 2.1 | 25 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-147` | 2 / 2.1 | 26 | C | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-148` | 2 / 2.1 | 26 | B | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-149` | 2 / 2.1 | 26 | D | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-150` | 2 / 2.1 | 26 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-151` | 2 / 2.1 | 27 | D | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-152` | 2 / 2.1 | 27 | C | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-153` | 2 / 2.1 | 27 | B | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-154` | 2 / 2.1 | 27 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-155` | 2 / 2.1 | 27 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-156` | 2 / 2.1 | 27 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-157` | 2 / 2.1 | 28 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-158` | 2 / 2.1 | 28 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-159` | 2 / 2.1 | 28 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-160` | 2 / 2.1 | 28 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-161` | 2 / 2.1 | 28 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-162` | 2 / 2.1 | 28 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-163` | 2 / 2.1 | 28 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-164` | 2 / 2.1 | 28 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-165` | 2 / 2.1 | 28 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-166` | 2 / 2.1 | 29 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-167` | 2 / 2.1 | 29 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-168` | 2 / 2.1 | 29 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-169` | 2 / 2.1 | 29 | C | original_explanation 去空白后仅 7 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-170` | 2 / 2.1 | 29 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-171` | 2 / 2.1 | 29 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-172` | 2 / 2.1 | 29 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-173` | 2 / 2.1 | 29 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-174` | 2 / 2.1 | 30 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-175` | 2 / 2.1 | 30 | A | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-176` | 2 / 2.1 | 30 | D | original_explanation 去空白后仅 7 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-177` | 2 / 2.1 | 30 | D | original_explanation 去空白后仅 7 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-178` | 2 / 2.1 | 30 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-179` | 2 / 2.1 | 30 | A | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-180` | 2 / 2.1 | 30 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-181` | 2 / 2.1 | 31 | B | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-182` | 2 / 2.1 | 31 | C | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-183` | 2 / 2.1 | 31 | A | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-184` | 2 / 2.1 | 31 | D | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-185` | 2 / 2.1 | 31 | A | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-186` | 2 / 2.1 | 31 | A | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-187` | 2 / 2.1 | 31 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-188` | 2 / 2.1 | 32 | A | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-189` | 2 / 2.1 | 32 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-190` | 2 / 2.1 | 32 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-191` | 2 / 2.1 | 32 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-192` | 2 / 2.1 | 32 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-193` | 2 / 2.1 | 32 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-194` | 2 / 2.1 | 33 | D | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-195` | 2 / 2.1 | 33 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-196` | 2 / 2.1 | 33 | A | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-197` | 2 / 2.1 | 33 | B | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-198` | 2 / 2.1 | 33 | B | original_explanation 去空白后仅 14 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-199` | 2 / 2.1 | 33 | A | original_explanation 去空白后仅 9 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-200` | 2 / 2.1 | 33 | C | original_explanation 去空白后仅 15 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-201` | 2 / 2.1 | 33 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-202` | 2 / 2.1 | 34 | D | original_explanation 去空白后仅 15 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-203` | 2 / 2.1 | 34 | A | original_explanation 去空白后仅 15 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-204` | 2 / 2.1 | 34 | D | original_explanation 去空白后仅 15 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-205` | 2 / 2.1 | 34 | B | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-206` | 2 / 2.1 | 34 | A | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-207` | 2 / 2.1 | 34 | C | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-208` | 2 / 2.1 | 34 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-209` | 2 / 2.1 | 34 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-210` | 2 / 2.1 | 35 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-211` | 2 / 2.1 | 35 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-212` | 2 / 2.1 | 35 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-213` | 2 / 2.1 | 35 | B | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-214` | 2 / 2.1 | 35 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-215` | 2 / 2.1 | 35 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-216` | 2 / 2.1 | 36 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-217` | 2 / 2.1 | 36 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-218` | 2 / 2.1 | 36 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-219` | 2 / 2.1 | 36 | B | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-220` | 2 / 2.1 | 36 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-221` | 2 / 2.1 | 36 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-222` | 2 / 2.1 | 37 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-223` | 2 / 2.1 | 37 | B | original_explanation 去空白后仅 12 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-224` | 2 / 2.1 | 37 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-225` | 2 / 2.1 | 37 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-226` | 2 / 2.1 | 38 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-227` | 2 / 2.1 | 38 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-228` | 2 / 2.1 | 38 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-229` | 2 / 2.1 | 38 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-230` | 2 / 2.1 | 38 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-231` | 2 / 2.1 | 38 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-232` | 2 / 2.1 | 38 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-233` | 2 / 2.1 | 38 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-234` | 2 / 2.1 | 39 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-235` | 2 / 2.1 | 39 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-236` | 2 / 2.1 | 39 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-237` | 2 / 2.1 | 39 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-238` | 2 / 2.1 | 39 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-239` | 2 / 2.1 | 39 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-240` | 2 / 2.1 | 39 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-241` | 2 / 2.1 | 39 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-242` | 2 / 2.1 | 40 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-243` | 2 / 2.1 | 40 | A | original_explanation 去空白后仅 9 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-244` | 2 / 2.3 | 40 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-245` | 2 / 2.1 | 40 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-246` | 2 / 2.1 | 40 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-247` | 2 / 2.1 | 40 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-248` | 2 / 2.1 | 40 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-249` | 2 / 2.1 | 41 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-250` | 2 / 2.1 | 41 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-251` | 2 / 2.1 | 41 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-252` | 2 / 2.1 | 41 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-253` | 2 / 2.1 | 41 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-254` | 2 / 2.1 | 41 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-255` | 2 / 2.1 | 41 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-256` | 2 / 2.1 | 41 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-257` | 2 / 2.1 | 42 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-258` | 2 / 2.1 | 42 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-259` | 2 / 2.1 | 42 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-260` | 2 / 2.1 | 42 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-261` | 2 / 2.1 | 42 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-262` | 2 / 2.1 | 42 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-263` | 2 / 2.1 | 42 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-264` | 2 / 2.1 | 42 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-265` | 2 / 2.1 | 43 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-266` | 2 / 2.1 | 43 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-267` | 2 / 2.1 | 43 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-268` | 2 / 2.1 | 43 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-269` | 2 / 2.1 | 43 | A | original_explanation 去空白后仅 9 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-270` | 2 / 2.1 | 43 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-271` | 2 / 2.1 | 43 | A | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-272` | 2 / 2.1 | 44 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-273` | 2 / 2.1 | 44 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-274` | 2 / 2.1 | 44 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-275` | 2 / 2.1 | 44 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-276` | 2 / 2.1 | 44 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-277` | 2 / 2.1 | 44 | A | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-278` | 2 / 2.1 | 44 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-279` | 2 / 2.1 | 45 | D | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-280` | 2 / 2.1 | 45 | C | original_explanation 去空白后仅 10 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-281` | 2 / 2.2 | 45 | B | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-282` | 2 / 2.2 | 45 | D | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-283` | 2 / 2.2 | 45 | B | original_explanation 去空白后仅 4 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-284` | 2 / 2.2 | 45 | C | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-285` | 2 / 2.2 | 46 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-286` | 2 / 2.2 | 46 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-287` | 2 / 2.2 | 46 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-288` | 2 / 2.2 | 46 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-289` | 2 / 2.2 | 47 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-290` | 2 / 2.2 | 47 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-291` | 2 / 2.2 | 47 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-292` | 2 / 2.2 | 47 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-293` | 2 / 2.2 | 47 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-294` | 2 / 2.2 | 48 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-295` | 2 / 2.2 | 48 | A | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-296` | 2 / 2.2 | 48 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-297` | 2 / 2.2 | 48 | C | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-298` | 2 / 2.2 | 48 | D | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-299` | 2 / 2.2 | 48 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-300` | 2 / 2.2 | 49 | B | original_explanation 去空白后仅 6 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-306` | 2 / 2.1 | 24 | D | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-307` | 2 / 2.1 | 25 | D | original_explanation 去空白后仅 5 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-308` | 2 / 2.1 | 25 | D | original_explanation 去空白后仅 5 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-309` | 2 / 2.1 | 25 | B | original_explanation 为空，当前 JSON 没有可用解释依据。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-310` | 2 / 2.1 | 26 | A | original_explanation 去空白后仅 5 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-311` | 2 / 2.1 | 26 | D | original_explanation 去空白后仅 5 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-381` | 3 / 3.2 | 68 | A | original_explanation 去空白后仅 13 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-389` | 3 / 3.2 | 69 | A | original_explanation 去空白后仅 13 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |
| `P3-754` | 5 / 5.3 | 144 | D | original_explanation 去空白后仅 7 字，依据过短。 | 原始解析为空或过短；自动解释依据不足 | 核对 PDF 原题、选项、correct_answer、source_page 和教材依据。 | 先人工补依据；确认后才可决定是否只改 simple_explanation。 |

## 6. 后续处理规则

- 不得把本登记表内题目放入自动写入批次。
- 不得自动修改 `correct_answer`、题干、选项、`source_page`、`reference`、`chapter/section` 或 `original_explanation`。
- 若人工核对后认为某题可处理，应先新增对应 `MANUAL_AUDIT` 或 `DEEP_REVIEW` 文件，说明依据。
- 只有人工审计明确允许，且字段级计划只指向 `simple_explanation` 时，才可进入未来写入轮次。
- 涉及法律边界、题干/选项抽取风险、答案依据不足的题，不得仅凭当前 JSON 改写。

## 7. 建议下一步

低风险下一步不是处理本表题目，而是先完成 Risky 第三批 26 题写入、审计和抽查。Do Not Auto 深度人工核对应在第三批、第四批稳定后单独开只读任务。
