import {NewClient} from "../Features/Clients/context/models";
import {Result} from "../Common/types";
import {configuration} from "../index";

export async function createClient(newClient: NewClient): Promise<Result<string>> {
    try {
        const raw = await fetch(`${configuration.apiURL}/clients`, {
            method: 'POST',
            body: JSON.stringify(newClient)
        });
        if (raw.status >= 200 && raw.status < 500) {
            return await raw.json();
        }

        return {error: new Error("api communication error"), data: null}

    } catch (e) {
        console.log(e)
        return {data: null, error: e.toString()}
    }
}
