const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;
let paused = true;
let hrs = 0;
let mins = 0;
let seconds = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    seconds = 0;
    timerDisplay.textContent = "00:00:00";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60) % 60));
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60) % 60));

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timerDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit) {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
}