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
  let markdownContent: string;
  try {
    markdownContent = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    if (error.code === "ENOENT") {
      context.preview({
        type: "text",
        data: `File ${filePath} not found.`,
      });
    } else {
      context.preview({
        type: "text",
        data: `Error parsing JSON: ${error.message}`
      });
    }
    throw error;
  }
  if (markdownContent !== null) {
    context.preview({
      type: "markdown",
      data: markdownContent,
    });
  }
}

async function readMarkdownFile(filePath: string, context: Context<Inputs, void>): Promise<string | null> {
  try {
    const markdownText = await fs.readFile(filePath, "utf-8");
    return markdownText;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`File ${filePath} not found.`);
      return null;
    } else {
        context.preview({
            type: "text",
            data: `Error parsing JSON: ${error.message}`
        });
    }
    throw error;
  }
}
