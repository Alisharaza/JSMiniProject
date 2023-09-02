let random = parseInt(Math.random() * 100 + 1);
console.log(random);
const form = document.querySelector(".box");
const userInput = document.querySelector(".guess");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowRHi = document.querySelector(".lowrHi");
const restart = document.getElementById("restart");
let prevGuess = [];
let numGuesses = 1;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let guess = parseInt(userInput.value);
  console.log(guess);
  validiteGuess(guess);
});
function validiteGuess(guess) {
  console.log(guess);
  if (guess < 1) {
    alert("please enter a valid no");
  } else if (guess > 100) {
    alert("please enter a valid no");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      userInput.disabled = true;
    } else {
      userInput.disabled = false;
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < random) {
    displayMessage("No is too low");
  } else {
    displayMessage("No is too high");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += `${guess}  `;
  numGuesses++;
  remaining.textContent = `${11 - numGuesses}`;
}
function displayMessage(message) {
  lowRHi.innerHTML = `<h2>${message}</h2>`;
}
restart.addEventListener("click", () => {
  numGuesses = 0;
  guessSlot.textContent = "";
  remaining.textContent = 10;
  userInput.disabled = false;
});
