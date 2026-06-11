import { type ClientOptions } from "#interfaces/clientOptions";

import { PepeBlocks } from "#modules/blocks";
import { PepeTransactions } from "#modules/transactions";
import { PepeNetwork } from "#modules/network";
import { PepeAddresses } from "#modules/addresses";
import { PepeMarket } from "#modules/market";

import { getReq, getReqNumber } from "#utils/requests"; 

export class PepeClient {
    /**
     * The base URL for the API.
     * @default https://pepeblocks.com/
     */
    public readonly baseUrl: string;

    /**
     * General methods for blocks in the pepecoin blockchain.
     * @class
     */
    public blocks: PepeBlocks;

    /**
     * General methods for transactions in the pepecoin blockchain.
     * @class
     */
    public transactions: PepeTransactions;

    /**
     * General methods for network of the pepecoin blockchain.
     * @class
     */
    public network: PepeNetwork;
    
    /**
     * General methods for addresses of the pepecoin blockchain.
     * @class
     */
    public addresses: PepeAddresses;

    /**
     * General methods for market of the pepecoin blockchain.
     * @class
     */
    public market: PepeMarket;
    
    
    constructor(options: ClientOptions = {}) {
        // if baseUrl is given when initiating the object, use that
        // otherwise use the default website
        const defaultUrl = "https://pepeblocks.com/";
        const chosenUrl = options.baseUrl || defaultUrl;

        // attaching methods to the object
        this.baseUrl = chosenUrl.endsWith('/') ? chosenUrl.slice(0, -1) : chosenUrl;

        this.blocks = new PepeBlocks(this);
        this.transactions = new PepeTransactions(this);
        this.network = new PepeNetwork(this);
        this.addresses = new PepeAddresses(this);
        this.market = new PepeMarket(this);
    }

    /** 
     * Internal GET request handler used by other modules.
     * @internal 
     */
    public readonly _getReq = (path: string) => getReq(this, path);

    /** 
     * Internal GET request handler for number responses used by other modules.
     * @internal 
     */
    public readonly _getReqNumber = (path: string) => getReqNumber(this, path);
}
