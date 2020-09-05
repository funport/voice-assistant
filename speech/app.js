const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    '  Hello there boss Aniketh Edloor'
]

const weather = [
    'Go and  find it out yourself '
]
const ask = [
    'I am all fine.. how about you?'
]
const praise = [
    'You are the boss Aniketh Edloor'
]
const joke = [
    'what is the best time to go to dentist? It is two thirty actually tooth. hurty '
]
const help = [
    'Oh, sure please give me the task my dear friend!!!'
]
const name = [
    'My name is Edloor. How can i help you today?'
]
const morning = [
    'Vey Good morning and a happy day'
]
const afternoon = [
    'good afternoon my old friend'
]
const evening = [
    'Whoo-hoo. I am glad you are back master. good evening'
]
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is Activated');
};

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();


    speech.text = 'Sorry i still dont know the answer for your question, but dont worry my master will add this feature very soon';

    if (message.includes('how are you')) {
        const finalText =
            ask[Math.floor(Math.random() * ask.length)];
        speech.text = finalText;
    }
    if (message.includes('weather')) {
        const finalText =
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }
    if (message.includes('hello')) {
        const finalText =
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if (message.includes('boss')) {
        const finalText =
            praise[Math.floor(Math.random() * praise.length)];
        speech.text = finalText;
    }
    if (message.includes('joke')) {
        const finalText =
            joke[Math.floor(Math.random() * joke.length)];
        speech.text = finalText;
    }
    if (message.includes('help')) {
        const finalText =
            help[Math.floor(Math.random() * help.length)];
        speech.text = finalText;
    }
    if (message.includes('name')) {
        const finalText =
            name[Math.floor(Math.random() * name.length)];
        speech.text = finalText;
    }
    if (message.includes('Google')) {
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://www.google.com';
        speech.text = 'With pleasure';
        a.click();
    }
    if (message.includes('WhatsApp')) {
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://web.whatsapp.com';
        speech.text = 'Oh yeah sure';
        a.click();
    }
    if (message.includes('YouTube')) {
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://youtube.com';
        speech.text = 'sure buddy';
        a.click();
    }
    if (message.includes('Hangouts')) {
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://hangouts.google.com';
        speech.text = 'Here you go!';
        a.click();
    }
    if (message.includes('Hangout')) {
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://hangouts.google.com';
        speech.text = 'Here you go!';
        a.click();
    }
    if (message.includes('good morning')) {
        const finalText =
            morning[Math.floor(Math.random() * morning.length)];
        speech.text = finalText;
    }
    if (message.includes('good evening')) {
        const finalText =
            evening[Math.floor(Math.random() * evening.length)];
        speech.text = finalText;
    }
    if (message.includes('good afternoon')) {
        const finalText =
            afternoon[Math.floor(Math.random() * afternoon.length)];
        speech.text = finalText;
    }



    speech.rate = 0.8;



    window.speechSynthesis.speak(speech);
}
