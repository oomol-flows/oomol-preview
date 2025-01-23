from oocana import Context
from oocana import Context, MediaPreviewPayload


def main(params: dict, context: Context):
    image_path = params.get("image_path")
    assert image_path is not None
    context.preview(
        MediaPreviewPayload(
            type="image",
            data=image_path,
        )
    )
    return {"image_path": image_path}
