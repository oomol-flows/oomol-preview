# OOMOL Preview

A comprehensive collection of preview components for the OOMOL platform that makes it easy to visualize and display various types of files and data formats.

## What is OOMOL Preview?

OOMOL Preview is a package that provides ready-to-use building blocks (components) for previewing different types of content in your OOMOL workflows. Whether you're working with images, videos, audio files, documents, or data files, this package has you covered.

## Use Cases

This package is perfect for:

- **Content Creators**: Preview and review media files before publishing
- **Data Analysts**: Visualize JSON data and structured information
- **Web Developers**: Preview HTML content and markdown documentation
- **Media Professionals**: Review images, videos, and audio files in various formats
- **Document Workflows**: Display and review markdown and text documents

## Available Components

### Image Preview Components

#### 🖼️ Image Preview
Display individual image files with support for:
- PNG (Portable Network Graphics)
- JPEG (Joint Photographic Experts Group)
- WebP (Web Picture format)
- GIF (Graphics Interchange Format)
- AVIF (AV1 Image File Format)
- BMP (Bitmap Image File)
- ICO (Icon format)
- TIFF (Tagged Image File Format)

**Input**: Path to an image file
**Use for**: Viewing single images from your file system or downloaded from URLs

#### 🖼️ Binary Image Preview
Display images directly from binary data without saving to disk first.

**Input**: Image binary data
**Use for**: Previewing images that are generated or processed in memory

#### 🖼️🖼️ Images Preview
Display multiple images at once in a gallery view.

**Input**: Array of image file paths
**Use for**: Reviewing batches of images, creating image galleries, or comparing multiple images side by side

### Video Preview

#### 🎬 Video Preview
Play and preview video files with support for:
- MP4 (MPEG-4 Part 14)
- WebM (Web Media)
- HLS (HTTP Live Streaming - .m3u8)
- MOV (QuickTime Movie)
- Ogg Video

**Input**: Path to a video file
**Use for**: Reviewing video content, checking video quality, or previewing processed videos

### Audio Preview

#### 🎵 Audio Preview
Play and preview audio files with support for:
- MP3 (MPEG Audio Layer 3)
- MP4 Audio (M4A)
- WAV (Waveform Audio File Format)
- WebM Audio
- FLAC (Free Lossless Audio Codec)
- Opus Audio
- PCM (Pulse Code Modulation)
- Vorbis Audio
- AAC (Advanced Audio Coding)

**Input**: Path to an audio file
**Use for**: Listening to audio files, reviewing recordings, or checking audio quality

### Document & Data Preview Components

#### 📄 HTML Preview
Render and display HTML content in an embedded browser view.

**Input**: HTML content as text
**Use for**: Previewing web pages, rendered HTML templates, or generated reports

#### 📝 Markdown Preview
Display markdown text with proper formatting including headers, lists, links, and more.

**Input**: Markdown content as text
**Use for**: Previewing markdown documentation, notes, or formatted text

#### 📝 Markdown File Preview
Load and display markdown files with full formatting support.

**Input**: Path to a markdown file (.md, .markdown, .mdown)
**Use for**: Reviewing documentation files, README files, or markdown-based content

### JSON Data Preview Components

#### 📊 JSON File Preview
Display JSON files with syntax highlighting for easy reading.

**Input**: Path to a JSON file (.json, .jsonc, .json5, .geojson)
**Use for**: Reviewing configuration files, API responses saved as files, or data exports

#### 📊 JSON String Preview
Display JSON content from a string with syntax highlighting.

**Input**: JSON content as a text string
**Use for**: Previewing JSON data returned from APIs or generated dynamically

#### 📊 JSON Object Preview
Display JSON objects with proper formatting and syntax highlighting.

**Input**: JSON object data
**Use for**: Inspecting data structures, debugging, or reviewing processed data

## How to Use

### In OOMOL Workflows

1. **Add the Preview Package**: Install `oomol-preview` in your OOMOL workspace
2. **Drag and Drop**: Select the appropriate preview component from the library
3. **Connect Your Data**: Link the output from your previous workflow steps to the preview component's input
4. **Run and View**: Execute your workflow to see the preview

### Example Workflow Scenarios

**Scenario 1: Download and Preview an Image**
```
URL Input → Download File → Image Preview
```
Download an image from the internet and preview it immediately.

**Scenario 2: Process and Review Video**
```
Video File → Video Processing → Video Preview
```
Apply filters or edits to a video and preview the results.

**Scenario 3: API Data Visualization**
```
API Call → JSON Response → JSON Object Preview
```
Fetch data from an API and display it in a readable format.

**Scenario 4: Document Review**
```
Markdown Editor → Markdown Preview
```
Write or edit markdown content and see the formatted result in real-time.

## Technical Requirements

- **Platform**: OOMOL
- **Dependencies**:
  - oomol-file (version 0.1.0 or higher)
  - oomol-transform (version 0.0.7 or higher)

## Benefits

✅ **No Coding Required**: All components are ready to use with simple drag-and-drop
✅ **Wide Format Support**: Covers most common file and data formats
✅ **Visual Feedback**: See your data and files immediately in your workflows
✅ **Professional Quality**: Built with modern web technologies for reliable rendering
✅ **Easy Integration**: Works seamlessly with other OOMOL components

## Support & Resources

- **Repository**: [github.com/oomol-flows/oomol-preview](https://github.com/oomol-flows/oomol-preview)
- **Issues & Questions**: Report bugs or ask questions on our GitHub repository
- **Version**: 0.1.7

## File Format References

For detailed information about supported formats:
- [Chromium Audio/Video Formats](https://www.chromium.org/audio-video/)
- [Image File Type Guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types)

---

**Made for OOMOL** - Simplifying visual workflows for everyone
