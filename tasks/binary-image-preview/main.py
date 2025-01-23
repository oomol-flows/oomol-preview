from tempfile import NamedTemporaryFile
from oocana import Context, MediaPreviewPayload

def main(inputs: dict, context: Context):
  binary: bytes = inputs["binary"]
  dir = context.session_dir
  with NamedTemporaryFile(dir=dir, delete=False) as temp:
    temp.write(binary)
    file_path = temp.name

  context.preview(MediaPreviewPayload(
    type="image",
    data=file_path,
  ))