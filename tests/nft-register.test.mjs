import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = name => readFileSync(resolve(root, name), 'utf8');
const loadModule = async name => import('data:text/javascript;base64,' + Buffer.from(read(name)).toString('base64'));

test('documents 109 distinct purchases, with public fields only and exact canonical evidence links', () => {
  const register = JSON.parse(read('wallet-incident/nfts/register-v2.json'));
  assert.deepEqual(Object.keys(register).sort(), ['asOf', 'items', 'ownerReportedApproximateTotal', 'sourceDate']);
  assert.equal(register.ownerReportedApproximateTotal, 189);
  assert.equal(register.sourceDate, '2026-11-05');
  assert.equal(register.items.length, 109);
  assert.equal(new Set(register.items.map(r => `${r.chain}:${r.contract}:${r.tokenId}`)).size, 109);
  assert.equal(new Set(register.items.map(r => `${r.chain}:${r.contract}`)).size, 33);
  const counts = { ethereum: 0, robinhood: 0 }, transactions = {};
  for (const r of register.items) {
    assert.deepEqual(Object.keys(r).sort(), ['assetUrl','chain','collection','contract','evidence','incidentDate','tokenId','transactionRef','transactionUrl','transferUtc'].sort());
    assert.ok(r.chain in counts); counts[r.chain]++;
    assert.match(r.contract, /^0x[0-9a-f]{40}$/);
    assert.equal(typeof r.tokenId, 'string'); assert.match(r.tokenId, /^(0|[1-9][0-9]*)$/);
    assert.equal(r.assetUrl, `https://opensea.io/item/${r.chain}/${r.contract}/${r.tokenId}`);
    assert.match(r.transactionUrl, new RegExp(`^https://${r.chain === 'ethereum' ? 'etherscan' : 'robin\\.etherscan'}\\.io/tx/0x[0-9a-f]{64}$`));
    assert.equal(r.evidence, r.chain === 'ethereum' ? 'verifiedEthereumSale' : 'recordedRobinhoodSale');
    assert.equal(r.incidentDate, '2026-10-31');
    assert.equal(Boolean(r.transferUtc), r.chain === 'ethereum');
    transactions[r.transactionRef] = (transactions[r.transactionRef] || 0) + 1;
  }
  assert.deepEqual(counts, { ethereum: 28, robinhood: 81 });
  assert.deepEqual(transactions, { E1: 20, E2: 8, R2: 34, R1: 39, R3: 8 });
});

test('links the entire static register from the report, including evidence and all full asset URLs', () => {
  const html = read('wallet-incident/nfts/index.html');
  const items = JSON.parse(read('wallet-incident/nfts/register-v2.json')).items;
  assert.equal((html.match(/class="nft-record"/g) || []).length, 109);
  for (const r of items) {
    assert.ok(html.includes(`href="${r.assetUrl}"`));
    assert.ok(html.includes(`>${r.assetUrl}</a>`));
    assert.ok(html.includes(`href="${r.transactionUrl}"`));
  }
  assert.ok(read('wallet-incident/index.html').includes('href="/wallet-incident/nfts/"'));
  assert.ok(html.includes('href="/wallet-incident/"'));
  assert.ok(html.includes('rel="canonical" href="https://ahmet.sh/wallet-incident/nfts/"'));
  assert.ok(read('sitemap.xml').includes('<loc>https://ahmet.sh/wallet-incident/nfts/</loc>'));
  assert.ok(html.includes('independent receipt and ownership-history verification remains outstanding'));
  for (const m of html.matchAll(/<a\b([^>]+)target="_blank"([^>]*)>/g)) assert.ok((m[1] + m[2]).includes('rel="noopener noreferrer"'));
});

test('provides complete translations, dated claims and distinguishes the owner estimate from itemized records', async () => {
  const { copy } = await loadModule('wallet-incident/copy-v2.js');
  assert.deepEqual(Object.keys(copy.en).sort(), Object.keys(copy.tr).sort());
  for (const path of ['wallet-incident/index.html', 'wallet-incident/nfts/index.html']) {
    const html = read(path);
    for (const [, key] of html.matchAll(/data-copy(?:-aria)?="([^"]+)"/g)) {
      for (const lang of ['en','tr']) assert.equal(typeof copy[lang][key], 'string', `${lang}.${key}`);
    }
    assert.ok(html.includes('189')); assert.ok(html.includes('109'));
    assert.ok(html.includes('incident-v2.js'));
  }
  const main = read('wallet-incident/index.html');
  assert.ok(main.includes('87 historical'));
  assert.ok(main.includes('9 November 2026'));
  assert.ok(main.includes('14:08:59'));
  assert.ok(main.includes('14:12:59'));
  assert.ok(main.includes('not a present-day status check'));
  for (const key of ['ethEvidenceTitle','ethEvidenceCopy','rhEvidenceTitle','rhEvidenceCopy']) {
    assert.equal((main.match(new RegExp(`data-copy="${key}"`, 'g')) || []).length, 1);
  }
});

test('search finds both Apes, exact contracts, chains, partial collection names and no matches', async () => {
  const { matchesRecord } = await loadModule('wallet-incident/filter-v2.js');
  const rows = JSON.parse(read('wallet-incident/nfts/register-v2.json')).items;
  const search = (query, chain = '') => rows.filter(r => matchesRecord(r, query, chain));
  assert.deepEqual(search('Suited Ape').map(r => r.tokenId), ['1648', '1858']);
  assert.equal(search('  SUITED   APE  ').length, 2);
  assert.equal(search('1858')[0].collection, 'Suited Ape Society');
  assert.equal(search('0xe638f58c87258ece6c0eddc46f70327663635c69').length, 2);
  assert.equal(search('', 'ethereum').length, 28);
  assert.equal(search('Suited', 'ethereum').length, 0);
  assert.equal(search('nonexistent-collection').length, 0);
  assert.equal(search('').length, 109);
});
