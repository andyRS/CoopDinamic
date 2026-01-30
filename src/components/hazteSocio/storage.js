const KEY = 'hazteSocioDraft';

export function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

export function saveDraft(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function clearDraft() {
  localStorage.removeItem(KEY);
}
