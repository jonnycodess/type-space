    function getCharsInput(testArea) {
      let value = testArea.value;
      return value.length;
    }

    // Gross WPM = (chars typed/5) / (time in seconds/60)
    function calcGrossWPM(charsInput) {
      let chars = charsInput;
      let timeInSeconds = 30;
      return console.log(((chars/5) / (timeInSeconds/60)));
    }

    let testArea = document.querySelector('.test-area');
    let calcButton = document.querySelector('.calc-btn');
    calcButton.addEventListener('click', () => calcGrossWPM(getCharsInput(testArea)));