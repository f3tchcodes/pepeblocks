import { PepeClient } from "#client/pepeClient";

export class PepeBlocks {
    public client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    // get total count of blocks
    public async count(): Promise<number> {
        const res = await fetch(`${this.client.baseUrl}/api/getblockcount`);

        // if response status is not 200, throw error
        if (!res.ok) {
            throw new Error(`Request failed with the status code: ${res.status}`);
        }
        
        // convert text into number
        const text = await res.text();
        const count = Number(text);

        // if it's not a number, throw error
        if (Number.isNaN(count)) {
            throw new Error(`Invalid block count received: ${text}`);
        }

        return count;
    }
}
