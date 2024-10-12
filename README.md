# Webcam Stream Access

Using the `getUserMedia` API to request access to the user's webcam and stream the video on a web page.

## How It Works

- On page load, the browser prompts the user for camera access.
- If granted, the webcam stream is shown in a `<video>` element.
- If denied or an error occurs, an error is logged in the console.

## Usage

1. Open `index.html` in a supported browser.
2. Grant webcam access when prompted.
3. The video feed from the webcam will be displayed on the page.