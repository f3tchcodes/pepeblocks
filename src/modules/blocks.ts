import { PepeClient } from "#client/pepeClient";

export class PepeBlocks {
    public client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    // get total count of blocks
    public async count(): Promise<number> {
        const res = await this.client._getReq("/api/getblockcount");
        
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
