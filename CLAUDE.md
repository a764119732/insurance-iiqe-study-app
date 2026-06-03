# CLAUDE.md — 项目A（IIQE 保险刷题学习应用）

## 工作语言

默认使用中文回复，除非用户明确要求其他语言。

## 默认行为

- **默认只读**，除非用户明确授权写入。
- 新对话开始时，先读取本文件、`AGENTS.md`、`PROJECT_A_MEMORY.md` 恢复上下文。
- 所有修改必须先有 Markdown 计划、再有用户明确授权、再执行写入、再生成审计报告。

## 项目路径

```
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app
```

## 当前项目核心状态

- 在线版题库：P1 = 1391 题，P3 = 807 题，总计 2198 题。
- P1/P3 ID 连续，JSON parse 通过。
- Full Explanation Batch 1–16 已提交推送（约 1088 题五段式解析）。
- Evidence Audit Batch 1–2 已提交推送（约 54 题五段式解析）。
- Risky 批次第一至第三批人工审计已完成（前三批部分已写入）。
- 污染清理阶段已封存，全库污染关键词复扫为 0。
- 离线版不再维护。
- GitHub Pages 部署于 `https://a764119732.github.io/insurance-iiqe-study-app/`。

## 题库保护字段（默认禁止修改）

以下字段在解释重写任务中**默认不得修改**：

- `original_explanation` — 原始 PDF 解析
- 题干（`question_traditional` / `question_simplified`）
- 选项（`options_traditional` / `options_simplified`）
- `correct_answer` — 正确答案
- `source_page` — PDF 来源页码
- `reference` — 引用/教材出处
- `chapter` / `section` — 章节编号
- `source_file` — 来源文件名

## 解释重写规则

- **只允许修改**用户明确授权的题号的 `simple_explanation`。
- 使用五段式卡片格式：`1. 这题考什么` / `2. 为什么正确答案对` / `3. 其他选项为什么不适合` / `4. 记忆口诀` / `5. 遇到类似题怎么快速判断`。
- 法律、监管、制度题必须先经过 Evidence Audit 人工证据审计，不得自由发挥。
- 不修改题干、选项、`correct_answer`、`original_explanation`、来源字段。

## JSON 写入流程

```
Markdown 计划 → 用户授权 → 保护字段快照 → 写入 → 审计 → 抽查 → 用户授权 commit/push
```

不得跳过任何步骤。每批写入建议 20–50 题，不得超大批评写入。

## 写入后必做检查

1. JSON parse 通过
2. P1 = 1391、P3 = 807、总计 2198
3. P1/P3 ID 连续
4. `git diff` 范围检查：变更题号与计划一致、变更字段限于 `simple_explanation`
5. 保护字段零变化
6. 编码污染检查：`????`、`�`（U+FFFD）、`锟`（U+951F）及其他 mojibake 标记
7. `git status --short` 检查

## 禁止清单

| 禁止项 | 说明 |
|--------|------|
| 提交 `PROJECT_A_MEMORY.md` | 本地记忆文件，不推送公开仓库 |
| 提交 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` | 除非用户明确要求 |
| 修改 PDF 文件 | 不操作任何 PDF |
| 修改 `iiqe_offline_300.html` | 离线版不再维护 |
| 修改 `sharedFiles/` | 不操作共享文件目录 |
| 修改 `extract_questions.py` | 题库提取脚本不动 |
| UI 和 JSON 混在一个 commit | 必须分开提交 |
| 递归删除命令 | 禁止 `rm -rf` / `Remove-Item -Recurse -Force` 等 |
| 暂存/commit/push 未授权文件 | 只允许用户明确授权的文件进入 Git |

## 可用项目 Skills

位于 `.agents/skills/`：

| Skill | 用途 |
|-------|------|
| `project-a-recovery` | 只读恢复项目上下文 |
| `project-a-evidence-audit` | 只读人工证据审计 |
| `project-a-evidence-rewrite` | 授权写入 `simple_explanation` |
| `project-a-commit-push` | 安全提交推送 |
| `project-a-explanation-style` | 解析风格标准 |
| `project-a-safety-check` | 安全校验 |

## 可用 Claude Code 命令

位于 `.claude/commands/`：

| 命令 | 用途 |
|------|------|
| `project-a-recover` | 一条命令恢复项目上下文 |
| `project-a-batch3-candidate` | 启动 Evidence Audit Batch 3 候选池 |
| `project-a-safety-check` | 提交前/写入后安全检查 |
| `project-a-commit-allowed` | 只提交明确允许的文件 |
| `project-a-memory-update` | 任务结束后更新记忆文件 |
| `project-a-session-close` | 会话关闭交接：写日志、更新下一步、输出状态 |

## 恢复指令

新对话开始时可复制以下指令：

```text
继续项目A。
请先只读读取：
- CLAUDE.md
- AGENTS.md
- PROJECT_A_MEMORY.md
- PROJECT_A_SESSION_LOG.md
- PROJECT_A_NEXT_ACTION.md
执行 git status -sb 和 git log --oneline -5。
只读恢复上下文，不要修改任何文件。
```
