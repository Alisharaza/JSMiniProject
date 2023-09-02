const timer = document.querySelector(".clock-face");
const start = document.querySelector(".start-btn");
const stop = document.querySelector(".stop-btn");
const reset = document.querySelector(".reset-btn");
let minutes = 0;
let seconds = 0;
let milis = 0;
let timerId = 0;
let cnt = 10;
let startTime = false;
function startTimer() {
  if (startTime) {
    return;
  }
  startTime = true;
  timerCycle();
}
function stopTimer() {
  clearTimeout(timerId);
  startTime = false;
}
function timerCycle() {
  milis = parseInt(milis);
  seconds = parseInt(seconds);
  minutes = parseInt(minutes);
  milis = milis + 1;
  if (milis === 100) {
    seconds = seconds + 1;
    milis = 0;
  }
  if (seconds === 60) {
    minutes = minutes + 1;
    seconds = 0;
    milis = 0;
  }
  if (milis < 10) {
    milis = "0" + milis;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  timer.innerHTML = `${minutes}:${seconds}:<span>${milis}</span>`;
  timerId = setTimeout(timerCycle, 10);
}
function resetTimer() {
  timer.innerHTML = "00:00:<span>00</span>";
  clearTimeout(timerId);
  stopTimer = false;
  minutes = 0;
  seconds = 0;
  milis = 0;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
