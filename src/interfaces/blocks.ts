export interface ScriptPubKey {
  asm: string;
  hex: string;
  reqSigs: number;
  type: string;
  addresses: string[];
}

export interface Vout {
  value: number;
  n: number;
  scriptPubKey: ScriptPubKey;
}

export interface Vin {
  coinbase: string;
  sequence: number;
}

export interface Transaction {
  txid: string;
  hash: string;
  size: number;
  vsize: number;
  version: number;
  locktime: number;
  vin: Vin[];
  vout: Vout[];
}

export interface BlockResponse {
  hash: string;
  confirmations: number;
  strippedsize: number;
  size: number;
  weight: number;
  height: number;
  version: number;
  versionHex: string;
  merkleroot: string;
  tx: Transaction[];
  time: number;
  mediantime: number;
  nonce: number;
  bits: string;
  difficulty: number;
  chainwork: string;
  nextblockhash?: string;
}
