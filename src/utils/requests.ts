import { type PepeClient } from "#client/pepeClient";

async function req(client: PepeClient, path: string) {
    const res = await fetch(`${client.baseUrl}${path}`);

    // if response status is not 200, throw error
    if (!res.ok) {
        throw new Error(`Request failed with the status code: ${res.status}`);
    }
    
    // return the response
    return res;
}
