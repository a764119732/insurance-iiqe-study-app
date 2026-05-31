# Risky 阶段路线图

生成日期：2026-05-30

## 1. 当前状态

Risky 阶段目标是逐步清理仍然模板化、空泛、容易误导学习的 `simple_explanation`，同时保护题库结构和答案字段。

已完成：

| 阶段 | 状态 |
| --- | --- |
| Risky 总计划 | 已生成 `RISKY_EXPLANATION_AUDIT_PLAN.md` |
| 第一批人工审计 | 已生成 `RISKY_BATCH1_MANUAL_AUDIT.md` |
| 第一批重写计划 | 已生成 `RISKY_BATCH1_REWRITE_PLAN.md` |
| 第一批写入审计 | 已生成 `RISKY_BATCH1_REWRITE_AUDIT.md` |
| 第一批抽查 | 已生成 `RISKY_BATCH1_REWRITE_SPOTCHECK.md`，20/20 建议保留 |
| 第二批人工审计 | 已生成 `RISKY_BATCH2_MANUAL_AUDIT.md` |
| 第二批重写计划 | 已生成 `RISKY_BATCH2_REWRITE_PLAN.md` |
| 第二批写入审计 | 已生成 `RISKY_BATCH2_REWRITE_AUDIT.md` |
| 第二批抽查 | 已生成 `RISKY_BATCH2_REWRITE_SPOTCHECK.md`，30/30 建议保留 |
| 第三批人工审计 | 已生成 `RISKY_BATCH3_MANUAL_AUDIT.md` |
| 第三批重写计划 | 已生成 `RISKY_BATCH3_REWRITE_PLAN.md`，26 题可写入 |
| 第三批写入提示 | 已生成 `RISKY_BATCH3_WRITE_PROMPT.md` |
| 剩余全局地图 | 已生成 `RISKY_REMAINING_GLOBAL_MAP.md` |
| 第四批候选计划 | 已生成 `RISKY_BATCH4_CANDIDATE_PLAN.md` |

## 2. 第三批下一步

下一步最稳任务：

1. 读取 `RISKY_BATCH3_WRITE_PROMPT.md`。
2. 执行第三批 26 题 `simple_explanation` 写入。
3. 只修改：
   - `data/paper1_questions.json`
   - `data/paper3_questions.json`
4. 只修改 26 题的 `simple_explanation`。
5. 写入后生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
6. 写入审计通过后，再生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。

第三批写入时必须排除：

- `P3-543`
- `P1-1192`
- `P3-553`
- `P3-555`

这 4 题需要人工依据，不进入自动写入。

## 3. 第四批进入方式

第四批不应直接写入。

推荐流程：

1. 读取 `RISKY_BATCH4_CANDIDATE_PLAN.md`。
2. 对 30 题生成 `RISKY_BATCH4_MANUAL_AUDIT.md`。
3. 人工审计判断：
   - 哪些题可后续自动重写 `simple_explanation`。
   - 哪些题必须人工确认。
   - 哪些题禁止自动处理。
   - 是否有 `correct_answer` 疑似问题。
4. 只有人工审计通过的题，才能进入 `RISKY_BATCH4_REWRITE_PLAN.md`。

## 4. 固定批次流程

后续每一批固定使用同一流程：

```text
MANUAL_AUDIT
  -> REWRITE_PLAN
  -> REWRITE_AUDIT
  -> SPOTCHECK
```

### MANUAL_AUDIT

只读审计 30 题，输出：

- 题号
- paper
- chapter / section
- source_file / source_page
- correct_answer
- 风险类型
- 当前 `simple_explanation` 问题
- 是否可能误导学习
- 是否需要 PDF 人工确认
- 是否允许后续自动重写 `simple_explanation`
- 是否禁止自动改 `correct_answer`
- 建议处理方式

### REWRITE_PLAN

只生成字段级计划，不改 JSON。

必须明确：

- 只计划修改 `simple_explanation`
- 修改哪些题号
- 排除哪些题号
- 每题重写方向
- 保护字段不改
- 是否允许自动写入

### REWRITE_AUDIT

执行写入后生成。

必须记录：

- 实际修改题数
- 跳过题数
- 每题只改 `simple_explanation`
- 保护字段快照比对
- JSON parse
- 题数
- ID 连续
- 五段式标题
- 污染词
- 编码
- 是否发现答案冲突

### SPOTCHECK

写入后只读抽查重写质量。

必须检查：

- 五段式完整
- 贴合题干
- 贴合选项
- 贴合 `correct_answer`
- 否定题是否讲反
- 组合题是否逐项解释
- “以上各项”是否处理正确
- 是否有空泛句子
- 是否扩大题意或越过教材边界
- 是否建议保留
- 是否需要人工复核
- 是否需要返修

## 5. 人工介入条件

以下情况必须人工介入，不得自动写入：

1. `original_explanation` 为空或过短。
2. `original_explanation` 与题干、选项或 `correct_answer` 不完全贴合。
3. 题干或选项存在疑似抽取错误。
4. 题目涉及法律边界，例如可保权益、寿险转让、不可异议条款、投诉局权限边界等。
5. 正确答案虽与 PDF 字母一致，但解释依据不足。
6. 题目与相邻题高度相似，可能有 PDF 边界或串题风险。
7. 任一保护字段疑似需要修改。

## 6. 禁止自动修改范围

任何 Risky 阶段任务均不得自动修改：

- `correct_answer`
- `source_page`
- 题干
- 选项
- `reference`
- `chapter`
- `section`
- `original_explanation`
- UI
- PDF
- 离线版
- `sharedFiles`
- `extract_questions.py`
- README

Risky 写入阶段默认只允许修改指定题号的 `simple_explanation`。

## 7. 记忆文件更新规则

以下情况必须更新 `PROJECT_A_MEMORY.md`：

1. 完成一批人工审计。
2. 完成一批重写计划。
3. 完成一批 JSON 写入审计。
4. 完成一批重写抽查。
5. 新增重要审计报告或全局规划报告。
6. 修改了 `data/paper1_questions.json` 或 `data/paper3_questions.json`。
7. 用户准备新开对话。
8. 上下文接近满载。

如果上下文超过 80%，只更新 `PROJECT_A_MEMORY.md` 并停止，不继续做新写入任务。

## 8. 当前禁止自动处理题

持续排除：

- `P3-036`
- `P3-060`
- `P3-061`
- `P3-062`
- `P1-357`
- `P3-301`
- `P3-302`
- `P3-303`
- `P3-304`
- `P3-305`
- `P3-543`
- `P1-1192`
- `P3-553`
- `P3-555`

## 9. 推荐后续顺序

1. 周额度刷新后，先执行第三批 26 题写入。
2. 生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
3. 抽查并生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。
4. 若抽查通过，再进入第四批人工审计。
5. 第四批人工审计只读生成 `RISKY_BATCH4_MANUAL_AUDIT.md`。
6. 第四批再按固定流程推进。

不要跨过抽查直接进入下一批写入。
