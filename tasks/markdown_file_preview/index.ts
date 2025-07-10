import type { Context } from "@oomol/types/oocana";
import fs from "fs/promises";

type Inputs = {
  readonly file_path: string;
};

export default async function (
  params: Inputs,
  context: Context<Inputs, void>
): Promise<void> {
  const filePath = params.file_path;
  const markdownContent = await readMarkdownFile(filePath);

  if (markdownContent !== null) {
    context.preview({
      type: "markdown",
      data: markdownContent,
    });
  }
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
