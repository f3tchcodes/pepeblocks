# Pepeblocks SDK Library

This document provides complete details for all classes and methods exposed within the `pepeblocks` SDK library.

---

## PepeAddresses Module (`pep.addresses`)

**`get(address)`**
* Description: Fetches information about a wallet such as balance, TXIDs, total received etc.
* Parameters: `address` (`string`)
* Returns: `Promise<AddressProfileResponse>`
* Example:
```typescript
const profile = await pep.addresses.get("Pps2nuE...");
```

**`utxos(address)`**
* Description: Fetches an array of unspent transaction outputs of an address.
* Parameters: `address` (`string`)
* Returns: `Promise<AddressUTXOsResponse>`
* Example:
```typescript
const utxos = await pep.addresses.utxos("Pps2nuE...");
```

**`balancehistory(address)`**
* Description: Fetches all the balance changes made in the wallet.
* Parameters: `address` (`string`)
* Returns: `Promise<AddressBalanceHistoryResponse>`
* Example:
```typescript
const history = await pep.addresses.balancehistory("Pps2nuE...");
```

**`qr(address, options)`**
* Description: Generates a QR code image URL or fetches its raw image data for the wallet address.
* Parameters: `address` (`string`), `options` (`QROptions`)
* Returns: `Promise<string>`
* Example:
```typescript
const url = await pep.addresses.qr("Pps2nuE...");
const rawPng = await pep.addresses.qr("Pps2nuE...", { raw: true });
```

**`richlist(options)`**
* Description: Lists all blockchain addresses sorted by total coin balance (Rich List).
* Parameters: `options` (`AddressListOptions`)
* Returns: `Promise<AddressListResponse>`
* Example:
```typescript
const richList = await pep.addresses.richlist({ page: 1, limit: 10 });
```

---

## PepeBlocks Module (`pep.blocks`)

**`count()`**
* Description: Returns the count of all blocks on the blockchain.
* Returns: `Promise<number>`
* Example:
```typescript
const count = await pep.blocks.count();
```

**`getHash(height)`**
* Description: Takes in height of a block and returns its hash.
* Parameters: `height` (`number`)
* Returns: `Promise<string>`
* Example:
```typescript
const hash = await pep.blocks.getHash(1077213);
```

**`getByHash(hash)`**
* Description: Takes in hash of the block and returns its information.
* Parameters: `hash` (`string`)
* Returns: `Promise<BlockResponse>`
* Example:
```typescript
const block = await pep.blocks.getByHash("0000000000...");
```

**`getByHeight(height)`**
* Description: Takes in height of the block and returns its information.
* Parameters: `height` (`number`)
* Returns: `Promise<BlockResponse>`
* Example:
```typescript
const block = await pep.blocks.getByHeight(1077213);
```

---

## PepeMarket Module (`pep.market`)

**`moneysupply()`**
* Description: Fetches the current money supply of pepecoin from the API.
* Returns: `Promise<number>`
* Example:
```typescript
const supply = await pep.market.moneysupply();
```

**`price()`**
* Description: Fetches the current price of pepecoin from the API.
* Returns: `Promise<number>`
* Example:
```typescript
const price = await pep.market.price();
```

**`currentvolume()`**
* Description: Fetches the current volume of the pepecoin.
* Returns: `Promise<number>`
* Example:
```typescript
const volume = await pep.market.currentvolume();
```

**`summary()`**
* Description: Fetches details about the market summary from the API.
* Returns: `Promise<MarketSummaryResponse>`
* Example:
```typescript
const marketSummary = await pep.market.summary();
```

---

## PepeNetwork Module (`pep.network`)

**`difficult()`**
* Description: Fetches the current network difficulty.
* Returns: `Promise<number>`
* Example:
```typescript
const diff = await pep.network.difficult();
```

**`hashrate()`**
* Description: Fetches the current hashrate of the entire network.
* Returns: `Promise<number>`
* Example:
```typescript
const hashSpeed = await pep.network.hashrate();
```

**`connections()`**
* Description: Fetches the number of connections to other nodes.
* Returns: `Promise<number>`
* Example:
```typescript
const peers = await pep.network.connections();
```

**`status()`**
* Description: Fetches the system status of the Blockbook indexer and node backend.
* Returns: `Promise<SystemStatusResponse>`
* Example:
```typescript
const sysStatus = await pep.network.status();
```

---

## PepeTransactions Module (`pep.transactions`)

**`get(txid)`**
* Description: Fetches and decodes transaction details using Blockbook's API via transaction ID.
* Parameters: `txid` (`string`)
* Returns: `Promise<TransactionResponse>`
* Example:
```typescript
const tx = await pep.transactions.get("f41b2...");
```

**`getDecoded(txid)`**
* Description: Fetches and decodes raw transaction details via transaction ID.
* Parameters: `txid` (`string`)
* Returns: `Promise<RawJSONTransactionResponse>`
* Example:
```typescript
const decodedTx = await pep.transactions.getDecoded("f41b2...");
```

**`getRaw(txid)`**
* Description: Fetches the encoded string of the transaction via transaction ID.
* Parameters: `txid` (`string`)
* Returns: `Promise<string>`
* Example:
```typescript
const rawHex = await pep.transactions.getRaw("f41b2...");
```

**`getMempool()`**
* Description: Fetches detailed information of all the transactions currently in mempool.
* Returns: `Promise<RawMempoolResponse>`
* Example:
```typescript
const mempool = await pep.transactions.getMempool();
```

The complete API documentation for Pepeblocks can be found at [https://pepeblocks.com/api](https://pepeblocks.com/api).
