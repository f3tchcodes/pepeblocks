import { type PepeClient } from "#client/pepeClient";

export class PepeNetwork {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Fetches the current network difficulty.
     * @returns The difficulty value as a number.
     */
    public async difficult(): Promise<number> {
        return await this.client._getReqNumber(`/api/getdifficulty`);
    }

    /**
     * Fetches the current hashrate of the entire network.
     * @returns The current hashrate as a number.
     */
    public async hashrate(): Promise<number> {
        return await this.client._getReqNumber(`/api/getnetworkhashps`);
    }

    /**
     * Fetches the number of connections to other nodes.
     * @returns Number of connections to other nodes.
     */
    public async connections(): Promise<number> {
        return await this.client._getReqNumber(`/api/getconnectioncount`);
    }
}
