export function matchesRecord(record, query, chain) {
  if (chain && record.chain !== chain) return false;
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const searchable = `${record.collection} ${record.tokenId} ${record.contract}`.toLowerCase();
  return words.every(word => searchable.includes(word));
}
