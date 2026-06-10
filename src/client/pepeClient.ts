import { type ClientOptions } from "#interfaces/clientOptions";
import { PepeBlocks } from "#modules/blocks";

export class PepeClient {
    public baseUrl: string;
    public blocks: PepeBlocks;
    
    constructor(options: ClientOptions = {}) {
        // if baseUrl is given when initiating the object, use that
        // otherwise use the default website
        const defaultUrl = "https://pepeblocks.com/";
        const chosenUrl = options.baseUrl || defaultUrl;

        // attaching methods to the object
        this.baseUrl = chosenUrl.endsWith('/') ? chosenUrl.slice(0, -1) : chosenUrl;
        this.blocks = new PepeBlocks(this);
    }
}
