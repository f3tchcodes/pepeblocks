import { type ClientOptions } from "#interfaces/clientOptions";

export class PepeClient {
    public baseUrl: string;
    
    constructor(options: ClientOptions = {}) {
        const defaultUrl = "https://pepeblocks.com/";
        const chosenUrl = options.baseUrl || defaultUrl;
        this.baseUrl = chosenUrl.endsWith('/') ? chosenUrl.slice(0, -1) : chosenUrl;
    }
}
