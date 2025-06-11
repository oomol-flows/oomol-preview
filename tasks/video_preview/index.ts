import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly video_path: string;
};
type Outputs = {};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {
  await context.preview({
    type: "video",
    data: params.video_path,
  });
};
