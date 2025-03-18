import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly audio_path: string;
};

type Outputs = {};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  context.preview({
    type: "audio",
    data: params.audio_path,
  });
  return {};
};