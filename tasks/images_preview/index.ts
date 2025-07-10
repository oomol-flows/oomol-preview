import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly images: string[];
};

export default async function (
  params: Inputs,
  context: Context<Inputs, void>
): Promise<void> {
  const { images } = params;
  context.preview({
    type: "image",
    data: images,
  });
}