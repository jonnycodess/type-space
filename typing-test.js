// Returns the amount of characters input by the user
function getCharsInput(testArea) {
  let value = testArea.value;
  return value.length;
}

// Gross WPM = (chars typed/5) / (time in seconds/60)
function calcGrossWPM(charsInput) {
  let timeInSeconds = 30;
  return console.log(((charsInput / 5) / (timeInSeconds / 60)));
}

function updateCountDown() {
  let inputLength = getCharsInput(testArea);
  if (inputLength !== 0 || inputLength === 0 && time !== startingMinutes * 60) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  }
}

let testArea = document.querySelector('.test-area');
let calcButton = document.querySelector('.calc-btn');
calcButton.addEventListener('click', () => calcGrossWPM(getCharsInput(testArea)));

const startingMinutes = 0.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

// Updates the timer every second
setInterval(updateCountDown, 1000);