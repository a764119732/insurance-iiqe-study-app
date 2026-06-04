# Specificity Repair Batch 3 — Rewrite Audit

## 批次信息

- **批次**：Specificity Repair Batch 3
- **写入题数**：80
- **P1/P3 分布**：P1=43, P3=37
- **写入字段**：仅 `simple_explanation`

## 优先类别分布

| 类别 | 说明 | 数量 |
|------|------|:---:|
| A | P1-553 同类型（反向+披露/诚信） | 31 |
| B | 组合题 | 6 |
| C | 重复"记忆口诀" | 31 |
| D | 内部审计备注 | 12 |

## 质量检查结果

| 检查项 | 结果 |
|--------|:---:|
| JSON parse | ✅ PASS |
| P1=1391, P3=807, Total=2198 | ✅ PASS |
| P1/P3 ID 连续 | ✅ PASS |
| format_failure_count | 0 |
| sec3_title (一一) | 0 |
| fifth_section | 0 |
| dup_memory_heading | 0 |
| audit_notes | 0 |
| generic_explanation_count | 0 |
| traditional_chinese | 0 |
| source_reference | 0 |
| sec3_correct_answer | 0 |
| encoding (QM/REP/MOJI) | 0 |

## 保护字段

- 变化：0
- 仅修改 `simple_explanation`

## Spotcheck

待生成 `SPECIFICITY_REPAIR_BATCH3_SPOTCHECK.md`。

## Commit 计划

- **Commit A**：计划文件（CANDIDATE_SCAN + REWRITE_PLAN + REWRITE_AUDIT + SPOTCHECK）
- **Commit B**：JSON 写入（data/paper1_questions.json + data/paper3_questions.json）

严格排除：PROJECT_A_MEMORY.md、FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md、.claude/settings.local.json
