import { type PepeClient } from "#client/pepeClient";
import { type AddressProfileResponse } from "#interfaces/addresses";

export class PepeAddresses {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Fetches information about a wallet such as balance, TXIDs, total received etc.
     * @param address The address of a wallet.
     * @returns Object containing information about the wallet.
     */
    public async get(address: string): Promise<AddressProfileResponse> {
        const res = await this.client._getReq(`/api/v2/address/${address}`);
        return (await res.json()) as AddressProfileResponse;
    }
}
