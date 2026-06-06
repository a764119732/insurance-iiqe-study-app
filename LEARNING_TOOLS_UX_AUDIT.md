# Learning Tools UX Audit

## 目标

新增两个纯前端学习工具功能，全部基于浏览器 localStorage，零后端依赖，零题库 JSON 修改：

1. 首页每日做题数量统计
2. 解析框本地可编辑

## 修改文件

| 文件 | 改动 | 说明 |
|------|------|------|
| `app.js` | +218 行 | 新增 daily stats + custom explanation 函数群，改造 renderResult |
| `style.css` | +98 行 | 新增每日统计卡片、解析编辑区样式 |

## 未修改文件

| 文件 | 状态 |
|------|------|
| `data/paper1_questions.json` | ✅ 零 diff |
| `data/paper3_questions.json` | ✅ 零 diff |
| `data/syllabus.js` | ✅ 零 diff |
| `index.html` | ✅ 零 diff |
| `README.md` | ✅ 零 diff |
| `extract_questions.py` | ✅ 零 diff |
| PDF / 离线版 / sharedFiles | ✅ 零 diff |
| Batch / Specificity Repair 历史文件 | ✅ 零 diff |

## 新增 localStorage Keys

### 1. `iiqeStudyApp:dailyStats:v1`

**用途**：每日做题统计数据。

**数据结构**：
```json
{
  "2026-06-06": {
    "total": 12,
    "P1": 8,
    "P3": 4,
    "answeredIds": ["P1-553", "P3-001", "P3-042", ...]
  }
}
```

**统计口径**：
- 以"用户提交答案"（`chooseAnswer()`）为计数时点
- 同一道题同一天只计 1 次（通过 `answeredIds` 数组去重）
- P1/P3 分开计数
- 使用浏览器本地时区日期 `YYYY-MM-DD`
- 统计失败不影响答题流程（try/catch 兜底）

**操作函数**：
- `getLocalDateKey()` — 获取本地日期字符串
- `getDailyStatsStore()` — 读取统计 store
- `saveDailyStatsStore(store)` — 保存统计 store
- `recordDailyAnswer(questionId, paper)` — 记录当日答题
- `getLastNDaysStats(n)` — 获取最近 N 天数据
- `renderDailyStats()` — 渲染首页统计卡片
- `clearDailyStats()` — 清除所有统计（仅删除本 key）

### 2. `iiqeStudyApp:customExplanations:v1`

**用途**：用户本地自定义解析覆盖。

**数据结构**：
```json
{
  "P1-553": {
    "text": "用户编辑后的自定义解析内容",
    "updatedAt": 1710000000000
  }
}
```

**显示优先级**：
1. 有本地自定义解析 → 显示本地自定义，显示"本地自定义解析"徽章
2. 没有本地自定义解析 → 显示 JSON `q.simple_explanation`

**操作函数**：
- `getCustomExplanationStore()` — 读取自定义解析 store
- `saveCustomExplanationStore(store)` — 保存自定义解析 store
- `getCustomExplanation(questionId)` — 获取某题自定义解析
- `saveCustomExplanation(questionId, text)` — 保存某题自定义解析
- `clearCustomExplanation(questionId)` — 删除某题自定义解析
- `getDisplayExplanation(q)` — 获取应显示的解析（优先本地）
- `enterExplanationEditMode(questionId)` — 进入编辑模式
- `saveExplanationEdit(questionId)` — 保存编辑并刷新
- `cancelExplanationEdit(questionId)` — 取消编辑
- `restoreDefaultExplanation(questionId)` — 恢复默认解析（删除本地条目 + confirm）

## 题库 JSON 影响

**= 0。** 以下字段在整个实现中零写操作：

- `simple_explanation` — 只读引用，不修改
- `original_explanation` — 只读引用，不修改
- `memory_tip` — 只读引用（作为 fallback），不修改
- `correct_answer` — 不读写
- `question` / `options` — 不读写
- `source_page` / `source_file` / `reference` / `chapter` / `section` — 不读写
- `id` — 只读引用

## 手动测试清单

### 每日统计
- [ ] 首页出现"每日做题统计"模块
- [ ] 初始统计 total/P1/P3 均为 0
- [ ] 做 P1 一题并提交答案后，今日 total +1，P1 +1
- [ ] 同一天重复提交同一题，不重复 +1
- [ ] 做 P3 一题后，P3 +1
- [ ] 刷新页面后统计保留
- [ ] "最近 7 天"可展开，显示日期/总数/P1/P3
- [ ] 今天所在行有高亮
- [ ] 点击"清除统计"弹出 confirm
- [ ] 确认清除后统计数据归零
- [ ] 取消清除后数据不变
- [ ] 清除统计不影响答题记录、错题、收藏、主题、高亮

### 解析本地编辑
- [ ] 答题后解析区出现"编辑我的解析"按钮
- [ ] 无本地自定义解析时，显示 JSON 默认解析
- [ ] 无本地自定义解析时，不显示"本地自定义解析"徽章
- [ ] 无本地自定义解析时，不显示"恢复默认解析"按钮
- [ ] 点击"编辑我的解析"后，textarea 出现，显示当前解析文本
- [ ] 编辑模式下显示"保存"和"取消"按钮
- [ ] 修改 textarea 内容后点"保存"，解析立即更新
- [ ] 保存后出现"本地自定义解析"徽章
- [ ] 保存后出现"恢复默认解析"按钮
- [ ] 刷新/切题再回来，自定义解析仍显示
- [ ] 点击"恢复默认解析"弹出 confirm
- [ ] 确认恢复后，显示 JSON 默认解析，徽章消失
- [ ] 编辑模式下点"取消"，恢复编辑前内容
- [ ] 清空 textarea 后保存，恢复为 JSON 默认解析
- [ ] JSON `simple_explanation` 没有任何变化
- [ ] 高亮功能（题干/选项/解析）在编辑前后均正常
- [ ] 原始 PDF 解析折叠区正常
- [ ] 题号跳转、上一题/下一题正常
- [ ] light/dark 模式下均可读

## 已运行检查

| 检查 | 结果 |
|------|------|
| `node --check app.js` | ✅ 通过 |
| `git diff --check` | ✅ 通过（仅 LF/CRLF 提示） |
| `git diff -- data/paper1_questions.json` | ✅ 零 diff |
| `git diff -- data/paper3_questions.json` | ✅ 零 diff |
| `git diff -- data/syllabus.js` | ✅ 零 diff |
| `git diff -- index.html` | ✅ 零 diff |
| `git diff -- README.md` | ✅ 零 diff |
| `git diff -- extract_questions.py` | ✅ 零 diff |
| `git diff --stat` | ✅ 仅 app.js (+218) 和 style.css (+98) |
| 禁止文件跟踪 | ✅ 无 PDF/离线版/sharedFiles/tmp |

## 未运行检查

- 浏览器可视化测试（Codex 环境限制：`127.0.0.1` 被 `ERR_BLOCKED_BY_CLIENT` 拦截）
- 建议用户在普通浏览器中手动测试上述清单

## 风险点

| 风险 | 等级 | 缓解 |
|------|------|------|
| localStorage 满 | 低 | 两个新 key 体积在 KB 级；try/catch 兜底 |
| 日期跨天 | 低 | 使用 `new Date()` 本地时区 |
| 同一天同一题去重依赖 `answeredIds` 数组 | 低 | 数组只增不删，当天不会重复 |
| textarea 和 `<pre>` 同时存在但 display 切换 | 低 | 不同 id，互不干扰 |
| `renderQuiz()` 在保存自定义解析后重渲染 | 低 | 标准 pattern，answer 已持久化 |
| 清除统计调用 `render()` 非局部刷新 | 低 | 首页结构简单，全页 render 开销可接受 |

## 回滚方式

```bash
git checkout -- app.js style.css
rm LEARNING_TOOLS_UX_AUDIT.md
```
