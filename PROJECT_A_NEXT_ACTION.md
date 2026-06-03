# Project A Next Action

## 当前唯一推荐下一步

### Evidence Audit Batch 5 — 推荐使用一键闭环命令

**首选方式**：使用 `/project-a-evidence-batch-auto` 一键执行完整流程。

调用示例：

```text
/project-a-evidence-batch-auto

Batch 5
manual check: 200 题
rewrite: 150-180 题
授权自动提交推送: yes
```

或分阶段只读（不写 JSON）：

```text
/project-a-evidence-batch-auto

Batch 5
manual check: 200 题
rewrite: 暂不写入
授权自动提交推送: no
```

详细流程见 `.claude/commands/project-a-evidence-batch-auto.md`。

### 传统方式：Evidence Audit Batch 5 分步执行

| 项目 | 说明 |
|------|------|
| **任务** | 从剩余非五段式题目中筛选 Batch 5 候选池，做只读人工证据审计 |
| **输入文件** | `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`（剩余题全局地图） |
| **候选范围** | Batch 4 未覆盖的剩余非五段式题（约 888 - 200 = 688 题中筛选） |
| **输出文件** | `EVIDENCE_AUDIT_BATCH5_CANDIDATE_POOL.md` → `EVIDENCE_AUDIT_BATCH5_MANUAL_CHECK.md` |
| **目标规模** | 150–200 题 manual check，120–180 题 rewrite |

### 🔴 Batch 5 新增硬规则：写入前 ID 计数一致性校验

**Batch 3 和 Batch 4 都出现过 rewrite plan 表头统计与显式 ID 数量不一致的问题。**
为避免再次发生，Batch 5 rewrite plan 生成后、JSON 写入前，必须先执行以下核对：

| # | 核对项 | 要求 |
|---|--------|------|
| 1 | 显式 allow_rewrite ID 数量 | 逐个数，不靠表头 |
| 2 | P1/P3 显式列表数量 | 分别统计 |
| 3 | MC/DNA 排除数量 | 显式列出并确认 |
| 4 | 三者一致性 | 总数 = P1+P3 = 审计总数 − MC − DNA |
| 5 | 写入前最后一次确认 | 向用户报告以上 4 项均一致后才写 JSON |

### 边界规则

| 规则 | 说明 |
|------|------|
| 选题来源 | 剩余非五段式题目，排除 Do Not Auto、已处理批次、五段式已覆盖 |
| 选题上限 | 200 题 |
| 不处理 C/D 类 | 池外禁止自动处理 |
| 不写 JSON | 只生成 Markdown 审计文件（直到用户明确授权） |
| 不改 UI | 不碰 `app.js` / `style.css` / `index.html` |
| 不 commit | 不暂存、不提交（除非用户明确要求） |

### Batch 4 遗留

| 项目 | 数量 | 说明 |
|------|:---:|------|
| manual_confirm | 17 | 可在 Batch 5 中重新评估 |
| do_not_auto | 9 | OE < 20 字，需教材原文补充后再评估 |

### 审计标准

1. 题干是否清楚，选项是否完整（A/B/C/D 四项齐全）
2. `correct_answer` 是否与选项显式匹配
3. `original_explanation` 是否充分支撑答案和干扰项排除
4. 是否有 PDF/教材依据
5. 题目是否涉及法律/监管边界且证据不足
6. 题目是否疑似 OCR 污染、串题或选项抽取错误

### 审计结论分类

| 结论 | 后续 |
|:----:|------|
| allow_rewrite | 排队进入 REWRITE_PLAN |
| manual_confirm | 暂不重写，标记待确认 |
| do_not_auto | 加入排除清单 |
| defer | 延后处理 |

### 累计进度

| 批次 | 写入 | 累计五段式 |
|------|:---:|:---:|
| Full Explanation 1-16 | ~1088 | ~1088 |
| Evidence Audit 1 | 13 | ~1101 |
| Evidence Audit 2 | 41 | ~1142 |
| Evidence Audit 3 | 95 | ~1237 |
| Evidence Audit 4 | 171 | ~1408 |
| Risky 1-2 | 50 | ~1458 |
| 其他来源 | ~23 | ~1481 |
| **全库** | — | **~1481 / 2198 (67%)** |

### 恢复上下文指令

新对话开始时输入：

```text
/project-a-recover
```

然后：

```text
当前下一步建议是 PROJECT_A_NEXT_ACTION.md 中的 Evidence Audit Batch 5。
是否现在开始？
```
