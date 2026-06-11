import { type PepeClient } from "#client/pepeClient";
import { 
    type AddressProfileResponse,
    type AddressUTXOsResponse,
    type AddressBalanceHistoryResponse,
    type AddressListResponse,
    type AddressListOptions,
    type QROptions
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
        return await this.client._getReq(`/api/v2/address/${address}`);
    }

    /**
     * Fetches an array of unspent transaction outputs of an address.
     * @param address The address of a wallet.
     * @returns An array of all the unspent transaction outputs of the provided address.
     */
    public async utxos(address: string): Promise<AddressUTXOsResponse> {
        return await this.client._getReq(`/api/v2/utxo/${address}`);
    }

    /**
     * Fetches all the balance changes made in the wallet.
     * @param address The address of a wallet.
     * @returns An array of all the balance changes of the wallet.
     */
    public async balancehistory(address: string): Promise<AddressBalanceHistoryResponse> {
        return await this.client._getReq(`/api/v2/balancehistory/${address}`);
    }

    /**
     * Generates a QR code image URL or fetches its raw image data for the wallet address.
     * @param address The address of a wallet.
     * @param options Configure raw image or link of an image options.
     * @example
     * const url = await pep.addresses.qr("Pps2nuE...");
     * const rawPng = await pep.addresses.qr("Pps2nuE...", { raw: true });
     */
    public async qr(address: string, options: QROptions = {}): Promise<string> {
        const raw = options.raw ?? false;
        const query = `/qr/${address}`;

        if (raw) {
            return await this.client._getReq(query);
        } else {
            return `${this.client.baseUrl}${query}`
        }
    }

    /**
     * Lists all blockchain addresses sorted by total coin balance (Rich List).
     * @param options Configure page and limit.
     * @returns Object containing an array of addresses sorted by highest to lowest balance.
     * @example
     * ```typescript
     * const richList = await pep.addresses.richlist({ page: 1, limit: 10 });
     * ```
     */
    public async richlist(options: AddressListOptions = {}): Promise<AddressListResponse> {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;

        if (limit > 100) {
            throw new RangeError(`Pepeblock SDK Error: The maximum allowed value for 'limit' is 100. Received: ${limit}`);
        }

        return await this.client._getReq(`/api/v3/addresses?page=${page}&limit=${limit}`);
    }
}
