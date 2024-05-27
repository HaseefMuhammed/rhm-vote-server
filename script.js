console.log("Script Idle");

let audio = new Audio("images/clip.mp3");

function start() {
    audio.play();
    audio.onended = function() {
        window.location.href = 'index.html';
    };
}
