import { type PepeClient } from "#client/pepeClient";

export async function getReq(client: PepeClient, path: string): Promise<Response> {
    const res = await fetch(`${client.baseUrl}${path}`);

    // if response status is not 200, throw error
    if (!res.ok) {
        throw new Error(`Request failed with the status code: ${res.status}`);
    }

    // return the response
    return res;
}

export async function getReqNumber(client: PepeClient, path: string) {
    const res = await client._getReq(`${client.baseUrl}${path}`);

    // convert text into number
    const text = await res.text();
    const num = Number(text);

    // if it's not a number, throw error
    if (text === "" || Number.isNaN(num)) {
        throw new Error(`Invalid response received (NaN/empty): ${text}`);
    }

    return num;
}
