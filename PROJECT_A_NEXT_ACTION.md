# Project A Next Action

## 当前唯一推荐下一步

### Evidence Audit Batch 4 Candidate Pool / Manual Check

| 项目 | 说明 |
|------|------|
| **任务** | 从剩余非五段式题目中筛选 Batch 4 候选池，做只读人工证据审计 |
| **输入文件** | `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`（剩余题全局地图） |
| **候选范围** | Batch 3 未覆盖的剩余非五段式题（约 969 - 95 = 874 题中筛选） |
| **输出文件** | `EVIDENCE_AUDIT_BATCH4_CANDIDATE_POOL.md` → `EVIDENCE_AUDIT_BATCH4_MANUAL_CHECK.md` |
| **目标规模** | 150–200 题 manual check（提速） |

### 边界规则

| 规则 | 说明 |
|------|------|
| 选题来源 | 剩余非五段式题目，排除 Do Not Auto、已处理批次、五段式已覆盖 |
| 选题上限 | 200 题（可含 A+B 类混合，B 类 OE 不足题可保留为 manual_confirm） |
| 不处理 C/D 类 | 池外禁止自动处理 |
| 不写 JSON | 只生成 Markdown 审计文件 |
| 不改 UI | 不碰 `app.js` / `style.css` / `index.html` |
| 不 commit | 不暂存、不提交（除非用户明确要求） |
| 不 push | 不推送（除非用户明确要求） |

### Batch 3 遗留

| 项目 | 数量 | 说明 |
|------|:---:|------|
| manual_confirm | 26 题 P3 | 可在 Batch 4 中重新评估（若证据改善） |
| 主要为 P3 Ch2 系列 | 14 题 | OE 仅 7 字或为空，需教材原文确认 |

### 审计标准（同 Batch 3）

逐题检查以下项目：

1. 题干是否清楚，选项是否完整（A/B/C/D 四项齐全）。
2. `correct_answer` 是否与选项显式匹配。
3. `original_explanation` 是否充分支撑答案和干扰项排除。
4. 是否有 PDF/教材依据（`source_file` / `source_page` / `reference`）。
5. 题目是否涉及法律/监管边界且证据不足以清楚界定。
6. 题目是否疑似 OCR 污染、串题或选项抽取错误。

### 审计结论分类

| 结论 | 说明 | 后续 |
|:----:|------|------|
| 可进入 rewrite plan | 证据充分，可只改 `simple_explanation` | 排队进入 REWRITE_PLAN |
| 需要人工确认 | 证据不足或边界不清 | 暂不重写，标记待确认 |
| Do Not Auto | 法律边界/证据不足/OE 无法支撑 | 加入排除清单 |
| 暂缓 | 选项问题/OCR 问题 | 延后处理 |

### 完成后

1. 生成 `EVIDENCE_AUDIT_BATCH4_MANUAL_CHECK.md`。
2. 输出审计摘要（各类数量、ID 清单）。
3. **等待用户确认**是否生成 `EVIDENCE_AUDIT_BATCH4_REWRITE_PLAN.md`。
4. **不要**自动进入 rewrite plan 或 JSON 写入。

### 恢复上下文指令

新对话开始时输入：

```text
/project-a-recover
```

然后：

```text
当前下一步建议是 PROJECT_A_NEXT_ACTION.md 中的 Evidence Audit Batch 4。
是否现在开始？
```
