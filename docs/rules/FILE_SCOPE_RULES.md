# File Scope Rules

## 可提交范围

按用户授权和任务类型提交。

规则拆分阶段可提交：

- `AGENTS.md`
- `docs/rules/PROJECT_A_SAFETY_RULES.md`
- `docs/rules/EXPLANATION_STYLE_STANDARD.md`
- `docs/rules/EVIDENCE_AUDIT_WORKFLOW.md`
- `docs/rules/GIT_DEPLOYMENT_RULES.md`
- `docs/rules/FILE_SCOPE_RULES.md`

Evidence batch 可提交：

- `data/paper1_questions.json`
- `data/paper3_questions.json`
- 本 batch 的 manual check
- 本 batch 的 rewrite plan
- 本 batch 的 rewrite audit
- 本 batch 的 rewrite spotcheck

## 禁止提交范围

默认不得提交：

- `PROJECT_A_MEMORY.md`
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`
- PDF
- `iiqe_offline_300.html`
- `sharedFiles/`
- `tmp/`
- `__pycache__/`
- `_vendor/`
- 敏感凭证
- 任何未获授权的用户文件

## Local-only

- `PROJECT_A_MEMORY.md` 只作本地记忆，不提交、不推送。
- 如需更新 memory，更新后仍必须确认未 staged。

## 暂不处理

- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` 暂不处理。
- 不修改 UI 文件，除非用户明确授权。
- 不修改 README、脚本、PDF、离线版或共享材料，除非用户明确授权。
