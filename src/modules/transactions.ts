import { type PepeClient } from "#client/pepeClient";
import { 
    type RawJSONTransactionResponse, 
    type TransactionResponse,
    type RawMempoolResponse
} from "#interfaces/transactions";

export class PepeTransactions {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Fetches and decodes transaction details using Blockbook's API via transaction ID.
     * @param txid The transaction ID string.
     * @returns Blockbook's transaction response in JSON.
     */
    public async get(txid: string): Promise<TransactionResponse> {
        const res = await this.client._getReq(`/api/v2/tx/${txid}`);
        return (await res.json()) as TransactionResponse;
    }

    /**
     * Fetches and decodes raw transaction details via transaction ID.
     * @param txid The transaction ID string.
     * @returns Fully decoded transaction information in JSON.
     */
    public async getDecoded(txid: string): Promise<RawJSONTransactionResponse> {
        const res = await this.client._getReq(`/api/getrawtransaction?txid=${txid}&decrypt=1`);
        return (await res.json()) as RawJSONTransactionResponse;
    }

    /**
     * Fetches the encoded string of the transaction via transaction ID.
     * @param txid The transaction ID string.
     * @returns Serialized hex string of the transaction.
     */
    public async getRaw(txid: string): Promise<string> {
        const res = await this.client._getReq(`/api/getrawtransaction?txid=${txid}&decrypt=0`);
        return await res.text();
    }

    /**
     * Fetches detailed information of all the transactions currently in mempool.
     * @returns An object of transaction IDs containing their mempool information.
     */
    public async getMempool(): Promise<RawMempoolResponse> {
        const res = await this.client._getReq(`/api/getrawmempool?verbose=1`);
        return (await res.json()) as RawMempoolResponse;
    }
}
