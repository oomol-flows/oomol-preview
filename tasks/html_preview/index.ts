import type { Context } from "@oomol/types/oocana";

type Inputs = {
  readonly html: string;
};
type Outputs = {};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  const { html } = params;
  await context.preview({
    type: "html",
    data: html,
  });
  return {};
};
