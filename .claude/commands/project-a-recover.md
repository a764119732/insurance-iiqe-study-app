---
description: 只读恢复项目A上下文，检查本地状态，输出安全下一步建议。
---

# project-a-recover — 项目A上下文恢复

## 用途

在新 Codex 对话开始时，一条命令恢复项目A的完整上下文，无需手动拼接多文件。

## 执行流程

### 第一步：读取核心文件

只读读取以下文件（按优先级）：

1. `CLAUDE.md`
2. `AGENTS.md`
3. `PROJECT_A_MEMORY.md`
4. `PROJECT_A_SESSION_LOG.md`（最近一次日志条目）
5. `PROJECT_A_NEXT_ACTION.md`
6. `EVIDENCE_AUDIT_BATCH3_CANDIDATE_POOL.md`（如存在）
7. `EVIDENCE_AUDIT_BATCH2_REWRITE_AUDIT.md`（如存在）
8. `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`（如存在）

### 第二步：检查 Git 状态

执行以下只读命令：

```bash
git status -sb
```

```bash
git log --oneline -5
```

```bash
git rev-list --left-right --count main...origin/main
```

### 第三步：检查关键文件是否有未提交变更

```bash
git diff -- data/paper1_questions.json data/paper3_questions.json app.js style.css
```

```bash
git ls-files PROJECT_A_MEMORY.md
```

```bash
git ls-files -- '*.pdf' iiqe_offline_300.html
```

### 第四步：确认禁止文件未被跟踪

检查以下路径不被 Git 跟踪：
- PDF 文件
- `iiqe_offline_300.html`
- `sharedFiles/`
- `tmp/`
- `__pycache__/`
- `_vendor/`

### 第五步：输出恢复报告

用中文输出以下内容：

| 项目 | 内容 |
|------|------|
| 当前 HEAD commit | hash + message |
| main ↔ origin/main | 是否对齐、ahead/behind 数 |
| 工作区状态 | 已暂存、已修改、未跟踪文件列表 |
| JSON 文件 | 是否有未提交 diff（P1/P3 题数） |
| UI 文件 | 是否有未提交 diff |
| 禁止文件 | 是否被 Git 跟踪 |
| 题库数量 | P1 / P3 / 总数 |
| 最近会话日志 | PROJECT_A_SESSION_LOG.md 最近条目的日期和简述 |
| 下一步建议 | PROJECT_A_NEXT_ACTION.md 中的当前建议 |
| 是否适合继续当前任务 | 根据 JSON/UI 干净度、分支对齐度和下一步建议判断 |

### 第六步：输出判断

```
✅ 工作区干净，分支已对齐，可以继续 PROJECT_A_NEXT_ACTION.md 中的建议任务。

或

⚠️ 发现异常：<具体异常>。请先处理异常再继续。
```

## 硬性限制

- **只读**，不修改任何文件。
- 不暂存、不 commit、不 push。
- 不要自动进入下一个任务或批次。
- 如果发现异常（JSON 有 diff、禁止文件被跟踪、分支不同步），先报告再等待用户指示。
- 如果 `PROJECT_A_NEXT_ACTION.md` 不存在，输出"没有明确的下一步建议，请用户指定任务"。

## 使用方式

在新对话中直接输入：

```
/project-a-recover
```
