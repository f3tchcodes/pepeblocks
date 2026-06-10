import { type PepeClient } from "#client/pepeClient";

export async function getBlockCount(client: PepeClient ) {
    const res = await fetch(`${client.baseUrl}/api/getblockcount`);
    if (!res.ok) {
        throw new Error(`Request failed with the status code: ${res.status}`);
    }
    return res.json();
}
