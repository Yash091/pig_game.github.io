'use strict';

let play = true;
let score = [0, 0];
let currentscore = 0;
let activeplayer = 0;
const player0e = document.querySelector('.player--0');
const player1e = document.querySelector('.player--1');
const score0e = document.getElementById('score--0');
const score1e = document.getElementById('score--1');
const current0e = document.getElementById('current--0');
const current1e = document.getElementById('current--1');
const diceE = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0e.classList.toggle('player--active');
  player1e.classList.toggle('player--active');
};
score0e.textContent = 0;
score1e.textContent = 0;
diceE.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  if (play) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceE.classList.remove('hidden');
    diceE.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (play) {
    score[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 100) {
      play = false;
      diceE.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0e.textContent = 0;
  score1e.textContent = 0;
  diceE.classList.add('hidden');
  current0e.textContent = 0;
  current1e.textContent = 0;
  player0e.classList.remove('player--winner');
  player1e.classList.remove('player--winner');
  player0e.classList.add('player--active');
  player1e.classList.remove('player--active');
  score[0] = 0;
  score[1] = 0;
  currentscore = 0;
  play = true;
  activeplayer = 0;
});
