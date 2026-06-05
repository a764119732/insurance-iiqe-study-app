# Highlight And Last Question UX Audit

## 1. 本轮目标

- 增加题干 highlight 标注功能。
- 增加继续上次题目跳转功能。
- 使用浏览器本地 `localStorage` 保存，不接外部 API，不改题库 JSON。

## 2. 修改文件清单

- `app.js`
- `style.css`
- `README.md`
- `HIGHLIGHT_LAST_QUESTION_UX_AUDIT.md`

## 3. localStorage Keys

- `iiqeStudyApp:questionHighlights:v1`
- `iiqeStudyApp:lastQuestion:v1`

## 4. Highlight 实现方式

- 用户在当前题干 `.question-title` 内选中文字后，点击“高亮选中文字”。
- 代码用 `window.getSelection()` 读取选区，并校验选区属于当前题干容器。
- 每题按题号保存一个字符串数组，例如 `{ "P1-553": ["选中的文字"] }`。
- 题干渲染时调用 `renderQuestionTextWithHighlights()`，按保存的字符串在静态题干文本中匹配并包裹 `<mark class="question-highlight">`。
- 普通题干文本和高亮文本都经过 `escapeHtml()` 后输出，避免把用户选中文字直接作为 HTML 注入。
- “清除本题高亮”只删除当前题号的 highlight 记录。

## 5. 最后做题记录实现方式

- `renderQuiz()` 成功取得当前题后，调用 `rememberCurrentQuestion(q)`。
- 记录内容为 `{ questionId, paper, updatedAt }`。
- “继续上次题目”按钮读取 `iiqeStudyApp:lastQuestion:v1`，用 `byId` 校验题号仍存在。
- 有效记录复用现有 `enterQuestionIdPractice()`，因此不绕过现有未完成练习切换提示。
- 无记录时显示“暂无上次做题记录”；记录失效时清除无效记录并提示。

## 6. 用户隔离说明

- 当前项目没有登录/账号系统。
- highlight 和最后做题记录按浏览器本地 profile 隔离。
- 数据不上传、不共享、不跨设备同步。

## 7. 手动测试清单

- 打开首页正常。
- 搜索 `P1-553` 并进入题目。
- 选中题干一段文字，点击“高亮选中文字”，文字变高亮。
- 刷新页面后，`P1-553` 高亮仍存在。
- 点击“清除本题高亮”后，高亮消失。
- 切到 dark 模式，高亮仍可读。
- 进入一道题后离开，再点击“继续上次题目”，能回到最后记录题目。
- 清空 `iiqeStudyApp:lastQuestion:v1` 后，按钮提示暂无记录。
- 答题、显示解析、原始 PDF 折叠不受影响。
- 题号跳转 `P1-553`、`P3-001`、非法 `P1-9999` 仍正常。

## 8. 已运行检查

- `git status -sb`: main 与 origin/main 对齐；存在既有未跟踪 `.claude/settings.local.json`、`FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`，本轮未修改。
- `git rev-list --left-right --count main...origin/main`: `0 0`。
- `git diff -- data/paper1_questions.json data/paper3_questions.json app.js style.css index.html README extract_questions.py`: 初始检查无输出。
- JSON parse: P1 = 1391, P3 = 807, total = 2198, ID 连续，无重复。
- `node --check app.js`: pass。
- `git diff -- data/paper1_questions.json data/paper3_questions.json`: 无输出。
- `git diff --check`: pass。
- 本地静态服务 HTTP 检查：`http://127.0.0.1:8011/` 返回 `200`。

## 9. 未运行检查

- in-app Browser 交互测试未完成：浏览器访问 `http://127.0.0.1:8010/` 和 `http://localhost:8010/` 均被环境拦截，报 `ERR_BLOCKED_BY_CLIENT`。
- 因上述拦截，未能自动执行刷新后高亮持久化、dark 模式视觉、按钮点击和答题交互 smoke test。

## 10. 已确认未修改 JSON/题库字段

- 未修改 `data/paper1_questions.json`。
- 未修改 `data/paper3_questions.json`。
- 未修改 `original_explanation`、`simple_explanation`、`memory_tip`、`question`、`options`、`correct_answer`、`source_page`、`reference`、`chapter`、`section`、`id`。

## 11. 已知限制

- 高亮按“选中文字字符串”匹配题干静态文本。
- 如果同一句文字在同一题干中重复出现，会高亮全部匹配项。
- 如果题干文本后续被题库维护改写，旧 highlight 字符串可能无法再匹配。
- 不支持跨设备、跨浏览器 profile 或账号同步。

## 12. Mobile Safari Highlight Fix

### 原因判断

- 旧实现只在点击“高亮选中文字”按钮时读取 `window.getSelection()`。
- iOS Safari 在触屏点击按钮时可能先让按钮获得焦点，导致原本的题干选区被清空。
- 因此手机端 Safari 可能读不到题干选中文字，表现为点击按钮后没有高亮。

### 修复方案

- 新增最近一次有效题干选区缓存 `cachedQuestionSelection`。
- 在题干容器 `.question-title[data-question-id]` 上通过 `mouseup`、`touchend`、`keyup` 捕获选区。
- 在 `document` 上通过 `selectionchange`、`keyup` 补充捕获选区。
- 缓存只接受属于当前题干容器的 selection，不接受选项、解析或其他区域文字。
- 点击高亮按钮时优先使用当前 selection；如果 Safari 已清空 selection，则回退使用缓存。
- 高亮按钮增加 `pointerdown` / `touchstart` 处理并 `preventDefault()`，尽量避免按钮抢焦点清空选区。
- 切换题目、跳题、答题、开始/继续练习时清空缓存，避免上一题选区被用于当前题。

### 样式补充

- `.question-title` 增加 `-webkit-user-select: text` 和 `user-select: text`。
- `.highlight-actions` 增加 `touch-action: manipulation`。

### 本轮测试要求

- Desktop Chrome: `P1-553` 选中题干文字后高亮正常。
- Desktop Chrome: 清除本题高亮正常。
- iOS Safari 需要用户手动验证：长按选择题干文字，点击高亮按钮，高亮应出现并在刷新后保留。
- Dark 模式下高亮仍需可读。
- 答题、解析、题号跳转、继续上次题目不应受影响。

### 本轮已运行检查

- `node --check app.js`: pass。
- `git diff -- data/paper1_questions.json data/paper3_questions.json`: 无输出。
- JSON parse: P1 = 1391, P3 = 807, total = 2198, ID 连续。
- `git diff --check`: pass。
- 编码哨兵检查: 未命中问号占位、替换符或 mojibake 标记。
- diff 范围：只涉及 `app.js`、`style.css`、`HIGHLIGHT_LAST_QUESTION_UX_AUDIT.md`。
- Specificity Repair / Batch 文件：未修改。

### 本轮未运行检查

- iOS Safari 无法在当前自动化环境中运行，需要用户手动在 iPhone Safari 验证。
- 本地浏览器自动交互测试未完成；此前 in-app Browser 访问 localhost 被 `ERR_BLOCKED_BY_CLIENT` 拦截，本轮本地短时 server 方式也未形成稳定可访问的自动化浏览器测试环境。
