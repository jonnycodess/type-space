const words = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince",
  "raspberry", "strawberry", "tangerine", "ugli", "watermelon",
  "avocado", "blueberry", "cantaloupe", "dragonfruit", "grapefruit",
  "jackfruit", "kumquat", "lime", "peach", "plum",
  "computer", "keyboard", "mouse", "screen", "laptop",
  "monitor", "internet", "network", "software", "hardware",
  "program", "language", "javascript", "python", "coding",
  "algorithm", "function", "variable", "constant", "array",
  "object", "element", "browser", "document", "window",
  "button", "input", "form", "event", "listener",
  "debug", "compile", "execute", "process", "thread",
  "memory", "storage", "server", "client", "request",
  "response", "protocol", "security", "encryption", "login",
  "password", "username", "account", "database", "query",
  "table", "column", "row", "index", "primary",
  "foreign", "key", "constraint", "transaction", "commit",
  "rollback", "error", "exception", "catch", "throw",
  "loop", "while", "for", "break", "continue",
  "condition", "if", "else", "switch", "case",
  "default", "boolean", "string", "number", "integer",
  "float", "double", "char", "null", "undefined",
  "true", "false", "return", "console", "log",
  "debugger", "test", "unit", "integration", "deploy",
  "version", "control", "git", "branch", "merge",
  "commit", "push", "pull", "clone", "fork",
  "issue", "ticket", "sprint", "agile", "scrum",
  "kanban", "design", "pattern", "architecture", "framework",
  "library", "module", "package", "dependency", "installation",
  "update", "upgrade", "backup", "restore", "recover",
  "system", "application", "platform", "interface", "experience",
  "user", "feedback", "feature", "bug", "release",
  "versioning", "performance", "optimization", "load", "speed"
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
}

let testText = document.querySelector('#test-text');

generateTestWords();


let displayGrossWPM = document.querySelector('#gross-wpm');

let testArea = document.querySelector('.test-area');
let calcButton = document.querySelector('.calc-btn');
calcButton.addEventListener('click', () => calcGrossWPM(getCharsInput(testArea)));

const startingMinutes = 0.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

let countdownIntervalID = setInterval(updateCountDown, 1000); // Updates the timer every second