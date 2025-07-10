//#region generated meta
type Inputs = {
    jsonPath: string;
};
type Outputs = {
};
//#endregion

import type { Context } from "@oomol/types/oocana";
import fs from "fs";

export default async function (
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    const { jsonPath } = params;
    try {
        const jsonData = fs.readFileSync(jsonPath, 'utf-8');
        const jsonObject = JSON.parse(jsonData);
        context.preview({
            type: "json",
            data: jsonObject
        })
        return { jsonObject: jsonObject }
    } catch (error) {
        context.preview({
            type: "text",
            data: `Error parsing JSON: ${error.message}`
        });
        throw error;
    }
};
