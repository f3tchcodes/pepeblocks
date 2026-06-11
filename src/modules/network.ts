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
        const res = await this.client._getReq(`/api/getdifficulty`);

        // convert text into number
        const text = await res.text();
        const difficulty = Number(text);

        // if it's not a number, throw error
        if (text === "" || Number.isNaN(difficulty)) {
            throw new Error(`Invalid difficulty received: ${text}`);
        }

        return difficulty;
    }

    /**
     * Fetches the current hashrate of the entire network.
     * @returns The current hashrate as a number.
     */
    public async hashrate(): Promise<number> {
        const res = await this.client._getReq(`/api/getnetworkhashps`);

        // convert text into number
        const text = await res.text();
        const hashrate = Number(text);

        // if it's not a number, throw error
        if (text === "" || Number.isNaN(hashrate)) {
            throw new Error(`Invalid hash rate received: ${text}`);
        }

        return hashrate;
    }
}
