const words = [
  "the", "and", "for", "are", "but", "not", "you", "all", "any", "can", "had", "her", "was", "one", "our", "out",
  "day", "get", "has", "him", "his", "how", "man", "new", "now", "old", "see", "two", "way", "who", "boy", "did",
  "its", "let", "put", "say", "she", "too", "use", "very", "back", "even", "here", "just", "know", "live", "long",
  "made", "make", "more", "only", "over", "some", "take", "them", "then", "these", "thing", "think", "time", "well",
  "were", "when", "what", "with", "your", "about", "after", "again", "another", "because", "before", "between",
  "could", "different", "first", "found", "great", "little", "might", "people", "place", "right", "small", "still",
  "such", "through", "under", "where", "while", "without", "world", "would", "always", "around", "become", "better",
  "before", "enough", "family", "father", "friend", "friend", "important", "inside", "later", "letter", "letter",
  "number", "officer", "particular", "problem", "provide", "question", "remember", "something", "together", "toward",
  "until", "usually", "within", "without", "anything", "becoming", "beginning", "business", "children", "continue",
  "different", "example", "interest", "learning", "literally", "moment", "nothing", "outside", "possible", "powerful",
  "practice", "probably", "remember", "response", "running", "sentence", "sometimes", "suddenly", "support", "together",
  "towards", "treatment", "understand", "whatever", "whether", "without", "yesterday", "according", "beautiful",
  "community", "consider", "different", "experience", "including", "individual", "international", "important",
  "necessary", "opportunity", "particular", "situation", "something", "understanding", "throughout", "throughout",
  "everything", "interesting", "development", "relationship", "information", "understanding", "environment", "government",
  "organization", "technology", "relationship", "management", "development", "communication", "conversation",
  "introduction", "consideration", "understanding", "understanding", "representation", "responsibility", "organization",
  "establishment", "identification", "relationship", "determination", "entertainment", "preparation", "consideration",
  "development", "understanding", "understanding", "organization", "management", "establishment", "identification",
  "consideration", "information", "understanding", "development", "organization", "communication", "relationship",
  "understanding", "environment", "organization", "management", "development", "relationship", "consideration",
  "understanding", "organization", "communication", "organization", "relationship", "development", "information",
  "consideration", "organization", "relationship", "management", "development", "communication", "relationship",
  "consideration", "understanding", "organization", "relationship", "development", "communication", "consideration",
  "organization", "relationship", "understanding", "development", "organization", "relationship", "communication",
  "consideration", "development", "organization", "relationship", "understanding", "communication", "development",
  "organization", "relationship", "consideration", "development", "understanding", "organization", "relationship",
  "communication", "development", "organization", "relationship", "consideration", "understanding", "organization",
  "relationship", "communication", "development", "organization", "relationship", "consideration", "understanding",
  "organization", "relationship", "communication", "development", "organization", "relationship", "consideration",
  "understanding", "organization", "relationship", "communication", "development", "organization", "relationship",
  "consideration", "understanding", "organization", "relationship", "communication", "development", "organization",
  "relationship", "consideration", "understanding", "organization", "relationship", "communication", "development",
  "organization", "relationship", "consideration", "understanding", "organization", "relationship", "communication",
  "development", "organization", "relationship", "consideration", "understanding", "organization", "relationship",
  "communication", "development", "organization", "relationship", "consideration", "understanding", "organization",
  "relationship", "communication", "development", "organization", "relationship", "consideration", "understanding",
  "organization", "relationship", "communication", "development", "organization", "relationship", "consideration",
  "understanding", "organization", "relationship", "communication", "development", "organization", "relationship",
  "consideration", "understanding", "organization", "relationship", "communication", "development", "organization",
  "relationship", "consideration", "understanding", "organization", "relationship", "communication", "development",
  "organization", "relationship", "consideration", "understanding", "organization", "relationship", "communication"
];

// Gross WPM = (chars typed / 5) / (time in seconds / 60)
function calcGrossWPM(charsInput) {
  let timeInSeconds = 30;
  return ((charsInput / 5) / (timeInSeconds / 60));
}

let secondsPassed = 0;

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // Countdown until timer reaches 0 seconds
  if (countdownEl.innerHTML !== '0 Sec') {
    if (totalCharsTyped !== 1 || totalCharsTyped === 1 && time !== startingMinutes * 60) {
      countdownEl.innerHTML = `${seconds} Sec`;
      time--;
      secondsPassed++;
    }
  }
  // Stop countdown and display WPM when timer hits 0 seconds
  else {
    testArea.readOnly = true;
    testArea.value = '';
    clearInterval(countdownIntervalID);
  }
}

function generateTestWords() {
  while (testText.innerText.length < 240) {
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
  testText.innerHTML = ''
  generateTestWords();
  wrapCharsInSpans();
  wrapWordsInSpans();
}

let liveWpmDisplay = document.getElementById('live-wpm-display');

let testText = document.querySelector('#test-text');

generateTestText();

let displayGrossWPM = document.querySelector('#gross-wpm');

let testArea = document.querySelector('.test-area');

let startingMinutes = 0.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

let countdownIntervalID = setInterval(updateCountDown, 1000); // Updates the timer every second

testArea.addEventListener('keyup', handleInput);

let childCounter = 0;
let wordCounter = 0;
let inputHandled;
let totalCharsTyped = 1;
let currentWordSubtracted = false;

function handleInput(event) {
  inputHandled = false;
  handleBackspaceInput(event);
  moveToNextWord(event);
  checkInputAccuracy(event);
}

function calcNetWPM(event) {
  removeTypoCharsFromTotalChars(event);
  if (totalCharsTyped < 0) {
    totalCharsTyped = 0;
  }
  if (secondsPassed === 0) {
    secondsPassed = 1;
  }
  if (secondsPassed !== 0) {
    liveWpmDisplay.innerText = `${Math.round((totalCharsTyped / 5) / (secondsPassed / 60))} WPM`;
  }
}

function removeTypoCharsFromTotalChars(event) {
  if (event.key === ' ' && currentWordSubtracted === false) {
    let currentWordCharsTyped = 0;
    for (let i = 0; i < testText.children[wordCounter].children.length ; i++) {
      if (testText.children[wordCounter].children[i].classList.contains('correct-char') || testText.children[wordCounter].children[i].classList.contains('incorrect-char')) {
      currentWordCharsTyped++;
      console.log(`currentWordCharsTyped ${currentWordCharsTyped}`)
      console.log(testText.children[wordCounter].children[i].classList)
    }
      if (currentWordSubtracted === false && testText.children[wordCounter].children[i].classList.contains('incorrect-char')) {
        console.log('nested if')
        console.log(`word children length ${testText.children[wordCounter].children.length}`)
        totalCharsTyped -= testText.children[wordCounter].children.length;
        currentWordSubtracted = true;
        if (totalCharsTyped < 0) {
          totalCharsTyped = 0;
        }
      }
    }
    if (currentWordSubtracted === true) {
    totalCharsTyped -= currentWordCharsTyped + 1;
    }
    currentWordSubtracted = false;
  }
}

function handleBackspaceInput(event) {
  if (event.key === 'Backspace') {
    if (totalCharsTyped > 0) {
      totalCharsTyped--;
    }
    if (childCounter !== 0) {
    if (testText.children[wordCounter].children[childCounter - 1] !== undefined) {
      testText.children[wordCounter].children[childCounter - 1].classList.remove('correct-char', 'incorrect-char');
    }
    else if (wordCounter !== 0) {
      wordCounter--;
      childCounter = testText.children[wordCounter].children.length;
      testText.children[wordCounter].children[childCounter - 1].classList.remove('correct-char', 'incorrect-char');
    }
    childCounter--;
  }
    inputHandled = true;
  }
}

function moveToNextWord(event) {
  if (event.key === ' ' || testText.children[wordCounter].children[childCounter].innerText.at(0) === ' ' && inputHandled === false) {
    calcNetWPM(event);
    testArea.value = '';
    totalCharsTyped += 1;
    wordCounter++;
    childCounter = 0;
    inputHandled = true;
  }
}

function checkInputAccuracy(event) {
  if (inputHandled === false && countdownEl.innerHTML !== '0 Sec') {
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

let restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartTest)

document.addEventListener('keyup', restartTest)

function restartTest(event) {
  if (event.type === 'click' || event.key === 'r' && document.activeElement !== testArea) {
    totalCharsTyped = 1;
    testArea.value = '';
    // Reset countdown
    startingMinutes = 0.5;
    time = startingMinutes * 60;
    countdownEl.innerText = '30 Sec'
    clearInterval(countdownIntervalID);
    countdownIntervalID = setInterval(updateCountDown, 1000);
    // Reset WPM
    liveWpmDisplay.innerText = '0 WPM';
    secondsPassed = 0;
    // Reset text styles
    childCounter = 0;
    wordCounter = 0;
    inputHandled;
    currentWordSubtracted = false;
    generateTestText();
  }
}