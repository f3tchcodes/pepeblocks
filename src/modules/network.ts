import { type PepeClient } from "#client/pepeClient";

export class PepeNetwork {
    public client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }
}
