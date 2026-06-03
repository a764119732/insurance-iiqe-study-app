# Project A Next Action

## 当前唯一推荐下一步

### Evidence Audit Batch 3 Manual Check

| 项目 | 说明 |
|------|------|
| **任务** | 从 A 类候选题中抽取最多 100 题，逐题做只读人工证据审计 |
| **输入文件** | `EVIDENCE_AUDIT_BATCH3_CANDIDATE_POOL.md` |
| **候选范围** | **仅 A 类 119 题**（可进入人工证据审计） |
| **输出文件** | `EVIDENCE_AUDIT_BATCH3_MANUAL_CHECK.md` |

### 边界规则

| 规则 | 说明 |
|------|------|
| 选题来源 | **只从 A 类选**，不碰 B 类 |
| 选题上限 | 最多 100 题（可少于 100，根据 evidence 实际判断） |
| 不处理 C 类 | 151 题 C 类禁止自动处理，不进入本轮 |
| 不处理 D 类 | 152 题 D 类暂缓，不进入本轮 |
| 不写 JSON | 只生成 Markdown 审计文件 |
| 不改 UI | 不碰 `app.js` / `style.css` / `index.html` |
| 不 commit | 不暂存、不提交 |
| 不 push | 不推送 |

### 审计标准

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

1. 生成 `EVIDENCE_AUDIT_BATCH3_MANUAL_CHECK.md`。
2. 输出审计摘要（各类数量、ID 清单）。
3. **等待用户确认**是否生成 `EVIDENCE_AUDIT_BATCH3_REWRITE_PLAN.md`。
4. **不要**自动进入 rewrite plan 或 JSON 写入。

### 恢复上下文指令

新对话开始时输入：

```text
/project-a-recover
```

然后：

```text
当前下一步建议是 PROJECT_A_NEXT_ACTION.md 中的 Evidence Audit Batch 3 Manual Check。
是否现在开始？
```
