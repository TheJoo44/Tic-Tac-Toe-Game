/*----- constants -----*/

var colors = {
  null: 'var(--null)',
  playerX: 'var(--player1)',
  playerO: 'var:(--playerO)',
};

var winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

/*----- app's state (variables) -----*/

let board = [];
let playerTurn;
let winDrawPlay;
let playerX = 1;
let playerO = -1;

/*----- cached element references -----*/
var squaresEls = document.querySelectorAll('.squares');
var message = document.querySelectorAll('h1');
let gameEl = document.querySelector('.game-board');

/*----- event listeners -----*/

function getWinner() {
  for (let i = 0; i < winCombo; i++) {
    // if (Math.abs(board[winCombo[i][0]] + enter 2 more board win conditions))
  }
}

  gameEl.addEventListener('click', function(e) {
  console.log(e.target);
  e.target.innerText = playerTurn;
  // Add turn switch here
})



/*----- functions -----*/
init()

function init() {
  gameBoard();
  turn = 1;
  winner = null;
  render();
}

function gameBoard() {
  for (i = 0; i < squaresEls.length; i++) {
    board[i] = squaresEls[i];
  }
  console.log(board)
}

function turn() {
  if (playerTurn === playerX) {
    return playerO;
  } else {
    return playerX
  }
}

function winner() {
  return null;
}

function render() {
  board.forEach(function(sq, idx) {
    squaresEls[idx].style.background = colors[sq]
  });
  if (winner === null) {
    message.innerHTML = (`It is ${playerTurn}/'s turn`)
  } else if (winner === 'T') {
    message.innerHTML = (`It/'s A Tie`)
  } else {
    message.innerHTML = (`Congrats ${playerTurn}! You Win!!`)
  }
}

// winner = -1