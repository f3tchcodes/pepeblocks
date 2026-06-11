import { type PepeClient } from "#client/pepeClient";

export class PepeMarket {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }
}
