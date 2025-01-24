from oocana import Context, MediaPreviewPayload

def main(inputs: dict, context: Context):
  context.preview(MediaPreviewPayload(
    type="audio",
    data=inputs["audio_path"],
  ))