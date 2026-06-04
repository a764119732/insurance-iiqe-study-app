# Specificity Repair Batch 4 Fix Rewrite Plan

## Scope

- Maximum repair count: 40.
- Files allowed for data repair: data/paper1_questions.json, data/paper3_questions.json.
- Field allowed for data repair: simple_explanation only.
- UI and protected fields are out of scope.

## Selection Rules Applied

- Included P1-279 and P1-1291.
- Included 10 visible internal-note pollution questions from simple_explanation.
- Included 10 combination questions lacking itemized i/ii/iii explanation.
- No positive definition mislabel was selected because stricter scan found 0 true positives; P1-244/P1-245 are valid samples that explicitly say they are not reverse questions.
- Remaining slots were assigned to old five-part title / fifth-section / template-heavy questions.

## Planned IDs

P1-279, P1-1291, P1-008, P1-009, P1-016, P1-018, P1-022, P1-023, P1-024, P1-025, P1-026, P1-027, P1-002, P1-015, P1-017, P1-037, P1-038, P1-039, P1-040, P1-041, P1-047, P1-071, P1-003, P1-004, P1-005, P1-007, P1-010, P1-011, P1-012, P1-013, P1-014, P1-019, P1-020, P1-028, P1-029, P1-030, P1-031, P1-032, P1-042, P1-043

## Rewrite Plan

| question_id | 所属卷 | 问题类型 | 当前问题摘要 | 预计修复方式 | 是否允许自动修复 | 是否需要人工确认 |
|---|---|---|---|---|---|---|
| P1-279 | P1 | 人工抽查失败 | 当前解析存在 人工抽查失败 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-1291 | P1 | 人工抽查失败 | 当前解析存在 人工抽查失败 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-008 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-009 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-016 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-018 | P1 | simple_explanation 内部备注污染；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-022 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-023 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-024 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-025 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-026 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-027 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-002 | P1 | 组合题未逐项解释小项；教学质量模板句 | 当前解析存在 组合题未逐项解释小项、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-015 | P1 | 组合题未逐项解释小项；旧 5 段/旧标题 | 当前解析存在 组合题未逐项解释小项、旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-017 | P1 | 组合题未逐项解释小项 | 当前解析存在 组合题未逐项解释小项 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-037 | P1 | 组合题未逐项解释小项 | 当前解析存在 组合题未逐项解释小项 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-038 | P1 | 组合题未逐项解释小项；旧 5 段/旧标题 | 当前解析存在 组合题未逐项解释小项、旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-039 | P1 | 组合题未逐项解释小项 | 当前解析存在 组合题未逐项解释小项 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-040 | P1 | 组合题未逐项解释小项；旧 5 段/旧标题 | 当前解析存在 组合题未逐项解释小项、旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-041 | P1 | 组合题未逐项解释小项 | 当前解析存在 组合题未逐项解释小项 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-047 | P1 | 组合题未逐项解释小项；旧 5 段/旧标题 | 当前解析存在 组合题未逐项解释小项、旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-071 | P1 | 组合题未逐项解释小项 | 当前解析存在 组合题未逐项解释小项 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-003 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-004 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-005 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-007 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-010 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-011 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-012 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-013 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-014 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-019 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-020 | P1 | 旧 5 段/旧标题 | 当前解析存在 旧 5 段/旧标题 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-028 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-029 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-030 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-031 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-032 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-042 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
| P1-043 | P1 | simple_explanation 内部备注污染；旧 5 段/旧标题；教学质量模板句 | 当前解析存在 simple_explanation 内部备注污染、旧 5 段/旧标题、教学质量模板句 问题 | 重写 simple_explanation 为固定 4 段；组合题先拆 i/ii/iii/iv，再拆 A/B/C/D | 是 | 否 |
