const timer = document.querySelector('.timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let time = 0;
let interval;

// format the time in HH:MM:SS format
function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

// start the timer
async function startTimer() {
  interval = setInterval(async () => {
    time++;
    timer.innerText = formatTime(time);
  }, 1000);

  startBtn.classList.add('started');
  stopBtn.classList.remove('stopped');
}

// stop the timer
function stopTimer() {
  clearInterval(interval);

  startBtn.classList.remove('started');
  stopBtn.classList.add('stopped');
}

// reset the timer
async function resetTimer() {
  await stopTimer();
  time = 0;
  timer.innerText = formatTime(time);

  startBtn.classList.remove('started');
  stopBtn.classList.remove('stopped');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
