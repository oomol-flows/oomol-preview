from oocana import Context, MediaPreviewPayload

def main(inputs: dict, context: Context):
  html: str = inputs["html"]
  context.preview(MediaPreviewPayload(
    type="html",
    data=html,
  ))