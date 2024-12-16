from oocana import Context, MediaPreviewPayload

def main(inputs: dict, context: Context):
  context.preview(MediaPreviewPayload(
    type="video",
    data=inputs["video_path"],
  ))