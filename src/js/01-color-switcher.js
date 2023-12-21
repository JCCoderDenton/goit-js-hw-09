const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalId = null;
stopBtn.disabled = true;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
function startColorSwitching () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopColorSwitching () {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
};
startBtn.addEventListener('click', startColorSwitching);
stopBtn.addEventListener('click', stopColorSwitching);