# Full Explanation Batch 4 Rewrite Audit

Updated: 2026-06-01

Scope: 60 ordinary low-risk template questions. This batch rewrites only `simple_explanation`.

## Rewrite Audit

Actual changed `simple_explanation` IDs: 60.
Protected field comparison: passed.
JSON parse: passed.
Question counts: P1=1391, P3=807, total=2198.
ID continuity: passed.
Changed field scope: selected IDs simple_explanation only.
Five-section structure: 60/60 passed.
Encoding check: passed.
Template / empty wording check: passed.
Do Not Auto / manual exclusion overlap: 0.
Spotcheck: 18/60 (30%) sampled, 18 keep, 0 repair/manual.

Before SHA256:
- P1: `F761E5BE53AB8E31F26F72B4DCFEEBC29893F4C2757A8C4DB8699440373F6FE9`
- P3: `462AF0791EE0D349C074053C5A3C887E2A94D4B4D764F6AFF01702928F8B0169`

After SHA256:
- P1: `0C084E5973B564AAF77C20A9FEBBD1CCB41AFF7B4B386C1BABEC1E1E177BBE97`
- P3: `462AF0791EE0D349C074053C5A3C887E2A94D4B4D764F6AFF01702928F8B0169`

| ID | Paper | chapter/section | Answer | Question | Correct option | Verdict |
|---|---|---|---|---|---|---|
| `P1-025` | P1 | 1/1.1 | A | 「保险」与「风险」之间的关系是如何? | 有些风险（不是所有类型的风险）是可保的， （有些不可保）／有关，但并非所有类型的风险 都可以得到承保 | rewritten and validated |
| `P1-034` | P1 | 1/1.1 | D | 以下哪项是描述纯粹风险／纯风险而不是投机风险？ | 一辆汽车撞毁另一辆汽车／撞毁汽车 | rewritten and validated |
| `P1-054` | P1 | 1/1.1 | C | 就可保性而言，特定风险可以形容为： | 可保性相对于基本风险为高 | rewritten and validated |
| `P1-063` | P1 | 1/1.1 | D | 饥荒，战争及大规模水灾／洪灾是属于哪类风险？ | 基本风险 | rewritten and validated |
| `P1-066` | P1 | 1/1.1 | C | 核风险一般为： | 商业保险不会受保 | rewritten and validated |
| `P1-106` | P1 | 1/1.1 | B | 不提供专业意见以避免负上法律责任的风险管理措施是： | 风险避免 | rewritten and validated |
| `P1-135` | P1 | 2/2.1 | A | 合约可以定义为： | 具有法律效力的协议／在法律上强制执行的协议 | rewritten and validated |
| `P1-136` | P1 | 2/2.1 | C | 合约是法律上可强制执行的协议，而： | 内容可包含重要及次要事项 | rewritten and validated |
| `P1-137` | P1 | 2/2.1 | C | 合约是法律上可强制执行的协议，而： | 内容可包含重要及较不重要事项 | rewritten and validated |
| `P1-138` | P1 | 2/2.1 | C | 合约是一项法律上可强制执行的协议： | 它们可能与重要的或较次要的事情有关 | rewritten and validated |
| `P1-145` | P1 | 2/2.1 | B | 家庭内的安排，例如替妈妈做家务的协定： | 一般不构成一份合约 | rewritten and validated |
| `P1-152` | P1 | 2/2.1 | D | 如要有效，一份合约必须: | 符合上述A 和B | rewritten and validated |
| `P1-156` | P1 | 2/2.1 | A | 经有关人士之行为推断出来的一份合约属于： | 简单合约 | rewritten and validated |
| `P1-157` | P1 | 2/2.1 | D | 合约是什么？ | (a)及(c)都是正确的 | rewritten and validated |
| `P1-170` | P1 | 2/2.1 | C | 为何保险合约属于简单合约? | 因为没有指定要以书面订立 | rewritten and validated |
| `P1-173` | P1 | 2/2.1 | B | 下列哪项是简单合约的特性? | 法律上毋须以书面形式出现 | rewritten and validated |
| `P1-182` | P1 | 2/2.1 | A | 下列哪项或哪些有关以契据形式订立的合约的评论是正确的？ | 它们经盖章后发出 | rewritten and validated |
| `P1-187` | P1 | 2/2.1 | D | 以下哪项显示出有关人士并无订约的行为能力？ | 没有订立合约的法律能力 | rewritten and validated |
| `P1-202` | P1 | 2/2.1 | A | 保险保障要求提出后，保险人要求增加保费才接受保险保障要求， 保险人的要求在法律上称为 : | 反要约 | rewritten and validated |
| `P1-206` | P1 | 2/2.1 | C | 美琪临上机前购买保单，保险人承诺美琪可回来后才缴付保费，美 琪在途中失去一腿，而保险人拒绝赔偿，请问这情况可行吗? | 不可以，因某些保险在未缴付保费下仍可生效 | rewritten and validated |
| `P1-207` | P1 | 2/2.1 | A | 安琪在上机前买保险，保险人同意安琪可回来后才缴付保费，安琪 在途中失去一腿，而保险人拒绝赔偿，请问保险人是可有权拒绝赔 偿? | 不可以，看不到不完整的合约元素存在 | rewritten and validated |
| `P1-208` | P1 | 2/2.1 | B | 安琪在登机前购买一份旅游保险，保险人容许她在旅程后缴付保险 费。安琪不幸在旅程中断了一条腿，保险人拒绝赔付安琪有关的医 疗费用，请问保险人有权... | 没有。一张旅游保险合约已经生效 | rewritten and validated |
| `P1-214` | P1 | 2/2.1 | B | 在保险合约中，保险人所付出的代价为： | 作出赔偿的承诺／支付有效索偿的承诺 | rewritten and validated |
| `P1-216` | P1 | 2/2.1 | D | 在简单合约中，没有「订约的行为能力」的一方是指： | 那一方没有订立合约的法律能力 | rewritten and validated |
| `P1-221` | P1 | 2/2.1 | C | 保险合约中，「订约的行为能力」这个元素只涉及： | 保单持有人及保险人 | rewritten and validated |
| `P1-222` | P1 | 2/2.1 | A | 保险合约中，「订约的行为能力」适用于: | 保险人及被保险人 | rewritten and validated |
| `P1-224` | P1 | 2/2.1 | A | 按照简单合约，订约的行为能力是指订立合约的能力，在保险合约 方面，这个元素该涉及 : | 投保人及保险人 | rewritten and validated |
| `P1-225` | P1 | 2/2.1 | C | 「一份协议的内容必须是合法的」，此句子形容合约元素中的哪一 项： | 合法性 | rewritten and validated |
| `P1-226` | P1 | 2/2.1 | D | 要成为有效的合约，必须包含： | 订立法律关系的意图 | rewritten and validated |
| `P1-227` | P1 | 2/2.1 | C | 要达成有效合约，一项协议必须在订立时具备订立法律关系的意向 ，下面哪项属于这方面的要求？ | 在没有明示意向订立法律关系的某种情况下，订立法律 关系意向是可以由法院推定的 | rewritten and validated |
| `P1-228` | P1 | 2/2.1 | D | 构成有效的简单合约，必须符合以下哪项要求? | 订立法律关系意图 | rewritten and validated |
| `P1-230` | P1 | 2/2.1 | B | 要成为有效合约，一份协议必须具备订立法律关系的意向，以下哪 项构成有关内容？ | 在订立法律关系时没有明示意向的某种情况下，订立法律 关系的意向可以由法庭推定的 | rewritten and validated |
| `P1-231` | P1 | 2/2.1 | A | 简单合约要素具有多种，其中订立协议双方明确自己的目的，并知 道有关条款具有法律效力，此要素称为： | 订立法律关系的意向 | rewritten and validated |
| `P1-232` | P1 | 2/2.1 | D | 在「一般保险」的合约中发生了一些误解，被保险人希望为他的家 居财产投保，但保单保障该建筑物的结构及家居财产，因此这合约 便视为「无效」，因为它... | 订立法律关系的意向 | rewritten and validated |
| `P1-234` | P1 | 2/2.1 | C | 如果一份合约是「无效的」意指： | 在法律上这份合约是无效的 | rewritten and validated |
| `P1-236` | P1 | 2/2.1 | C | 一份「可使无效」的合约，如果合约的受屈一方没有采取有关行动 ，那么： | 有关合约在合理时间后便不会变成无效 | rewritten and validated |
| `P1-239` | P1 | 2/2.1 | B | 一份「可使无效的」合约，若合约的受屈一方没有采取行动，该份 合约会如何？ | 有关合约在合理时间过后不可被视为无效 | rewritten and validated |
| `P1-240` | P1 | 2/2.1 | C | 如果一份合约称为可使无效，意味著其中一方可在某种情况下让合 约变为无效，如果该一方并未采取有关行动： | 经过一段「合理」时间后，该合约便不会就该种情况变为无效 | rewritten and validated |
| `P1-242` | P1 | 2/2.1 | D | 有些合约是「可使无效的」，「可使无效」是指： | 是有效的，（其法律效力一直维持下去），直至受屈 一方可于合理时间内把合约视为无效 | rewritten and validated |
| `P1-247` | P1 | 2/2.2 | A | 「透过他人行事与自己亲自执行并无分别」，这属于下列哪个保险 法律原则？ | 代理法 | rewritten and validated |
| `P1-249` | P1 | 2/2.2 | C | 在执行上，以下哪项对代理法规管的描述是正确的 : | 委托人对代理人需负上转承责任 | rewritten and validated |
| `P1-250` | P1 | 2/2.2 | D | 代理法适用于： | 各种不同的代理人 | rewritten and validated |
| `P1-251` | P1 | 2/2.2 | D | 代理法 | 适用的范围比应用于保险为广泛 | rewritten and validated |
| `P1-252` | P1 | 2/2.2 | A | 在执行上，以下哪项对代理法规管的描述是正确的 : | 保险代理人及保险经纪都被视为保险中介人 | rewritten and validated |
| `P1-253` | P1 | 2/2.2 | A | 保险中介人是指哪些人士？ | 保险代理人 | rewritten and validated |
| `P1-254` | P1 | 2/2.2 | D | 代理法适用于： | 保险代理人及保险经纪 | rewritten and validated |
| `P1-256` | P1 | 2/2.2 | D | 以下哪项有关保险中介人的陈述是正确的？ | 与一般代理一样，保险代理人代表委托人 | rewritten and validated |
| `P1-259` | P1 | 2/2.2 | D | 代理法的应用范围包括甚么？ | 适用的范围比应用在保险代理人上要广泛得多 | rewritten and validated |
| `P1-261` | P1 | 2/2.2 | D | 对于本地保险中介人 : | 他们包括保险代理人及保险经纪 | rewritten and validated |
| `P1-262` | P1 | 2/2.2 | A | 保险代理人受下列哪类人士委托? | 保险人 | rewritten and validated |
| `P1-264` | P1 | 2/2.2 | D | 保险经纪代表下列哪项人士？ | 被保险人 | rewritten and validated |
| `P1-266` | P1 | 2/2.2 | A | 保险代理人受下列哪类人士委托? | 保险人 | rewritten and validated |
| `P1-267` | P1 | 2/2.2 | B | 中介人分类中，代表保单持有人的代理人是： | 保险经纪 | rewritten and validated |
| `P1-268` | P1 | 2/2.2 | A | 保险经纪代表下列哪项人士？ | 保单持有人 | rewritten and validated |
| `P1-269` | P1 | 2/2.2 | D | 代理关系中，委托人的授权行为受以下那项法律原则约束？ | 透过他人行事与自己亲自执行并无分别 | rewritten and validated |
| `P1-270` | P1 | 2/2.2 | D | 某人对经授权的行为产生的约束力： | 透过他人行事与自己亲自执行并无分别 | rewritten and validated |
| `P1-272` | P1 | 2/2.2 | A | 「一种基于与他人存在某种关系而要对该人行为负上责任」的原则 称为 : | 转承责任 | rewritten and validated |
| `P1-273` | P1 | 2/2.2 | A | 「一种要对他人的作为或不作为应负的法律责任」的原则称为 : | 转承责任 | rewritten and validated |
| `P1-274` | P1 | 2/2.2 | A | 在法律上「一种透过他人行事与自己亲自执行并无分别」的原则称 为： | 转承责任 | rewritten and validated |
| `P1-275` | P1 | 2/2.2 | C | 「透过他人行事与自己亲自执行并无分别，须受代理人的行为所约 束」，属于以下哪个法律原则？ | 转承责任 | rewritten and validated |

## Validation Details

- Bad scope IDs: none
- Protected field diffs: none
- Five-section failures: none
- Encoding failures: none
- Template failures: none
- Do Not Auto overlap: none
