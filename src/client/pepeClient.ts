import { type ClientOptions } from "#interfaces/clientOptions";
import { getBlockCount } from "#modules/APICalls";

export class PepeClient {
    public baseUrl: string;
    
    constructor(options: ClientOptions = {}) {
        // if baseUrl is given when initiating the object, use that
        // otherwise use the default website
        const defaultUrl = "https://pepeblocks.com/";
        const chosenUrl = options.baseUrl || defaultUrl;
        this.baseUrl = chosenUrl.endsWith('/') ? chosenUrl.slice(0, -1) : chosenUrl;
    }

    public getBlockCount = () => getBlockCount(this);
}
