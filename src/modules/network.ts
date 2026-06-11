import { type PepeClient } from "#client/pepeClient";

export class PepeNetwork {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }
}
