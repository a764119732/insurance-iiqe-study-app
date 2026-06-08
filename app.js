const DATA_FILES = {
  P1: "./data/paper1_questions.json",
  P3: "./data/paper3_questions.json",
};

const STORAGE_NAMESPACE = "iiqeStudyApp:v1";
const STORAGE_KEY = `${STORAGE_NAMESPACE}:state`;
const LEGACY_STORAGE_KEY = "iiqe-study-state-v1";
const THEME_STORAGE_KEY = "iiqeStudyApp:theme";
const QUESTION_HIGHLIGHTS_STORAGE_KEY = "iiqeStudyApp:questionHighlights:v1";
const LAST_QUESTION_STORAGE_KEY = "iiqeStudyApp:lastQuestion:v1";
const DAILY_STATS_STORAGE_KEY = "iiqeStudyApp:dailyStats:v1";
const CUSTOM_EXPLANATIONS_STORAGE_KEY = "iiqeStudyApp:customExplanations:v1";
const EXAM_DATE = new Date("2026-06-12T00:00:00+08:00");
const app = document.querySelector("#app");
const navItems = [...document.querySelectorAll(".nav-item")];
const themeToggle = document.querySelector("#themeToggle");

let questions = [];
let byId = new Map();
let route = "home";
let quizQueue = [];
let quizIndex = 0;
let quizJumpMessage = "";
let questionIdSearch = {
  query: "",
  resultId: null,
  message: "",
};
let highlightHint = "";
let cachedQuestionSelection = null;
let activeExam = null;
let examTimer = null;

const defaultState = {
  answers: {},
  mistakes: {},
  favorites: [],
  mastered: [],
  examHistory: [],
  settings: {
    script: "simplified",
    showOriginal: false,
  },
  activePaper: "P1",
  expandedChapters: {
    P1: null,
    P3: null,
  },
  sessions: {
    practice: null,
    exam: null,
  },
  lastQuestionId: null,
};

let state = loadState();

function loadState() {
  try {
    const savedRaw = localStorage.getItem(STORAGE_KEY);
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    const usedLegacy = !savedRaw && !!legacyRaw;
    const saved = JSON.parse(savedRaw || legacyRaw || "{}");
    const normalized = normalizeState(saved);
    if (usedLegacy) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    }
    return normalized;
  } catch {
    return structuredClone(defaultState);
  }
}

function normalizeState(saved = {}) {
  const mistakes = {};
  Object.entries(saved.mistakes || {}).forEach(([id, mistake]) => {
    const source = mistake && typeof mistake === "object" ? mistake : {};
    const wrongCount = Number.isFinite(source.wrongCount) ? source.wrongCount : Number(source.count || 0);
    mistakes[id] = {
      ...source,
      count: wrongCount,
      wrongCount,
    };
  });
  return {
    ...structuredClone(defaultState),
    ...saved,
    mistakes,
    settings: { ...defaultState.settings, ...(saved.settings || {}) },
    expandedChapters: { ...defaultState.expandedChapters, ...(saved.expandedChapters || {}) },
    sessions: { ...defaultState.sessions, ...(saved.sessions || {}) },
    favorites: Array.isArray(saved.favorites) ? saved.favorites : [],
    mastered: Array.isArray(saved.mastered) ? saved.mastered : [],
    examHistory: Array.isArray(saved.examHistory) ? saved.examHistory : [],
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme, { persist = true } = {}) {
  const normalized = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = normalized;
  if (themeToggle) {
    const isDark = normalized === "dark";
    themeToggle.textContent = isDark ? "Dark 模式" : "Light 模式";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.title = isDark ? "当前夜间模式，点击切换到白天模式" : "当前白天模式，点击切换到夜间模式";
  }
  if (!persist) return;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, normalized);
  } catch {
    // Theme switching should still work even if localStorage is unavailable.
  }
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

async function loadQuestions() {
  app.innerHTML = document.querySelector("#loadingTemplate").innerHTML;
  try {
    const batches = await Promise.all(
      Object.values(DATA_FILES).map((file) => fetch(file).then((res) => {
        if (!res.ok) throw new Error(`${file}: ${res.status}`);
        return res.json();
      }))
    );
    questions = batches.flat();
    byId = new Map(questions.map((q) => [q.id, q]));
    ensureDefaultExpandedChapters();
    if (discardInvalidSessions()) saveState();
    render();
  } catch (error) {
    app.innerHTML = `
      <section class="empty-state">
        <h2>题库读取失败</h2>
        <p>请在项目目录运行 <code>python -m http.server 8000</code>，然后打开 <code>http://localhost:8000</code>。错误：${escapeHtml(error.message)}</p>
      </section>
    `;
  }
}

function t(question, key) {
  const simplified = state.settings.script === "simplified";
  if (key === "question") return simplified ? question.question_simplified : question.question_traditional;
  if (key === "options") return simplified ? question.options_simplified : question.options_traditional;
  return question[key];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getHighlightStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(QUESTION_HIGHLIGHTS_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveHighlightStore(store) {
  localStorage.setItem(QUESTION_HIGHLIGHTS_STORAGE_KEY, JSON.stringify(store));
}

function getHighlightsForQuestion(questionId) {
  const values = getHighlightStore()[questionId];
  if (!Array.isArray(values)) return [];
  return values
    .map(normalizeHighlightEntry)
    .filter(Boolean)
    .filter((entry, index, entries) =>
      entries.findIndex((item) =>
        item.text === entry.text &&
        item.scope === entry.scope &&
        item.offsetStart === entry.offsetStart &&
        item.offsetEnd === entry.offsetEnd
      ) === index
    );
}

function normalizeHighlightEntry(item) {
  if (typeof item === "string") {
    const text = item.trim();
    return text ? { text, scope: "question", createdAt: null } : null;
  }
  if (!item || typeof item !== "object") return null;
  const text = String(item.text || "").trim();
  if (!text) return null;
  const allowedScopes = new Set(["question", "option", "explanation", "original"]);
  const scope = allowedScopes.has(item.scope) ? item.scope : "question";
  const createdAt = Number.isFinite(item.createdAt) ? item.createdAt : null;
  const offsetStart = Number.isFinite(item.offsetStart) ? item.offsetStart : null;
  const offsetEnd = Number.isFinite(item.offsetEnd) ? item.offsetEnd : null;
  const hasValidOffsets = offsetStart !== null && offsetEnd !== null && offsetEnd > offsetStart && offsetStart >= 0;
  return {
    text,
    scope,
    createdAt,
    offsetStart: hasValidOffsets ? offsetStart : null,
    offsetEnd: hasValidOffsets ? offsetEnd : null,
  };
}

function serializeHighlightEntry(entry) {
  const result = {
    text: entry.text,
    scope: entry.scope,
    createdAt: entry.createdAt || Date.now(),
  };
  if (entry.offsetStart !== null && entry.offsetStart !== undefined && entry.offsetEnd !== null && entry.offsetEnd !== undefined) {
    result.offsetStart = entry.offsetStart;
    result.offsetEnd = entry.offsetEnd;
  }
  return result;
}

function addHighlightForQuestion(questionId, selectedText, scope = "question", offsetStart = null, offsetEnd = null) {
  const text = String(selectedText || "").trim();
  if (!text) return false;
  const store = getHighlightStore();
  const current = Array.isArray(store[questionId])
    ? store[questionId].map(normalizeHighlightEntry).filter(Boolean)
    : [];
  const entry = serializeHighlightEntry({ text, scope, offsetStart, offsetEnd });
  const exists = current.some((item) =>
    item.text === entry.text &&
    item.scope === entry.scope &&
    item.offsetStart === (entry.offsetStart !== undefined ? entry.offsetStart : null) &&
    item.offsetEnd === (entry.offsetEnd !== undefined ? entry.offsetEnd : null)
  );
  if (exists) return true;
  store[questionId] = [...current.map(serializeHighlightEntry), entry];
  saveHighlightStore(store);
  return true;
}

function clearHighlightsForQuestion(questionId) {
  const store = getHighlightStore();
  delete store[questionId];
  saveHighlightStore(store);
}

function renderTextWithHighlights(value, highlights, scope) {
  const text = String(value || "");
  const scopeHighlights = (highlights || []).filter((item) => item.scope === scope);
  if (!scopeHighlights.length) return escapeHtml(text);

  // Collect highlight regions
  const regions = [];

  // 1) Offset-based highlights (new): precise instance-level
  const offsetItems = scopeHighlights.filter((h) => h.offsetStart !== null && h.offsetStart !== undefined);
  for (const h of offsetItems) {
    let start = h.offsetStart;
    let end = h.offsetEnd;
    // Boundary protection
    if (!Number.isFinite(start) || !Number.isFinite(end)) continue;
    start = Math.max(0, Math.min(start, text.length));
    end = Math.max(0, Math.min(end, text.length));
    if (end <= start) continue;
    regions.push({ start, end });
  }

  // 2) Legacy text-based highlights: only for items without offset (backward compat)
  const legacyTerms = scopeHighlights
    .filter((h) => h.offsetStart === null || h.offsetStart === undefined)
    .map((h) => h.text)
    .filter(Boolean);
  const uniqueLegacy = [...new Set(legacyTerms)].sort((a, b) => b.length - a.length);
  if (uniqueLegacy.length) {
    let idx = 0;
    while (idx < text.length) {
      const match = uniqueLegacy.find((term) => text.startsWith(term, idx));
      if (match) {
        regions.push({ start: idx, end: idx + match.length });
        idx += match.length;
      } else {
        idx += 1;
      }
    }
  }

  // Merge overlapping regions
  regions.sort((a, b) => a.start - b.start || a.end - b.end);
  const merged = [];
  for (const r of regions) {
    if (merged.length && r.start <= merged[merged.length - 1].end) {
      merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, r.end);
    } else {
      merged.push({ start: r.start, end: r.end });
    }
  }

  if (!merged.length) return escapeHtml(text);

  // Build HTML from merged regions
  let html = "";
  let cursor = 0;
  for (const r of merged) {
    if (r.start > cursor) {
      html += escapeHtml(text.slice(cursor, r.start));
    } else if (r.start < cursor) {
      // Skip overlapping portion already covered
      if (r.end <= cursor) continue;
      r.start = cursor;
    }
    html += `<mark class="question-highlight">${escapeHtml(text.slice(r.start, r.end))}</mark>`;
    cursor = r.end;
  }
  html += escapeHtml(text.slice(cursor));
  return html;
}

function renderQuestionWithHighlights(q, highlights) {
  return renderTextWithHighlights(t(q, "question"), highlights, "question");
}

function renderOptionsWithHighlights(text, highlights) {
  return renderTextWithHighlights(text, highlights, "option");
}

function renderExplanationWithHighlights(text, highlights) {
  return renderTextWithHighlights(text, highlights, "explanation");
}

function renderOriginalExplanationWithHighlights(text, highlights) {
  return renderTextWithHighlights(text, highlights, "original");
}

function getHighlightRootElement(questionId = "") {
  if (questionId) return document.querySelector(`.question-highlight-root[data-question-id="${questionId}"]`);
  return document.querySelector(".question-highlight-root[data-question-id]");
}

function isSelectionInsideHighlightRoot(selection, root) {
  if (!selection || selection.isCollapsed || !root || selection.rangeCount === 0) return false;
  const range = selection.getRangeAt(0);
  return root.contains(range.commonAncestorContainer)
    && root.contains(range.startContainer)
    && root.contains(range.endContainer);
}

function getClosestHighlightScopeElement(node) {
  const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentNode;
  return element?.nodeType === Node.ELEMENT_NODE ? element.closest("[data-highlight-scope]") : null;
}

function getSelectionScope(selection) {
  if (!selection || selection.rangeCount === 0) return "";
  const range = selection.getRangeAt(0);
  const startScope = getClosestHighlightScopeElement(range.startContainer);
  const endScope = getClosestHighlightScopeElement(range.endContainer);
  if (!startScope || !endScope || startScope !== endScope) return "";
  return startScope.dataset.highlightScope || "";
}

function clearCachedQuestionSelection() {
  clearCachedHighlightSelection();
}

function clearCachedHighlightSelection() {
  cachedQuestionSelection = null;
}

function getTextOffsetsInScope(range, scopeElement) {
  if (!range || !scopeElement) return null;
  const walker = document.createTreeWalker(scopeElement, NodeFilter.SHOW_TEXT, null, false);
  let totalOffset = 0;
  let startOffset = -1;
  let endOffset = -1;
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const len = node.textContent.length;
    if (node === range.startContainer) startOffset = totalOffset + range.startOffset;
    if (node === range.endContainer) endOffset = totalOffset + range.endOffset;
    totalOffset += len;
  }
  if (startOffset < 0 || endOffset < 0) return null;
  if (endOffset <= startOffset) return null;
  if (startOffset >= totalOffset || endOffset > totalOffset) return null;
  return { startOffset, endOffset };
}

function captureCurrentHighlightSelection() {
  const selection = window.getSelection();
  const root = getHighlightRootElement();
  if (!isSelectionInsideHighlightRoot(selection, root)) {
    if (selection && !selection.isCollapsed && selection.rangeCount > 0) clearCachedQuestionSelection();
    return false;
  }
  const selectedText = selection.toString().trim();
  if (!selectedText) return false;
  const scope = getSelectionScope(selection);
  if (!scope) return false;
  const range = selection.getRangeAt(0);
  const scopeElement = getClosestHighlightScopeElement(range.startContainer);
  const offsets = scopeElement ? getTextOffsetsInScope(range, scopeElement) : null;
  cachedQuestionSelection = {
    questionId: root.dataset.questionId,
    selectedText,
    scope,
    offsetStart: offsets ? offsets.startOffset : null,
    offsetEnd: offsets ? offsets.endOffset : null,
    timestamp: Date.now(),
  };
  return true;
}

function captureCurrentQuestionSelection() {
  return captureCurrentHighlightSelection();
}

function getSelectionFromHighlightRoot(questionId) {
  const selection = window.getSelection();
  const root = getHighlightRootElement(questionId);
  if (!isSelectionInsideHighlightRoot(selection, root)) return null;
  const selectedText = selection.toString().trim();
  const scope = getSelectionScope(selection);
  if (!selectedText || !scope) return null;
  const range = selection.getRangeAt(0);
  const scopeElement = getClosestHighlightScopeElement(range.startContainer);
  const offsets = scopeElement ? getTextOffsetsInScope(range, scopeElement) : null;
  return {
    selectedText,
    scope,
    offsetStart: offsets ? offsets.startOffset : null,
    offsetEnd: offsets ? offsets.endOffset : null,
  };
}

function getCachedHighlightSelection(questionId) {
  if (!cachedQuestionSelection || cachedQuestionSelection.questionId !== questionId) return null;
  return {
    selectedText: cachedQuestionSelection.selectedText,
    scope: cachedQuestionSelection.scope || "question",
    offsetStart: cachedQuestionSelection.offsetStart,
    offsetEnd: cachedQuestionSelection.offsetEnd,
  };
}

function getCachedQuestionSelection(questionId) {
  return getCachedHighlightSelection(questionId)?.selectedText || "";
}

function renderHighlightActions(q) {
  return `
    <div class="highlight-actions" aria-label="当前题目高亮操作">
      <button class="ghost-button" type="button" onpointerdown="handleHighlightButtonPointerDown(event, '${q.id}')" ontouchstart="handleHighlightButtonPointerDown(event, '${q.id}')" onclick="handleHighlightButtonClick(event, '${q.id}')">高亮选中文字</button>
      <button class="ghost-button" type="button" onclick="clearQuestionHighlights('${q.id}')">清除本题高亮</button>
      <p class="highlight-hint" aria-live="polite">${escapeHtml(highlightHint)}</p>
    </div>
  `;
}

function saveSelectedQuestionHighlight(questionId) {
  const currentSelection = getSelectionFromHighlightRoot(questionId);
  const cachedSelection = getCachedHighlightSelection(questionId);
  const selection = currentSelection || cachedSelection;
  if (!selection?.selectedText) {
    highlightHint = "请先选中当前题目内容里的文字。";
    renderQuiz();
    return;
  }
  if (!addHighlightForQuestion(questionId, selection.selectedText, selection.scope, selection.offsetStart, selection.offsetEnd)) {
    highlightHint = "请先选中当前题目内容里的文字。";
    renderQuiz();
    return;
  }
  highlightHint = "已保存本题高亮。";
  clearCachedQuestionSelection();
  window.getSelection()?.removeAllRanges();
  renderQuiz();
}

function highlightSelectedQuestionText(questionId) {
  saveSelectedQuestionHighlight(questionId);
}

function handleHighlightButtonPointerDown(event, questionId) {
  event.preventDefault();
  captureCurrentQuestionSelection();
  saveSelectedQuestionHighlight(questionId);
}

function handleHighlightButtonClick(event, questionId) {
  event.preventDefault();
  captureCurrentQuestionSelection();
  saveSelectedQuestionHighlight(questionId);
}

function clearQuestionHighlights(questionId) {
  clearHighlightsForQuestion(questionId);
  clearCachedQuestionSelection();
  highlightHint = "已清除本题高亮。";
  renderQuiz();
}

function getLastQuestionRecord() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LAST_QUESTION_STORAGE_KEY) || "null");
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function saveLastQuestionRecord(q) {
  if (!q?.id || !q?.paper) return;
  localStorage.setItem(LAST_QUESTION_STORAGE_KEY, JSON.stringify({
    questionId: q.id,
    paper: q.paper,
    updatedAt: Date.now(),
  }));
}

function clearLastQuestionRecord() {
  localStorage.removeItem(LAST_QUESTION_STORAGE_KEY);
}

function rememberCurrentQuestion(q) {
  saveLastQuestionRecord(q);
  state.lastQuestionId = q.id;
}

function jumpToLastQuestion() {
  highlightHint = "";
  const record = getLastQuestionRecord();
  const questionId = record?.questionId || state.lastQuestionId;
  if (!questionId) {
    questionIdSearch.message = "暂无上次做题记录。";
    render();
    return;
  }
  const q = byId.get(questionId);
  if (!q) {
    clearLastQuestionRecord();
    state.lastQuestionId = null;
    saveState();
    questionIdSearch.message = "上次做题记录已失效，已清除。";
    render();
    return;
  }
  questionIdSearch = {
    query: q.id,
    resultId: q.id,
    message: "已找到上次做题记录。",
  };
  enterQuestionIdPractice(q.id);
}

function getContextPaper(fallback = null) {
  if (fallback === "P1" || fallback === "P3") return fallback;
  if (route === "quiz") {
    const current = byId.get(quizQueue[quizIndex]);
    if (current?.paper === "P1" || current?.paper === "P3") return current.paper;
    const sessionPaper = state.sessions?.practice?.paper;
    if (sessionPaper === "P1" || sessionPaper === "P3") return sessionPaper;
  }
  if (state.activePaper === "P1" || state.activePaper === "P3") return state.activePaper;
  return null;
}

function normalizeQuestionIdInput(raw, contextPaper) {
  const value = String(raw || "").trim();
  const fullMatch = value.match(/^P([13])\s*-\s*(\d+)$/i);
  if (fullMatch) {
    return `P${fullMatch[1]}-${String(Number(fullMatch[2])).padStart(3, "0")}`;
  }
  if (/^\d+$/.test(value)) {
    if (!contextPaper) return null;
    return `${contextPaper}-${String(Number(value)).padStart(3, "0")}`;
  }
  return null;
}

function getQuestionLocation(q) {
  const sectionQuestions = questions.filter((item) => item.paper === q.paper && item.section === q.section);
  const chapterQuestions = questions.filter((item) => item.paper === q.paper && item.chapter === q.chapter);
  return {
    paperLabel: q.paper === "P1" ? "卷一" : q.paper === "P3" ? "卷三" : q.paper,
    chapterLabel: q.chapter ? `第${q.chapter}章${q.chapter_title ? ` ${q.chapter_title}` : ""}` : "",
    sectionLabel: q.section ? `第${q.section}节${q.section_title ? ` ${q.section_title}` : ""}` : "",
    sectionIndex: Math.max(0, sectionQuestions.findIndex((item) => item.id === q.id)) + 1,
    chapterIndex: Math.max(0, chapterQuestions.findIndex((item) => item.id === q.id)) + 1,
    sectionTotal: sectionQuestions.length,
    chapterTotal: chapterQuestions.length,
  };
}

function getQuestionSummary(q) {
  const text = t(q, "question").replace(/\s+/g, " ").trim();
  return text.length > 82 ? `${text.slice(0, 82)}...` : text;
}

function renderQuestionIdSearch(contextPaper = null) {
  const resolvedPaper = getContextPaper(contextPaper);
  const q = questionIdSearch.resultId ? byId.get(questionIdSearch.resultId) : null;
  return `
    <section class="question-id-search card" aria-label="题号搜索跳转">
      <form class="question-id-form" onsubmit="searchQuestionId(event, '${resolvedPaper || ""}')" novalidate>
        <label for="questionIdSearchInput">题号搜索 / 跳转</label>
        <div class="question-id-row">
          <input
            id="questionIdSearchInput"
            type="text"
            placeholder="${resolvedPaper ? `${resolvedPaper}-553 或 553` : "P1-553 或 P3-123"}"
            value="${escapeHtml(questionIdSearch.query)}"
            aria-describedby="questionIdSearchMessage"
          />
          <button class="button" type="submit">搜索</button>
          <button class="ghost-button" type="button" onclick="jumpToLastQuestion()">继续上次题目</button>
        </div>
      </form>
      <p class="question-id-message" id="questionIdSearchMessage" aria-live="polite">${escapeHtml(questionIdSearch.message)}</p>
      ${q ? renderQuestionIdSearchResult(q, resolvedPaper) : ""}
    </section>
  `;
}

function renderQuestionIdSearchResult(q, contextPaper) {
  const loc = getQuestionLocation(q);
  const paperNotice = contextPaper && contextPaper !== q.paper
    ? `<p class="question-id-notice">该题属于${loc.paperLabel}，进入练习时会切换到对应卷。</p>`
    : "";
  return `
    <div class="question-id-result">
      <div class="meta">
        <span class="pill">${escapeHtml(q.id)}</span>
        <span class="pill">${escapeHtml(loc.paperLabel)}</span>
        ${loc.chapterLabel ? `<span class="pill">${escapeHtml(loc.chapterLabel)}</span>` : ""}
        ${loc.sectionLabel ? `<span class="pill">${escapeHtml(loc.sectionLabel)}</span>` : ""}
      </div>
      <p class="question-id-summary">${escapeHtml(getQuestionSummary(q))}</p>
      <p class="question-id-position">
        ${loc.sectionTotal ? `本小节第 ${loc.sectionIndex} 题` : "小节顺序暂不可用"}
        ${loc.chapterTotal ? `｜本章第 ${loc.chapterIndex} 题` : ""}
      </p>
      ${paperNotice}
      <button class="button" type="button" onclick="enterQuestionIdPractice('${q.id}')">进入该题练习</button>
    </div>
  `;
}

function searchQuestionId(event, contextPaper = "") {
  event.preventDefault();
  const input = document.querySelector("#questionIdSearchInput");
  const raw = String(input?.value || "").trim();
  const resolvedPaper = getContextPaper(contextPaper || null);
  questionIdSearch = {
    query: raw,
    resultId: null,
    message: "",
  };

  const normalizedId = normalizeQuestionIdInput(raw, resolvedPaper);
  if (!normalizedId) {
    questionIdSearch.message = /^\d+$/.test(raw)
      ? "当前无法判断卷别，请输入完整题号，例如 P1-553。"
      : "请输入类似 P1-553 或 P3-123 的题号。";
    render();
    focusQuestionIdSearchInput();
    return;
  }

  const q = byId.get(normalizedId);
  if (!q) {
    questionIdSearch.message = "未找到该题。";
    render();
    focusQuestionIdSearchInput();
    return;
  }

  questionIdSearch.resultId = q.id;
  questionIdSearch.query = q.id;
  questionIdSearch.message = resolvedPaper && resolvedPaper !== q.paper
    ? "已找到该题；该题不在当前卷，可切换到对应卷。"
    : "已找到该题。";
  render();
}

function focusQuestionIdSearchInput() {
  window.requestAnimationFrame(() => {
    const input = document.querySelector("#questionIdSearchInput");
    input?.focus();
    input?.select();
  });
}

function getQuestionPracticeScope(q) {
  if (q.section) {
    const questionIds = questions.filter((item) => item.paper === q.paper && item.section === q.section).map((item) => item.id);
    return {
      paper: q.paper,
      mode: "section",
      scopeKey: `${q.paper}:section:${q.section}`,
      questionIds,
      startIndex: Math.max(0, questionIds.indexOf(q.id)),
    };
  }
  if (q.chapter) {
    const questionIds = questions.filter((item) => item.paper === q.paper && item.chapter === q.chapter).map((item) => item.id);
    return {
      paper: q.paper,
      mode: "chapter",
      scopeKey: `${q.paper}:chapter:${q.chapter}`,
      questionIds,
      startIndex: Math.max(0, questionIds.indexOf(q.id)),
    };
  }
  return {
    paper: q.paper,
    mode: "single",
    scopeKey: `single:${q.id}`,
    questionIds: [q.id],
    startIndex: 0,
  };
}

function showPracticeSwitchModal({ onStay, onSwitch }) {
  document.querySelector(".practice-resume-modal")?.remove();
  const modal = document.createElement("div");
  modal.className = "practice-resume-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="practice-resume-panel">
      <h2>当前已有未完成练习，是否切换到搜索到的题目？</h2>
      <div class="button-row">
        <button class="ghost-button" data-action="stay">继续当前练习</button>
        <button class="button" data-action="switch">切换到该题</button>
      </div>
    </div>
  `;
  modal.querySelector('[data-action="stay"]').addEventListener("click", () => {
    modal.remove();
    onStay();
  });
  modal.querySelector('[data-action="switch"]').addEventListener("click", () => {
    modal.remove();
    onSwitch();
  });
  document.body.appendChild(modal);
  modal.querySelector('[data-action="stay"]').focus();
}

function enterQuestionIdPractice(id) {
  const q = byId.get(id);
  if (!q) {
    questionIdSearch.message = "未找到该题。";
    render();
    return;
  }
  const scope = getQuestionPracticeScope(q);
  const startTarget = () => {
    state.activePaper = q.paper;
    startPracticeSession({ ...scope, allowResume: false });
  };
  const existing = state.sessions?.practice;
  if (isUnfinishedPracticeSession(existing) && samePracticeScope(existing, scope.paper, scope.mode, scope.scopeKey)) {
    const existingIndex = existing.questionIds.indexOf(q.id);
    if (existingIndex >= 0) {
      quizQueue = [...existing.questionIds];
      quizIndex = existingIndex;
      const answers = hydratePracticeSessionAnswers(existing);
      state.sessions.practice = {
        ...existing,
        currentIndex: quizIndex,
        answers,
        answeredIds: getSessionAnsweredIdsForQueue(quizQueue, { ...existing, answers }),
        updatedAt: new Date().toISOString(),
      };
      state.activePaper = q.paper;
      saveState();
      setRoute("quiz");
      return;
    }
  }
  if (isUnfinishedPracticeSession(existing) && !samePracticeScope(existing, scope.paper, scope.mode, scope.scopeKey)) {
    showPracticeSwitchModal({
      onStay: () => continuePracticeSession(existing),
      onSwitch: startTarget,
    });
    return;
  }
  startTarget();
}

function setRoute(nextRoute) {
  if (route === "quiz") persistPracticeSession();
  if (route === "exam") persistExamSession();
  route = nextRoute;
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.route === route));
  render();
}

function render() {
  clearInterval(examTimer);
  examTimer = null;
  app.classList.remove("has-sticky-actions");
  if (route === "home") renderHome();
  if (route === "bank") renderBank();
  if (route === "mistakes") renderMistakes();
  if (route === "mine") renderMine();
  if (route === "quiz") renderQuiz();
  if (route === "exam") renderExam();
  if (route === "examResult") renderExamResult();
}

function getStats() {
  const answeredIds = Object.keys(state.answers);
  const correctCount = answeredIds.filter((id) => state.answers[id].isCorrect).length;
  const wrongIds = Object.keys(state.mistakes).filter((id) => !state.mastered.includes(id));
  return {
    total: questions.length,
    done: answeredIds.length,
    correctCount,
    accuracy: answeredIds.length ? Math.round((correctCount / answeredIds.length) * 100) : 0,
    wrong: wrongIds.length,
    favorites: state.favorites.length,
  };
}

function getLocalDateKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getDailyStatsStore() {
  try {
    const raw = localStorage.getItem(DAILY_STATS_STORAGE_KEY);
    const parsed = JSON.parse(raw || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveDailyStatsStore(store) {
  try {
    localStorage.setItem(DAILY_STATS_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Storage full or unavailable; daily stats are non-critical.
  }
}

function recordDailyAnswer(questionId, paper) {
  try {
    if (!questionId || !paper) return;
    const dateKey = getLocalDateKey();
    const store = getDailyStatsStore();
    const day = store[dateKey] || { total: 0, P1: 0, P3: 0, answeredIds: [] };
    if (day.answeredIds.includes(questionId)) return;
    day.answeredIds.push(questionId);
    day.total = (day.total || 0) + 1;
    if (paper === "P1") day.P1 = (day.P1 || 0) + 1;
    if (paper === "P3") day.P3 = (day.P3 || 0) + 1;
    store[dateKey] = day;
    saveDailyStatsStore(store);
  } catch {
    // Non-critical; never block the quiz flow.
  }
}

function getLastNDaysStats(n) {
  const store = getDailyStatsStore();
  const days = [];
  for (let i = 0; i < n; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const entry = store[key] || { total: 0, P1: 0, P3: 0 };
    days.push({ date: key, ...entry });
  }
  return days;
}

function clearDailyStats() {
  try {
    localStorage.removeItem(DAILY_STATS_STORAGE_KEY);
  } catch {
    // Non-critical.
  }
}

function renderDailyStats() {
  const today = getLocalDateKey();
  const store = getDailyStatsStore();
  const todayStats = store[today] || { total: 0, P1: 0, P3: 0 };
  const last7 = getLastNDaysStats(7);
  return `
    <section class="daily-stats card">
      <div class="daily-stats-header">
        <h2>每日做题统计</h2>
        <button class="ghost-button" onclick="if(confirm('确定要清除每日做题统计吗？这不会影响答题记录和错题。')){clearDailyStats();render();}">清除统计</button>
      </div>
      <div class="stats-row">
        <div class="stat">
          <strong>${todayStats.total}</strong>
          <span>今日做题</span>
        </div>
        <div class="stat">
          <strong>${todayStats.P1}</strong>
          <span>今日 P1</span>
        </div>
        <div class="stat">
          <strong>${todayStats.P3}</strong>
          <span>今日 P3</span>
        </div>
      </div>
      <details class="daily-stats-week">
        <summary>最近 7 天</summary>
        <table class="daily-stats-table">
          <thead>
            <tr><th>日期</th><th>总题数</th><th>P1</th><th>P3</th></tr>
          </thead>
          <tbody>
            ${last7.map((d) => `
              <tr class="${d.date === today ? "today-row" : ""}">
                <td>${d.date === today ? "今天" : d.date}</td>
                <td>${d.total}</td>
                <td>${d.P1}</td>
                <td>${d.P3}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </details>
    </section>
  `;
}

function ensureDefaultExpandedChapters() {
  let changed = false;
  Object.keys(SYLLABUS).forEach((paper) => {
    if (Array.isArray(state.expandedChapters?.[paper])) return;
    const chaptersWithQuestions = [...new Set(questions.filter((q) => q.paper === paper).map((q) => q.chapter))];
    state.expandedChapters[paper] = chaptersWithQuestions;
    changed = true;
  });
  if (changed) saveState();
}

function discardInvalidSessions() {
  let changed = false;
  ["practice", "exam"].forEach((kind) => {
    const session = state.sessions?.[kind];
    if (!session) return;
    if (!isSessionUsable(session) || (kind === "exam" && session.endsAt <= Date.now())) {
      state.sessions[kind] = null;
      changed = true;
    }
  });
  return changed;
}

function isSessionUsable(session) {
  if (!session || !Array.isArray(session.questionIds) || !session.questionIds.length) return false;
  if (session.questionIds.some((id) => !byId.has(id))) return false;
  if (!Number.isInteger(session.currentIndex)) return false;
  return session.currentIndex >= 0 && session.currentIndex < session.questionIds.length;
}

function isUnfinishedPracticeSession(session) {
  if (!isSessionUsable(session)) return false;
  const answered = new Set(session.answeredIds || Object.keys(session.answers || {}));
  return session.currentIndex < session.questionIds.length - 1 || answered.size < session.questionIds.length;
}

function isUnfinishedExamSession(session, paper) {
  if (!isSessionUsable(session)) return false;
  if (paper && session.paper !== paper) return false;
  if (session.endsAt <= Date.now()) return false;
  const answered = new Set(session.answeredIds || []);
  return answered.size < session.questionIds.length;
}

function getAnsweredIdsForQueue(ids) {
  return ids.filter((id) => !!state.answers[id]);
}

function getSessionAnsweredIdsForQueue(ids, session = state.sessions.practice) {
  const sessionAnswers = session?.answers || {};
  return ids.filter((id) => !!sessionAnswers[id]);
}

function hydratePracticeSessionAnswers(session) {
  const answers = { ...(session?.answers || {}) };
  (session?.answeredIds || []).forEach((id) => {
    if (!answers[id] && state.answers[id]) answers[id] = { ...state.answers[id] };
  });
  return answers;
}

function getPracticeAnswer(id) {
  const session = state.sessions?.practice;
  if (!session?.questionIds?.includes(id)) return null;
  if (session?.answers?.[id]) return session.answers[id];
  if (session?.answeredIds?.includes(id) && state.answers[id]) return state.answers[id];
  return null;
}

function getWrongCount(id) {
  const mistake = state.mistakes[id];
  if (!mistake) return 0;
  return Number.isFinite(mistake.wrongCount) ? mistake.wrongCount : Number(mistake.count || 0);
}

function samePracticeScope(session, paper, mode, scopeKey) {
  return session?.paper === paper && session?.mode === mode && session?.scopeKey === scopeKey;
}

function continuePracticeSession(existing) {
  quizQueue = [...existing.questionIds];
  quizIndex = existing.currentIndex;
  quizJumpMessage = "";
  clearCachedQuestionSelection();
  highlightHint = "";
  const answers = hydratePracticeSessionAnswers(existing);
  state.sessions.practice = {
    ...existing,
    answers,
    answeredIds: getSessionAnsweredIdsForQueue(quizQueue, { ...existing, answers }),
    updatedAt: new Date().toISOString(),
  };
  saveState();
  setRoute("quiz");
}

function beginPracticeSession({ paper, mode, scopeKey, validIds, startIndex = 0 }) {
  quizQueue = validIds;
  quizIndex = Math.min(Math.max(startIndex, 0), validIds.length - 1);
  quizJumpMessage = "";
  clearCachedQuestionSelection();
  highlightHint = "";
  state.sessions.practice = {
    paper,
    mode,
    scopeKey,
    questionIds: [...quizQueue],
    currentIndex: quizIndex,
    answers: {},
    answeredIds: [],
    updatedAt: new Date().toISOString(),
  };
  saveState();
  setRoute("quiz");
}

function showPracticeResumeModal({ onContinue, onRestart }) {
  document.querySelector(".practice-resume-modal")?.remove();
  const modal = document.createElement("div");
  modal.className = "practice-resume-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="practice-resume-panel">
      <h2>检测到这个范围有未完成练习，是否继续？</h2>
      <div class="button-row">
        <button class="button" data-action="continue">继续上次练习</button>
        <button class="ghost-button" data-action="restart">重新开始</button>
      </div>
    </div>
  `;
  modal.querySelector('[data-action="continue"]').addEventListener("click", () => {
    modal.remove();
    onContinue();
  });
  modal.querySelector('[data-action="restart"]').addEventListener("click", () => {
    modal.remove();
    onRestart();
  });
  document.body.appendChild(modal);
  modal.querySelector('[data-action="continue"]').focus();
}

function startPracticeSession({ paper, mode, scopeKey, questionIds, startIndex = 0, allowResume = true }) {
  const validIds = questionIds.filter((id) => byId.has(id));
  if (!validIds.length) {
    quizQueue = [];
    quizIndex = 0;
    quizJumpMessage = "";
    state.sessions.practice = null;
    saveState();
    setRoute("quiz");
    return;
  }

  const existing = state.sessions.practice;
  if (
    allowResume &&
    samePracticeScope(existing, paper, mode, scopeKey) &&
    isUnfinishedPracticeSession(existing)
  ) {
    showPracticeResumeModal({
      onContinue: () => continuePracticeSession(existing),
      onRestart: () => beginPracticeSession({ paper, mode, scopeKey, validIds, startIndex: 0 }),
    });
    return;
  }

  beginPracticeSession({ paper, mode, scopeKey, validIds, startIndex });
}

function persistPracticeSession() {
  if (!state.sessions?.practice || !quizQueue.length) return;
  state.sessions.practice = {
    ...state.sessions.practice,
    questionIds: [...quizQueue],
    currentIndex: Math.min(Math.max(quizIndex, 0), quizQueue.length - 1),
    answers: { ...(state.sessions.practice.answers || {}) },
    answeredIds: getSessionAnsweredIdsForQueue(quizQueue),
    updatedAt: new Date().toISOString(),
  };
  saveState();
}

function persistExamSession() {
  if (!activeExam || activeExam.result) return;
  state.sessions.exam = {
    paper: activeExam.paper,
    mode: "exam",
    scopeKey: `${activeExam.paper}:exam`,
    questionIds: [...activeExam.ids],
    currentIndex: activeExam.index,
    answeredIds: Object.keys(activeExam.answers || {}),
    answers: { ...(activeExam.answers || {}) },
    startedAt: activeExam.startedAt,
    endsAt: activeExam.endsAt,
    minutes: activeExam.minutes,
    updatedAt: new Date().toISOString(),
  };
  saveState();
}

function restoreExamSession(session) {
  activeExam = {
    paper: session.paper,
    ids: [...session.questionIds],
    index: session.currentIndex,
    answers: { ...(session.answers || {}) },
    startedAt: session.startedAt,
    endsAt: session.endsAt,
    minutes: session.minutes,
  };
}

function renderHome() {
  const paper = state.activePaper || "P1";
  const paperMeta = SYLLABUS[paper];
  const stats = getPaperStats(paper);
  const daysLeft = getExamDaysLeft();
  app.innerHTML = `
    <section class="study-hero">
      <div class="paper-switch">
        <span class="paper-badge">${paperMeta.label}</span>
        <div class="segmented">
          <button class="${paper === "P1" ? "active" : ""}" onclick="setActivePaper('P1')">卷一</button>
          <button class="${paper === "P3" ? "active" : ""}" onclick="setActivePaper('P3')">卷三</button>
        </div>
      </div>
      <div class="hero-title-row">
        <div>
          <p class="eyebrow dark">章节学习地图</p>
          <h2>${paperMeta.title}</h2>
        </div>
        <div class="exam-countdown">
          <span>距考试剩</span>
          <strong>${daysLeft}</strong>
          <span>DAY</span>
        </div>
      </div>
      <div class="hero-progress">
        <div class="progress-copy">
          <strong>${stats.done}/${stats.total}</strong>
          <span>已答题数 / 总题数</span>
        </div>
        <div class="progress-copy">
          <strong>${stats.accuracy}%</strong>
          <span>正确率</span>
        </div>
      </div>
      <div class="progress-bar mastery"><span style="width:${stats.mastery}%"></span></div>
      <p class="hero-note">掌握度按“已答进度 × 正确率”估算，用来判断当前复习推进程度。</p>
    </section>

    ${renderDailyStats()}
    ${renderQuestionIdSearch(paper)}

    <section class="quick-grid" aria-label="快捷入口">
      ${renderQuickAction("模拟考试", "限时组卷", "📝", `startExam('${paper}')`)}
      ${renderQuickAction("随机练习", "打乱当前卷", "🎲", `startRandomPractice('${paper}')`)}
      ${renderQuickAction("我的错题", "按本卷复习", "✘", `startMistakeReview('${paper}')`)}
      ${renderQuickAction("我的收藏", "重点回看", "★", `startFavoriteReview('${paper}')`)}
    </section>

    <section class="chapter-map">
      <div class="section-heading">
        <h2>章节目录</h2>
        <span>${paperMeta.chapters.length} 章</span>
      </div>
      <div class="chapter-list">
        ${paperMeta.chapters.map((chapter) => renderChapterNode(paper, chapter)).join("")}
      </div>
    </section>
  `;
}

function renderQuickAction(title, subtitle, icon, action) {
  return `
    <button class="quick-card" onclick="${action}">
      <span class="quick-icon">${icon}</span>
      <strong>${title}</strong>
      <span>${subtitle}</span>
    </button>
  `;
}

function renderChapterNode(paper, chapter) {
  const stats = getChapterProgress(paper, chapter.chapter);
  const expanded = isChapterExpanded(paper, chapter.chapter);
  const canPractice = stats.total > 0;
  return `
    <article class="chapter-card">
      <div class="chapter-main">
        <button class="expand-button" onclick="toggleChapter('${paper}', '${chapter.chapter}')" aria-label="${expanded ? "收起" : "展开"}第${chapter.chapter}章">
          ${expanded ? "-" : "+"}
        </button>
        <button class="chapter-title-button" onclick="toggleChapter('${paper}', '${chapter.chapter}')">
          <span>第${chapter.chapter}章</span>
          <strong>${chapter.title}</strong>
        </button>
        <div class="chapter-stat">
          <strong>${stats.done}/${stats.total}</strong>
          <span>${canPractice ? `${stats.accuracy}%` : "待导入"}</span>
        </div>
      </div>
      <div class="chapter-progress-row">
        <div class="progress-bar"><span style="width:${stats.mastery}%"></span></div>
        <button class="${canPractice ? "mini-button" : "mini-button disabled"}" ${canPractice ? "" : "disabled"} onclick="startChapterPractice('${paper}', '${chapter.chapter}')">
          ${canPractice ? "练习" : "待导入"}
        </button>
      </div>
      ${expanded ? `
        <div class="section-list">
          ${chapter.sections.map((section, index) => renderSectionNode(paper, chapter, section, index, stats)).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function renderSectionNode(paper, chapter, section, index, chapterStats) {
  const sectionId = `${chapter.chapter}.${index + 1}`;
  const stats = getSectionProgress(paper, sectionId);
  const canPractice = stats.total > 0;
  return `
    <div class="section-row">
      <div class="section-left">
        <span class="section-dot"></span>
        <div>
          <strong>第${index + 1}节：${section}</strong>
          <span>${canPractice ? `正确率 ${stats.accuracy}%` : "待分类"}</span>
        </div>
      </div>
      <div class="section-right">
        <span>${canPractice ? `${stats.done}/${stats.total}` : "待分类"}</span>
        <button class="${canPractice ? "text-button" : "text-button disabled"}" ${canPractice ? "" : "disabled"} onclick="startSectionPractice('${paper}', '${sectionId}')">练习</button>
      </div>
    </div>
  `;
}

function getExamDaysLeft() {
  const now = new Date();
  const diff = EXAM_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / 86400000));
}

function getPaperStats(paper) {
  const paperQuestions = questions.filter((q) => q.paper === paper);
  const done = paperQuestions.filter((q) => state.answers[q.id]).length;
  const correct = paperQuestions.filter((q) => state.answers[q.id]?.isCorrect).length;
  const accuracy = done ? Math.round((correct / done) * 100) : 0;
  const progress = paperQuestions.length ? Math.round((done / paperQuestions.length) * 100) : 0;
  return {
    total: paperQuestions.length,
    done,
    correct,
    accuracy,
    mastery: Math.round((progress * accuracy) / 100),
  };
}

function getChapterProgress(paper, chapter) {
  const chapterQuestions = questions.filter((q) => q.paper === paper && q.chapter === chapter);
  const done = chapterQuestions.filter((q) => state.answers[q.id]).length;
  const correct = chapterQuestions.filter((q) => state.answers[q.id]?.isCorrect).length;
  const accuracy = done ? Math.round((correct / done) * 100) : 0;
  const progress = chapterQuestions.length ? Math.round((done / chapterQuestions.length) * 100) : 0;
  return {
    total: chapterQuestions.length,
    done,
    correct,
    accuracy,
    mastery: Math.round((progress * accuracy) / 100),
  };
}

function getSectionProgress(paper, section) {
  const sectionQuestions = questions.filter((q) => q.paper === paper && q.section === section);
  const done = sectionQuestions.filter((q) => state.answers[q.id]).length;
  const correct = sectionQuestions.filter((q) => state.answers[q.id]?.isCorrect).length;
  const accuracy = done ? Math.round((correct / done) * 100) : 0;
  const progress = sectionQuestions.length ? Math.round((done / sectionQuestions.length) * 100) : 0;
  return {
    total: sectionQuestions.length,
    done,
    correct,
    accuracy,
    mastery: Math.round((progress * accuracy) / 100),
  };
}

function isChapterExpanded(paper, chapter) {
  return (state.expandedChapters[paper] || []).includes(chapter);
}

function toggleChapter(paper, chapter) {
  const expanded = new Set(state.expandedChapters[paper] || []);
  if (expanded.has(chapter)) {
    expanded.delete(chapter);
  } else {
    expanded.add(chapter);
  }
  state.expandedChapters[paper] = [...expanded];
  saveState();
  renderHome();
}

function setActivePaper(paper) {
  state.activePaper = paper;
  saveState();
  renderHome();
}

function startChapterPractice(paper, chapter) {
  startPracticeSession({
    paper,
    mode: "chapter",
    scopeKey: `${paper}:chapter:${chapter}`,
    questionIds: questions.filter((q) => q.paper === paper && q.chapter === chapter).map((q) => q.id),
  });
}

function startSectionPractice(paper, section) {
  startPracticeSession({
    paper,
    mode: "section",
    scopeKey: `${paper}:section:${section}`,
    questionIds: questions.filter((q) => q.paper === paper && q.section === section).map((q) => q.id),
  });
}

function startRandomPractice(paper) {
  startPracticeSession({
    paper,
    mode: "random",
    scopeKey: `${paper}:random`,
    questionIds: shuffle(questions.filter((q) => q.paper === paper)).map((q) => q.id),
  });
}

function startFavoriteReview(paper = "ALL") {
  startPracticeSession({
    paper,
    mode: "favorites",
    scopeKey: `${paper}:favorites`,
    questionIds: state.favorites
      .map((id) => byId.get(id))
      .filter(Boolean)
      .filter((q) => paper === "ALL" || q.paper === paper)
      .map((q) => q.id),
  });
}

function renderBank() {
  const paper = getInputValue("paperFilter", "ALL");
  const chapter = getInputValue("chapterFilter", "ALL");
  const status = getInputValue("statusFilter", "ALL");
  const hot = getInputValue("hotFilter", "ALL");
  const keyword = getInputValue("keywordFilter", "").trim().toLowerCase();
  const chapters = [...new Set(questions.map((q) => `${q.paper}-${q.chapter}|${q.paper} 第${q.chapter}章 ${q.chapter_title}`))];
  const filtered = filterQuestions({ paper, chapter, status, hot, keyword });

  app.innerHTML = `
    <section class="tool-panel card">
      <h2>更多题库</h2>
      <div class="filters">
        <select id="paperFilter" onchange="renderBank()">
          ${option("ALL", "全部试卷", paper)}
          ${option("P1", "卷一", paper)}
          ${option("P3", "卷三", paper)}
        </select>
        <select id="chapterFilter" onchange="renderBank()">
          ${option("ALL", "全部章节", chapter)}
          ${chapters.map((item) => {
            const [value, label] = item.split("|");
            return option(value, label, chapter);
          }).join("")}
        </select>
        <select id="statusFilter" onchange="renderBank()">
          ${option("ALL", "全部状态", status)}
          ${option("TODO", "未做题", status)}
          ${option("WRONG", "错题", status)}
          ${option("FAV", "收藏题", status)}
        </select>
        <select id="hotFilter" onchange="renderBank()">
          ${option("ALL", "全部热度", hot)}
          ${option("HOT", "热门题目", hot)}
        </select>
        <input id="keywordFilter" value="${escapeHtml(keyword)}" placeholder="搜索关键词" oninput="renderBank()" />
      </div>
      <div class="button-row">
        <button class="button" onclick="startQueueFromFilters()">开始刷这批题</button>
      </div>
    </section>
    <section class="list" style="margin-top:12px">
      ${filtered.map(renderQuestionListItem).join("") || empty("没有符合条件的题目。")}
    </section>
  `;
}

function getInputValue(id, fallback) {
  return document.querySelector(`#${id}`)?.value ?? fallback;
}

function option(value, label, selected) {
  return `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`;
}

function filterQuestions({ paper = "ALL", chapter = "ALL", status = "ALL", hot = "ALL", keyword = "" } = {}) {
  return questions.filter((q) => {
    if (paper !== "ALL" && q.paper !== paper) return false;
    if (chapter !== "ALL" && `${q.paper}-${q.chapter}` !== chapter) return false;
    if (hot === "HOT" && !q.is_hot_question) return false;
    if (status === "TODO" && state.answers[q.id]) return false;
    if (status === "WRONG" && !state.mistakes[q.id]) return false;
    if (status === "FAV" && !state.favorites.includes(q.id)) return false;
    if (keyword) {
      const haystack = `${q.question_simplified} ${Object.values(q.options_simplified).join(" ")} ${q.tags.join(" ")}`.toLowerCase();
      if (!haystack.includes(keyword)) return false;
    }
    return true;
  });
}

function renderQuestionListItem(q) {
  const answer = state.answers[q.id];
  const wrong = state.mistakes[q.id];
  return `
    <article class="list-item">
      <h3>${escapeHtml(q.id)} ${escapeHtml(t(q, "question"))}</h3>
      <div class="meta">
        <span class="pill">${q.paper} 第${q.chapter}章</span>
        ${q.is_hot_question ? '<span class="pill hot">热门</span>' : ""}
        ${answer ? `<span class="pill">${answer.isCorrect ? "已答对" : "已答错"}</span>` : '<span class="pill">未做</span>'}
        ${wrong ? `<span class="pill">错了 ${getWrongCount(q.id)} 次</span>` : ""}
      </div>
      <div class="button-row">
        <button class="ghost-button" onclick="openSingleQuestion('${q.id}')">刷这题</button>
        <button class="ghost-button" onclick="toggleFavorite('${q.id}')">${state.favorites.includes(q.id) ? "取消收藏" : "收藏"}</button>
      </div>
    </article>
  `;
}

function empty(message) {
  return `<section class="empty-state"><p>${message}</p></section>`;
}

function startPaper(paper) {
  startPracticeSession({
    paper,
    mode: "paper",
    scopeKey: `${paper}:paper`,
    questionIds: questions.filter((q) => q.paper === paper).map((q) => q.id),
  });
}

function startQueueFromFilters() {
  const filterState = {
    paper: getInputValue("paperFilter", "ALL"),
    chapter: getInputValue("chapterFilter", "ALL"),
    status: getInputValue("statusFilter", "ALL"),
    hot: getInputValue("hotFilter", "ALL"),
    keyword: getInputValue("keywordFilter", ""),
  };
  startPracticeSession({
    paper: filterState.paper,
    mode: "filtered",
    scopeKey: `filtered:${JSON.stringify(filterState)}`,
    questionIds: filterQuestions(filterState).map((q) => q.id),
  });
}

function openSingleQuestion(id) {
  const q = byId.get(id);
  startPracticeSession({
    paper: q?.paper || "ALL",
    mode: "single",
    scopeKey: `single:${id}`,
    questionIds: [id],
    allowResume: false,
  });
}

function continueLast() {
  const record = getLastQuestionRecord();
  const lastQuestionId = record?.questionId || state.lastQuestionId;
  if (!lastQuestionId) return;
  const last = byId.get(lastQuestionId);
  if (!last) {
    clearLastQuestionRecord();
    state.lastQuestionId = null;
    saveState();
    return;
  }
  const ids = questions.filter((q) => q.paper === last.paper).map((q) => q.id);
  startPracticeSession({
    paper: last.paper,
    mode: "paper",
    scopeKey: `${last.paper}:paper`,
    questionIds: ids,
    startIndex: Math.max(0, ids.indexOf(last.id)),
    allowResume: false,
  });
}

function startMistakeReview(paper = "ALL") {
  startPracticeSession({
    paper,
    mode: "mistakes",
    scopeKey: `${paper}:mistakes`,
    questionIds: Object.keys(state.mistakes)
      .filter((id) => !state.mastered.includes(id))
      .map((id) => byId.get(id))
      .filter(Boolean)
      .filter((q) => paper === "ALL" || q.paper === paper)
      .map((q) => q.id),
  });
}

function renderQuiz() {
  if (!quizQueue.length) {
    app.innerHTML = empty("当前没有可刷的题目。");
    return;
  }
  const q = byId.get(quizQueue[quizIndex]);
  if (!q) {
    state.sessions.practice = null;
    quizQueue = [];
    quizIndex = 0;
    saveState();
    app.innerHTML = empty("这组练习里的题号已不存在，请重新选择练习范围。");
    return;
  }
  const answer = getPracticeAnswer(q.id);
  const options = t(q, "options");
  const loc = getQuestionLocation(q);
  const highlights = getHighlightsForQuestion(q.id);
  rememberCurrentQuestion(q);
  app.classList.toggle("has-sticky-actions", Boolean(answer));
  app.innerHTML = `
    <article class="question-card">
      <div class="meta">
        <span class="pill">${q.id}</span>
        <span class="pill">${q.paper} 第${q.chapter}章 ${q.chapter_title}</span>
        ${q.is_hot_question ? '<span class="pill hot">热门</span>' : ""}
        <span class="pill">当前练习第 ${quizIndex + 1} / ${quizQueue.length} 题</span>
      </div>
      <div class="question-location">
        <strong>${escapeHtml(q.id)}</strong>
        ${loc.chapterLabel ? `<span>｜${escapeHtml(loc.chapterLabel)}</span>` : ""}
        ${loc.sectionLabel ? `<span>｜${escapeHtml(loc.sectionLabel)}</span>` : ""}
        ${loc.sectionTotal ? `<span>｜本节第 ${loc.sectionIndex} 题</span>` : ""}
        <span>｜当前练习第 ${quizIndex + 1} / ${quizQueue.length} 题</span>
      </div>
      <p class="question-order-note">上面的“当前练习第 X / Y 题”是本次练习范围内顺序，不是全题库题号。</p>
      ${renderQuestionIdSearch(q.paper)}
      ${renderQuestionJumpControl()}
      ${renderHighlightActions(q)}
      <div class="question-highlight-root" data-question-id="${q.id}" onmouseup="captureCurrentQuestionSelection()" ontouchend="captureCurrentQuestionSelection()" onkeyup="captureCurrentQuestionSelection()">
        <h2 class="question-title" data-highlight-scope="question">${renderQuestionWithHighlights(q, highlights)}</h2>
        <div class="option-list">
          ${"ABCD".split("").map((letter) => renderOption(q, letter, options[letter], answer, highlights)).join("")}
        </div>
        ${answer ? renderResult(q, answer, highlights) : ""}
      </div>
      <div class="button-row">
        <button class="ghost-button" onclick="prevQuestion()">上一题</button>
        <button class="button" onclick="nextQuestion()">下一题</button>
        <button class="ghost-button" onclick="toggleFavorite('${q.id}')">${state.favorites.includes(q.id) ? "取消收藏" : "收藏"}</button>
        <button class="ghost-button" onclick="markWrong('${q.id}', true, false)">加入错题本</button>
      </div>
      ${answer ? renderQuizStickyActions(q) : ""}
    </article>
  `;
}

function renderQuestionJumpControl() {
  const current = quizIndex + 1;
  const total = quizQueue.length;
  return `
    <form class="question-jump" onsubmit="jumpToQuestion(event)" novalidate>
      <label for="questionJumpInput">第 ${current} / ${total} 题</label>
      <div class="question-jump-row">
        <input
          id="questionJumpInput"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          value="${current}"
          aria-describedby="questionJumpMessage"
        />
        <button class="ghost-button" type="submit">跳转</button>
      </div>
      <p class="question-jump-message" id="questionJumpMessage" aria-live="polite">${escapeHtml(quizJumpMessage)}</p>
    </form>
  `;
}

function renderQuizStickyActions(q) {
  const favoriteLabel = state.favorites.includes(q.id) ? "取消收藏" : "收藏";
  return `
    <div class="quiz-sticky-actions" aria-label="答题后操作">
      <button class="ghost-button" onclick="setRoute('home')">返回</button>
      <button class="ghost-button" onclick="toggleFavorite('${q.id}')">${favoriteLabel}</button>
      <button class="ghost-button" onclick="prevQuestion()">上一题</button>
      <button class="button" onclick="nextQuestion()">下一题 / 继续练习</button>
    </div>
  `;
}

function jumpToQuestion(event) {
  event.preventDefault();
  highlightHint = "";
  clearCachedQuestionSelection();
  const input = document.querySelector("#questionJumpInput");
  const raw = String(input?.value || "").trim();
  const total = quizQueue.length;
  if (!/^\d+$/.test(raw)) {
    quizJumpMessage = `请输入 1 到 ${total} 之间的题号。`;
    renderQuiz();
    focusQuestionJumpInput();
    return;
  }

  const target = Number(raw);
  if (!Number.isInteger(target) || target < 1 || target > total) {
    quizJumpMessage = `请输入 1 到 ${total} 之间的题号。`;
    renderQuiz();
    focusQuestionJumpInput();
    return;
  }

  quizJumpMessage = "";
  quizIndex = target - 1;
  persistPracticeSession();
  renderQuiz();
}

function focusQuestionJumpInput() {
  window.requestAnimationFrame(() => {
    const input = document.querySelector("#questionJumpInput");
    input?.focus();
    input?.select();
  });
}

function renderOption(q, letter, text, answer, highlights) {
  let cls = "option";
  if (answer) {
    if (letter === q.correct_answer) cls += " correct";
    if (letter === answer.selected && !answer.isCorrect) cls += " wrong";
  }
  return `
    <button class="${cls}" data-highlight-scope="option" onclick="chooseAnswer('${q.id}', '${letter}')" ${answer ? "disabled" : ""}>
      <span class="letter">${letter}</span>${renderOptionsWithHighlights(text, highlights)}
    </button>
  `;
}

function getCustomExplanationStore() {
  try {
    const raw = localStorage.getItem(CUSTOM_EXPLANATIONS_STORAGE_KEY);
    const parsed = JSON.parse(raw || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveCustomExplanationStore(store) {
  try {
    localStorage.setItem(CUSTOM_EXPLANATIONS_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Storage full or unavailable; non-critical.
  }
}

function getCustomExplanation(questionId) {
  const store = getCustomExplanationStore();
  const entry = store[questionId];
  if (entry && typeof entry.text === "string" && entry.text.trim()) return entry;
  return null;
}

function saveCustomExplanation(questionId, text) {
  const store = getCustomExplanationStore();
  store[questionId] = { text: String(text || ""), updatedAt: Date.now() };
  saveCustomExplanationStore(store);
}

function clearCustomExplanation(questionId) {
  const store = getCustomExplanationStore();
  delete store[questionId];
  saveCustomExplanationStore(store);
}

function getDisplayExplanation(q) {
  const custom = getCustomExplanation(q.id);
  if (custom) return { text: custom.text, isCustom: true };
  const simpleExplanation = String(q.simple_explanation || "").trim();
  const fallbackMemoryTip = !simpleExplanation && q.memory_tip ? String(q.memory_tip).trim() : "";
  return { text: simpleExplanation || fallbackMemoryTip || "暂无大白话解析。", isCustom: false };
}

function enterExplanationEditMode(questionId) {
  const q = byId.get(questionId);
  if (!q) return;
  const disp = getDisplayExplanation(q);
  const textarea = document.querySelector("#explanationEditTextarea");
  if (!textarea) return;
  textarea.value = disp.text;
  textarea.style.display = "";
  document.querySelector("#explanationEditActions")?.setAttribute("style", "display:flex;gap:8px;margin-top:8px;");
  document.querySelector("#explanationDisplay")?.setAttribute("style", "display:none;");
  document.querySelector("#explanationViewActions")?.setAttribute("style", "display:none;");
}

function saveExplanationEdit(questionId) {
  const textarea = document.querySelector("#explanationEditTextarea");
  if (!textarea) return;
  const text = textarea.value.trim();
  if (text) {
    saveCustomExplanation(questionId, text);
  } else {
    clearCustomExplanation(questionId);
  }
  cancelExplanationEdit(questionId);
  renderQuiz();
}

function cancelExplanationEdit(questionId) {
  const textarea = document.querySelector("#explanationEditTextarea");
  if (textarea) textarea.style.display = "none";
  document.querySelector("#explanationEditActions")?.setAttribute("style", "display:none;");
  document.querySelector("#explanationDisplay")?.setAttribute("style", "");
  document.querySelector("#explanationViewActions")?.setAttribute("style", "");
}

function restoreDefaultExplanation(questionId) {
  if (confirm("确定要恢复默认解析吗？你的本地自定义解析将被删除，且不可撤销。")) {
    clearCustomExplanation(questionId);
    renderQuiz();
  }
}

function renderResult(q, answer, highlights) {
  const explanationStatus = getExplanationStatus(q.simple_explanation);
  const wrongCount = getWrongCount(q.id);
  const disp = getDisplayExplanation(q);
  const explanationText = disp.text;
  return `
    <section class="result-box" id="quizResult">
      <h3>${answer.isCorrect ? "回答正确" : "回答错误"}，正确答案：${q.correct_answer}</h3>
      ${wrongCount > 0 ? `<p class="wrong-count-note">本题累计错了 ${wrongCount} 次</p>` : ""}
      <div class="explanation-header">
        <strong>大白话解析</strong>
        ${explanationStatus ? `<span class="explanation-status ${explanationStatus.className}">${explanationStatus.label}</span>` : ""}
        ${disp.isCustom ? `<span class="custom-explanation-badge">本地自定义解析</span>` : ""}
      </div>
      <div id="explanationDisplay">
        <pre data-highlight-scope="explanation">${renderExplanationWithHighlights(explanationText, highlights)}</pre>
      </div>
      <textarea id="explanationEditTextarea" class="explanation-edit-textarea" style="display:none;" rows="6"></textarea>
      <div id="explanationEditActions" style="display:none;">
        <button class="button" onclick="saveExplanationEdit('${q.id}')">保存</button>
        <button class="ghost-button" onclick="cancelExplanationEdit('${q.id}')">取消</button>
      </div>
      <div id="explanationViewActions" class="explanation-view-actions">
        <button class="ghost-button" onclick="enterExplanationEditMode('${q.id}')">编辑我的解析</button>
        ${disp.isCustom ? `<button class="ghost-button" onclick="restoreDefaultExplanation('${q.id}')">恢复默认解析</button>` : ""}
      </div>
      <details class="original-explanation">
        <summary>原始 PDF 解析</summary>
        <pre data-highlight-scope="original">${renderOriginalExplanationWithHighlights(q.original_explanation || "暂无原始解析。", highlights)}</pre>
      </details>
    </section>
  `;
}

function getExplanationStatus(simpleExplanation = "") {
  const text = String(simpleExplanation || "");
  const hasFivePartTitles = [
    "这题考什么：",
    "为什么正确答案对：",
    "其他选项为什么不适合：",
    "记忆口诀：",
    "遇到类似题怎么快速判断：",
  ].every((title) => text.includes(title));
  if (hasFivePartTitles) return { label: "已优化解析", className: "optimized" };
  const riskyMarkers = [
    "新增题待人工复核",
    "这题考教材",
    "与题干不一致",
    "说法太绝对",
    "其他选项不符合",
  ];
  if (riskyMarkers.some((marker) => text.includes(marker))) {
    return { label: "解析待优化", className: "pending" };
  }
  return null;
}

function chooseAnswer(id, selected) {
  const q = byId.get(id);
  quizJumpMessage = "";
  highlightHint = "";
  clearCachedQuestionSelection();
  const isCorrect = selected === q.correct_answer;
  const old = state.answers[id];
  const answerRecord = {
    selected,
    isCorrect,
    attempts: (old?.attempts || 0) + 1,
    paper: q.paper,
    chapter: q.chapter,
    updatedAt: new Date().toISOString(),
  };
  state.answers[id] = answerRecord;
  try { recordDailyAnswer(id, q.paper); } catch {}
  if (state.sessions?.practice?.questionIds?.includes(id)) {
    state.sessions.practice.answers = {
      ...(state.sessions.practice.answers || {}),
      [id]: answerRecord,
    };
    state.sessions.practice.answeredIds = getSessionAnsweredIdsForQueue(quizQueue);
  }
  state.lastQuestionId = id;
  if (!isCorrect) markWrong(id, false);
  saveState();
  persistPracticeSession();
  renderQuiz();
  scrollToQuizResult();
}

function scrollToQuizResult() {
  window.requestAnimationFrame(() => {
    document.querySelector("#quizResult")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function markWrong(id, shouldRender = true, incrementWrongCount = true) {
  const q = byId.get(id);
  const existing = state.mistakes[id] || {};
  const currentWrongCount = getWrongCount(id);
  const nextWrongCount = incrementWrongCount ? currentWrongCount + 1 : currentWrongCount;
  state.mistakes[id] = {
    ...existing,
    count: nextWrongCount,
    wrongCount: nextWrongCount,
    paper: q.paper,
    chapter: q.chapter,
    updatedAt: new Date().toISOString(),
  };
  state.mastered = state.mastered.filter((item) => item !== id);
  saveState();
  if (shouldRender) render();
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((item) => item !== id)
    : [...state.favorites, id];
  saveState();
  render();
}

function prevQuestion() {
  quizJumpMessage = "";
  highlightHint = "";
  clearCachedQuestionSelection();
  quizIndex = Math.max(0, quizIndex - 1);
  persistPracticeSession();
  renderQuiz();
}

function nextQuestion() {
  quizJumpMessage = "";
  highlightHint = "";
  clearCachedQuestionSelection();
  quizIndex = Math.min(quizQueue.length - 1, quizIndex + 1);
  persistPracticeSession();
  renderQuiz();
}

function renderMistakes() {
  const paper = getInputValue("mistakePaperFilter", "ALL");
  const chapter = getInputValue("mistakeChapterFilter", "ALL");
  const wrongIds = Object.keys(state.mistakes).filter((id) => !state.mastered.includes(id));
  const items = wrongIds.map((id) => byId.get(id)).filter(Boolean).filter((q) => {
    if (paper !== "ALL" && q.paper !== paper) return false;
    if (chapter !== "ALL" && `${q.paper}-${q.chapter}` !== chapter) return false;
    return true;
  });
  const chapters = [...new Set(wrongIds.map((id) => byId.get(id)).filter(Boolean).map((q) => `${q.paper}-${q.chapter}|${q.paper} 第${q.chapter}章 ${q.chapter_title}`))];

  app.innerHTML = `
    <section class="card">
      <h2>错题本</h2>
      <div class="filters" style="grid-template-columns:1fr 1fr">
        <select id="mistakePaperFilter" onchange="renderMistakes()">
          ${option("ALL", "全部试卷", paper)}
          ${option("P1", "卷一", paper)}
          ${option("P3", "卷三", paper)}
        </select>
        <select id="mistakeChapterFilter" onchange="renderMistakes()">
          ${option("ALL", "全部章节", chapter)}
          ${chapters.map((item) => {
            const [value, label] = item.split("|");
            return option(value, label, chapter);
          }).join("")}
        </select>
      </div>
      <div class="button-row">
        <button class="button" onclick="startMistakeReview()">重做错题</button>
      </div>
    </section>
    <section class="list" style="margin-top:12px">
      ${items.map((q) => `
        <article class="list-item">
          <h3>${escapeHtml(q.id)} ${escapeHtml(t(q, "question"))}</h3>
          <div class="meta">
            <span class="pill">错了 ${getWrongCount(q.id)} 次</span>
            <span class="pill">${q.paper} 第${q.chapter}章</span>
          </div>
          <div class="button-row">
            <button class="ghost-button" onclick="openSingleQuestion('${q.id}')">重做</button>
            <button class="ghost-button" onclick="markMastered('${q.id}')">已掌握</button>
          </div>
        </article>
      `).join("") || empty("暂无错题。")}
    </section>
  `;
}

function markMastered(id) {
  if (!state.mastered.includes(id)) state.mastered.push(id);
  saveState();
  renderMistakes();
}

function renderMine() {
  const stats = getStats();
  const chapterRows = getChapterStats();
  app.innerHTML = `
    <section class="card">
      <h2>统计</h2>
      <div class="stats-row">
        <div class="stat"><strong>${stats.total}</strong><span>总题数</span></div>
        <div class="stat"><strong>${stats.done}</strong><span>已做</span></div>
        <div class="stat"><strong>${stats.accuracy}%</strong><span>正确率</span></div>
        <div class="stat"><strong>${stats.favorites}</strong><span>收藏</span></div>
      </div>
    </section>
    <section class="card" style="margin-top:12px">
      <h2>各章节正确率</h2>
      <div class="list">
        ${chapterRows.map((row) => `
          <div class="list-item">
            <h3>${row.label}</h3>
            <div class="progress-bar"><span style="width:${row.accuracy}%"></span></div>
            <p>${row.done}/${row.total} 已做，正确率 ${row.accuracy}%</p>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="card" style="margin-top:12px">
      <h2>设置</h2>
      <p>学习记录、错题、收藏、练习进度、模拟考试历史和导入导出都只保存在本浏览器的 localStorage，不会上传到服务器，也不会跨设备自动同步。</p>
      <div class="button-row">
        <button class="ghost-button" onclick="toggleScript()">显示：${state.settings.script === "simplified" ? "简体" : "繁体"}</button>
        <button class="ghost-button" onclick="exportRecord()">导出记录 JSON</button>
        <button class="ghost-button" onclick="exportCustomExplanations()">导出自定义解析</button>
      </div>
      <div class="button-row">
        <input class="file-input" type="file" accept="application/json" onchange="importRecord(event)" />
      </div>
      <div class="button-row">
        <button class="danger-button" onclick="clearRecord()">清空学习记录</button>
      </div>
    </section>
    <section class="card" style="margin-top:12px">
      <h2>模拟考试历史</h2>
      <div class="list">
        ${state.examHistory.slice().reverse().map((item) => `
          <div class="list-item">
            <h3>${item.paper} ${item.score}/${item.total}，正确率 ${item.accuracy}%</h3>
            <p>${new Date(item.finishedAt).toLocaleString()}，${item.passed ? "合格" : "未合格"}</p>
          </div>
        `).join("") || empty("暂无模拟考试记录。")}
      </div>
    </section>
  `;
}

function getChapterStats() {
  const map = new Map();
  questions.forEach((q) => {
    const key = `${q.paper}-${q.chapter}`;
    if (!map.has(key)) {
      map.set(key, { label: `${q.paper} 第${q.chapter}章 ${q.chapter_title}`, total: 0, done: 0, correct: 0 });
    }
    const row = map.get(key);
    row.total += 1;
    if (state.answers[q.id]) {
      row.done += 1;
      if (state.answers[q.id].isCorrect) row.correct += 1;
    }
  });
  return [...map.values()].map((row) => ({
    ...row,
    accuracy: row.done ? Math.round((row.correct / row.done) * 100) : 0,
  }));
}

function toggleScript() {
  state.settings.script = state.settings.script === "simplified" ? "traditional" : "simplified";
  saveState();
  render();
}

function toggleOriginal() {
  state.settings.showOriginal = !state.settings.showOriginal;
  saveState();
  render();
}

function exportRecord() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `iiqe-study-record-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function exportCustomExplanations() {
  const store = getCustomExplanationStore();
  const cleaned = {};
  let count = 0;
  for (const [id, entry] of Object.entries(store)) {
    if (!/^P[13]-\d+$/.test(id)) continue;
    const text = (entry && entry.text || "").trim();
    if (!text) continue;
    cleaned[id] = {
      text: text,
      updatedAt: (entry && typeof entry.updatedAt === "number") ? entry.updatedAt : Date.now()
    };
    count++;
  }
  if (count === 0) {
    alert("暂无自定义解析可导出。");
    return;
  }
  const output = {
    exportedAt: new Date().toISOString(),
    count: count,
    source: "iiqeStudyApp:customExplanations:v1",
    explanations: cleaned
  };
  const blob = new Blob([JSON.stringify(output, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const dateStr = new Date().toISOString().slice(0, 10);
  link.download = `iiqe-custom-explanations-${dateStr}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importRecord(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(reader.result));
      discardInvalidSessions();
      saveState();
      renderMine();
    } catch {
      alert("导入失败：JSON 格式不正确。");
    }
  };
  reader.readAsText(file, "utf-8");
}

function clearRecord() {
  if (!confirm("确认清空本浏览器内的学习记录？题库 JSON 不会被删除。")) return;
  state = structuredClone(defaultState);
  saveState();
  renderMine();
}

function startExam(paper) {
  const existing = state.sessions.exam;
  if (
    isUnfinishedExamSession(existing, paper) &&
    confirm("发现同一试卷的未完成模拟考试：继续上次模拟考试/重新开始？\n\n确定 = 继续上次模拟考试\n取消 = 重新开始")
  ) {
    restoreExamSession(existing);
    route = "exam";
    renderExam();
    return;
  }

  const pool = shuffle(questions.filter((q) => q.paper === paper));
  const formalSize = paper === "P1" ? 75 : 50;
  const minutes = paper === "P1" ? 120 : 75;
  activeExam = {
    paper,
    ids: pool.slice(0, Math.min(formalSize, pool.length)).map((q) => q.id),
    index: 0,
    answers: {},
    startedAt: Date.now(),
    endsAt: Date.now() + minutes * 60 * 1000,
    minutes,
  };
  persistExamSession();
  route = "exam";
  renderExam();
}

function renderExam() {
  clearInterval(examTimer);
  examTimer = null;
  if (!activeExam) {
    setRoute("home");
    return;
  }
  const q = byId.get(activeExam.ids[activeExam.index]);
  if (!q) {
    activeExam = null;
    state.sessions.exam = null;
    saveState();
    setRoute("home");
    return;
  }
  const selected = activeExam.answers[q.id];
  const options = t(q, "options");
  app.innerHTML = `
    <article class="question-card">
      <div class="button-row" style="justify-content:space-between;margin-top:0">
        <span class="exam-timer" id="examTimer">--:--</span>
        <span class="pill">${activeExam.index + 1}/${activeExam.ids.length}</span>
      </div>
      <h2 class="question-title">${escapeHtml(t(q, "question"))}</h2>
      <div class="option-list">
        ${"ABCD".split("").map((letter) => `
          <button class="option ${selected === letter ? "correct" : ""}" onclick="chooseExamAnswer('${q.id}', '${letter}')">
            <span class="letter">${letter}</span>${escapeHtml(options[letter])}
          </button>
        `).join("")}
      </div>
      <div class="button-row">
        <button class="ghost-button" onclick="examPrev()">上一题</button>
        <button class="button" onclick="examNext()">下一题</button>
        <button class="danger-button" onclick="submitExam()">交卷</button>
      </div>
    </article>
  `;
  updateExamTimer();
  examTimer = setInterval(updateExamTimer, 1000);
}

function updateExamTimer() {
  if (!activeExam) return;
  const left = Math.max(0, activeExam.endsAt - Date.now());
  const min = String(Math.floor(left / 60000)).padStart(2, "0");
  const sec = String(Math.floor((left % 60000) / 1000)).padStart(2, "0");
  const el = document.querySelector("#examTimer");
  if (el) el.textContent = `${min}:${sec}`;
  if (left <= 0) submitExam();
}

function chooseExamAnswer(id, letter) {
  activeExam.answers[id] = letter;
  persistExamSession();
  renderExam();
}

function examPrev() {
  activeExam.index = Math.max(0, activeExam.index - 1);
  persistExamSession();
  renderExam();
}

function examNext() {
  activeExam.index = Math.min(activeExam.ids.length - 1, activeExam.index + 1);
  persistExamSession();
  renderExam();
}

function submitExam() {
  if (!activeExam) return;
  const total = activeExam.ids.length;
  const wrongIds = [];
  let score = 0;
  activeExam.ids.forEach((id) => {
    const q = byId.get(id);
    const selected = activeExam.answers[id];
    const isCorrect = selected === q.correct_answer;
    if (isCorrect) score += 1;
    if (!isCorrect) wrongIds.push(id);
    if (selected) {
      state.answers[id] = {
        selected,
        isCorrect,
        attempts: (state.answers[id]?.attempts || 0) + 1,
        paper: q.paper,
        chapter: q.chapter,
        updatedAt: new Date().toISOString(),
      };
      if (!isCorrect) markWrong(id, false);
    }
  });
  const passLine = activeExam.paper === "P1" ? Math.ceil(total * 53 / 75) : Math.ceil(total * 0.7);
  const result = {
    paper: activeExam.paper,
    score,
    total,
    accuracy: total ? Math.round((score / total) * 100) : 0,
    passed: score >= passLine,
    wrongIds,
    weakChapters: getWeakChapters(wrongIds),
    finishedAt: new Date().toISOString(),
  };
  state.examHistory.push(result);
  state.sessions.exam = null;
  saveState();
  activeExam.result = result;
  route = "examResult";
  renderExamResult();
}

function renderExamResult() {
  const result = activeExam?.result;
  if (!result) {
    setRoute("home");
    return;
  }
  app.innerHTML = `
    <section class="card">
      <h2>${result.paper} 模拟考试结果</h2>
      <div class="stats-row">
        <div class="stat"><strong>${result.score}/${result.total}</strong><span>得分</span></div>
        <div class="stat"><strong>${result.accuracy}%</strong><span>正确率</span></div>
        <div class="stat"><strong>${result.passed ? "是" : "否"}</strong><span>是否合格</span></div>
        <div class="stat"><strong>${result.wrongIds.length}</strong><span>错题数</span></div>
      </div>
      <div class="button-row">
        <button class="button" onclick="reviewExamWrong()">重做本次错题</button>
        <button class="ghost-button" onclick="setRoute('home')">返回首页</button>
      </div>
    </section>
    <section class="card" style="margin-top:12px">
      <h2>薄弱章节</h2>
      <p>${result.weakChapters.join("、") || "暂无明显薄弱章节。"}</p>
    </section>
    <section class="list" style="margin-top:12px">
      ${result.wrongIds.map((id) => renderQuestionListItem(byId.get(id))).join("") || empty("本次没有错题。")}
    </section>
  `;
}

function reviewExamWrong() {
  quizQueue = activeExam?.result?.wrongIds || [];
  quizIndex = 0;
  setRoute("quiz");
}

function getWeakChapters(ids) {
  const counts = {};
  ids.forEach((id) => {
    const q = byId.get(id);
    const key = `${q.paper} 第${q.chapter}章 ${q.chapter_title}`;
    counts[key] = (counts[key] || 0) + 1;
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([label, count]) => `${label}（错 ${count} 题）`);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

navItems.forEach((item) => item.addEventListener("click", () => setRoute(item.dataset.route)));
document.addEventListener("selectionchange", captureCurrentQuestionSelection);
document.addEventListener("keyup", captureCurrentQuestionSelection);
applyTheme(getSavedTheme(), { persist: false });
themeToggle?.addEventListener("click", toggleTheme);
document.querySelector("#themeRefresh").addEventListener("click", loadQuestions);
window.addEventListener("beforeunload", () => {
  persistPracticeSession();
  persistExamSession();
});
loadQuestions();
