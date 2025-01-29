# Webcam and Audio Visualizer with Noise Suppression

This project allows users to access their webcam and microphone, visualize audio levels using a canvas, and enable or disable noise suppression for better audio clarity. The video stream from the webcam is displayed, and the audio levels are visualized in real-time. Additionally, users can enable noise suppression via a checkbox to reduce background noise.

## Features 

- **Webcam Access**: Streams the user's webcam video to the screen.
- **Audio Visualizer**: Displays a real-time audio visualizer (bars) of the microphone input.
- **Noise Suppression**: Users can toggle noise suppression for clearer audio.

## Technologies Used

- **HTML5**: Structure and elements for displaying video and canvas.
- **JavaScript (ES6)**: For accessing the webcam and microphone, visualizing audio levels, and handling noise suppression.
- **Canvas API**: For rendering the audio visualizer.
- **Web Audio API**: For audio processing and visual representation.
- **MediaDevices API**: For accessing the user's media devices (webcam and microphone).

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/webcam-audio-visualizer.git
   ```

2. Open `index.html` in a browser that supports WebRTC, such as **Google Chrome** or **Microsoft Edge**.

3. Make sure your browser has permissions to access the webcam and microphone.

## How to Use

1. Open the `index.html` file in a browser that supports webcam and microphone access.

2. You will see your webcam stream displayed on the page.

3. Below the video stream, an audio visualizer will display the real-time audio levels from your microphone.

4. **Optional**: Use the checkbox to enable or disable noise suppression. When enabled, it reduces unwanted background noise for clearer audio.

## Code Overview

- **`index.html`**: Contains the HTML structure, including the video element for webcam display, a canvas for the audio visualizer, and a checkbox for toggling noise suppression.
- **`index.js`**: Contains the JavaScript logic for accessing webcam and microphone, processing audio, drawing the audio visualizer, and applying noise suppression based on user input.

### Key JavaScript Functions

- **getUserMedia()**: Accesses the user's webcam and microphone.
- **AudioContext**: Creates an audio context for real-time audio processing.
- **AnalyserNode**: Analyzes the audio input and provides frequency data.
- **draw()**: Continuously draws the audio data as a visualizer on the canvas.
- **applyConstraints()**: Applies noise suppression settings to the microphone input.

## Troubleshooting

- Ensure you grant permission to access your webcam and microphone.
- Noise suppression may not be effective in all browsers. Ensure you're using a browser like Google Chrome or Microsoft Edge for full functionality.
- The visualizer will only work when audio input is available.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.