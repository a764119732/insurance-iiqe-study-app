# AGENTS.md - Project A Entry Rules

## 默认工作方式

- 默认使用中文回答，除非用户明确要求其他语言。
- 新任务开始前先读取 `PROJECT_A_MEMORY.md`，再按任务类型读取 `docs/rules/*.md`。
- 默认只读；只有用户明确授权的文件、题号、字段和操作才可写入。
- 本仓库内的项目级最高权限见 `docs/rules/PROJECT_A_SAFETY_RULES.md` 和 `docs/rules/GIT_DEPLOYMENT_RULES.md`。
- 写 JSON 必须限定到明确题号和明确字段；未列入范围的题目和字段不得改动。
- `PROJECT_A_MEMORY.md` 是 local-only 记忆文件，不提交、不推送，除非用户明确授权。
- 不上传、不提交 PDF、离线版、`sharedFiles/` 或其他禁止范围文件。

## 规则细则

按任务类型读取对应文件：

- 安全边界：`docs/rules/PROJECT_A_SAFETY_RULES.md`
- 解析写法：`docs/rules/EXPLANATION_STYLE_STANDARD.md`
- Evidence Audit：`docs/rules/EVIDENCE_AUDIT_WORKFLOW.md`
- Git / push：`docs/rules/GIT_DEPLOYMENT_RULES.md`
- 文件范围：`docs/rules/FILE_SCOPE_RULES.md`

## Repo Skills 索引

- 恢复上下文：`project-a-recovery`
- Evidence Audit：`project-a-evidence-audit`
- JSON 写入：`project-a-evidence-rewrite`
- 提交推送：`project-a-commit-push`
- 解析风格：`project-a-explanation-style`
- 安全校验：`project-a-safety-check`

## JSON 写入硬边界

- 题库 JSON 只允许在用户授权的题号内修改授权字段。
- 默认只允许解释类任务修改 `simple_explanation`。
- `id`、`paper`、题干、选项、答案、来源页、引用、章节等 protected fields 不得改动。
- JSON 写入后必须检查 parse、题数、ID 连续、变更题号、变更字段、protected fields、Do Not Auto、编码。

## 当前项目方向

- Batch 17 strict auto candidate 为 0 后，不再自动批量写解析。
- 后续解释工作走 Evidence Audit：先人工证据审计，再小批计划、写入、审计、抽查、独立提交。
- 法律、监管、制度题必须基于 evidence audit，不得自由发挥。
