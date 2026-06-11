import { type PepeClient } from "#client/pepeClient";
import { type RawTransactionResponse } from "#interfaces/transactions";

export class PepeTransactions {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    public async get(txid: string): Promise<RawTransactionResponse> {
        const res = await this.client._getReq(`/api/getrawtransaction?txid=${txid}`);
        const parsedJson = (await res.json()) as RawTransactionResponse;

        return parsedJson;
    }
}
