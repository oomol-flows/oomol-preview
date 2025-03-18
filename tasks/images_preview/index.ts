import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly images: string[];
};

type Outputs = {
  readonly images: string[];
};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  const { images } = params;
  context.preview({
    type: "image",
    data: images,
  });
  return { images };
}