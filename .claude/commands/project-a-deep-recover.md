---
description: 深度恢复——异常或批量操作前完整重建项目A上下文。
---

# project-a-deep-recover — 项目A深度恢复（异常/批量操作前）

## 用途

在上下文断档、状态异常、或准备批量改题/扩题前，完整重建项目A上下文。比 Light Recover 读取更多文件，输出更完整的摘要。

**适用场景**：
- Light Recover 判断不了当前状态
- git 状态异常（dirty、不对齐）
- 准备大批量改 `simple_explanation`
- 准备扩题
- memory / session log / next action 矛盾
- 出现 `repair_needed` / `EPERM` / 编码风险 / JSON parse 风险
- 需要恢复完整项目A上下文

**不适用场景**：日常快速确认状态 → 改用 `/project-a-light-recover`。

## 硬性限制

- **只读**，不修改任何文件。
- 不暂存、不 commit、不 push。
- 不自动进入下一个任务或批次。
- **禁止**：批量写题、覆盖题库、修改JSON/UI/PDF/sharedFiles。
- **禁止输出**：完整题库JSON dump（只允许输出题数统计和ID连续性检查结果）。
- 如果发现异常，先报告再等待用户指示，不自行修复。

## 执行流程

### 第一步：Git状态完整检查（必须执行）

```bash
git status -sb
```

```bash
git log -1 --oneline
```

```bash
git branch --show-current
```

```bash
git rev-list --left-right --count HEAD...origin/main
```

```bash
git diff --name-only
```

```bash
git diff --cached --name-only
```

```bash
git ls-files --others --exclude-standard
```

```bash
git log --oneline -5
```

### 第二步：完整读取核心规则文件

只读读取以下文件（全文，但禁止在报告中全文dump）：

1. **CLAUDE.md** — 完整读取（约120+行），重点提取：
   - 保护字段清单
   - 四段式格式规则
   - Spotcheck 检查清单
   - 禁止清单
   - 黄金样本引用

2. **AGENTS.md** — 完整读取（如存在），提取 agent 配置和工作流规则。

### 第三步：完整读取项目状态文件

3. **PROJECT_A_NEXT_ACTION.md** — 完整读取（约120行），提取：
   - 最近3条以上的下一步建议（含日期）
   - 当前批次进度
   - 暂停/等待事项
   - 安全边界

4. **PROJECT_A_SESSION_LOG.md** — 完整读取（可能较长），提取：
   - 最近5条以上的会话日志条目（日期 + 简述）
   - 最后操作类型（读/写/提交/审计）
   - 最近异常记录

5. **PROJECT_A_MEMORY.md** — 完整读取，提取：
   - 当前项目A阶段
   - Batch 进度（最近已完成、进行中、待开始）
   - 题库数量（P1/P3/总数）
   - 关键规则变更记录
   - repair_needed 状态
   - 编码/污染风险标记
   - 保护字段/禁止字段记录

### 第四步：题库只读检查（仅在必要时执行）

以下检查只在以下情况执行：准备批量改题/扩题、memory 提到 JSON 可能有问题、或 git diff 显示题库有变更。

```bash
# JSON parse 检查（只读）
node -e "JSON.parse(require('fs').readFileSync('data/paper1_questions.json','utf8')); console.log('P1 parse OK')"
node -e "JSON.parse(require('fs').readFileSync('data/paper3_questions.json','utf8')); console.log('P3 parse OK')"
```

```bash
# 题数统计（只读）
node -e "const p1=JSON.parse(require('fs').readFileSync('data/paper1_questions.json','utf8')); console.log('P1:', p1.length)"
node -e "const p3=JSON.parse(require('fs').readFileSync('data/paper3_questions.json','utf8')); console.log('P3:', p3.length)"
```

```bash
# ID连续性检查（只读）
node -e "
const p1=JSON.parse(require('fs').readFileSync('data/paper1_questions.json','utf8'));
const ids=p1.map(q=>q.id).sort((a,b)=>a-b);
for(let i=1;i<ids.length;i++){if(ids[i]!==ids[i-1]+1){console.log('P1 gap at',ids[i-1],'->',ids[i]);}}
console.log('P1 ID check done, count:', ids.length);
"
node -e "
const p3=JSON.parse(require('fs').readFileSync('data/paper3_questions.json','utf8'));
const ids=p3.map(q=>q.id).sort((a,b)=>a-b);
for(let i=1;i<ids.length;i++){if(ids[i]!==ids[i-1]+1){console.log('P3 gap at',ids[i-1],'->',ids[i]);}}
console.log('P3 ID check done, count:', ids.length);
"
```

```bash
# 编码污染检查（只读 grep）
node -e "
const fs=require('fs');
[1,3].forEach(p=>{
  const data=fs.readFileSync('data/paper'+p+'_questions.json','utf8');
  const markers=['????','�','锟'];
  markers.forEach(m=>{if(data.includes(m))console.log('P'+p+' ENCODING RISK:', m);});
});
console.log('encoding scan done');
"
```

```bash
# 保护字段变更检查（只读，仅当 git diff 含题库时执行）
git diff -- data/paper1_questions.json data/paper3_questions.json | node -e "
const fs=require('fs');
let input='';
process.stdin.on('data',c=>input+=c);
process.stdin.on('end',()=>{
  const lines=input.split('\n');
  const changed=[];
  let current='';
  lines.forEach(l=>{
    if(l.startsWith('@@')){const m=l.match(/\"id\":\s*(\d+)/); if(m)current=m[1];}
    if(l.startsWith('+')&&!l.startsWith('+++')&&!l.startsWith('@@')){
      if(!l.includes('simple_explanation'))changed.push({id:current,line:l.substring(0,80)});
    }
  });
  if(changed.length>0){console.log('PROTECTED FIELD RISK:'); changed.forEach(c=>console.log('  id:',c.id,'->',c.line));}
  else console.log('changed_fields: simple_explanation only - OK');
});
"
```

### 第五步：异常检测（综合判断）

对以下每一项给出判断：

| 检查项 | 正常标准 | 异常标记 |
|--------|----------|----------|
| HEAD 与 origin/main 对齐 | ahead=0, behind=0 | ⚠️ 不对齐 |
| 工作区干净 | staged=0, unstaged=0 | ⚠️ 有变更 |
| 题库JSON无diff | 无 paper*_questions.json 变更 | ⛔ 题库被修改 |
| UI文件无意外diff | 无 app.js/style.css/index.html 变更 | ⚠️ UI变更 |
| 禁止文件无diff | 无 PDF/sharedFiles/extract_questions.py 变更 | ⛔ 禁止文件变更 |
| JSON parse 通过 | 两个文件 parse OK | ⛔ parse 失败 |
| 题数正确 | P1=1391, P3=807, 总计=2198 | ⛔ 题数异常 |
| ID连续 | 无gap | ⛔ ID断裂 |
| 编码无污染 | 无 mojibake 标记 | ⛔ 编码风险 |
| NEXT_ACTION 存在且一致 | 文件存在，内容与 HEAD 匹配 | ⚠️ 缺失或矛盾 |
| SESSION_LOG 存在 | 文件存在，有最近条目 | ⚠️ 缺失 |
| MEMORY 无 repair_needed | grep 无命中 | ⛔ 有待修复项 |
| MEMORY 无 EPERM | grep 无命中 | ⛔ 权限风险 |

### 第六步：输出深度恢复报告

用中文输出以下完整摘要（不是全文 dump）：

```
# 项目A 深度恢复报告

## Git 状态
- HEAD: <hash> <message>
- 分支: <branch>
- main↔origin/main: <ahead>/<behind> (<对齐/不对齐>)
- 最近5次提交: <列表>
- staged: <n> | unstaged: <n> | untracked: <n>

## 工作区文件
- 已暂存: <列表或"无">
- 已修改未暂存: <列表或"无">
- 未跟踪: <列表或"无">

## 题库状态
- P1: <n> 题, parse <OK/FAIL>, ID <连续/有gap>, 编码 <干净/有风险>
- P3: <n> 题, parse <OK/FAIL>, ID <连续/有gap>, 编码 <干净/有风险>
- 总计: <n> 题
- 保护字段: <未变更/有风险>
- changed_fields: <仅simple_explanation/有保护字段被修改>

## 当前项目A阶段
- 阶段: <从MEMORY提取>
- Batch进度: <最近已完成/进行中/待开始>
- 最近会话: <SESSION_LOG 最近3-5条>
- 规则变更: <最近关键规则变更摘要>

## 核心规则摘要（从CLAUDE.md提取）
- 保护字段: original_explanation, question_*, options_*, correct_answer, source_page, source_file, reference, chapter, section
- 只允许修改: simple_explanation
- 格式: 严格4段式，禁止第5段
- Spotcheck: 13项检查必须全部通过
- 禁止: 内部审计备注、繁体字、教材引用、空泛句

## 异常检测结果
- ✅ 无异常 / ⚠️ 警告项（列出）/ ⛔ 阻断项（列出）

## 当前允许做的事
- <根据状态列出>

## 当前禁止做的事
- <根据异常列出>

## 下一步安全建议
- <具体建议>
```

### 第七步：输出最终判断

```
✅ 状态正常，可以继续 PROJECT_A_NEXT_ACTION.md 中建议的任务。

或

⚠️ 发现警告：<具体警告>。建议先处理警告再继续。

或

⛔ 发现阻断异常：<具体异常>。必须等待用户人工确认后再操作。
```

## 使用方式

```
/project-a-deep-recover
```

## Deep Recover 触发条件速查

| 条件 | 说明 |
|------|------|
| Light Recover 判断不了 | 轻量恢复无法确定当前状态 |
| git 状态异常 | dirty、不对齐、意外diff |
| 准备批量改 simple_explanation | 大批量写入前必须完整恢复 |
| 准备扩题 | 新增题目前必须确认题库基线 |
| memory/session log/next action 矛盾 | 三份文件信息不一致 |
| repair_needed 出现 | 有待修复项未处理 |
| EPERM 出现 | 权限风险需确认 |
| 编码风险 / JSON parse 风险 | 题库完整性可疑 |
| 长时间未操作后恢复 | 上下文断档超过一周 |
