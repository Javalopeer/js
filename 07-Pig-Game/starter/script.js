'use strict';

// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const holdDice = document.querySelector('.btn--hold');


//Starting conditions
score0.textContent = 0
score1.textContent = 0
diceEl.classList.add('hidden')
let currentScore = 0;


// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    //  1. Generating random dice roll.
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //  2. Display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    //  3. Check for rolled 1
    if (dice !== 1) {
        // Add dice to current score

    } else {
        // switch next player
    }

})