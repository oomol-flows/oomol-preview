import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly image_path: string | null;
};

export default async function (
  params: Inputs,
  context: Context<Inputs, void>
): Promise<void> {
  const imagePath = params.image_path;
  if (imagePath === null) {
    throw new Error("image_path cannot be null");
  }
  await context.preview({
    type: "image",
    data: imagePath,
  });
};
