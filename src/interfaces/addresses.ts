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
