'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
function randomNumber(n) {
  // return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
   // n is the length of the number
  // returns a string representation of the number
  if (n < 1 || n > 10) {
    return "Số nhỏ hơn";
  }
  // Create a string of digits from 1 to 9
  var digits = "123456789";
  // Create an empty string to store the result
  var number = "";
  // Loop n times
  for (var i = 0; i < n; i++) {
    // Pick a random index from the digits string
    var index = Math.floor (Math.random () * digits.length);
    // Append the digit at that index to the result
    number += digits [index];
    // Remove the digit from the digits string to avoid repetition
    digits = digits.replace (digits [index], "");
  }
  // Return the result as an integer
  return parseInt (number);
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const result=randomNumber(guess)
  document.querySelector('.number').textContent = result;
  // When there is no input
  // if (!guess) {
  //   // document.querySelector('.message').textContent = '⛔️ No number!';
  //   displayMessage('⛔️ Nhập số đi bạn tôi à ');

  //   // When player wins
  // } else if (guess === secretNumber) {
  //   // document.querySelector('.message').textContent = '🎉 Correct Number!';
  //   displayMessage('🎉 Correct Number!');
  //   document.querySelector('.number').textContent = secretNumber;

  //   document.querySelector('body').style.backgroundColor = '#60b347';
  //   document.querySelector('.number').style.width = '30rem';

  //   if (score > highscore) {
  //     highscore = score;
  //     document.querySelector('.highscore').textContent = highscore;
  //   }

    // When guess is wrong
  // } else if (guess !== secretNumber) {
  //   if (score > 1) {
  //     // document.querySelector('.message').textContent =
  //     // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
  //     displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     // document.querySelector('.message').textContent = '💥 You lost the game!';
  //     displayMessage('💥 You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }


});


