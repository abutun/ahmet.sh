import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const root = resolve(import.meta.dirname, '..');
const page = () => readFileSync(resolve(root, 'wallet-incident/index.html'), 'utf8');
const attributes = (html, tag, attribute) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*\\b${attribute}="([^"]+)"`, 'g'))].map(match => match[1]);

test('identifies both reported assets with full OpenSea URLs and original local artwork', () => {
  const html = page();
  const links = attributes(html, 'a', 'href');
  for (const [id, hash] of [
    [1648, 'c55cd6a86b44f591390beb84664c9966e1db753ae1af3dadf801f91642203406'],
    [1858, '65661c5c982472524b1c30ec234de28efaccc0aeb4a9c78cfd607910b194c8f7'],
  ]) {
    const url = `https://opensea.io/item/robinhood/0xe638f58c87258ece6c0eddc46f70327663635c69/${id}`;
    assert.ok(links.includes(url));
    assert.ok(html.includes(`>${url}</a>`), 'full URL remains visible');
    const path = `/wallet-incident/assets/suited-ape-${id}-v1.png`;
    assert.ok(attributes(html, 'img', 'src').includes(path));
    assert.equal(createHash('sha256').update(readFileSync(resolve(root, '.' + path))).digest('hex'), hash);
  }
});

test('keeps complaint attribution, filing dates and privacy boundaries in the readable HTML', () => {
  const html = page();
  assert.ok(html.includes('Filing an IC3 complaint does not establish FBI findings'));
  assert.ok(html.includes('Later buyers, recipients and current holders are not accused'));
  assert.equal((html.match(/datetime="2026-10-31"/g) || []).length, 3);
  assert.ok(html.includes('datetime="2026-11-05"'));
  assert.doesNotMatch(html, /<form\b|<input\b|\.pdf["<]|\b[a-f0-9]{32}\b/i);
  const files = readdirSync(resolve(root, 'wallet-incident'), { recursive: true });
  assert.ok(files.every(name => !/\.(?:pdf|csv|txt|eml)$/i.test(name)), 'no private reports or extracts');
});

test('provides complete English and Turkish copy without relying on HTML injection', async () => {
  const source = readFileSync(resolve(root, 'wallet-incident/copy-v2.js'), 'utf8');
  const { copy } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
  assert.deepEqual(Object.keys(copy.en).sort(), Object.keys(copy.tr).sort());
  const keys = [...page().matchAll(/data-copy="([^"]+)"/g)].map(match => match[1]);
  assert.ok(keys.length > 15);
  for (const language of ['en', 'tr']) for (const key of keys) assert.equal(typeof copy[language][key], 'string', `${language}: ${key}`);
  assert.notEqual(copy.tr.title, copy.en.title);
  assert.ok(copy.tr.notice.includes('soruşturma açıldığı'));
  assert.ok(copy.en.notice.includes('confirmed investigation'));
});

test('publishes the canonical personal-site URL and a discoverable homepage link', () => {
  const html = page();
  assert.ok(html.includes('rel="canonical" href="https://ahmet.sh/wallet-incident/"'));
  assert.ok(readFileSync(resolve(root, 'index.html'), 'utf8').includes('href="/wallet-incident/"'));
  assert.ok(readFileSync(resolve(root, 'sitemap.xml'), 'utf8').includes('<loc>https://ahmet.sh/wallet-incident/</loc>'));
  for (const match of html.matchAll(/<a\b([^>]+)target="_blank"([^>]*)>/g)) assert.ok((match[1] + match[2]).includes('rel="noopener noreferrer"'));
  assert.ok(attributes(html, 'a', 'href').includes('https://x.com/MintropolisX'));
  assert.ok(attributes(html, 'a', 'href').includes('https://www.ic3.gov/Home/FAQ'));
});
