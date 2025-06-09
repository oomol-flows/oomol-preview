import type { Context } from "@oomol/types/oocana";

//#region generated meta
type Inputs = {
  file: string;
};
type Outputs = {
  files: string[];
};
//#endregion

export default async function({ file }: Inputs): Promise<Outputs> {
  return { files: [file] };
};