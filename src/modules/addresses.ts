import { type PepeClient } from "#client/pepeClient";
import { 
    type AddressProfileResponse,
    type AddressUTXOsResponse,
    type AddressBalanceHistoryResponse,
    type AddressListResponse,
    type AddressListOptions
} from "#interfaces/addresses";

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

    /**
     * Fetches an array of unspent transaction outputs of an address.
     * @param address The address of a wallet.
     * @returns An array of all the unspent transaction outputs of the provided address.
     */
    public async utxos(address: string): Promise<AddressUTXOsResponse> {
        const res = await this.client._getReq(`/api/v2/utxo/${address}`);
        return (await res.json()) as AddressUTXOsResponse;
    }

    /**
     * Fetches all the balance changes made in the wallet.
     * @param address The address of a wallet.
     * @returns An array of all the balance changes of the wallet.
     */
    public async balancehistory(address: string): Promise<AddressBalanceHistoryResponse> {
        const res = await this.client._getReq(`/api/v2/balancehistory/${address}`);
        return (await res.json()) as AddressBalanceHistoryResponse;
    }

    public async richlist(options: AddressListOptions = {}): Promise<AddressListResponse> {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;

        if (limit > 100) {
            throw new RangeError(`Pepeblock SDK Error: The maximum allowed value for 'limit' is 100. Received: ${limit}`);
        }

        const res = await this.client._getReq(`/api/v3/addresses?page=${page}&limit=${limit}`);
        return (await res.json()) as AddressListResponse;
    }
}
