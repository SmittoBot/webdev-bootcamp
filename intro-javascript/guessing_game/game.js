// create secretNumber
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));

// check if guess is right
if (guess === secretNumber) {
  alert("You got it right!");
}
// otherwise, check if higher
else if (guess > secretNumber) {
  alert("U FAIL 2 HIGH");
} else {
  alert("FAILED 2lel");
}
