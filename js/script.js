const startRecordingButton = document.getElementById('start-recording');
const stopRecordingButton = document.getElementById('stop-recording');
const speechOutput = document.getElementById('speech-output');

let recognition;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    recognition = ('SpeechRecognition' in window) ? new SpeechRecognition() : new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        speechOutput.value = transcript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        // Handle error gracefully, e.g., display an error message to the user
    };

    recognition.onend = () => {
        startRecordingButton.disabled = false;
        stopRecordingButton.disabled = true;
    };
} else {
    alert('Speech recognition not supported in this browser.');
}

startRecordingButton.addEventListener('click', () => {
    if (recognition) {
        try {
            recognition.start();
            startRecordingButton.disabled = true;
            stopRecordingButton.disabled = false;
        } catch (error) {
            console.error('Error starting speech recognition:', error);
            // Handle error gracefully
        }
    }
});

stopRecordingButton.addEventListener('click', () => {
    if (recognition) {
        recognition.stop();
    }
});

document.getElementById('clear-speech').addEventListener('click', () => {
    speechOutput.value = '';
});
