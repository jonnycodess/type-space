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

// Gross WPM = (chars typed / 5) / (time in seconds / 60)
function calcGrossWPM(charsInput) {
  let timeInSeconds = 30;
  return ((charsInput / 5) / (timeInSeconds / 60));
}

function updateCountDown() {
  let inputLength = testArea.value.length;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // Countdown until timer reaches 0:00
  if (countdownEl.innerHTML !== '0:00') {
    if (inputLength !== 0 || inputLength === 0 && time !== startingMinutes * 60) {
      if (seconds <= 9) {
        countdownEl.innerHTML = `${minutes}:0${seconds}`;
      }
      else if (seconds >= 10) {
      countdownEl.innerHTML = `${minutes}:${seconds}`;
      }
      time--;
    }
  }
  // Stop countdown and display WPM when timer hits 0:00
  else {
    displayGrossWPM.innerHTML = `${calcGrossWPM(inputLength).toString()} words per minute`;
    clearInterval(countdownIntervalID);
  }
}

function generateTestWords() {
  while (testText.innerText.length < 150) {
    testText.innerHTML += `${words[Math.floor(Math.random() * words.length)]} `;
  }
  // Remove space after final word
  testText.innerHTML = testText.innerHTML.slice(0, -1);
}

function wrapCharsInSpans() {
  let testTextChars = testText.innerHTML.split('');
  let i = 0;
  let charParagraph = document.createElement('p');

  testTextChars.forEach(() => {
    charParagraph.innerHTML += `<span class="test-char">${testText.innerHTML.at(i)}</span>`;
    i++;
  })
  testText.innerHTML = charParagraph.innerHTML;
}

function wrapWordsInSpans() {
  let testTextChars = testText.innerHTML.split('');
  let charParagraph = document.createElement('p');
  let i = 0;

  testTextChars.forEach(() => {
    if (testTextChars.at(i - 1) === undefined) {
      return;
    }
    else if (i === 0) {
      charParagraph.textContent = '<span class="test-word">';
    }
    else if (testTextChars.at(i - 1) === ' ' && testTextChars.at(i) !== 'c' && testTextChars.at(i + 2) !== 'l' && testTextChars.at(i + 3) !== 'a') {
      for (let j = 0; j < 8; j++) {
        charParagraph.textContent += testTextChars.at(i - 1);
        i++;
      }
      charParagraph.textContent += '</span><span class="test-word"><';
    }
    else {
      charParagraph.textContent += testTextChars.at(i - 1);
    }
    i++;
  })

  charParagraph.textContent += '</span>';
  testText.innerHTML = charParagraph.textContent;
}

function generateTestText() {
  generateTestWords();
  wrapCharsInSpans();
  wrapWordsInSpans();
}

let testText = document.querySelector('#test-text');

generateTestText();

let displayGrossWPM = document.querySelector('#gross-wpm');

let testArea = document.querySelector('.test-area');

let startingMinutes = 0.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

let countdownIntervalID = setInterval(updateCountDown, 1000); // Updates the timer every second

testArea.addEventListener('keydown', handleInput);

let childCounter = 0;
let wordCounter = 0;
let inputHandled;
let totalCharsTyped = 0;

function handleInput(event) {
  inputHandled = false;
  handleBackspaceInput(event);
  moveToNextWord(event);
  checkInputAccuracy(event)
}

function handleBackspaceInput(event) {
  if (event.key === 'Backspace') {
    totalCharsTyped -= 1;
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
    inputHandled = true;
  }
}

function moveToNextWord(event) {
  if (event.key === ' ' || testText.children[wordCounter].children[childCounter].innerText.at(0) === ' ' && inputHandled === false) {
    totalCharsTyped += 1;
    wordCounter++;
    childCounter = 0;
    inputHandled = true;
  }
}

function checkInputAccuracy(event) {
  if (inputHandled === false) {
    totalCharsTyped +=1;
    if (event.key === testText.children[wordCounter].children[childCounter].innerText.at(0)) {
      testText.children[wordCounter].children[childCounter].classList.add('correct-char');
      childCounter++; 
      console.log('correct');
    }
    else {
      testText.children[wordCounter].children[childCounter].classList.add('incorrect-char');
      childCounter++;
      console.log('incorrect');
    }
  }
}