import { type PepeClient } from "#client/pepeClient";
import { type SystemStatusResponse } from "#interfaces/network";

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

    /**
     * Fetches the system status of the Blockbook indexer and node backend.
     * @returns Object containing system status data.
     */
    public async status(): Promise<SystemStatusResponse> {
        const res = await this.client._getReq(`/api/status`);
        return (await res.json()) as SystemStatusResponse;
    }
}
