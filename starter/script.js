'use strict';

/*
console.log(document.querySelector('.message').textContent);

// Read text from a HTML class and set it to some other text
document.querySelector('.message').textContent = 'Correct Number !';

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess == secret_number) {
    document.querySelector('.message').textContent = 'Correct Number :)';

    // This implimentation is here because it hides the number
    document.querySelector('.number').textContent = secret_number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret_number
          ? 'Number is too High! :('
          : 'Number is too Low :(';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST';
      document.querySelector('.score').textContent = 0;
    }
  }

  // }else if (guess > secret_number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number is too High! :(';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOST';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secret_number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number is too Low :(';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOST';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';
});

// const displayMessage = function(message){
//   document.querySelector('.message').textContent = message ;
// }
