import { type PepeClient } from "#client/pepeClient";
import { type MarketSummaryResponse } from "#interfaces/market";

export class PepeMarket {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Fetches the current money supply of pepecoin from the API.
     * @returns Current money supply number.
     */
    public async moneysupply(): Promise<number> {
        return await this.client._getReqNumber(`/ext/getmoneysupply`);
    }

    /**
     * Fetches the current price of pepecoin from the API.
     * @returns Current price number.
     */
    public async price(): Promise<number> {
        return await this.client._getReqNumber(`/ext/getcurrentprice`);
    }

    /**
     * Fetches the current volume of the pepecoin.
     * @returns Current volume number.
     */
    public async currentvolume(): Promise<number> {
        return await this.client._getReqNumber(`/ext/getcurrentvolume`);
    }

    /**
     * Fetches details about the market summary from the API.
     * @returns An object containing current market summary.
     */
    public async summary(): Promise<MarketSummaryResponse> {
        const res = await this.client._getReq(`/ext/getsummary`);
        return (await res.json()) as MarketSummaryResponse;
    }
}
