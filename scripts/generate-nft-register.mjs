// This generator consumes only the sanitized public register, never private source documents.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const { copy } = await import('data:text/javascript;base64,' + Buffer.from(read('wallet-incident/copy-v2.js')).toString('base64'));
const register = JSON.parse(read('wallet-incident/nfts/register-v2.json'));
const c = copy.en;
const esc = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const t = (key, tag = 'p', attrs = '') => `<${tag} data-copy="${key}"${attrs}>${esc(c[key])}</${tag}>`;
const main = read('wallet-incident/index.html');
let head = main.slice(0, main.indexOf('<body'));
head = head.replaceAll('https://ahmet.sh/wallet-incident/"', 'https://ahmet.sh/wallet-incident/nfts/"')
  .replaceAll(esc(c.title), esc(c.inventoryTitle)).replaceAll(esc(c.description), esc(c.inventoryDescription));
const records = register.items.map((r, i) => `<article class="nft-record" data-chain="${esc(r.chain)}" data-collection="${esc(r.collection)}" data-token-id="${esc(r.tokenId)}" data-contract="${esc(r.contract)}" id="nft-${i + 1}">
<header><span class="record-number">${String(i + 1).padStart(3, '0')} / ${r.chain === 'ethereum' ? 'Ethereum' : 'Robinhood Chain'}</span><h3>${esc(r.collection)} <span>#${esc(r.tokenId)}</span></h3></header>
<dl><div>${t('contractLabel','dt')}<dd class="contract-value">${esc(r.contract)}</dd></div><div>${t('tokenLabel','dt')}<dd>${esc(r.tokenId)}</dd></div><div>${t('incidentLabel','dt')}<dd><time datetime="2026-10-31" data-date>31 October 2026</time></dd></div><div>${t('evidenceLabelShort','dt')}${t(r.evidence,'dd')}</div></dl>
${t('assetLabel', 'p', ' class="incident-caption"')}<a class="asset-url" href="${esc(r.assetUrl)}" target="_blank" rel="noopener noreferrer">${esc(r.assetUrl)}</a>
<a class="incident-link" href="${esc(r.transactionUrl)}" target="_blank" rel="noopener noreferrer"><span data-copy="viewEvidence">${esc(c.viewEvidence)}</span> · ${esc(r.transactionRef)} ↗</a>
</article>`).join('\n');
const html = `${head}<body class="incident-page inventory-page" data-page="inventory">
<a class="incident-skip" href="#incident-main" data-copy="skip">${esc(c.skip)}</a>
<header class="incident-nav"><a class="incident-brand" href="/" data-copy-aria="homeLabel" aria-label="${esc(c.homeLabel)}"><span class="brand-mark">&lt;AB/&gt;</span><span>ahmet.sh</span></a><nav data-copy-aria="navLabel" aria-label="${esc(c.navLabel)}"><a href="/" data-copy="home">Home</a><button id="incident-language" type="button" aria-label="Switch to Turkish">Türkçe</button></nav></header>
<main id="incident-main" class="incident-content">
<a class="incident-link" href="/wallet-incident/" data-copy="backReport">${esc(c.backReport)}</a>
<header class="incident-hero">${t('eyebrow','p',' class="incident-eyebrow"')}${t('inventoryTitle','h1')}${t('inventoryLead','p',' class="incident-lead"')}<p class="incident-updated"><span data-copy="updated">Last updated</span>: <time datetime="2026-11-17" data-date>17 November 2026</time></p></header>
<aside class="incident-notice">${t('inventoryScope')}${t('purchaseCaution')}</aside>
${t('noCounterparty','p',' class="incident-caption"')}
<form class="register-filters" id="register-filters" hidden role="search"><div><label for="nft-search" data-copy="searchLabel">${esc(c.searchLabel)}</label><input type="search" id="nft-search" autocomplete="off" maxlength="200"></div><div><label for="nft-chain" data-copy="chainLabel">${esc(c.chainLabel)}</label><select id="nft-chain"><option value="" data-copy="allChains">${esc(c.allChains)}</option><option value="ethereum">Ethereum</option><option value="robinhood">Robinhood Chain</option></select></div><button type="reset" data-copy="reset">${esc(c.reset)}</button></form>
<noscript>${t('noscript')}</noscript>
<section class="incident-section" aria-labelledby="records-heading">${t('recordsHeading','h2',' id="records-heading"')}<p id="nft-result-count" role="status" aria-live="polite" aria-atomic="true">109 of 109 NFTs</p><p id="nft-empty" data-copy="empty" hidden>${esc(c.empty)}</p><div class="nft-grid">${records}</div></section>
<section class="incident-section"><a class="register-callout" href="/wallet-incident/" data-copy="backReport">${esc(c.backReport)}</a>${t('buyers')}${t('safeContact','p',' class="incident-caption"')}</section>
</main><footer class="incident-footer"><a href="/">&lt;AB/&gt; ahmet.sh</a>${t('footer')}</footer>
<script type="module" src="/wallet-incident/incident-v2.js"></script>
</body></html>
`;
if (process.argv.includes('--check')) {
  if (read('wallet-incident/nfts/index.html') !== html) throw new Error('NFT register HTML is stale; regenerate it.');
} else writeFileSync(resolve(root, 'wallet-incident/nfts/index.html'), html);
