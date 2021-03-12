'use strict';

function randomRoll() {
    return Math.floor(Math.random() * 6);
}
const player1Roll = randomRoll();
const player2Roll = randomRoll();

const imgArr = ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png'];

let player1Img = document.getElementById('player1die');
player1Img.setAttribute('src', imgArr[player1Roll]);

let player2Img = document.getElementById('player2die');
player2Img.setAttribute('src', imgArr[player2Roll]);

let result = document.getElementById('results');

if (player1Roll > player2Roll) {
    result.innerHTML = '🚩 Player 1 Wins!';
} else if (player2Roll > player1Roll) {
    result.innerHTML = ' Player 2 Wins!🚩';
} else {
    result.innerHTML = '❎ Draw ❌'
}