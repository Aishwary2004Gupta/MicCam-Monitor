const video = document.querySelector('video');
const canvas = document.getElementById('audioVisualizer');
const ctx = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        // Display the video stream
        video.srcObject = stream;
        video.play();

        // Set up the audio context and analyzer
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();

        // Configure the analyser
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // Connect the audio source to the analyser
        source.connect(analyser);

        // Draw the audio levels
        function draw() {
            requestAnimationFrame(draw);

            analyser.getByteFrequencyData(dataArray);

            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the audio bars
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 2;
                ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth + 1;
            }
        }

        draw();
    })
    .catch(error => {
        console.error('Error accessing webcam or microphone:', error);
    });
