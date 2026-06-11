// RAW JSON TRANSACTION RESPONSE

export interface TxScriptPubKey {
  asm: string;
  hex: string;
  reqSigs?: number;
  type: string;
  addresses?: string[];
}

export interface TxVout {
  value: number;
  n: number;
  scriptPubKey: TxScriptPubKey;
}

export interface TxVin {
  coinbase?: string;
  txid?: string;
  vout?: number;
  scriptSig?: {
    asm: string;
    hex: string;
  };
  sequence: number;
}

// putting everything together
export interface RawJSONTransactionResponse {
  hex: string;
  txid: string;
  hash: string;
  size: number;
  vsize: number;
  version: number;
  locktime: number;
  vin: TxVin[];
  vout: TxVout[];
  blockhash: string;
  confirmations: number;
  time: number;
  blocktime: number;
}


// BLOCKBOOK'S TRANSACTION RESPONSE

export interface TransactionVin {
  n: number;
  isAddress: boolean;
  coinbase?: string;
  txid?: string;
  vout?: number;
  addresses?: string[];
}

export interface TransactionVout {
  value: string;
  n: number;
  spent?: boolean;
  hex: string;
  addresses: string[];
  isAddress: boolean;
}

export interface TransactionResponse {
  txid: string;
  version: number;

  vin: TransactionVin[];
  vout: TransactionVout[];

  blockHash: string;
  blockHeight: number;
  confirmations: number;
  blockTime: number;

  size: number;

  value: string;
  valueIn: string;
  fees: string;

  hex: string;
}


// RAW MEMPOOL JSON RESPONSE

export interface MempoolTransactionDetails {
  size: number;
  fee: number;
  modifiedfee: number;
  time: number;
  height: number;
  startingpriority: number;
  currentpriority: number;
  descendantcount: number;
  descendantsize: number;
  descendantfees: number;
  ancestorcount: number;
  ancestorsize: number;
  ancestorfees: number;
  depends: string[];
}

export interface RawMempoolResponse {
  [txid: string]: MempoolTransactionDetails;
}
