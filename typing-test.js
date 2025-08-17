// Returns the amount of characters input by the user
function getCharsInput(testArea) {
  let value = testArea.value;
  return value.length;
}

// Gross WPM = (chars typed / 5) / (time in seconds / 60)
function calcGrossWPM(charsInput) {
  let timeInSeconds = 30;
  return ((charsInput / 5) / (timeInSeconds / 60));
}

function updateCountDown() {
  let inputLength = getCharsInput(testArea);
  if (countdownEl.innerHTML !== '0:00') {
    if (inputLength !== 0 || inputLength === 0 && time !== startingMinutes * 60) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds <= 9) {
        countdownEl.innerHTML = `${minutes}:0${seconds}`;
      }
      else if (seconds >= 10) {
      countdownEl.innerHTML = `${minutes}:${seconds}`;
      }
      time--;
    }
  }
  else {
    let wpm = calcGrossWPM(getCharsInput(testArea)).toString();
    displayGrossWPM.innerHTML = `${wpm} words per minute`;
    clearInterval(countdownIntervalID);
  }
}

let displayGrossWPM = document.querySelector('#gross-wpm');

let testArea = document.querySelector('.test-area');
let calcButton = document.querySelector('.calc-btn');
calcButton.addEventListener('click', () => calcGrossWPM(getCharsInput(testArea)));

const startingMinutes = 0.1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

let countdownIntervalID = setInterval(updateCountDown, 1000); // Updates the timer every second