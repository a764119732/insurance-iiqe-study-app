# Full Explanation Remaining Audit Map

Updated: 2026-06-02

## Scope

Read-only inventory after Full Explanation Batch 1-16. No JSON write, no commit, no push.

## Baseline

| Item | P1 | P3 | Total |
|---|---:|---:|---:|
| Question bank | 1391 | 807 | 2198 |
| Batch 1-16 processed unique IDs from rewrite audits | 776 | 312 | 1088 |
| Not in Batch 1-16 rewrite audits | 615 | 495 | 1110 |
| Already five-section in current JSON | 774 | 325 | 1099 |
| Remaining not yet five-section optimized | 617 | 482 | 1099 |
| Do Not Auto registry plus explicit exclusions | 22 | 190 | 212 |

Notes:

- The rewrite-audit count is based on FULL_EXPLANATION_BATCH1_REWRITE_AUDIT.md through FULL_EXPLANATION_BATCH16_REWRITE_AUDIT.md.
- Current JSON contains 1099 five-section explanations; this is 11 more than the rewrite-audit total, so remaining-work counts use current JSON structure rather than assuming all optimized items came from Batch 1-16.
- Risk grouping is conservative and keyword-based. It is intended for selecting manual audit routes, not for proving content correctness.

## Risk Groups Among Remaining Not Yet Five-section Optimized

Categories can overlap; totals are not additive.

| Group | P1 | P3 | Total | Action |
|---|---:|---:|---:|---|
| Low-risk ordinary template | 0 | 0 | 0 | Auto candidate if >0 |
| Combination item | 4 | 3 | 7 | Manual audit required |
| Negative wording item | 243 | 245 | 488 | Manual audit required |
| All-items / above-all item | 165 | 105 | 270 | Manual audit required |
| Regulatory / institutional fact | 282 | 80 | 362 | Manual confirmation required |
| Legal boundary | 469 | 180 | 649 | Do not auto without evidence |
| Do Not Auto registry / explicit exclusion | 22 | 176 | 198 | Cannot auto |
| Needs PDF/textbook evidence | 3 | 11 | 14 | Cannot auto |
| Manual confirmation required | 617 | 482 | 1099 | Manual route |
| Cannot auto under current evidence | 574 | 378 | 952 | Block auto rewrite |

## Auto Candidate Result

Safe automatic Batch 17 candidate count under strict rules: 0.

Reason: after excluding already optimized, Batch 1-16 audit IDs, Do Not Auto entries, negative wording, combination items, all-items wording, legal boundaries, regulatory/institutional facts, and source-thin items, no remaining question is safe enough for automatic JSON rewriting.

## Category ID Samples

### Low-risk Ordinary Template

None

### Combination Items

P1-844, P1-845, P1-955, P1-1128, P3-461, P3-462, P3-463

### Negative Items

P1-001, P1-018, P1-039, P1-055, P1-059, P1-071, P1-093, P1-140, P1-142, P1-147, P1-212, P1-217, P1-287, P1-316, P1-318, P1-319, P1-321, P1-323, P1-333, P1-338, P1-339, P1-341, P1-342, P1-343, P1-352, P1-356, P1-407, P1-410, P1-412, P1-414, P1-415, P1-416, P1-417, P1-418, P1-419, P1-421, P1-422, P1-424, P1-428, P1-431, P1-432, P1-434, P1-436, P1-439, P1-442, P1-448, P1-449, P1-450, P1-451, P1-456, P1-459, P1-460, P1-461, P1-462, P1-464, P1-465, P1-467, P1-469, P1-470, P1-471, P1-473, P1-483, P1-489, P1-490, P1-496, P1-498, P1-499, P1-500, P1-506, P1-507, P1-513, P1-519, P1-527, P1-528, P1-530, P1-531, P1-534, P1-536, P1-537, P1-538, P1-543, P1-546, P1-568, P1-573, P1-575, P1-576, P1-578, P1-586, P1-588, P1-589, P1-598, P1-604, P1-612, P1-614, P1-617, P1-618, P1-619, P1-620, P1-621, P1-622, P1-623, P1-624, P1-625, P1-627, P1-628, P1-629, P1-631, P1-632, P1-633, P1-634, P1-636, P1-637, P1-641, P1-647, P1-649, P1-650, P1-658, P1-664, P1-667, P1-672

Truncated in this map: showing first 120 of 488. Use the category counts above before selecting any manual batch.

### All-items Items

P1-001, P1-046, P1-059, P1-147, P1-180, P1-181, P1-184, P1-337, P1-338, P1-340, P1-348, P1-352, P1-357, P1-370, P1-425, P1-426, P1-427, P1-437, P1-440, P1-448, P1-449, P1-450, P1-451, P1-452, P1-453, P1-457, P1-458, P1-459, P1-460, P1-464, P1-466, P1-474, P1-476, P1-479, P1-480, P1-490, P1-492, P1-501, P1-503, P1-504, P1-505, P1-506, P1-513, P1-530, P1-533, P1-534, P1-535, P1-543, P1-552, P1-553, P1-554, P1-558, P1-560, P1-567, P1-568, P1-569, P1-576, P1-581, P1-588, P1-595, P1-598, P1-599, P1-609, P1-612, P1-619, P1-621, P1-628, P1-629, P1-631, P1-632, P1-633, P1-634, P1-636, P1-647, P1-659, P1-660, P1-670, P1-675, P1-680, P1-685, P1-688, P1-691, P1-709, P1-710, P1-721, P1-727, P1-732, P1-733, P1-759, P1-798, P1-799, P1-822, P1-845, P1-872, P1-887, P1-952, P1-955, P1-959, P1-963, P1-964, P1-971, P1-974, P1-980, P1-981, P1-992, P1-996, P1-997, P1-998, P1-999, P1-1004, P1-1033, P1-1053, P1-1065, P1-1084, P1-1085, P1-1086, P1-1104, P1-1133, P1-1142, P1-1143

Truncated in this map: showing first 120 of 270. Use the category counts above before selecting any manual batch.

### Regulatory / Institutional Fact Items

P1-189, P1-217, P1-248, P1-265, P1-287, P1-288, P1-316, P1-318, P1-319, P1-321, P1-323, P1-333, P1-337, P1-338, P1-339, P1-340, P1-341, P1-342, P1-343, P1-348, P1-352, P1-356, P1-357, P1-361, P1-370, P1-386, P1-456, P1-464, P1-467, P1-468, P1-469, P1-472, P1-483, P1-513, P1-519, P1-527, P1-528, P1-530, P1-531, P1-536, P1-537, P1-538, P1-539, P1-541, P1-542, P1-543, P1-546, P1-552, P1-553, P1-554, P1-555, P1-556, P1-557, P1-558, P1-559, P1-560, P1-561, P1-564, P1-567, P1-571, P1-573, P1-574, P1-575, P1-576, P1-581, P1-591, P1-599, P1-847, P1-864, P1-895, P1-902, P1-929, P1-942, P1-954, P1-956, P1-964, P1-965, P1-969, P1-975, P1-979, P1-990, P1-1011, P1-1018, P1-1019, P1-1021, P1-1022, P1-1033, P1-1034, P1-1036, P1-1045, P1-1047, P1-1048, P1-1051, P1-1053, P1-1054, P1-1055, P1-1057, P1-1059, P1-1062, P1-1065, P1-1075, P1-1076, P1-1079, P1-1080, P1-1084, P1-1085, P1-1086, P1-1088, P1-1090, P1-1091, P1-1092, P1-1095, P1-1096, P1-1099, P1-1100, P1-1104, P1-1111, P1-1112, P1-1113, P1-1114

Truncated in this map: showing first 120 of 362. Use the category counts above before selecting any manual batch.

### Legal Boundary Items

P1-140, P1-142, P1-147, P1-180, P1-181, P1-184, P1-189, P1-212, P1-217, P1-223, P1-248, P1-265, P1-287, P1-288, P1-316, P1-318, P1-319, P1-321, P1-323, P1-333, P1-337, P1-338, P1-339, P1-340, P1-341, P1-342, P1-343, P1-348, P1-352, P1-356, P1-357, P1-361, P1-364, P1-365, P1-370, P1-386, P1-403, P1-404, P1-405, P1-406, P1-407, P1-408, P1-409, P1-410, P1-411, P1-412, P1-414, P1-415, P1-416, P1-417, P1-418, P1-419, P1-420, P1-421, P1-422, P1-423, P1-424, P1-425, P1-426, P1-427, P1-428, P1-429, P1-430, P1-431, P1-432, P1-433, P1-434, P1-435, P1-436, P1-437, P1-438, P1-439, P1-440, P1-441, P1-442, P1-443, P1-444, P1-445, P1-446, P1-447, P1-448, P1-449, P1-450, P1-451, P1-452, P1-453, P1-454, P1-455, P1-456, P1-457, P1-458, P1-459, P1-460, P1-461, P1-462, P1-463, P1-464, P1-465, P1-466, P1-467, P1-468, P1-469, P1-470, P1-471, P1-472, P1-473, P1-474, P1-475, P1-476, P1-477, P1-478, P1-479, P1-480, P1-481, P1-483, P1-484, P1-485, P1-486, P1-487, P1-488

Truncated in this map: showing first 120 of 649. Use the category counts above before selecting any manual batch.

### Do Not Auto / Explicit Exclusion Items

P1-018, P1-079, P1-091, P1-181, P1-223, P1-248, P1-357, P1-577, P1-735, P1-776, P1-880, P1-902, P1-916, P1-924, P1-967, P1-983, P1-1034, P1-1192, P1-1242, P1-1248, P1-1255, P1-1352, P3-032, P3-034, P3-036, P3-060, P3-061, P3-062, P3-066, P3-067, P3-069, P3-071, P3-074, P3-075, P3-127, P3-131, P3-135, P3-145, P3-147, P3-148, P3-149, P3-150, P3-151, P3-152, P3-153, P3-154, P3-155, P3-156, P3-157, P3-158, P3-159, P3-160, P3-161, P3-162, P3-163, P3-164, P3-165, P3-166, P3-167, P3-168, P3-169, P3-170, P3-171, P3-172, P3-173, P3-174, P3-175, P3-176, P3-177, P3-178, P3-179, P3-180, P3-181, P3-182, P3-183, P3-184, P3-185, P3-186, P3-187, P3-188, P3-189, P3-190, P3-191, P3-192, P3-193, P3-194, P3-195, P3-196, P3-197, P3-198, P3-199, P3-200, P3-202, P3-203, P3-204, P3-205, P3-206, P3-207, P3-208, P3-209, P3-210, P3-213, P3-214, P3-215, P3-217, P3-218, P3-219, P3-220, P3-221, P3-222, P3-223, P3-225, P3-226, P3-227, P3-228, P3-229, P3-230, P3-232, P3-233, P3-234

Truncated in this map: showing first 120 of 198. Use the category counts above before selecting any manual batch.

### Needs PDF/Textbook Evidence Items

P1-341, P1-664, P1-721, P3-060, P3-061, P3-062, P3-311, P3-349, P3-377, P3-544, P3-556, P3-780, P3-785, P3-804

### Manual Confirmation Required Items

P1-001, P1-018, P1-039, P1-046, P1-055, P1-059, P1-071, P1-079, P1-091, P1-093, P1-140, P1-142, P1-147, P1-180, P1-181, P1-184, P1-189, P1-212, P1-217, P1-223, P1-248, P1-265, P1-287, P1-288, P1-316, P1-318, P1-319, P1-321, P1-323, P1-333, P1-337, P1-338, P1-339, P1-340, P1-341, P1-342, P1-343, P1-348, P1-352, P1-356, P1-357, P1-361, P1-364, P1-365, P1-370, P1-386, P1-403, P1-404, P1-405, P1-406, P1-407, P1-408, P1-409, P1-410, P1-411, P1-412, P1-414, P1-415, P1-416, P1-417, P1-418, P1-419, P1-420, P1-421, P1-422, P1-423, P1-424, P1-425, P1-426, P1-427, P1-428, P1-429, P1-430, P1-431, P1-432, P1-433, P1-434, P1-435, P1-436, P1-437, P1-438, P1-439, P1-440, P1-441, P1-442, P1-443, P1-444, P1-445, P1-446, P1-447, P1-448, P1-449, P1-450, P1-451, P1-452, P1-453, P1-454, P1-455, P1-456, P1-457, P1-458, P1-459, P1-460, P1-461, P1-462, P1-463, P1-464, P1-465, P1-466, P1-467, P1-468, P1-469, P1-470, P1-471, P1-472, P1-473, P1-474, P1-475, P1-476, P1-477

Truncated in this map: showing first 120 of 1099. Use the category counts above before selecting any manual batch.

### Cannot Auto Under Current Evidence

P1-018, P1-079, P1-091, P1-140, P1-142, P1-147, P1-180, P1-181, P1-184, P1-189, P1-212, P1-217, P1-223, P1-248, P1-265, P1-287, P1-288, P1-316, P1-318, P1-319, P1-321, P1-323, P1-333, P1-337, P1-338, P1-339, P1-340, P1-341, P1-342, P1-343, P1-348, P1-352, P1-356, P1-357, P1-361, P1-364, P1-365, P1-370, P1-386, P1-403, P1-404, P1-405, P1-406, P1-407, P1-408, P1-409, P1-410, P1-411, P1-412, P1-414, P1-415, P1-416, P1-417, P1-418, P1-419, P1-420, P1-421, P1-422, P1-423, P1-424, P1-425, P1-426, P1-427, P1-428, P1-429, P1-430, P1-431, P1-432, P1-433, P1-434, P1-435, P1-436, P1-437, P1-438, P1-439, P1-440, P1-441, P1-442, P1-443, P1-444, P1-445, P1-446, P1-447, P1-448, P1-449, P1-450, P1-451, P1-452, P1-453, P1-454, P1-455, P1-456, P1-457, P1-458, P1-459, P1-460, P1-461, P1-462, P1-463, P1-464, P1-465, P1-466, P1-467, P1-468, P1-469, P1-470, P1-471, P1-472, P1-473, P1-474, P1-475, P1-476, P1-477, P1-478, P1-479, P1-480, P1-481, P1-483, P1-484, P1-485

Truncated in this map: showing first 120 of 952. Use the category counts above before selecting any manual batch.

## Interpretation

Batch 1-16 appears to have exhausted the ordinary low-risk automatic pool. The remaining set is dominated by overlapping legal, regulatory, negative, combination, all-items, Do Not Auto, and source-confirmation risks. The next safe step is not Batch 17 rewriting, but a manual evidence pass or a narrower source-confirmed audit.
