// Text-to-Speech functionality
document.getElementById('speak-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    if (textInput) {
        const utterance = new SpeechSynthesisUtterance(textInput);
        speechSynthesis.speak(utterance);
    } else {
        alert('Please enter some text.');
    }
});

// Clear Text-to-Speech Input
document.getElementById('clear-text').addEventListener('click', () => {
    document.getElementById('text-input').value = '';
});

// Speech-to-Text functionality
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
        recognition.start();
        startRecordingButton.disabled = true;
        stopRecordingButton.disabled = false;
    }
});

stopRecordingButton.addEventListener('click', () => {
    if (recognition) {
        recognition.stop();
    }
});

// Clear Speech-to-Text Output
document.getElementById('clear-speech').addEventListener('click', () => {
    speechOutput.value = '';
});
