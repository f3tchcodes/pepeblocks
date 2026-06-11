import { PepeClient } from "#client/pepeClient";
import { type BlockResponse } from "#interfaces/blocks";

export class PepeBlocks {
    private client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Returns the count of all blocks on the blockchain.
     * @returns Number of blocks in the blockchain.
     */
    public async count(): Promise<number> {
        return await this.client._getReq("/api/getblockcount");
    }

    /**
     * Takes in height of a block and returns it's hash.
     * @param height The block height.
     * @returns Hash value of the block.
     */
    public async getHash(height: number): Promise<string> {
        return await this.client._getReq(`/api/getblockhash?index=${height}`);
    }

    /**
     * Takes in hash of the block and returns it's information.
     * @param hash The block hash.
     * @returns Information about the block.
     */
    public async getByHash(hash: string): Promise<BlockResponse> {
        return await this.client._getReq(`/api/getblock?hash=${hash}`);
    }

    /**
     * Takes in height of the block and returns it's information.
     * @param height The block height.
     * @returns Information about the block.
     */
    public async getByHeight(height: number): Promise<BlockResponse> {
        const hash = await this.getHash(height);
        return await this.client._getReq(`/api/getblock?hash=${hash}`);
    }
}
