var myaudio = document.getElementById('myaudio');

document.getElementById('aplay').addEventListener('click', playAudio);
document.getElementById('apause').addEventListener('click', pauseAudio);

function playAudio() {
    myaudio.play();
}

function pauseAudio() {
    myaudio.pause();
}