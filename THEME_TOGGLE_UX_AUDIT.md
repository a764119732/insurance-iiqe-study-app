# Light / Dark Theme Toggle UX Audit

## 修改文件清单

- `index.html`
- `app.js`
- `style.css`
- `README.md`
- `THEME_TOGGLE_UX_AUDIT.md`

## 功能说明

- 页面顶部右侧新增主题切换按钮，位于刷新题库按钮左侧。
- 按钮显示当前模式：`Light 模式` 或 `Dark 模式`。
- 用户可手动在 light / dark 之间切换。
- 本轮未实现自动按时间切换。

## localStorage key

- `iiqeStudyApp:theme`
- 保存值只使用 `light` 或 `dark`。

## light/dark 实现方式

- `index.html` 默认设置 `data-theme="light"`。
- `app.js` 启动时读取 `iiqeStudyApp:theme`；无有效保存值时默认 `light`。
- `app.js` 在 `document.documentElement` 上切换 `data-theme="light"` / `data-theme="dark"`，并同步按钮文案、`aria-pressed` 和提示。
- `style.css` 使用 CSS 变量管理背景、卡片、文字、边框、按钮、正确/错误状态、解析区、搜索区、底部导航和 sticky action bar 的颜色。

## 测试结果

- `node --check app.js`：通过。
- `git diff -- data/paper1_questions.json data/paper3_questions.json`：无输出。
- JSON parse：通过。
- P1 题数：1391。
- P3 题数：807。
- 总题数：2198。
- P1/P3 ID 连续检查：通过。
- 本地静态服务器：`http://localhost:8020` 返回 HTTP 200。
- 浏览器测试：
  - 默认 light：通过，按钮显示 `Light 模式`。
  - 点击切换 dark：通过，页面 `data-theme="dark"`，背景、卡片、文字颜色切换。
  - 刷新后仍为 dark：通过。
  - P1-553 题号搜索：通过，搜索结果可读。
  - 进入 P1-553 练习页：通过，题目和选项可读。
  - dark 模式下答错 B：通过，正确 A 与错误 B 状态颜色可读。
  - 大白话解析区：通过，dark 模式可读。
  - 原始 PDF 解析折叠区：存在并可读。
  - 再切回 light：通过，按钮显示 `Light 模式`。
- 浏览器限制记录：第一次打开 `http://localhost:8020` 时曾返回 `ERR_BLOCKED_BY_CLIENT`；重新启动本地静态服务器后浏览器测试可继续完成。

## 未修改 JSON 的确认

- 未修改 `data/paper1_questions.json`。
- 未修改 `data/paper3_questions.json`。
- 未修改任何题库字段：`original_explanation`、`simple_explanation`、`question`、`options`、`correct_answer`、`source_page`、`reference`、`chapter`、`section`。

## node --check 结果

```text
node --check app.js
通过，无输出。
```

## git status -sb

提交前状态：

```text
## main...origin/main
 M README.md
 M app.js
 M index.html
 M style.css
?? FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md
?? THEME_TOGGLE_UX_AUDIT.md
```

## 未执行或限制

- 未继续 Specificity Repair Batch 4。
- 未修改、删除或提交 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`。
- 未提交 `PROJECT_A_MEMORY.md`。
