# Question ID Jump Audit

## 修改文件清单

- `app.js`
- `style.css`
- `README.md`
- `QUESTION_ID_JUMP_AUDIT.md`

未修改：
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `extract_questions.py`
- `iiqe_offline_300.html`
- PDF / `sharedFiles`

## 功能说明

新增题号搜索 / 跳转功能，用于根据全库题号定位题目。入口已放在首页学习地图下方和练习页题目顶部附近。

搜索结果显示：
- 题号 ID，例如 `P1-553`
- 所属卷
- 所属章节
- 所属小节
- 题干摘要
- 本小节顺序
- 本章顺序

练习页题目顶部新增更明显的定位条，显示题号、章节、小节、本节顺序和当前练习范围内顺序。原有“第 X / Y 题”练习内跳转保留，并明确它不是全题库 ID。

## 支持输入格式

- `P1-553`
- `p1-553`
- `P3-123`
- `p3-123`
- `553`

纯数字输入会按当前上下文卷别理解：当前为 P1 时视为 `P1-553`，当前为 P3 时视为 `P3-553`。如果无法判断卷别，会提示输入完整题号。

## 如何定位 P1-553

1. 打开首页或任意普通练习页。
2. 在“题号搜索 / 跳转”输入框输入 `P1-553`。
3. 点击“搜索”。
4. 查看搜索结果中的卷、章节、小节、题干摘要、本小节顺序和本章顺序。
5. 点击“进入该题练习”，页面会打开包含该题的小节练习，并跳到该题。

如果当前已有未完成练习，切换到其他范围前会弹窗确认，不会直接覆盖当前 session。

## 不改 JSON 的确认

已执行：

```powershell
git diff -- data/paper1_questions.json data/paper3_questions.json
```

结果：无输出。

## node --check 结果

已执行：

```powershell
node --check app.js
```

结果：通过，无输出。

## 本地 smoke test

已启动临时静态服务：

```text
http://127.0.0.1:8765/
```

Codex in-app browser 自动化访问 `127.0.0.1:8765` 和 `localhost:8765` 均被客户端拦截，返回 `ERR_BLOCKED_BY_CLIENT`，因此未能完成自动浏览器交互测试。

建议手动 smoke test：
- 搜索 `P1-017`
- 搜索 `P1-553`
- 搜索 `P3-001`
- 输入不存在题号，例如 `P1-9999`
- 在 P1 或 P3 上下文输入纯数字题号，例如 `553`

## git status

任务 A 检查时：

```text
## main...origin/main
 M README.md
 M app.js
 M style.css
?? .claude/settings.local.json
?? FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md
```

说明：`.claude/settings.local.json` 和 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` 仍未跟踪，未处理，未提交。
