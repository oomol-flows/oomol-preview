//#region generated meta
type Inputs = {
    jsonString: string;
};
type Outputs = {
};
//#endregion

import type { Context } from "@oomol/types/oocana";

export default async function (
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    const { jsonString } = params;
    try {
        const jsonObject = JSON.parse(jsonString);
        context.preview({
            type: "json",
            data: jsonObject
        })
    } catch (error) {
        context.preview({
            type: "text",
            data: `Error parsing JSON: ${error.message}`
        });
        throw error;
    }
};