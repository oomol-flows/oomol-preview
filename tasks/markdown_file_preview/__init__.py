from oocana import Context, MediaPreviewPayload


def main(params: dict, context: Context):
    file_path = params.get("file_path")
    markdown_content = _read_markdown_file(file_path)

    if markdown_content is not None:
        context.preview(
            MediaPreviewPayload(
                type="markdown",
                data=markdown_content,
            )
        )

    return {"text": markdown_content}


def _read_markdown_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            markdown_text = file.read()
        return markdown_text
    except FileNotFoundError as e:
        print(f"File {file_path} not found.")
    except Exception as e:
        print(f"An error occurred while reading the file: {e}")
        raise e
