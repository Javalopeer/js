'use strict';

/* // Para ver el contenido en texto
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);

const score = document.querySelector('.score').textContent
console.log(score);


// Para ver el valor
const guess = document.querySelector('.guess').value;
console.log(guess);
document.querySelector('.number').textContent = guess;

 */

/* 
document.querySelector('.check')
    .addEventListener('click', () => {
        const guess = document.querySelector('.guess').value;
        document.querySelector('.number').textContent = guess;
    }); */

let secretNumber =
    Math.trunc(Math.random() * 20) + 1;

const number =
    document.querySelector('.number');

const scoreInput = document.querySelector('.score');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const guess = document.querySelector('.guess')


let score = 20;

const loseGame = () => {
    message.textContent = 'You lose the game.!';
    scoreInput.textContent = 0;
    body.style.backgroundColor = '#800001';
}

const handleWrongGuess = (text) => {
    if (score > 1) {
        message.textContent = `${text}`;
        score--;
        scoreInput.textContent = score;
    } else {
        loseGame();
    }
}


const button = document.querySelector('.check')
    .addEventListener('click', () => {
        const playerGuess = Number((guess).value)

        if (!playerGuess) {
            message.textContent = 'NO NUMBER!';
            body.style.backgroundColor = '#222'
            return;
        }

        if (playerGuess === secretNumber) {
            message.textContent = `THAT'S CORRECT!`;
            body.style.backgroundColor = '#60b347';
            number.textContent = secretNumber;
        } else if (playerGuess < secretNumber) {
            handleWrongGuess('The number to guess is higher!')
        } else {
            handleWrongGuess('The number to guess is lower!')
        }

    });

const reset = document.querySelector('.again')
    .addEventListener('click', () => {
        score = 20
        scoreInput = score;

        message.textContent = 'Start guessing...';
        number.textContent = '?';
        guess.value = '';
        body.style.backgroundColor = '#222'
        secretNumber =
            Math.trunc(Math.random() * 20) + 1;
    })