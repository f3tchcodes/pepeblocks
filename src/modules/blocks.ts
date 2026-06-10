import { PepeClient } from "#client/pepeClient";

export class PepeBlocks {
    public client: PepeClient;

    constructor(client: PepeClient) {
        this.client = client;
    }

    /**
     * Returns the count of all blocks on the blockchain
     * @returns Number of blocks in the blockchain
     */
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

    /**
     * Takes in index of a block and returns it's hash
     * @param index The block index
     * @returns hash value of the block
     */
    public async getHash(index: number): Promise<string> {
        const res = await this.client._getReq(`/api/getblockhash?index=${index}`);

        return res.text()
    }
}
