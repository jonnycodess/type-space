const words = [
  "the", "and", "for", "are", "but", "not", "you", "all", "any", "can", "had", "her", "was", "one", "our", "out", 
  "day", "get", "has", "him", "his", "how", "man", "new", "now", "old", "see", "two", "way", "who", "boy", "did", 
  "its", "let", "put", "say", "she", "too", "use", "very", "back", "even", "here", "just", "know", "live", "long", 
  "made", "make", "more", "only", "over", "some", "take", "them", "then", "these", "thing", "think", "time", "well", 
  "were", "when", "what", "with", "your", "about", "after", "again", "another", "because", "before", "between", 
  "could", "different", "first", "found", "great", "little", "might", "people", "place", "right", "small", "still", 
  "such", "through", "under", "where", "while", "without", "world", "would", "always", "around", "become", "better", 
  "enough", "family", "father", "friend", "important", "inside", "later", "letter", "number", "officer", "particular", 
  "problem", "provide", "question", "remember", "something", "together", "toward", "until", "usually", "within", 
  "anything", "becoming", "beginning", "business", "children", "continue", "example", "interest", "learning", 
  "literally", "moment", "nothing", "outside", "possible", "powerful", "practice", "probably", "response", "running", 
  "sentence", "sometimes", "suddenly", "support", "towards", "treatment", "understand", "whatever", "whether", 
  "yesterday", "according", "beautiful", "community", "consider", "experience", "including", "individual", 
  "international", "necessary", "opportunity", "situation", "representation", "responsibility", "establishment", 
  "identification", "determination", "entertainment", "preparation", "communication", "conversation", "introduction", 
  "development", "relationship", "information", "environment", "government", "organization", "management", "technology", 
  "achievement", "additional", "agreement", "authority", "behavior", "challenge", "collection", "committee", "comparison", 
  "connection", "direction", "discussion", "education", "equipment", "foundation", "guidance", "influence", "instance", 
  "instruction", "investment", "operation", "performance", "political", "population", "procedure", "recognition", 
  "reduction", "reflection", "relationship", "requirement", "selection", "solution", "statement", "structure", "suggestion", 
  "technology", "treatment", "variation", "variation", "achievement", "additional", "agreement", "authority", "behavior", 
  "challenge", "collection", "committee", "comparison", "connection", "direction", "discussion", "education", "equipment", 
  "foundation", "guidance", "influence", "instance", "instruction", "investment", "operation", "performance", "political", 
  "population", "procedure", "recognition", "reduction", "reflection", "requirement", "selection", "solution", "statement", 
  "structure", "suggestion", "variation", "available", "capacity", "chemical", "decision", "effective", "emotional", 
  "equipment", "estimate", "excellent", "exercise", "historical", "important", "increasing", "industry", "material", 
  "necessary", "operation", "possible", "position", "practical", "principal", "relative", "selection", "significant", 
  "solution", "statement", "strategic", "technical", "treatment", "valuable", "advantage", "agreement", "analysis", 
  "approach", "argument", "attention", "available", "behavior", "business", "campaign", "capacity", "category", "century", 
  "challenge", "chemical", "community", "comparison", "condition", "conference", "consider", "contract", "creation", 
  "customer", "decision", "direction", "division", "education", "employee", "equipment", "estimate", "evidence", "exchange", 
  "exercise", "financial", "function", "government", "guidance", "historical", "hospital", "industry", "information", 
  "insurance", "interest", "international", "investment", "knowledge", "language", "location", "management", "material", 
  "medical", "member", "message", "national", "necessary", "objective", "operation", "organization", "opportunity", "original", 
  "particular", "performance", "personal", "political", "position", "possible", "practice", "precious", "principal", "private", 
  "probably", "problem", "process", "product", "professional", "program", "project", "property", "question", "regional", 
  "relationship", "republic", "resource", "response", "result", "review", "safety", "science", "selection", "senior", 
  "service", "solution", "standard", "statement", "strategy", "structure", "student", "support", "system", "technology", 
  "treatment", "university", "valuable", "various", "vehicle", "violence", "warning", "weather", "whether", "willing", 
  "without", "academic", "activity", "addition", "address", "advanced", "advice", "affect", "against", "agency", "agreement", 
  "almost", "already", "although", "among", "amount", "analysis", "animal", "another", "answer", "anything", "appear", 
  "approach", "area", "arrive", "article", "artist", "assume", "attention", "author", "available", "average", "balance", 
  "beautiful", "behavior", "behind", "belief", "benefit", "between", "beyond", "billion", "brother", "budget", "building", 
  "business", "certain", "chance", "change", "character", "charge", "choice", "choose", "citizen", "classic", "clearly", 
  "college", "common", "company", "compare", "complete", "computer", "condition", "consider", "contain", "control", "correct", 
  "cultural", "current", "customer", "decision", "defense", "degree", "difficult", "director", "discover", "discuss", 
  "disease", "distance", "document", "economy", "education", "effect", "effort", "election", "employee", "energy", "enough", 
  "environment", "especially", "establish", "evening", "evidence", "exactly", "example", "exercise", "experience", "explain", 
  "factor", "family", "federal", "feeling", "finance", "foreign", "forward", "freedom", "friend", "general", "greater", 
  "ground", "growth", "hospital", "however", "human", "identify", "important", "include", "individual", "industry", 
  "information", "interest", "international", "investment", "involve", "itself", "journal", "justice", "knowledge", "language", 
  "lawyer", "leader", "learn", "lecture", "legal", "letter", "likely", "limited", "listen", "living", "local", "longer", 
  "machine", "manager", "marriage", "material", "medical", "meeting", "mention", "message", "million", "mission", "modern", 
  "moment", "money", "morning", "natural", "necessary", "network", "nothing", "notice", "number", "observe", "officer", 
  "opinion", "opportunity", "organization", "original", "outside", "package", "parent", "particular", "partner", "patient", 
  "pattern", "people", "perform", "perhaps", "personal", "physical", "picture", "place", "planning", "player", "policy", 
  "position", "possible", "practice", "prepare", "present", "pressure", "probably", "problem", "process", "produce", 
  "product", "program", "project", "protect", "provide", "purpose", "quality", "rather", "realize", "receive", "recent", 
  "recognize", "region", "relationship", "remember", "require", "research", "response", "result", "return", "reveal", 
  "review", "right", "role", "running", "safety", "science", "season", "second", "section", "security", "sense", "service", 
  "several", "short", "similar", "simple", "simply", "situation", "society", "someone", "special", "specific", "speech", 
  "spend", "sport", "staff", "standard", "statement", "strategy", "student", "subject", "success", "support", "system", 
  "teacher", "together", "toward", "training", "travel", "treat", "treatment", "trial", "trouble", "typical", "under", 
  "understand", "union", "university", "usually", "value", "various", "vehicle", "victory", "violence", "vision", "visit", 
  "voice", "wait", "walk", "wall", "want", "warning", "watch", "water", "week", "weight", "whether", "within", "woman", 
  "wonder", "word", "work", "worker", "world", "worry", "write", "writer", "wrong", "year", "young", "yourself"
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
      if (seconds === 0 && countdownEl.innerHTML === '60 Sec') {
        seconds = 59;
      }
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

function calcNetWPM (event) {
  if (testArea.readOnly === false) {
    removeTypoCharsFromTotalChars(event);
    checkForIncompleteWord();
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
}

function checkForIncompleteWord() {
  let children = testText.children[wordCounter].children;
  for (let i = 0; i < children.length; i++) {
    if (testText.children[wordCounter].children[i].classList.value === 'test-char' && i !== testText.children[wordCounter].children.length - 1) {
      testText.children[wordCounter].children[i].classList.remove('correct-char', 'incorrect-char');
      testText.children[wordCounter].children[i].classList.add('incorrect-char')
    }
  }
}

function removeTypoCharsFromTotalChars(event) {
  if (event.key === ' ' && currentWordSubtracted === false) {
    let currentWordCharsTyped = 0;
    for (let i = 0; i < testText.children[wordCounter].children.length ; i++) {
      if (testText.children[wordCounter].children[i].classList.contains('correct-char') || testText.children[wordCounter].children[i].classList.contains('incorrect-char')) {
      currentWordCharsTyped++;
      // console.log(`currentWordCharsTyped ${currentWordCharsTyped}`)
      // console.log(testText.children[wordCounter].children[i].classList)
      }
      if (currentWordSubtracted === false && testText.children[wordCounter].children[i].classList.contains('incorrect-char') || currentWordSubtracted === false && testText.children[wordCounter].children[i].classList.value === 'test-char' && i !== testText.children[wordCounter].children.length - 1) {        // console.log('nested if')
        // console.log(`word children length ${testText.children[wordCounter].children.length}`)
        totalCharsTyped -= testText.children[wordCounter].children.length;
        styleIncorrectWord();
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

function styleIncorrectWord() {
  let children = testText.children[wordCounter].children;
    for (let i = 0; i < children.length; i++) {
      testText.children[wordCounter].children[i].classList.remove('correct-char', 'incorrect-char');
      testText.children[wordCounter].children[i].classList.add('incorrect-char')
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
      // console.log('correct');
    }
    else {
      testText.children[wordCounter].children[childCounter].classList.add('incorrect-char');
      childCounter++;
      // console.log('incorrect');
    }
  }
}

let startingTimeString = '30 Sec';
let restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartTest)

document.addEventListener('keyup', restartTest)

function restartTest(event) {
  if (event.type === 'click' || event.key === 'r' && document.activeElement !== testArea || event.key === 'R' && document.activeElement !== testArea || event.key === 'r' && testArea.readOnly === true || event.key === 'R' && testArea.readOnly === true) {
    testArea.readOnly = false;
    totalCharsTyped = 1;
    testArea.value = '';
    // Reset countdown
    time = startingMinutes * 60;
    countdownEl.innerText = startingTimeString;
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

testText.addEventListener('click', () => (testArea.focus()))

let fifteenSecondTestButton = document.getElementById('15-second-timer-button')
let thirtySecondTestButton = document.getElementById('30-second-timer-button')
let fortyFiveSecondTestButton = document.getElementById('45-second-timer-button')
let sixtySecondTestButton = document.getElementById('60-second-timer-button')

fifteenSecondTestButton.addEventListener('click', changeTestDuration)
thirtySecondTestButton.addEventListener('click', changeTestDuration)
fortyFiveSecondTestButton.addEventListener('click', changeTestDuration)
sixtySecondTestButton.addEventListener('click', changeTestDuration)

function changeTestDuration(event) {
  restartTest(event);
  if (event.target.id === '15-second-timer-button') {
    startingMinutes = 0.25;
    startingTimeString = '15 Sec'
  }
  else if (event.target.id === '30-second-timer-button') {
    startingMinutes = 0.5;
    startingTimeString = '30 Sec'
  }
  else if (event.target.id === '45-second-timer-button') {
    startingMinutes = 0.75;
    startingTimeString = '45 Sec'
  }
  else if (event.target.id === '60-second-timer-button') {
    startingMinutes = 1;
    startingTimeString = '60 Sec'
  }
  countdownEl.innerText = startingTimeString;
  time = startingMinutes * 60;
  // console.log(time)
  Math.round(time)
  clearInterval(countdownIntervalID);
  countdownIntervalID = setInterval(updateCountDown, 1000);
  addTestDurationDropDown();
}

fifteenSecondTestButton.remove()
thirtySecondTestButton.remove()
fortyFiveSecondTestButton.remove()
sixtySecondTestButton.remove()

countdownEl.addEventListener('click', addTestDurationDropDown)

let dropDownContainer = document.getElementById('countdown-drop-down');
let dropDownActive = false;

function addTestDurationDropDown() {
  if (dropDownActive === false) {
    dropDownContainer.appendChild(fifteenSecondTestButton)
    dropDownContainer.appendChild(thirtySecondTestButton)
    dropDownContainer.appendChild(fortyFiveSecondTestButton)
    dropDownContainer.appendChild(sixtySecondTestButton)
    dropDownActive = true;
  }
}

document.addEventListener('click', removeDropDown)

function removeDropDown(event) {
  if (event.target !== countdownEl && dropDownActive === true) {
    fifteenSecondTestButton.remove()
    thirtySecondTestButton.remove()
    fortyFiveSecondTestButton.remove()
    sixtySecondTestButton.remove()
    dropDownActive = false;
  }
  else if (event.target === countdownEl && dropDownActive === true) {
    return;
  }
}