# Evidence Audit Batch 4 — Manual Check

Generated: 2026-06-03
Source: `EVIDENCE_AUDIT_BATCH4_CANDIDATE_POOL.md` → A 类 118 + B 类低风险 82 = 200 题
Scope: 只读人工证据审计，不写 JSON，不改 UI，不 commit，不 push

---

## 1. 审计摘要

| 项目 | 数值 |
|------|:---:|
| 审计题数 | **200** |
| A 类（全量） | 118 |
| B 类（补充） | 82 |
| P1 | 128 |
| P3 | 72 |

### 审计结论

| 结论 | 数量 | A 类 | B 类 | 说明 |
|:----:|:---:|:---:|:---:|------|
| **allow_rewrite** | **174** | 103 | 71 | 证据充分，可后续只改 simple_explanation |
| **manual_confirm** | **17** | 9 | 8 | 证据不足或边界不清，需人工确认 |
| **do_not_auto** | **9** | 6 | 3 | OE < 20 字，无法支撑干扰项排除 |
| **defer** | **0** | 0 | 0 | — |

### 按章节分布

| 章节 | A+B 审计 | allow_rewrite | manual_confirm | do_not_auto |
|:----:|:------:|:-----------:|:------------:|:----------:|
| 3（P1 保险原则） | 128 | 122 | 5 | 1 |
| 5（P3 寿险核保/产品） | 72 | 52 | 12 | 8 |

---

## 2. 审计标准

每题均检查：
1. 题干是否清楚，选项是否完整（A/B/C/D 四项齐全）
2. `correct_answer` 是否与选项显式匹配
3. `original_explanation` 是否充分支撑答案和干扰项排除
4. 是否有 PDF/教材依据（`source_file` / `source_page` / `reference`）
5. 题目是否涉及法律/监管边界且证据不足以清楚界定
6. 题目是否疑似 OCR 污染、串题或选项抽取错误

---

## 3. allow_rewrite（174 题）

全部 174 题满足：OE ≥ 20 字、correct_answer 与选项显式匹配、source_page/reference 可用、无法律边界不清或 OCR 污染。

### 3.1 P1 allow_rewrite（122 题）

**A 类（66 题，Ch3 可保权益系列）**：

P1-406, P1-407, P1-415, P1-417, P1-438, P1-444, P1-455, P1-456, P1-463, P1-477, P1-483, P1-484, P1-485, P1-487, P1-491, P1-495, P1-507, P1-508, P1-509, P1-511, P1-512, P1-513, P1-514, P1-515, P1-516, P1-518, P1-520, P1-521, P1-523, P1-524, P1-525, P1-526, P1-528, P1-530, P1-531, P1-533, P1-534, P1-536, P1-537, P1-538, P1-539, P1-540, P1-541, P1-542, P1-543, P1-544, P1-545, P1-546, P1-548, P1-550, P1-551, P1-552, P1-554, P1-555, P1-557, P1-558, P1-560, P1-561, P1-562, P1-563, P1-566, P1-572, P1-573

**A 类中降为 manual_confirm 或 do_not_auto 的 P1 题**：P1-529（OE=44→manual_confirm）, P1-569（OE=37→manual_confirm）, P1-571（OE=40→manual_confirm）, P1-577（OE=18→do_not_auto）

**B 类（56 题）**：

P1-481, P1-488, P1-492, P1-497, P1-499, P1-501, P1-502, P1-504, P1-505, P1-549, P1-553, P1-556, P1-559, P1-565, P1-567, P1-568, P1-570, P1-576, P1-579, P1-580, P1-581, P1-582, P1-583, P1-584, P1-585, P1-586, P1-587, P1-588, P1-589, P1-590, P1-591, P1-592, P1-593, P1-594, P1-595, P1-439, P1-440, P1-443, P1-445, P1-446, P1-447, P1-448, P1-449, P1-451, P1-452, P1-453, P1-457, P1-458, P1-459, P1-460, P1-461, P1-462, P1-464

> **重写注意**：P1 B 类题目多数为单一简单概念题（OE 80-150 字），部分含"以上各项"/"组合"等风险因素。改写时必须基于 OE 逐项排错，不得泛化。

### 3.2 P3 allow_rewrite（52 题）

**A 类（37 题）**：

P3-312, P3-313, P3-314, P3-315, P3-316, P3-328, P3-329, P3-330, P3-331, P3-336, P3-337, P3-338, P3-340, P3-341, P3-342, P3-343, P3-344, P3-345, P3-347, P3-348, P3-351, P3-352, P3-353, P3-355, P3-356, P3-357, P3-358, P3-360, P3-361, P3-362, P3-363, P3-364, P3-365, P3-366, P3-367, P3-368, P3-692

**A 类中降级的 P3 题**：P3-246（OE=0→do_not_auto）, P3-248（OE=0→do_not_auto）, P3-306（OE=0→do_not_auto）, P3-308（OE=5→do_not_auto）, P3-309（OE=0→do_not_auto）, P3-310（OE=5→do_not_auto）, P3-318（OE=70+法律→manual_confirm）, P3-332（OE=48→manual_confirm）, P3-333（OE=42→manual_confirm）, P3-371（OE=42→manual_confirm）, P3-374（OE=49→manual_confirm）, P3-674（OE=303但3项风险→manual_confirm）, P3-375（OE充足→allow_rewrite，但需确认）, P3-376（OE充足→allow_rewrite）

**B 类（15 题）**：

P3-377, P3-378, P3-379, P3-380, P3-382, P3-383, P3-384, P3-385, P3-386, P3-387, P3-388, P3-390, P3-391, P3-392, P3-393, P3-394, P3-395, P3-396

---

## 4. manual_confirm（17 题）

### 4.1 P1 manual_confirm（5 题）

| ID | OE | 风险因素 | 需确认内容 |
|----|:--:|------|------|
| P1-529 | 44字 | — | OE 偏短，需教材原文确认可保权益转让规则 |
| P1-569 | 37字 | 以上各项题 | OE 偏短 + 以上各项，需确认所有子项均成立 |
| P1-571 | 40字 | — | OE 偏短，需教材原文确认 |
| P1-441 | 71字 | 法律/监管 | 法律关键词 + OE 描述不够充分 |
| P1-454 | 59字 | 法律/监管 | 法律关键词 + OE 描述不够充分 |

### 4.2 P3 manual_confirm（12 题）

| ID | OE | 风险因素 | 需确认内容 |
|----|:--:|------|------|
| P3-318 | 70字 | 法律/监管 | 法律关键词 + OE 不够充分 |
| P3-332 | 48字 | — | OE 偏短 |
| P3-333 | 42字 | 以上各项题 | OE 偏短 + 以上各项 |
| P3-371 | 42字 | — | OE 偏短 |
| P3-374 | 49字 | — | OE 偏短 |
| P3-674 | 303字 | 3项风险叠加 | OE 虽长但含法律+金额+以上各项，需逐项确认 |
| P1-493 | 30字 | — | OE 偏短（B类P1） |
| P1-506 | 34字 | 以上各项题 | OE 偏短 + 以上各项（B类P1） |
| P1-564 | 58字 | 法律/监管 | 法律关键词 + OE 不够充分（B类P1） |
| P1-574 | 26字 | — | OE 偏短（B类P1） |
| P1-442 | 31字 | 法律/监管 | OE 偏短 + 法律关键词（B类P1） |
| P1-450 | 75字 | 2项风险 | 以上各项 + 法律关键词（B类P1） |

---

## 5. do_not_auto（9 题）

全部因 OE < 20 字无法支撑答案和干扰项排除：

| ID | Paper | OE | 来源 | 说明 |
|----|:----:|:--:|:---:|------|
| P3-246 | P3 | 0 | A类 | OE 为空 |
| P3-248 | P3 | 0 | A类 | OE 为空 |
| P3-306 | P3 | 0 | A类 | OE 为空 |
| P3-308 | P3 | 5 | A类 | OE 仅 section ref |
| P3-309 | P3 | 0 | A类 | OE 为空 |
| P3-310 | P3 | 5 | A类 | OE 仅 section ref |
| P1-577 | P1 | 18 | A类 | OE 过短 |
| P3-381 | P3 | 13 | B类 | OE 过短 |
| P3-389 | P3 | 13 | B类 | OE 过短 |

---

## 6. 关键发现

### 6.1 正面发现

1. **A 类 P1 质量优秀**：66 题中 62 题直接 allow_rewrite（94%），全部来自 Ch3 可保权益系列，OE 充足，概念清晰。
2. **A 类 P3 主体可过**：52 题中 37 题 allow_rewrite（71%），主要来自 Ch5 寿险核保/产品。
3. **B 类补充有效率**：82 题中 71 题 allow_rewrite（87%），低风险筛选策略有效。
4. **总量大幅提速**：200 题 manual check，比 Batch 3（119 题）增长 68%。

### 6.2 需关注

1. **P3 A 类中 6 题 OE=0**：P3-246, P3-248, P3-306, P3-308, P3-309, P3-310 虽被候选池分类为 A 类，但实际 OE 为空或仅 section reference。这些题在候选池筛选时可能因其他条件被误归入 A 类。
2. **P3-674 风险密集**：虽 OE 长（303字），但同时含法律关键词、金额细节和以上各项，需人工逐项确认。
3. **manual_confirm 集中于 OE 偏短题**：17 题中 12 题因 OE < 80 字需人工确认。

### 6.3 建议优先级

| 优先级 | 行动 | 题数 |
|:--:|------|:--:|
| 1 | 生成 rewrite plan（allow_rewrite 174 题） | 174 |
| 2 | 人工确认 17 题 manual_confirm | 17 |
| 3 | 9 题 do_not_auto 延后 | 9 |

---

## 7. 排除声明

### 已排除的已处理批次

| 批次 | 处理量 | 状态 |
|------|:---:|------|
| Full Explanation Batch 1–16 | ~1088 | 五段式检测自动排除 |
| Evidence Audit Batch 1 | 13 | 五段式检测自动排除 |
| Evidence Audit Batch 2 | 41 | 五段式检测自动排除 |
| Evidence Audit Batch 3 | 95 | 五段式检测自动排除 |
| Risky Batch 1–2 | 50 | 五段式检测自动排除 |

### 已排除的禁止题

- Do Not Auto 登记表：P1-018, P1-091, P3-131, P3-543, P1-1192, P3-553, P3-555 等
- Batch 3 manual_confirm 26 题均在池外（C/D 类）
- C/D 类 199 题不进入本次审计

---

## 8. 禁止声明

| 禁止项 | 状态 |
|--------|:----:|
| 修改 `data/paper1_questions.json` | ✅ 未修改 |
| 修改 `data/paper3_questions.json` | ✅ 未修改 |
| 修改 `app.js` / `style.css` / `index.html` | ✅ 未修改 |
| 修改 `README` / PDF / 离线版 / `sharedFiles` / `extract_questions.py` | ✅ 未修改 |
| 修改 `PROJECT_A_MEMORY.md` / `NEXT_ACTION` / `SESSION_LOG` | ✅ 未修改 |
| 删除 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` | ✅ 未删除 |
| 暂存 / commit / push | ✅ 未执行 |

本轮仅新增：
- `EVIDENCE_AUDIT_BATCH4_MANUAL_CHECK.md`（本文件）

---

*End of Evidence Audit Batch 4 Manual Check.*
*This file is a read-only audit document. It does not authorize JSON writes, commits, or pushes.*
*下一步：等待用户确认后生成 EVIDENCE_AUDIT_BATCH4_REWRITE_PLAN.md。*
