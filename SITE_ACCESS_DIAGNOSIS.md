# 在线版网站访问诊断报告

## 1. 本地服务是否运行

- 未发现正在运行的 `python http.server`。
- `Get-Process python,py` 未返回进程。
- `Get-CimInstance Win32_Process` 查询 Python 命令行时被系统拒绝访问，未作为诊断依据。
- `http://127.0.0.1:8000` 请求失败，错误为：无法连接到远程服务器。

## 2. 端口是否可用

- `Get-NetTCPConnection -LocalPort 8000` 未返回监听连接。
- `netstat -ano | Select-String ':8000'` 未返回结果。
- 结论：8000 端口当前未被占用，也没有本地服务器在监听。

## 3. 必要文件是否存在

以下文件均存在：

- `index.html`
- `app.js`
- `style.css`
- `data/syllabus.js`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

文件大小记录：

- `index.html`：1300 bytes
- `app.js`：33010 bytes
- `style.css`：11472 bytes
- `data/syllabus.js`：2713 bytes
- `data/paper1_questions.json`：3748599 bytes
- `data/paper3_questions.json`：2187002 bytes

## 4. index.html 加载顺序

确认加载顺序正确：

```html
<link rel="stylesheet" href="style.css" />
<script src="data/syllabus.js"></script>
<script src="app.js"></script>
```

`data/syllabus.js` 在 `app.js` 之前加载，符合当前应用依赖顺序。

## 5. app.js 数据路径

确认 `DATA_FILES` 仍为：

```js
const DATA_FILES = {
  P1: "data/paper1_questions.json",
  P3: "data/paper3_questions.json",
};
```

路径与实际文件位置一致。

## 6. JSON 是否正常

JSON 解析结果：

- `data/paper1_questions.json`：JSON.parse 成功，题数 1391，首题 `P1-001`，末题 `P1-1391`
- `data/paper3_questions.json`：JSON.parse 成功，题数 807，首题 `P3-001`，末题 `P3-807`

当前未发现 JSON 解析错误。

## 7. 是否有 404

- 本轮没有发现 404。
- 原因：本地 8000 服务未运行，请求在连接阶段失败，尚未进入 HTTP 文件响应阶段。
- 因此无法通过本轮请求判断单个资源是否返回 404。

从静态文件检查看，`index.html`、`app.js`、`style.css`、`data/syllabus.js`、两个 JSON 文件均存在，若从项目根目录启动静态服务，当前路径不应产生文件缺失型 404。

## 8. 是否有 JS 报错

- `node --check app.js` 执行成功，未发现 `app.js` 语法错误。
- 由于本地服务未运行，本轮没有进入浏览器运行态，无法确认浏览器控制台运行时错误。
- 从静态检查看，数据路径和脚本加载顺序正常。

## 9. Netlify / 公网部署检查

本项目根目录未发现：

- `netlify.toml`
- `_redirects`
- `package.json`
- `dist/`
- `public/`
- `build/`

项目当前形态更像直接以项目根目录作为静态站点目录部署。若 Netlify 或其他公网平台的发布目录没有指向项目根目录，可能导致 `index.html` 或 `data/` 未被发布。

公网部署需要确认发布目录包含：

- `index.html`
- `app.js`
- `style.css`
- `data/`
- `data/syllabus.js`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

## 10. 访问失败的最可能原因

本地访问不了的最可能原因是：本地静态服务器没有启动。

证据：

- 8000 端口没有监听。
- 请求 `http://127.0.0.1:8000` 返回“无法连接到远程服务器”。
- 必要入口文件和 JSON 均存在。
- JSON 可解析，题数正确。
- `app.js` 数据路径正确。
- `app.js` 未发现语法错误。

## 11. 建议修复步骤

在 PowerShell 中执行：

```powershell
cd D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app
python -m http.server 8000
```

然后访问：

```text
http://127.0.0.1:8000
```

如果启动后仍无法访问，再检查：

- 浏览器 Network 面板是否有 `404`
- `data/syllabus.js` 是否成功加载
- `app.js` 是否成功加载
- `style.css` 是否成功加载
- `data/paper1_questions.json` 是否成功加载
- `data/paper3_questions.json` 是否成功加载
- Console 是否有运行时 JS 报错
- JSON 文件加载是否因体积较大出现明显延迟

## 12. 本轮是否修改文件

- 本轮未修改题库 JSON、UI、脚本、README、离线版或 PDF。
- 本轮仅新增本诊断报告：`SITE_ACCESS_DIAGNOSIS.md`。
