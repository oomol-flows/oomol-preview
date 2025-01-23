from oocana import Context
from oocana import Context, MediaPreviewPayload


def main(params: dict, context: Context):
    images = params.get("images")
    assert images is not None
    context.preview(
        MediaPreviewPayload(
            type="image",
            data=images,
        )
    )
    return {"images": images}
