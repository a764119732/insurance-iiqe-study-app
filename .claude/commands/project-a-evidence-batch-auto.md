---
description: 一键执行完整 Evidence Audit batch 闭环流程，从候选池到审计、写入、提交推送、session-close。
---

# project-a-evidence-batch-auto — 一键闭环 Evidence Audit Batch

## 用途

用户一条命令完成一个完整 Evidence Audit batch，减少每阶段重复输入指令。

调用时指定：
- **batch number**：N（如 5）
- **manual check 目标数量**：如 200
- **rewrite 写入目标数量**：如 150–180
- **是否授权自动提交推送**：yes / no

## 10 阶段完整流程

### 阶段 0：恢复与前置检查

1. 读取 `CLAUDE.md`、`AGENTS.md`、`PROJECT_A_MEMORY.md`、`PROJECT_A_NEXT_ACTION.md`、`PROJECT_A_SESSION_LOG.md`。
2. 读取所有 project-a skills（`.agents/skills/project-a-*/SKILL.md`）。
3. 执行只读检查：
   - `git status -sb`
   - `git log --oneline -5`
   - `git rev-list --left-right --count main...origin/main`
4. 检查前置条件：
   - main ↔ origin/main 必须对齐
   - `git diff -- data/paper1_questions.json data/paper3_questions.json app.js style.css index.html` 必须无输出
   - 禁止文件未被跟踪
5. **如果以上任何一项不通过，立即停止并报告。**

### 阶段 1：候选池

1. 从当前 JSON 中扫描剩余非五段式题目。
2. 排除五段式已覆盖、Do Not Auto、已处理批次。
3. 分类 A/B/C/D 风险层。
4. 创建 `EVIDENCE_AUDIT_BATCH{N}_CANDIDATE_POOL.md`。
5. 候选池目标约 800 题（A+B），A 类需满足 manual check 需求。
6. C/D 不进入候选池。
7. **本阶段只读，不写 JSON。**

### 阶段 2：Manual Check

1. 从 A 类全量 + B 类低风险补充，取用户指定的 manual check 目标数量。
2. 逐题审计：题干、选项、correct_answer、OE 支撑度、reference/chapter/section、风险点。
3. 结论：`allow_rewrite` / `manual_confirm` / `do_not_auto` / `defer`。
4. 创建 `EVIDENCE_AUDIT_BATCH{N}_MANUAL_CHECK.md`。
5. 汇报各类计数和 ID 清单。
6. **本阶段只读，不写 JSON。**

### 阶段 3：Rewrite Plan

1. 只纳入 manual check 中结论为 `allow_rewrite` 的题。
2. 按用户指定的 rewrite 目标数量选择（不够则全取，不从 MC 补）。
3. 每题输出：question_id、paper、correct_answer、rewrite_basis、rewrite_constraints、target_style、risk_note。
4. 按章节和风险分批（Part A 低风险优先，Part B 中等风险）。
5. 创建 `EVIDENCE_AUDIT_BATCH{N}_REWRITE_PLAN.md`。
6. **本阶段只读，不写 JSON。**

### 阶段 4：写入前 ID 计数一致性硬校验 🔴

**这是 Batch 3/4 实际出现过的问题，Batch 5+ 必须强制通过。**

1. 从 `EVIDENCE_AUDIT_BATCH{N}_REWRITE_PLAN.md` 提取所有显式 allow_rewrite ID。
2. 逐项核对：

| # | 核对项 | 方法 |
|---|--------|------|
| 1 | allow_rewrite explicit IDs count | 逐个数，不靠表头 |
| 2 | P1 count in explicit IDs | 分别统计 P1 和 P3 |
| 3 | P3 count in explicit IDs | — |
| 4 | MC exclusion count | 显式列出 |
| 5 | DNA exclusion count | 显式列出 |
| 6 | defer exclusion count | 显式列出 |
| 7 | 总数一致性 | 审计总数 = allow_rewrite + MC + DNA + defer |
| 8 | Do Not Auto 总登记重叠 | 逐个检查 |
| 9 | P1-018/P1-091/P3-131 | 确认不在列表 |
| 10 | 已处理批次重叠 | 逐个检查 |

3. **如果 plan 表头数字与显式 ID 清单不一致**：
   - 必须先修正 plan 文档中的表头数字
   - 增加"计数修正说明"
   - 重新校验直到一致
4. **所有计数一致、排除清晰后，才能进入阶段 5。**

### 阶段 5：JSON 写入

**必须在阶段 4 全部通过后才能执行。**

1. 提取最终 allow_rewrite ID 清单。
2. 创建保护字段快照（original_explanation、question、options、correct_answer、source_page、source_file、reference、chapter、section）。
3. 对每题改写 `simple_explanation` 为五段式：
   - `1. 这题考什么`
   - `2. 为什么正确答案对`
   - `3. 其他选项为什么不适合`
   - `4. 易错点提醒`
   - `5. 记忆法`
4. 语言浅显、直接、适合保险小白。不空泛写"与题干不符"。不扩展无依据的法律/金额/期限。
5. 如果某题依据不足 → 跳过并记录 skipped，不硬写。
6. 写入后立即验证保护字段快照。

### 阶段 6：写入后审计

1. 创建 `EVIDENCE_AUDIT_BATCH{N}_REWRITE_AUDIT.md`。
2. 创建 `EVIDENCE_AUDIT_BATCH{N}_REWRITE_SPOTCHECK.md`。
3. Spotcheck ≥ 30%，覆盖 P1/P3、A/B 来源、不同章节、不同风险类型。
4. 汇报：keep / review 数量。

### 阶段 7：完整 Safety Check

全部 15 项必须通过，任一项失败即停止：

| # | 检查项 | 标准 |
|---|--------|------|
| 1 | JSON parse | 通过 |
| 2 | P1=1391, P3=807, Total=2198 | 精确 |
| 3 | P1/P3 ID 连续 | 无缺失 |
| 4 | actual changed IDs = final plan IDs | extra=0 |
| 5 | missing_planned_ids | 0（除非 skipped 已记录且 plan 已修正） |
| 6 | 只改 simple_explanation | 0 非 SE 变更行 |
| 7 | 保护字段变化 | 0 |
| 8 | MC 变化 | 0 |
| 9 | DNA 变化 | 0 |
| 10 | Do Not Auto 总登记重叠 | 0 |
| 11 | 编码：???? / U+FFFD / U+951F | 0 |
| 12 | 五段式完整性 | 写入数/写入数 |
| 13 | git diff --check | 通过 |
| 14 | UI/README/script diff | 0 |
| 15 | git status 异常文件 | 无 |

### 阶段 8：自动提交与推送

**仅在用户已明确授权自动提交推送（授权 = yes）且阶段 7 全部通过时才执行。**

#### Commit A：只读审计与 rewrite plan

暂存并提交：
- `EVIDENCE_AUDIT_BATCH{N}_CANDIDATE_POOL.md`
- `EVIDENCE_AUDIT_BATCH{N}_MANUAL_CHECK.md`
- `EVIDENCE_AUDIT_BATCH{N}_REWRITE_PLAN.md`

`commit message: Add evidence audit batch {N} plan`

暂存后检查 `git diff --cached --name-only` 必须严格等于以上 3 个文件。

#### Commit B：JSON 写入成果

暂存并提交：
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `EVIDENCE_AUDIT_BATCH{N}_REWRITE_PLAN.md`（如有计数修正）
- `EVIDENCE_AUDIT_BATCH{N}_REWRITE_AUDIT.md`
- `EVIDENCE_AUDIT_BATCH{N}_REWRITE_SPOTCHECK.md`

`commit message: Add evidence-audited explanations batch {N}`

暂存后检查 `git diff --cached --name-only` 必须严格等于以上 5 个文件。

**每次 commit 后 push 到 origin/main，然后验证 main ↔ origin/main 对齐。**

#### 严格排除

以下文件**永远不得进入任何 commit**：
- `PROJECT_A_MEMORY.md`
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`
- UI 文件（app.js / style.css / index.html）
- README / extract_questions.py
- PDF / 离线版 / sharedFiles
- 临时文件

### 阶段 9：Session-Close

1. 更新 `PROJECT_A_MEMORY.md`（新增 section，记录 batch 成果）。
2. 更新 `PROJECT_A_SESSION_LOG.md`（追加日志条目）。
3. 更新 `PROJECT_A_NEXT_ACTION.md`（更新为 Batch N+1 建议）。

#### Commit C：收尾记录

暂存并提交：
- `PROJECT_A_NEXT_ACTION.md`
- `PROJECT_A_SESSION_LOG.md`

`commit message: Update project handoff after batch {N}`

**不提交 PROJECT_A_MEMORY.md。**

### 阶段 10：最终状态

- `git status -sb` 必须只剩 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` 未跟踪
- main ↔ origin/main 必须对齐
- 输出最终汇报：batch number、commit hashes、写入题数、P1/P3 数量、安全检查、下一步

---

## 异常停机条件

以下任何情况发生，**立即停止，不得继续后续阶段**：

| 条件 | 阶段 |
|------|:---:|
| JSON/UI 不干净 | 0 |
| main ↔ origin/main 不对齐 | 0 |
| plan 表头与显式 ID 不一致且无法自动修正 | 4 |
| extra_changed_ids != 0 | 7 |
| MC/DNA 被修改 | 7 |
| 保护字段变化 != 0 | 7 |
| 编码污染 | 7 |
| JSON parse 失败 / 题数异常 / ID 不连续 | 7 |
| git diff --check 失败 | 7 |
| 出现无法确认的临时文件残留 | 7 |
| push 失败 | 8 |
| 用户未明确授权自动提交推送 | 8 |

---

## 使用方式

```
/project-a-evidence-batch-auto
```

调用时提供参数：

```text
Batch 5
manual check: 200 题
rewrite: 150-180 题
授权自动提交推送: yes
```

或只读模式（不写 JSON、不 commit）：

```text
Batch 5
manual check: 200 题
rewrite: 暂不写入
授权自动提交推送: no
```

---

## 硬性限制

- 阶段 0–3 默认只读，可自动执行。
- 阶段 4 必须在阶段 3 后执行，不可跳过。
- 阶段 5–8 只有用户明确授权（授权 = yes）时才可自动执行。
- 阶段 9 在所有写入和提交完成后执行。
- 任何异常停机条件触发即停止，先报告再等用户指示。
- 每批 rewrite 写入建议不超过 200 题。
