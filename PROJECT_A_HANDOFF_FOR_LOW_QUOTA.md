# 项目A低额度交接文件

生成日期：2026-05-30

## 1. 当前项目状态

在线题库状态：

- P1=1391。
- P3=807。
- 总计 2198。
- P1 / P3 ID 连续。
- 既有报告记录 JSON parse 通过。

阶段状态：

- 污染清理阶段已完成并封存。
- Risky 第一批 20 题已重写 `simple_explanation` 并抽查通过。
- Risky 第二批 30 题已重写 `simple_explanation` 并抽查通过。
- Risky 第三批人工审计已完成。
- Risky 第三批 26 题重写计划与写入提示已生成，但尚未写入 JSON。
- 第四批候选计划已生成，但尚未人工审计。
- Do Not Auto 登记表已生成，登记 14 个明确禁自动题和 195 个全局地图 Do Not Auto 题。

## 2. 已完成阶段

已完成并可作为依据的文件：

- `POLLUTION_CLEANUP_FINAL_REVIEW.md`
- `NEW_QUESTION_QUALITY_AUDIT.md`
- `RISKY_EXPLANATION_AUDIT_PLAN.md`
- `RISKY_BATCH1_REWRITE_SPOTCHECK.md`
- `RISKY_BATCH2_REWRITE_SPOTCHECK.md`
- `RISKY_BATCH3_MANUAL_AUDIT.md`
- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_WRITE_PROMPT.md`
- `RISKY_REMAINING_GLOBAL_MAP.md`
- `RISKY_BATCH4_CANDIDATE_PLAN.md`
- `RISKY_STAGE_ROADMAP.md`
- `PROJECT_A_FINAL_HANDOFF.md`
- `NEXT_WEEK_CODEX_QUEUE.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `RISKY_WORKFLOW_TEMPLATE.md`

## 3. 当前风险

主要风险：

- 污染清零不等于题库质量全部正确。
- 大量新增题仍有模板化 `simple_explanation`。
- Do Not Auto 题当前 JSON 依据不足，不能自动重写。
- 第三批 4 题必须人工确认：`P3-543`、`P1-1192`、`P3-553`、`P3-555`。
- 第四批仅为候选，不能直接写入。

容易出错的动作：

- 跳过第三批抽查直接进入第四批写入。
- 把 Do Not Auto 题放入自动写入批次。
- 修改 `correct_answer`、题干、选项或来源字段。
- 因解释看起来不够好而自动改 `original_explanation`。
- 在低额度时开始 JSON 写入但没完成审计。

## 4. 不允许做什么

低额度时一律不允许：

- 开始新的 JSON 写入。
- 修改 `data/paper1_questions.json`。
- 修改 `data/paper3_questions.json`。
- 修改 `app.js`、`index.html`、`style.css`。
- 修改 PDF。
- 修改离线版。
- 修改 `sharedFiles`。
- 修改 `extract_questions.py`。
- 修改 README。
- 修改题干、选项、`correct_answer`、`source_page`、`reference`、`chapter/section`。
- 批量删除、移动、重命名或重置仓库。

低额度时允许：

- 只读检查。
- 新增小型 Markdown 计划/交接文件。
- 更新 `PROJECT_A_MEMORY.md`。

## 5. 下次新对话第一句

建议复制：

```text
继续项目A。

请先读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_FINAL_HANDOFF.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\NEXT_WEEK_CODEX_QUEUE.md

先只读恢复上下文，不要修改任何文件。

如果本轮额度充足，下一步执行 RISKY_BATCH3_WRITE_PROMPT.md：只修改第三批 26 题的 simple_explanation，并生成 RISKY_BATCH3_REWRITE_AUDIT.md。

如果额度不足，只更新 PROJECT_A_MEMORY.md 后停止。
```

## 6. 只剩 5% 额度时

只做一件事：

1. 更新 `PROJECT_A_MEMORY.md`。

必须写清：

- 当前正在做什么。
- 已完成哪些文件。
- 哪些文件未完成。
- 是否修改过 JSON。
- 若修改过 JSON，修改了哪些题和字段。
- 已运行哪些检查。
- 未运行哪些检查。
- 下一步从哪里恢复。

不要新增其他文件，不要继续审计，不要写 JSON。

## 7. 只剩 10% 额度时

允许做：

- 完成本轮正在写的 Markdown 文件。
- 更新 `PROJECT_A_MEMORY.md`。

不允许做：

- 开始新的批次。
- 开始 JSON 写入。
- 做长表审计。
- 读 PDF。

若正在 JSON 写入中：

- 立即停止新增修改。
- 运行最小必要检查：JSON parse、题数、ID 连续、保护字段快照。
- 更新 `PROJECT_A_MEMORY.md` 写明是否完整。

## 8. 只剩 20% 额度时

允许做：

- 完成当前只读审计或计划文件。
- 做一次小型只读校验。
- 更新 `PROJECT_A_MEMORY.md`。

不建议做：

- 启动新的 JSON 写入。
- 生成超大注册表。
- 深度核对 Do Not Auto。

若尚未开始第三批写入，应推迟到新对话。

## 9. 如果写入中断如何恢复

第一优先级：确认是否发生 JSON 写入。

恢复步骤：

1. 读取 `PROJECT_A_MEMORY.md`。
2. 读取对应批次的 `REWRITE_PLAN`。
3. 读取对应批次的 `REWRITE_AUDIT`，若存在。
4. 只读解析 `data/paper1_questions.json` 和 `data/paper3_questions.json`。
5. 核对计划题号的 `simple_explanation` 是否已经写入。
6. 核对排除题是否未被写入。
7. 做保护字段快照比对；如果写入前快照不存在，就只读抽查保护字段是否明显异常，并在报告中说明证据不足。
8. 运行 JSON parse、题数、ID 连续、编码检查。
9. 生成或补全 `REWRITE_AUDIT`。
10. 通过审计后再生成 `SPOTCHECK`。

中断恢复期间不得：

- 改答案。
- 改题干。
- 改选项。
- 补写非计划题。
- 继续下一批。

## 10. 当前最稳恢复点

若额度刷新：

1. 读取 `RISKY_BATCH3_WRITE_PROMPT.md`。
2. 执行第三批 26 题 `simple_explanation` 写入。
3. 生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
4. 抽查生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。
5. 更新 `PROJECT_A_MEMORY.md`。

若额度不足：

1. 不写 JSON。
2. 只更新 `PROJECT_A_MEMORY.md`。
3. 新开对话继续。
