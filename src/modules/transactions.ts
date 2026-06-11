import { type PepeClient } from "#client/pepeClient";
import { type RawJSONTransactionResponse, type TransactionResponse } from "#interfaces/transactions";

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
        const parsedJson = (await res.json()) as TransactionResponse;

        return parsedJson;
    }

    /**
     * Fetches and decodes raw transaction details via transaction ID.
     * @param txid The transaction ID string.
     * @returns Fully decoded transaction information in JSON.
     */
    public async getRawDecoded(txid: string): Promise<RawJSONTransactionResponse> {
        const res = await this.client._getReq(`/api/getrawtransaction?txid=${txid}&decrypt=1`);
        const parsedJson = (await res.json()) as RawJSONTransactionResponse;

        return parsedJson;
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
}
