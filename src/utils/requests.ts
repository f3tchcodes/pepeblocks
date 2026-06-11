import { type PepeClient } from "#client/pepeClient";

export async function getReq<T>(client: PepeClient, path: string): Promise<T> {
    const res = await fetch(`${client.baseUrl}${path}`);

    // if response status is not 200, throw error
    if (!res.ok) {
        throw new Error(`Request failed with the status code: ${res.status}`);
    }

    // convert everything to text first
    const text = await res.text();

    // check whether or not it's empty
    if (text.trim() === "") {
        throw new Error(`Invalid response received (empty body) from the path: ${path}`);
    }

    try {
        const parsedJSON = JSON.parse(text);

        if (typeof parsedJSON === "number" && Number.isNaN(parsedJSON)) {
            throw new Error(`Invalid response received (NaN): ${parsedJSON}`)
        }
        
        return parsedJSON as T;
    } catch {
        return text as unknown as T;
    }
}
