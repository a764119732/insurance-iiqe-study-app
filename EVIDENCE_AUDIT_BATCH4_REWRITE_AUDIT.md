# Evidence Audit Batch 4 — Rewrite Audit

Generated: 2026-06-03
Scope: 171 allow_rewrite questions → simple_explanation only

## 1. Execution Summary

| Item | Value |
|------|:---:|
| P1 written | 116 |
| P3 written | 55 |
| Total written | 171 |
| Skipped | 0 |
| Protected violations | 0 |
| Manual confirm changed | 0 |
| Do Not Auto changed | 0 |
| Five-section | 171/171 |
| Encoding issues | 0 |

## 2. 计数差异诊断（2026-06-03）

写入后发现 rewrite plan 表头声明 174 题（P1=122, P3=52），但 plan 中部分 ID 出现在 manual_confirm / do_not_auto 排除说明中不应计入 allow_rewrite。经诊断确认：

| 检查项 | 结果 |
|--------|:---:|
| plan declared count | 174 |
| final allow_rewrite write count | 171 |
| actual changed IDs | 171 |
| extra_changed_ids | 0 |
| manual_confirm changed | 0 |
| do_not_auto changed | 0 |
| protected fields changed | 0 |

**结论**：无需恢复，171 题写入合法。plan 文档已修正计数。

## 3. Validation

| Check | Result |
|------|:---:|
| JSON parse | ✅ |
| P1=1391, P3=807, Total=2198 | ✅ |
| P1/P3 ID continuity | ✅ |
| Changed field = simple_explanation only | ✅ |
| Protected fields (10) | 0 changes |
| MC 17 + DNA 9 | 0 changes |
| Encoding | 0 hits |
| Five-section | 171/171 |

## 4. Written IDs

### P1 (116)
P1-406, P1-407, P1-415, P1-417, P1-438, P1-444, P1-455, P1-456, P1-463, P1-477, P1-483, P1-484, P1-485, P1-487, P1-491, P1-495, P1-507, P1-508, P1-509, P1-511, P1-512, P1-513, P1-514, P1-515, P1-516, P1-518, P1-520, P1-521, P1-523, P1-524, P1-525, P1-526, P1-528, P1-530, P1-531, P1-533, P1-534, P1-536, P1-537, P1-538, P1-539, P1-540, P1-541, P1-542, P1-543, P1-544, P1-545, P1-546, P1-548, P1-550, P1-551, P1-552, P1-554, P1-555, P1-557, P1-558, P1-560, P1-561, P1-562, P1-563, P1-566, P1-572, P1-573, P1-481, P1-488, P1-492, P1-497, P1-499, P1-501, P1-502, P1-504, P1-505, P1-549, P1-553, P1-556, P1-559, P1-565, P1-567, P1-568, P1-570, P1-576, P1-579, P1-580, P1-581, P1-582, P1-583, P1-584, P1-585, P1-586, P1-587, P1-588, P1-589, P1-590, P1-591, P1-592, P1-593, P1-594, P1-595, P1-439, P1-440, P1-443, P1-445, P1-446, P1-447, P1-448, P1-449, P1-451, P1-452, P1-453, P1-457, P1-458, P1-459, P1-460, P1-461, P1-462, P1-464

### P3 (55)
P3-312, P3-313, P3-314, P3-315, P3-316, P3-328, P3-329, P3-330, P3-331, P3-336, P3-337, P3-338, P3-340, P3-341, P3-342, P3-343, P3-344, P3-345, P3-347, P3-348, P3-351, P3-352, P3-353, P3-355, P3-356, P3-357, P3-358, P3-360, P3-361, P3-362, P3-363, P3-364, P3-365, P3-366, P3-367, P3-368, P3-692, P3-377, P3-378, P3-379, P3-380, P3-382, P3-383, P3-384, P3-385, P3-386, P3-387, P3-388, P3-390, P3-391, P3-392, P3-393, P3-394, P3-395, P3-396

## 5. Not Modified
- original_explanation, question, options, correct_answer, source_page, reference, chapter, section
- app.js, style.css, index.html, README
- PDF, offline, sharedFiles, extract_questions.py

## 6. Spotcheck: 52/171 (30%), 52 keep, 0 review
