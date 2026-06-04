---
description: 一键扫描并返修所有格式完整但内容空泛的 simple_explanation，替换为 4 段式具体解析。
---

# project-a-specificity-repair-auto — 解析具体性返修闭环

## 用途

一键扫描所有 `simple_explanation`，标记内容空泛题，批量返修为 4 段式具体解析。

调用时指定：
- **repair batch number**：R1, R2, ...
- **扫描范围**：全库 / Batch5-6 / 指定题号
- **写入目标数量**：如 100-150
- **是否授权自动提交推送**：yes / no

## 8 阶段完整流程

### 阶段 0：恢复与前置检查

1. 读取核心上下文文件。
2. 检查 main ↔ origin/main 对齐、JSON/UI 干净。
3. **如果 JSON/UI 有未提交 diff，必须停止。**

### 阶段 1：全库具体性扫描

扫描 `data/paper1_questions.json` 和 `data/paper3_questions.json` 中所有 `simple_explanation`，标记问题类型：

| 标记类型 | 说明 |
|----------|------|
| `copied_original` | 大段复述 original_explanation |
| `generic_options` | 其他选项解释空泛 |
| `missing_option_by_option` | 没有逐项解释 A/B/C/D |
| `reverse_question_not_explained` | 反向题未说明题目方向 |
| `repeated_sentence` | 同一规则反复说 |
| `generic_memory_tip` | 记忆法是万能句 |
| `weak_correct_answer_reason` | 正确答案只写"符合题意" |
| `too_textbook_like` | 像教材原文，不像白话 |

创建 `SPECIFICITY_REPAIR_BATCH{R}_CANDIDATE_SCAN.md`。

**本阶段只读，不写 JSON。**

### 阶段 2：返修计划

从问题题中选取目标数量。优先修：

1. 反向题/例外题/不属于/不包括/错误的是
2. 其他选项解释空泛的题
3. 大段复制 original_explanation 的题
4. Batch5/6 新写入但质量不具体的题
5. 记忆法是万能句的题

每题必须列：question_id、paper、correct_answer、current_issue、rewrite_basis、option_explanation_plan、risk_note。

创建 `SPECIFICITY_REPAIR_BATCH{R}_REWRITE_PLAN.md`。

**本阶段只读，不写 JSON。**

### 阶段 3：写入前硬校验

1. 提取 plan 显式 ID 清单。
2. 核对 P1/P3 数量、排除题。
3. 确认只修改 `simple_explanation`。
4. **计数不一致必须先修正文档再写 JSON。**

### 阶段 4：JSON 返修写入

**必须在阶段 3 全部通过后才能执行。**

1. 创建保护字段快照。
2. 对每题替换为 4 段式：
   - `1. 考点` — 白话+题型
   - `2. 结论 + 解释` — 正确选项为什么对
   - `3. 一一解释其他选项为什么错` — A/B/C/D 逐项
   - `4. 记忆口诀` — 与本题具体相关
3. **simple_explanation 必须统一简体中文**，禁止繁体字或繁简混用。
4. **禁止教材引用式表达**，包括"原始解析"、"教材第几章第几节"、"1.1.2a"等。
5. **必须严格 4 段式**：1. 考点；2. 结论 + 解释；3. 一一解释其他选项为什么错；4. 记忆口诀。
6. **不允许** 5 段式旧格式，禁止第 5 段。
7. **不允许** 大段复制 original_explanation。
8. **每个错误选项必须有具体错因**，不允许空泛解释其他选项。
9. **组合题特殊规则**：必须先逐项解释 i/ii/iii/iv 每个罗马数字项目，再解释 A/B/C/D。禁止在组合题中用空泛句。
10. 依据不足 → 跳过并记录 skipped。

### 阶段 5：写入后质量审计

创建 `SPECIFICITY_REPAIR_BATCH{R}_REWRITE_AUDIT.md` 和 `SPOTCHECK.md`。

Spotcheck ≥ 30%，必须检查以下 5 项质量指标，**任一失败则 generic_explanation_count > 0 并停止 commit**：

| # | Check | Standard |
|---|-------|----------|
| 1 | `simplified_chinese_check` | 无繁体字，简体中文 |
| 2 | `no_source_reference_check` | 无"原始解析/教材章節/编号" |
| 3 | `four_section_only_check` | 只有 1-4 段，无第 5 段 |
| 4 | `concrete_wrong_option_reason_check` | 每个错误选项有具体错因 |
| 5 | `no_generic_comparison_check` | 无"和正确答案不同"等空泛句 |

此外还必须检查：
- 是否为 4 段式
- 是否逐项解释其他选项
- 是否解释反向题/例外题
- 是否仍有原文搬运
- 记忆口诀是否具体
- **generic_explanation_count 必须为 0**
- **combination_question_failure_count 必须为 0**

**如果 generic_explanation_count > 0，必须停止，不得 commit。**

### 阶段 6：完整 Safety Check

15 项检查全部通过：

| # | 检查项 | 标准 |
|---|--------|------|
| 1 | JSON parse | 通过 |
| 2 | P1=1391, P3=807, Total=2198 | 精确 |
| 3 | P1/P3 ID 连续 | 无缺失 |
| 4 | changed IDs = plan IDs | extra=0 |
| 5 | skipped 有记录 | — |
| 6 | 只改 simple_explanation | 0 非 SE 变更 |
| 7 | 保护字段变化 | 0 |
| 8 | MC/DNA/DNA 总登记 | 0 |
| 9 | 编码 | 0 |
| 10 | 4 段式完整性 | 写入数/写入数 |
| 11 | 逐项解释选项通过率 | 100% |
| 11a | 组合题 i/ii/iii/iv 逐项解释 | 100% |
| 11b | simplified_chinese_check | 0 繁体字 |
| 11c | no_source_reference_check | 0 教材引用 |
| 11d | four_section_only_check | 0 第5段 |
| 11e | concrete_wrong_option_reason_check | 100% |
| 11f | no_generic_comparison_check | 0 空泛句 |
| 12 | generic_explanation_count | 0 |
| 13 | git diff --check | 通过 |
| 14 | UI/README 无 diff | 0 |
| 15 | git status 异常 | 无 |

### 阶段 7：自动提交推送（需授权）

#### Commit A：扫描与计划
- `SPECIFICITY_REPAIR_BATCH{R}_CANDIDATE_SCAN.md`
- `SPECIFICITY_REPAIR_BATCH{R}_REWRITE_PLAN.md`
- `commit message: Add specificity repair batch {R} plan`

#### Commit B：JSON 返修成果
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `SPECIFICITY_REPAIR_BATCH{R}_REWRITE_AUDIT.md`
- `SPECIFICITY_REPAIR_BATCH{R}_SPOTCHECK.md`
- 如有计数修正也允许 plan 文件
- `commit message: Repair generic explanations batch {R}`

**严格排除：PROJECT_A_MEMORY.md、FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md、UI/PDF/离线版/sharedFiles**

### 阶段 8：Session-Close

更新交接文件，单独 commit PROJECT_A_NEXT_ACTION.md + PROJECT_A_SESSION_LOG.md。

---

## 异常停机条件

| 条件 | 阶段 |
|------|:--:|
| JSON/UI 不干净 | 0 |
| 计数不一致 | 3 |
| extra_changed_ids != 0 | 6 |
| 保护字段变化 != 0 | 6 |
| generic_explanation_count > 0 | 5,6 |
| 编码污染 | 6 |
| JSON parse 失败 | 6 |
| push 失败 | 7 |

---

## 使用方式

```text
/project-a-specificity-repair-auto

Specificity Repair Batch 1
扫描范围：全库
写入目标：100-150 题
授权自动提交推送: yes
```
