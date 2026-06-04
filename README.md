# IIQE 刷题学习网页

本项目是纯前端的香港保险中介人资格考试 IIQE 卷一、卷三刷题网页。它可以本地运行，也可以部署到 GitHub Pages。它用于个人备考学习，不是官方题库，也不保证通过考试。

## 当前完成范围

- 已创建纯前端网页：`index.html`、`style.css`、`app.js`
- 已加入学习地图目录数据：`data/syllabus.js`
- 当前在线版题库：
  - 卷一当前 1391 题：`data/paper1_questions.json`
  - 卷三当前 807 题：`data/paper3_questions.json`
- 首页已改为章节学习地图，依赖 `index.html` 先加载 `data/syllabus.js`，再加载 `app.js`
- 静态资源均使用相对路径，可适配 `http://127.0.0.1:8000/` 和 `https://用户名.github.io/仓库名/`
- 已支持：
  - 首页学习地图、更多题库、刷题、错题本、我的
  - 章节、小节、热门、未做、错题、收藏、关键词筛选
  - 单题刷题、即时判题、正确答案、大白话解析、记忆口诀
  - 收藏、自动错题记录、错题次数、标记已掌握
  - 基础模拟考试、考试历史、薄弱章节
  - 普通练习和模拟考试 session 本地持久化
  - 按题号搜索 / 跳转，例如 `P1-553`、`P3-123`，并显示章节、小节和题内顺序
  - 学习记录导出 / 导入
  - 简体 / 繁体切换
  - 大白话解析优先展示，原始 PDF 解析默认折叠

## 项目文件

- `index.html`：页面入口，负责加载 `data/syllabus.js` 和 `app.js`
- `style.css`：移动端优先的页面样式
- `app.js`：刷题、学习地图、错题、收藏、模拟考试、统计和本地记录逻辑
- `data/syllabus.js`：卷一/卷三章节与小节目录，首页学习地图依赖此文件
- `data/paper1_questions.json`：卷一当前 1391 题
- `data/paper3_questions.json`：卷三当前 807 题
- `extract_questions.py`：从 PDF 抽取题库并生成 JSON
- `question_schema.md`：题库 JSON 字段说明
- `QUESTION_IMPORT_AUDIT.md`：题库结构审计
- `SECTION_IMPORT_AUDIT.md`：章节/小节分类审计
- `HOT_QUESTION_EXPLANATION_AUDIT.md`：热门题解析强化审计
- `MANUAL_REVIEW_CHECKLIST.md`：人工核对优先级清单



## 2026-05-28 新 PDF 在线版整合状态

- 在线版已整合新收到 PDF 去重后的明确新增题。
- 当前在线版题数：卷一 1391 题，卷三 807 题，总计 2198 题。
- 离线版 `iiqe_offline_300.html` 不再维护。
- 新增题的 `simple_explanation` 仍需人工抽查和优化，当前均带有“新增题待人工复核”提示。

## 在线版和用户数据

- 所有用户数据只保存在当前浏览器的 `localStorage`。
- 使用的命名空间为 `iiqeStudyApp:v1`。
- 错题、收藏、练习进度、统计、模拟考试历史、导入导出记录都属于本地浏览器数据。
- 本项目没有后端，不会上传学习记录，也不支持跨设备自动同步。
- 多个用户访问同一个 GitHub Pages 地址时，彼此只能读取同一份静态题库；学习数据由各自浏览器隔离。

## 如何本地打开

建议用本地服务器打开，避免浏览器拦截本地 JSON 读取。

```powershell
cd path\to\insurance-iiqe-study-app
python -m http.server 8000
```

然后浏览器打开：

```text
http://localhost:8000
```

或：

```text
http://127.0.0.1:8000/
```

如果端口被占用，可以换成：

```powershell
python -m http.server 8010
```

## 题库维护说明

当前在线版题库已经整合到：

- `data/paper1_questions.json`
- `data/paper3_questions.json`

题库 JSON 不应在部署准备或 UI 调整中被修改。后续若单独进行题库维护，必须先做结构审计和人工抽查，重点看：

- 题干是否被 PDF 换行切断
- A/B/C/D 是否粘连了答案、解释或参考编号
- `correct_answer` 是否与 PDF 一致
- `reference`、`chapter`、`section`、`section_title` 是否合理
- `is_hot_question` 是否正确
- 大白话解析是否真正解释了正确项和错误项

## PDF 抽取校对说明

PDF 文本抽取总体可用，但不是零风险：

- PDF 表格页有可能混入页眉、页脚或无关文本
- 长题干和长选项可能被换行
- 少数题的参考章节、答案、解释可能与选项出现在同一行
- 裸章节 `reference` 会保守归入该章第 1 节，例如 `2` -> `2.1`
- 当前仍有大量新增题的 `simple_explanation` 需要逐步优化

每次题库维护后，都应重新生成或更新：

- `QUESTION_IMPORT_AUDIT.md`
- `SECTION_IMPORT_AUDIT.md`
- `MANUAL_REVIEW_CHECKLIST.md`

## 如何导出 / 导入学习记录

在网页底部进入“我的”：

- 点击“导出记录 JSON”保存当前浏览器学习记录
- 用文件选择框导入之前导出的 JSON
- 点击“清空学习记录”只会清空浏览器 `localStorage`，不会删除题库文件

保存内容包括：

- 做题记录
- 错题和错题次数
- 收藏题
- 已掌握错题
- 模拟考试历史
- 未完成普通练习和模拟考试 session
- 显示设置

## 如何部署到 GitHub Pages

这是纯静态站点，可以直接部署到 GitHub Pages。

基本方式：

1. 创建 GitHub 仓库。
2. 把本项目文件推送到仓库。
3. 在仓库 Settings -> Pages 中选择 `main` 分支和 `/root`。
4. 等待 GitHub Pages 构建完成。
5. 访问 `https://用户名.github.io/仓库名/`。

详细说明见 `GITHUB_PAGES_DEPLOYMENT.md`。

部署时要确认 `index.html`、`app.js`、`style.css`、`data/syllabus.js`、`data/paper1_questions.json`、`data/paper3_questions.json` 都在发布目录内，否则首页学习地图或题库加载会失败。

不要把原始 PDF、离线版、`sharedFiles` 或内部资料来源上传到公开仓库。

## 如何给朋友使用

本地方式：

1. 把整个 `insurance-iiqe-study-app` 文件夹发给朋友。
2. 朋友运行 `python -m http.server 8000`。
3. 打开 `http://localhost:8000`。

在线方式：

1. 部署到 GitHub Pages。
2. 把 GitHub Pages 网址发给朋友。
3. 每个人的学习记录都保存在自己的浏览器里，不会互相同步。

## 后续升级方向

PWA：

- 增加 `manifest.webmanifest`
- 增加 service worker 缓存 HTML/CSS/JS/JSON
- 支持手机添加到主屏幕和离线刷题

微信小程序：

- 复用当前 JSON 题库结构
- 复用 `data/syllabus.js` 的章节/小节目录，或转换为小程序可直接加载的 JSON
- 把 `localStorage` 替换成小程序 storage API
- 将页面拆成首页、题库页、刷题页、错题页、我的页
- 注意小程序包体积，题库可能需要分包或云端加载

## 下一步建议

1. 先按 `MANUAL_REVIEW_CHECKLIST.md` 核对 High 优先级题目，尤其是新覆盖章节和热门题高风险解释。
2. 继续人工强化热门题、易错题的大白话解析。
3. 核对通过后，再考虑是否把 `limit` 提高到 400。
4. 每次扩大题库后，重复结构审计、小节审计和人工抽查。
5. 最后再考虑 PWA 或其他静态托管。
