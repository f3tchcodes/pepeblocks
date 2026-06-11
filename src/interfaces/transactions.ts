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
export interface RawTransactionResponse {
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
