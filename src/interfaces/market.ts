// CURRENT MARKET SUMMARY

export interface MarketSummaryResponse {
  blockcount: number;
  difficulty: number;
  supply: number;
  hashrate: number;
  last_price_usd: number;
  last_price_usdt: number;
}
