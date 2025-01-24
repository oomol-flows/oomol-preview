from oocana import Context, MediaPreviewPayload


def main(params: dict, context: Context):
    file_path = params.get("file_path")
    # your code
    markdown_content = _read_markdown_file(file_path)

    if markdown_content is not None:
        context.preview(
            MediaPreviewPayload(
                type="markdown",
                data=markdown_content,
            )
        )

    return {"text": markdown_content}


# 读取 .md 文件
def _read_markdown_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            markdown_text = file.read()
        return markdown_text
    except FileNotFoundError:
        print(f"文件 {file_path} 未找到")
        return None
    except Exception as e:
        print(f"读取文件时发生错误: {e}")
        return None
