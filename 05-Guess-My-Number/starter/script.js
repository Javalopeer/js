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

const secretNumber =
    Math.trunc(Math.random() * 20) + 1;

const numberToGuess =
    document.querySelector('.number').textContent = secretNumber;

let score = 20;


const button = document.querySelector('.check')
    .addEventListener('click', () => {
        const adivinar = Number(document.querySelector('.guess').value);
        const message = document.querySelector('.message');
        const scoreInput = document.querySelector('.score');

        if (!adivinar) {
            message.textContent = 'NO NUMBER!';
        } else if (adivinar === secretNumber) {
            message.textContent = `THAT'S CORRECT!`;
        } else if (adivinar < secretNumber) {
            if (score > 1) {
                message.textContent = `The number to guess is higher!`;
                score--;
                scoreInput.textContent = score;
            } else {
                message.textContent = 'You lose the game.!';
                scoreInput.textContent = 0;
            }
        } else if (adivinar > secretNumber) {
            if (score > 1) {
                message.textContent = 'The number to guess is lower!';
                score--;
                scoreInput.textContent = score;
            } else {
                message.textContent = 'You lose the game.!';
                scoreInput.textContent = 0;
            }
        }

    });