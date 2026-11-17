import { copy } from './copy-v1.js';

const button = document.getElementById('incident-language');
let stored;
try { stored = localStorage.getItem('lang'); } catch { /* The English page remains available without storage. */ }
let language = stored === 'tr' ? 'tr' : 'en';

function applyLanguage() {
  const messages = copy[language];
  document.querySelectorAll('[data-copy]').forEach(element => {
    const message = messages[element.dataset.copy];
    if (message !== undefined) element.textContent = message;
  });
  document.querySelectorAll('time[data-date]').forEach(element => {
    const date = new Date(element.dateTime + 'T12:00:00Z');
    element.textContent = new Intl.DateTimeFormat(language, {
      calendar: 'gregory', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    }).format(date);
  });
  document.documentElement.lang = language;
  document.title = messages.title + ' — ahmet.sh';
  for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
    document.querySelector(selector)?.setAttribute('content', document.title);
  }
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
    document.querySelector(selector)?.setAttribute('content', messages.description);
  }
  if (button) {
    button.textContent = language === 'en' ? 'Türkçe' : 'English';
    button.setAttribute('aria-label', language === 'en' ? 'Switch to Turkish' : 'İngilizceye geç');
  }
}

button?.addEventListener('click', () => {
  language = language === 'en' ? 'tr' : 'en';
  try { localStorage.setItem('lang', language); } catch { /* Switching works even if persistence is unavailable. */ }
  applyLanguage();
});
applyLanguage();
