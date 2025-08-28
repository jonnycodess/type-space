const words = [
  "ace", "act", "add", "ago", "aid", "aim", "air", "ale", "all", "and", 
  "ant", "any", "ape", "arc", "are", "arm", "art", "ash", "ask", "awe", 
  "axe", "bad", "bag", "bar", "bat", "bed", "bee", "beg", "bet", "big", 
  "bin", "bit", "bog", "box", "boy", "bun", "bus", "but", "buy", "cab", 
  "can", "cap", "car", "cat", "cow", "cup", "cut", "day", "dig", "dog", 
  "dot", "dry", "due", "eat", "egg", "end", "era", "eve", "fan", "far", 
  "fat", "fed", "few", "fig", "fin", "fit", "fix", "fly", "fog", "for", 
  "fox", "fun", "gap", "gas", "get", "gig", "got", "gum", "gun", "guy", 
  "hat", "hen", "hid", "hip", "hit", "hot", "how", "hug", "hum", "hut", 
  "ice", "ink", "jam", "jar", "jet", "job", "joy", "key", "kid", "kit", 
  "lab", "lap", "lay", "leg", "let"
];

// Returns the amount of characters input by the user
function getCharsInput(testArea) {
  let value = testArea.value;
  return value.length;
}

// Gross WPM = (chars typed / 5) / (time in seconds / 60)
function calcGrossWPM(charsInput) {
  let timeInSeconds = 30;
  console.log((charsInput / 5) / (timeInSeconds / 60));
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

function generateTestWords() {
  while (testText.innerText.length < 150) {
    let randomNumber = Math.floor(Math.random() * words.length);
    let randomWord = words[randomNumber]
    testText.innerHTML += `${randomWord} `
  }
  testText.innerHTML = testText.innerHTML.slice(0, -1);
}

function wrapCharsInSpans() {
  let charSplit = testText.innerHTML.split('');
  let j = 0;
  let tempPara = document.createElement('p');
  charSplit.map(() => {
    tempPara.innerHTML += `<span class="test-char">${testText.innerHTML.at(j)}</span>`;
    j++;
  })
  testText.innerHTML = tempPara.innerHTML;

  let charSplit2 = testText.innerHTML.split('');
  let temp = document.createElement('p')
  j = 0;
  charSplit2.map(() => {
    if (charSplit2.at(j - 1) === undefined) {
    }
    else if (j === 0) {
      temp.textContent = '<span class="test-word">'
    }
    else if (charSplit2.at(j - 1) === ' ' && charSplit2.at(j) !== 'c' && charSplit2.at(j + 2) !== 'l') {
      for (let k = 0; k < 8; k++) {
        temp.textContent += charSplit2.at(j - 1);
        j++;
      }
      temp.textContent += '</span><span class="test-word"><'
    }
    else {
      temp.textContent += charSplit2.at(j - 1);
    }
    j++
  })
  temp.textContent += '</span>'
  testText.innerHTML = temp.textContent;
}


function generateTestText() {
  generateTestWords();
  wrapCharsInSpans();
}

let testText = document.querySelector('#test-text');

generateTestText();

let displayGrossWPM = document.querySelector('#gross-wpm');

let testArea = document.querySelector('.test-area');
let calcButton = document.querySelector('.calc-btn');
calcButton.addEventListener('click', () => calcGrossWPM(getCharsInput(testArea)));

const startingMinutes = 0.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

let countdownIntervalID = setInterval(updateCountDown, 1000); // Updates the timer every second

testArea.addEventListener('keydown', checkAccuracy)

let childCounter = 0;
let wordCounter = 0;

function checkAccuracy(event) {
  if (event.key === 'Backspace') {
    if (testText.children[wordCounter].children[childCounter - 1] !== undefined) {
      testText.children[wordCounter].children[childCounter - 1].classList.remove('correct-char', 'incorrect-char');
    }
    else if (wordCounter !== 0) {
      wordCounter--;
      childCounter = testText.children[wordCounter].children.length;
      testText.children[wordCounter].children[childCounter - 1].classList.remove('correct-char', 'incorrect-char');
    }
    if (childCounter !== 0) {
      childCounter--;
    }
  }
  else if (testText.children[wordCounter].children[childCounter].innerText.at(0) === ' ') {
    wordCounter++;
    childCounter = 0;
  }
  else if (event.key === testText.children[wordCounter].children[childCounter].innerText.at(0)) {
    testText.children[wordCounter].children[childCounter].classList.add('correct-char');
    childCounter++;
    console.log('correct');
  }
  else if (event.key !== testText.children[wordCounter].children[childCounter].innerText.at(0)) {
    testText.children[wordCounter].children[childCounter].classList.add('incorrect-char');
    childCounter++;
    console.log('incorrect');
  }
}
