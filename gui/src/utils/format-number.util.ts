export function formatNumber(num: any, decimals = 2) {
  return (Math.round(num * 100) / 100).toFixed(decimals);
}
