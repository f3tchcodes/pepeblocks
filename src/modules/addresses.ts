import { type PepeClient } from "#client/pepeClient";

export class PepeAddresses {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }
}
