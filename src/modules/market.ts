import { type PepeClient } from "#client/pepeClient";

export class PepeMarket {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Fetches the current money supply from the API.
     * @returns Money supply number.
     */
    public async moneysupply(): Promise<number> {
        return await this.client._getReqNumber(`/ext/getmoneysupply`);
    }
}
