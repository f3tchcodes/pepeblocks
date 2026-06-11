import { type PepeClient } from "#client/pepeClient";
import { type JSONTransactionResponse } from "#interfaces/transactions";

export class PepeTransactions {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Fetches and decodes raw transaction details via transaction ID.
     * @param txid The transaction ID string.
     * @returns Fully decoded transaction information in JSON.
     */
    public async get(txid: string): Promise<JSONTransactionResponse> {
        const res = await this.client._getReq(`/api/getrawtransaction?txid=${txid}&decrypt=1`);
        const parsedJson = (await res.json()) as JSONTransactionResponse;

        return parsedJson;
    }
}
