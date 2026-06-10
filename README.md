# pepeblocks
JavaScript and TypeScript SDK for interacting with the Pepecoin (PEP) blockchain through the Pepeblocks API.

# Installing
- Requires at least Node.js v18. Version 21+ recommended.
- This module relies on the Node.js native [`fetch()`](https://nodejs.org/docs/latest-v22.x/api/globals.html#fetch)
- This module is [ESM Only](https://nodejs.org/api/esm.html)
​
```sh
$ npm install pepeblocks
```

# Usage
```
import { Pepeblocks } from "pepeblocks";

const pepe = new Pepeblocks();

// Get total number of blocks
console.log(await pepe.blocks.count())
```

The complete API documentation for Pepeblocks can be found at [https://pepeblocks.com/api](https://pepeblocks.com/api).
