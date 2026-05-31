# 项目A 扩400前准备审计报告

生成日期：2026-05-27

## 1. 本轮目标与边界

本轮目标是在不写入题库 JSON、不运行写入式抽题脚本、不扩题的前提下，为下一轮正式扩到 400 做准备审计。

本轮明确未执行：

- 未运行 `python .\extract_questions.py`
- 未写入 `data/paper1_questions.json`
- 未写入 `data/paper3_questions.json`
- 未扩题到 400 或 500
- 未修改 UI 文件、PDF、`data/syllabus.js`
- 未修改题干、选项、答案、解释、页码、reference、章节字段
- 未处理 `P3-036`, `P3-060`, `P3-061`, `P3-062` 的法律结论

## 2. 已读取和检查的文件

已按要求读取/检查：

- `QUALITY_FIX_300_AUDIT.md`
- `extract_questions.py`
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `data/syllabus.js`

辅助只读检查：

- 解析 P1/P3 JSON 题数、首尾 ID、重复 ID、缺号情况
- 使用 `rg` 定位 `limit`、封存区保护函数、写入前校验调用
- 读取 `extract_questions.py` 第 360-462 行确认抽题、保护、写入顺序
- 计算关键文件 SHA256

注意：本轮曾执行 `python -m py_compile extract_questions.py` 做语法检查，该命令可能更新 `__pycache__/extract_questions.cpython-314.pyc`。这不影响题库 JSON，但严格说不是纯只读副作用。后续正式扩题前建议忽略或人工确认是否清理该缓存文件。

## 3. 当前状态核对

### 题库状态

| 文件 | 题数 | 首题 | 末题 | 重复 ID | 缺号 |
| --- | ---: | --- | --- | ---: | ---: |
| `data/paper1_questions.json` | 300 | `P1-001` | `P1-300` | 0 | 0 |
| `data/paper3_questions.json` | 300 | `P3-001` | `P3-300` | 0 | 0 |

结论：题库仍为 P1=300、P3=300，总计 600，尚未扩到 400。

### 当前文件指纹

| 文件 | SHA256 |
| --- | --- |
| `data/paper1_questions.json` | `BF62475E33CA15F3D8139E80F91D51F735BD741E027B833D14B45E26D4DEEDC6` |
| `data/paper3_questions.json` | `3CB25FD2AEF6F712ACA91478CD3ED3D74582EA47A6619E9EF870C7C87A481B9A` |
| `extract_questions.py` | `E2F2AA347E651793515C2E287EB1F94910F8C3D40146A4CD556B4FFF82DBD33E` |
| `data/syllabus.js` | `920F7C43F79E990EB296DFC214E7F0949E8C4BE333B78B91030B8EBFD99E524C` |
| `QUALITY_FIX_300_AUDIT.md` | `67B386F2D671631317CB031F8FB34499837C9F97F5AFC1162BB4A901CB054306` |

### 前 300 题聚合指纹

用于下一轮扩400后核对封存区是否保持完全不变：

| 范围 | 规范化聚合 SHA256 |
| --- | --- |
| P1 前 300 题 | `97cd8ead28f4034c02f10332c3a18f0f77a2609ed511b0afd3c27ba350a2b574` |
| P3 前 300 题 | `382be22286698605b0f005b23219f0b4cf2e919b60cd16a20223c31e44aeada6` |

## 4. `extract_questions.py` 当前 limit 状态

只读检查结果：

- P1 `limit`: `400`
- P3 `limit`: `400`

定位：

- 第 33 行：`"limit": 400`
- 第 84 行：`"limit": 400`

结论：当前处于“题库 JSON 仍为 300/300，但 `extract_questions.py` 两处 limit 已改为 400”的状态。这个状态本身不写入数据，但下一轮一旦获得明确授权并运行 `python .\extract_questions.py`，脚本会尝试写入 P1/P3 各 400 题。

## 5. 封存区保护逻辑核对

要求检查的四个函数仍存在：

- `load_existing_questions()`：第 376 行
- `merge_existing_explanations()`：第 391 行
- `find_preserved_record_differences()`：第 410 行
- `ensure_existing_records_preserved()`：第 440 行

写入前校验顺序仍存在：

```python
questions = extract_paper(paper, config)
out_path = ROOT / config["out"]
questions = merge_existing_explanations(questions, out_path)
ensure_existing_records_preserved(questions, out_path)
out_path.parent.mkdir(parents=True, exist_ok=True)
out_path.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8")
```

判断：

- `merge_existing_explanations()` 会优先保留已有同 ID 记录。
- `ensure_existing_records_preserved()` 在 `write_text()` 前执行。
- 如已有记录会发生变化，脚本应抛出 `RuntimeError`，阻止写入。
- 该保护逻辑能降低 P1-001~P1-300、P3-001~P3-300 被覆盖的风险，但下一轮正式扩题后仍必须做独立审计，不能只信任脚本。

## 6. 已知风险

1. 当前 `limit=400` 而 JSON 仍为 300/300，是一个准备态不一致。风险在于下一次误运行 `python .\extract_questions.py` 会直接尝试扩写 JSON。
2. 扩400会覆盖写入两个 JSON 文件，必须有用户明确授权。
3. 封存区保护逻辑依赖新抽取结果中旧 ID 能被正确识别；若 PDF 抽取顺序异常、旧题缺失或字段结构异常，理论上会触发阻断，但仍需扩后复核。
4. 新增 P1-301~P1-400、P3-301~P3-400 可能存在 PDF 抽取断行、相邻题解析污染、页眉/表头污染、答案解析错位、章节推断错误。
5. `P3-036`, `P3-060`, `P3-061`, `P3-062` 的法律结论仍应视为人工确认事项；扩题不应顺手修改这些题。

## 7. 扩400前检查清单

正式扩题前建议逐项确认：

- 用户明确授权运行 `python .\extract_questions.py` 并允许覆盖写入两个 JSON。
- 当前目录为 `D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app`。
- `data/paper1_questions.json` 当前为 300 题，首尾 `P1-001` 至 `P1-300`。
- `data/paper3_questions.json` 当前为 300 题，首尾 `P3-001` 至 `P3-300`。
- `extract_questions.py` 中 P1/P3 两处 `limit` 均为 400。
- 四个封存区保护函数仍存在。
- `main()` 中 `ensure_existing_records_preserved()` 仍位于 `write_text()` 前。
- 记录扩题前两个 JSON 的 SHA256。
- 记录 P1/P3 前 300 题规范化聚合 SHA256。
- 不同时进行修题、UI 修改、PDF 修改或解释批量清理。

## 8. 扩400正式执行步骤

下一轮获得授权后，建议按这个最小步骤执行：

1. 只读复核当前状态：题数、limit、保护函数、写入顺序。
2. 记录扩题前 JSON SHA256 和前 300 题聚合 SHA256。
3. 在项目目录执行：

```powershell
python .\extract_questions.py
```

4. 检查命令输出是否显示 P1/P3 各写入 400 题。
5. 解析两个 JSON，确认 P1=400、P3=400。
6. 复核 P1/P3 前 300 题聚合 SHA256 与本报告一致。
7. 只审计新增题 `P1-301`~`P1-400`、`P3-301`~`P3-400`。
8. 若前 300 题有任何差异，立即停止，不做修复，报告 blocked。

## 9. 扩400后审计清单

扩题后必须检查：

- P1 题数是否为 400，ID 是否连续 `P1-001` 至 `P1-400`。
- P3 题数是否为 400，ID 是否连续 `P3-001` 至 `P3-400`。
- P1/P3 前 300 题聚合 SHA256 是否仍分别为：
  - `97cd8ead28f4034c02f10332c3a18f0f77a2609ed511b0afd3c27ba350a2b574`
  - `382be22286698605b0f005b23219f0b4cf2e919b60cd16a20223c31e44aeada6`
- 新增 200 题是否都具备必要字段。
- 新增题 `correct_answer` 是否均为 A/B/C/D。
- 新增题 A/B/C/D 选项是否完整。
- 新增题题干是否非空。
- 新增题 `simple_explanation` 是否非空。
- 新增题 `reference`、`chapter`、`section`、`chapter_title`、`section_title` 是否基本匹配 syllabus。
- 新增题 `source_page` 是否为正数，是否存在明显跳页异常。
- 新增题是否出现页眉、表头、`#INTERNAL`、颜色背景提示、相邻题块污染。
- 新增题是否出现疑似 PDF 断行数字，例如 `2\n0年`、孤立数字、题干/选项截断。
- 新增题解释中是否出现多个答案标记或与 `correct_answer` 冲突。

## 10. 新增题风险分类规则

建议扩400后只对新增题分类，不回改封存 300 题：

| 等级 | 条件 | 处理建议 |
| --- | --- | --- |
| High | 答案为空/非法；选项缺失；题干缺失；解释明显对应相邻题；章节明显错误；`correct_answer` 与解释冲突 | 停止自动修复，单题人工核对 |
| Medium | `simple_explanation` 空或极短；解析含页眉/表头/`#INTERNAL`；source_page 异常跳页；reference 与 chapter 不一致 | 列入定向审计，不批量改 |
| Low | 解释模板化、语言不够自然、记忆法一般 | 可后续优化，不阻塞扩400封存 |

## 11. 下一轮正式扩400所需授权语句

建议用户下一轮原样授权：

```text
我明确授权你在项目A工作目录 D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app 内运行 python .\extract_questions.py，并允许该脚本覆盖写入 data/paper1_questions.json 和 data/paper3_questions.json，用于将 P1/P3 从当前 300/300 扩到 400/400。除此之外，不要修改 UI、PDF、syllabus 或其他题库字段；运行后必须审计前300题不变和新增题质量。
```

## 12. 下一轮 Codex 指令草稿

```text
继续项目A，正式扩到400。

工作目录：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app

我明确授权你运行：
python .\extract_questions.py

并明确授权该脚本覆盖写入：
data/paper1_questions.json
data/paper3_questions.json

目标：
1. 将 P1/P3 从 300/300 扩到 400/400。
2. 扩题前先只读复核题数、limit、保护函数、写入前校验顺序。
3. 扩题前记录 JSON SHA256 和前300题聚合 SHA256。
4. 运行脚本后确认 P1=400、P3=400。
5. 审计 P1-001~P1-300、P3-001~P3-300 完全不变。
6. 只读审计新增 P1-301~P1-400、P3-301~P3-400 的结构、答案、选项、解释、页码、reference、章节字段。
7. 如果前300题有任何差异，立即停止并报告 blocked，不要尝试修复。

限制：
- 不要扩到500。
- 不要修改 UI 文件。
- 不要修改 PDF。
- 不要修改 data/syllabus.js。
- 不要顺手修题。
- 不要处理 P3-036、P3-060、P3-061、P3-062 的法律结论。
- 除抽题脚本写入两个 JSON 外，不要修改其他文件，除非需要创建扩400审计报告。
```

## 13. 本轮结论

当前可以进入“等待用户明确授权正式运行扩400脚本”的状态。技术准备上，`limit` 已经是 400，封存区保护函数和写入前校验仍存在；但题库 JSON 仍是 300/300，未扩题。

本轮停止点：已完成准备审计和下一轮指令准备；未执行正式扩题。
