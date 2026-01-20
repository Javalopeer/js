'use strict';

// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');


//Starting conditions
score0.textContent = 0
score1.textContent = 0
diceEl.classList.add('hidden')

let scores, currentScore, activePlayer, playing;

const switchPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const init = () => {
    scores = [0, 0];
    playing = true;
    currentScore = 0;
    activePlayer = 0;

    score0.textContent = 0;
    score1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.remove('hidden');
}
init();

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    if (playing) {
        //  1. Generating random dice roll.
        const dice = Math.trunc(Math.random() * 6) + 1;

        //  2. Display the dice
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');

        //  3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`)
                .textContent = currentScore;
        } else {
            // switch next player
            document.getElementById(`current--${activePlayer}`)
                .textContent = 0;
            currentScore = 0;
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', () => {
    if (playing) {
        //  1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //  2. Check if player's score is >= 100
        //  Finish the game
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active')
        } else {
            switchPlayer();
        }
    }
})

newGame.addEventListener('click', init);