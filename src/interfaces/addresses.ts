// ADDRESS INFORMATION

export interface AddressProfileResponse {
    page: number;
    totalPages: number;
    itemsOnPage: number;
    address: string;
    balance: string;
    totalReceived: string;
    totalSent: string;
    unconfirmedBalance: string;
    unconfirmedTxs: number;
    txs: number;
    txids: string[];
}


// UTXOS OF AN ADDRESS

export interface UTXO {
  txid: string;
  vout: number;
  value: string;
  height: number;
  confirmations: number;
  coinbase?: boolean;
}

export type AddressUTXOsResponse = UTXO[];


// BALANCE HISTORY OF AN ADDRESS

export interface BalanceHistoryEntry {
  time: number;
  txs: number;
  received: string;
  sent: string;
  sentToSelf: string;
}

export type AddressBalanceHistoryResponse = BalanceHistoryEntry[];


// LIST OF ALL ADDRESSES

// Enforce numbers 1 through 100 via a generated type helper
export type MaxLimit100 = 1 | 2 | 3 | 4 | 5 | 10 | 20 | 25 | 50 | 100 | number & {};

export interface AddressListOptions {
  /**
   * The page number to retrieve.
   * @default 1
   */
  page?: number;

  /**
   * Number of address results to return per page. Max allowed is 100.
   * @default 1
   */
  limit?: MaxLimit100;
}

export interface AddressListItem {
  address: string;
  balance: string;
}

export interface AddressListPagination {
  current_page: number;
  limit: number;
  total_count: number;
  total_pages: number;
}

export interface AddressListResponse {
  addresses: AddressListItem[];
  paging: AddressListPagination;
}
