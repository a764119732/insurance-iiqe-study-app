---
description: 每轮任务结束时写交接：更新会话日志、下一步建议、记忆文件，输出状态审计。
---

# project-a-session-close — 会话关闭交接

## 用途

在每轮任务结束时执行，确保下一轮能无缝恢复上下文。写交接，不改 JSON，不改 UI，不 commit，不 push。

## 执行流程

### 第一步：读取当前上下文

只读读取：

1. `CLAUDE.md`
2. `AGENTS.md`
3. `PROJECT_A_MEMORY.md`
4. `PROJECT_A_SESSION_LOG.md`
5. `PROJECT_A_NEXT_ACTION.md`

### 第二步：检查当前 Git 状态

```bash
git status -sb
```

```bash
git log --oneline -3
```

```bash
git diff -- data/paper1_questions.json data/paper3_questions.json app.js style.css
```

### 第三步：确认本轮做了什么

向用户确认（或根据对话上下文总结）：

- 本轮目标是什么？
- 本轮创建了哪些文件？
- 本轮修改了哪些文件？
- JSON 是否有变更？变更了哪些题号、哪些字段？
- UI 是否有变更？
- 是否 commit、是否 push？

### 第四步：更新 PROJECT_A_SESSION_LOG.md

在文件末尾追加新条目：

```markdown
### [YYYY-MM-DD] <本轮任务简述>

- 创建文件：<列表，没有则写"无">
- 修改文件：<列表，包括 JSON 变更题号和字段，没有则写"无">
- 明确未修改：`data/paper1_questions.json` / `data/paper3_questions.json` / `app.js` / `style.css` / `index.html` / PDF / 离线版 / `sharedFiles`
- Commit：<hash 或 "未 commit">
- Push：<"已 push" 或 "未 push">
- 下一步建议：<从 PROJECT_A_NEXT_ACTION.md 复制当前建议，或根据本轮结果更新>
```

### 第五步：更新 PROJECT_A_NEXT_ACTION.md

如果本轮改变了下一步优先级（例如完成了 manual check，下一步应变为 rewrite plan），则更新 `PROJECT_A_NEXT_ACTION.md`。

如果下一步不变，则不更新。

### 第六步：可更新 PROJECT_A_MEMORY.md

如果本轮有实质性变更（批次写入、commit、push、新的排除题等），使用 `/project-a-memory-update` 的标准追加一个新 section。

注意：`PROJECT_A_MEMORY.md` 默认不提交。

### 第七步：输出最终状态

用中文输出：

```
=== 会话关闭交接 ===

HEAD: <hash> <message>
main ↔ origin/main: <对齐/不对齐>
JSON 状态: <干净/有变更>
UI 状态: <干净/有变更>
未跟踪文件: <列表>

本轮完成:
- <列出本轮完成的关键事项>

下一步建议:
- <来自 PROJECT_A_NEXT_ACTION.md 的建议>

新对话恢复命令:
/project-a-recover
```

### 第八步：最终检查

确认以下文件存在且为最新：

| 文件 | 检查 |
|------|------|
| `PROJECT_A_SESSION_LOG.md` | 已追加本轮条目 |
| `PROJECT_A_NEXT_ACTION.md` | 内容反映当前状态 |
| `PROJECT_A_MEMORY.md` | 如有实质变更已更新 |

## 硬性限制

- **默认不暂存、不 commit、不 push。** 除非用户明确说"提交并推送"或"commit and push"并走 `/project-a-commit-allowed`。
- 不修改 JSON。
- 不修改 UI。
- 不修改 PDF、离线版、`sharedFiles`。
- `PROJECT_A_MEMORY.md`、`PROJECT_A_SESSION_LOG.md`、`PROJECT_A_NEXT_ACTION.md` 默认不提交。
- 不要删除历史日志条目。

## 使用方式

```
/project-a-session-close
```
