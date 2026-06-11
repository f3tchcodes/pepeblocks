# pepeblocks
JavaScript and TypeScript SDK for interacting with the Pepecoin (PEP) blockchain through the Pepeblocks API.

## Table of Contents
* [Installation](#installing)
* [Usage](#usage)
* [SDK Modules Overview](#sdk-modules-overview)
* [Documentation](#documentation)
* [Contribute](CONTRIBUTING.md)
* [License](#license)

---

## Installing
- Requires at least Node.js v18. Version 21+ recommended.
- This module relies on the Node.js native [`fetch()`](https://nodejs.org/docs/latest-v22.x/api/globals.html#fetch)
- This module is [ESM Only](https://nodejs.org/api/esm.html)
​
```sh
$ npm install pepeblocks
```

## Usage
```
import { Pepeblocks } from "pepeblocks";

const pep = new Pepeblocks();

// Get total number of blocks
console.log(await pep.blocks.count());

// Get current market price
console.log(await pep.market.price());
```

## SDK Modules Overview
The SDK splits the API endpoints into distinct, structured classes available on your client instance:

| Module Path | Description | Key Methods |
| :--- | :--- | :--- |
| `pep.addresses` | Wallet data, balances, UTXOs, and QR codes. | `get`, `utxos`, `balancehistory`, `qr`, `richlist` |
| `pep.blocks` | Blockchain block lookups by height or hash. | `count`, `getHash`, `getByHash`, `getByHeight` |
| `pep.market` | Market financials, prices, supply, and volumes. | `moneysupply`, `price`, `currentvolume`, `summary` |
| `pep.network` | Hashing stats, connections, and difficulty tracking. | `difficult`, `hashrate`, `connections`, `status` |
| `pep.transactions` | Raw, decoded, and mempool transaction details. | `get`, `getDecoded`, `getRaw`, `getMempool` |

---

## Documentation

The complete SDK documentation containing all parameters, return types, and operational examples can be found inside the local folder file:
* **[docs/docs.md](docs/docs.md)**

---

## License
This SDK is licensed under [MIT](LICENSE).
