import { PepeClient } from "#client/pepeClient";

export class PepeBlocks {
    public client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    public async count(): Promise<number> {
        const res = await fetch(`${this.client.baseUrl}/api/getblockcount`);
        if (!res.ok) {
            throw new Error(`Request failed with the status code: ${res.status}`);
        }
        return res.json();
    }
}
