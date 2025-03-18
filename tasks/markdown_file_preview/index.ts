import type { Context } from "@oomol/types/oocana";
import fs from "fs/promises";

type Inputs = {
  readonly file_path: string;
};

type Outputs = {
  readonly text: string | null;
};

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  const filePath = params.file_path;
  const markdownContent = await readMarkdownFile(filePath);

  if (markdownContent !== null) {
    context.preview({
      type: "markdown",
      data: markdownContent,
    });
  }
  return { text: markdownContent };
}

async function readMarkdownFile(filePath: string): Promise<string | null> {
  try {
    const markdownText = await fs.readFile(filePath, "utf-8");
    return markdownText;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`File ${filePath} not found.`);
      return null;
    } else {
      console.error(`An error occurred while reading the file: ${error}`);
      throw error;
    }
  }
}
