import { copy } from './copy-v2.js';
import { matchesRecord } from './filter-v2.js';

const button = document.getElementById('incident-language');
let stored;
try { stored = localStorage.getItem('lang'); } catch { /* The English page remains available without storage. */ }
let language = stored === 'tr' ? 'tr' : 'en';
const form = document.getElementById('register-filters');
const search = document.getElementById('nft-search');
const chain = document.getElementById('nft-chain');
const records = [...document.querySelectorAll('.nft-record')];

function filterRecords() {
  if (!form) return;
  let shown = 0;
  for (const element of records) {
    const visible = matchesRecord(element.dataset, search.value, chain.value);
    element.hidden = !visible;
    if (visible) shown++;
  }
  document.getElementById('nft-result-count').textContent = copy[language].resultsTemplate
    .replace('{shown}', String(shown)).replace('{total}', String(records.length));
  document.getElementById('nft-empty').hidden = shown !== 0;
}

function applyLanguage() {
  const messages = copy[language];
  document.querySelectorAll('[data-copy]').forEach(element => {
    const message = messages[element.dataset.copy];
    if (message !== undefined) element.textContent = message;
  });
  document.querySelectorAll('[data-copy-aria]').forEach(element => {
    const message = messages[element.dataset.copyAria];
    if (message !== undefined) element.setAttribute('aria-label', message);
  });
  document.querySelectorAll('time[data-date]').forEach(element => {
    const date = new Date(element.dateTime + 'T12:00:00Z');
    element.textContent = new Intl.DateTimeFormat(language, {
      calendar: 'gregory', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    }).format(date);
  });
  document.documentElement.lang = language;
  const inventory = document.body.dataset.page === 'inventory';
  document.title = (inventory ? messages.inventoryTitle : messages.title) + ' — ahmet.sh';
  for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
    document.querySelector(selector)?.setAttribute('content', document.title);
  }
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
    document.querySelector(selector)?.setAttribute('content', inventory ? messages.inventoryDescription : messages.description);
  }
  if (button) {
    button.textContent = language === 'en' ? 'Türkçe' : 'English';
    button.setAttribute('aria-label', language === 'en' ? 'Switch to Turkish' : 'İngilizceye geç');
  }
  filterRecords();
}

button?.addEventListener('click', () => {
  language = language === 'en' ? 'tr' : 'en';
  try { localStorage.setItem('lang', language); } catch { /* Switching works even if persistence is unavailable. */ }
  applyLanguage();
});
applyLanguage();
if (form) {
  form.hidden = false;
  form.addEventListener('submit', event => event.preventDefault());
  search.addEventListener('input', filterRecords);
  chain.addEventListener('change', filterRecords);
  form.addEventListener('reset', () => {
    search.value = '';
    chain.value = '';
    filterRecords();
  });
}
