export interface BlockbookStatus {
  coin: string;
  host: string;
  version: string;
  gitCommit: string;
  buildTime: string;
  syncMode: boolean;
  initialSync: boolean;
  inSync: boolean;
  bestHeight: number;
  lastBlockTime: string;
  inSyncMempool: boolean;
  lastMempoolTime: string;
  mempoolSize: number;
  decimals: number;
  dbSize: number;
  about: string;
}

export interface BackendStatus {
  chain: 'main' | 'testnet' | 'regtest' | string;
  blocks: number;
  headers: number;
  bestBlockHash: string;
  difficulty: string;
  sizeOnDisk: number;
  version: string;
  subversion: string;
  protocolVersion: string;
}

// putting everything together
export interface SystemStatusResponse {
  blockbook: BlockbookStatus;
  backend: BackendStatus;
}
