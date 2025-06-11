import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly text: string | null;
};

type Outputs = {};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {
  if (params.text) {
    await context.preview({
      type: "markdown",
      data: params.text,
    });
  }
}