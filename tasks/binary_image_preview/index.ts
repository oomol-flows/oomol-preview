import { Context } from "@oomol/types/oocana";
import fs from "fs/promises";
import path from "path";

type Inputs = {
  readonly binary: Buffer;
};
type Outputs = {};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {
  const { binary } = params;
  const tempFilePath = path.join(context.sessionDir, `temp_${Date.now()}`);

  await fs.writeFile(tempFilePath, binary);

  context.preview({
    type: "image",
    data: tempFilePath,
  });
};
