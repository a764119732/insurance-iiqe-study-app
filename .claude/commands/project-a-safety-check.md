---
description: 项目A提交前或写入后安全检查：JSON parse、题数、ID连续、保护字段、编码污染、UI完整性。
---

# project-a-safety-check — 项目A安全校验

## 用途

在 JSON 写入后、commit 前、push 前执行安全检查，确保题库完整性不被破坏。

## 执行流程

### 1. JSON Parse

```bash
node -e "const p1=require('./data/paper1_questions.json');const p3=require('./data/paper3_questions.json');console.log('P1:',p1.length,'P3:',p3.length);"
```

期望：P1 = 1391，P3 = 807。

### 2. 题数校验

| 项目 | 期望值 |
|------|:-----:|
| P1 | 1391 |
| P3 | 807 |
| 总计 | 2198 |

偏差即停止。

### 3. ID 连续性

```bash
node -e "
const p1=require('./data/paper1_questions.json');
const p3=require('./data/paper3_questions.json');
const p1Ids=p1.map(q=>parseInt(q.id.split('-')[1])).sort((a,b)=>a-b);
const p3Ids=p3.map(q=>parseInt(q.id.split('-')[1])).sort((a,b)=>a-b);
const p1Missing=[];for(let i=1;i<=1391;i++){if(!p1Ids.includes(i))p1Missing.push(i);}
const p3Missing=[];for(let i=1;i<=807;i++){if(!p3Ids.includes(i))p3Missing.push(i);}
console.log('P1 missing:',p1Missing.length>0?p1Missing.join(','):'none');
console.log('P3 missing:',p3Missing.length>0?p3Missing.join(','):'none');
"
```

任何缺失即停止。

### 4. Git Diff 范围检查

```bash
git diff -- data/paper1_questions.json data/paper3_questions.json
```

确认：
- 变更题号严格等于计划中授权题号。
- 变更字段**仅**为 `simple_explanation`。
- 以下字段零变化：`original_explanation`、题干（`question_traditional` / `question_simplified`）、选项（`options_traditional` / `options_simplified`）、`correct_answer`、`source_page`、`reference`、`chapter`、`section`、`source_file`。

### 5. 保护字段零变化

```bash
git diff -- data/paper1_questions.json data/paper3_questions.json | grep -E "original_explanation|correct_answer|source_page" | grep -v "^---" | grep -v "^+++"
```

如有输出即停止。

### 6. 编码污染检查

```bash
node -e "
const fs=require('fs');
const p1=JSON.parse(fs.readFileSync('data/paper1_questions.json','utf8'));
const p3=JSON.parse(fs.readFileSync('data/paper3_questions.json','utf8'));
const all=[...p1,...p3];
let fourQM=0,replacement=0,mojibake=0;
for(const q of all){
  const se=q.simple_explanation||'';
  const oe=q.original_explanation||'';
  const t=se+oe;
  if(/\?\?\?\?/.test(t))fourQM++;
  if(/�/.test(t))replacement++;
  if(/锟/.test(t)||/锟/.test(t))mojibake++;
}
console.log('Four-QM:',fourQM,'Replacement:',replacement,'Mojibake:',mojibake);
if(fourQM+replacement+mojibake>0)console.log('ENCODING ISSUES FOUND - STOP');
else console.log('Encoding check: PASS');
"
```

命中任何编码问题即停止。

### 7. UI 文件意外修改检查

```bash
git diff -- app.js style.css index.html
```

如有输出，确认是否是用户授权的 UI 修改。如果不应有 UI 修改，立即报告并停止。

### 8. Git 状态检查

```bash
git status -sb
```

确认：
- 工作区变更仅限于任务允许范围。
- `PROJECT_A_MEMORY.md` 未出现在 staged。
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` 不在 staged（除非用户明确授权）。
- PDF、`sharedFiles/`、`iiqe_offline_300.html` 未出现在 unstaged/staged。

### 9. Do Not Auto 重叠检查

```bash
node -e "console.log('Manual check required: confirm written IDs do not overlap Do Not Auto registry');"
```

## 检查结果报告

用表格汇总每一项的检查结果：

| 检查项 | 预期 | 实际 | 结果 |
|--------|------|------|:----:|
| JSON parse | PASS | — | — |
| P1 count | 1391 | — | — |
| P3 count | 807 | — | — |
| Total | 2198 | — | — |
| P1 ID continuity | no gaps | — | — |
| P3 ID continuity | no gaps | — | — |
| Changed IDs match plan | exact match | — | — |
| Changed field scope | `simple_explanation` only | — | — |
| Protected field changes | 0 | — | — |
| Four-QM marker | 0 | — | — |
| Replacement char | 0 | — | — |
| Mojibake marker | 0 | — | — |
| UI diff | clean | — | — |
| Git status | clean | — | — |
| Do Not Auto overlap | 0 | — | — |

## 硬性限制

- **任何一项失败即停止**，不得继续 commit/push。
- 只读，不修改文件。
- 不暂存，不 commit，不 push（由调用方决定后续操作）。
- **权限提示**：本命令所有检查均为只读操作（`node -e` 只读解析、`git diff`、`git status`、编码扫描），按照 CLAUDE.md 权限规则可自动执行，无需逐条确认。

## 使用方式

```
/project-a-safety-check
```
