/*----- constants -----*/

const colors = {
  null: 'var(--null)',
  playerX: 'var(--player1)',
  playerO: 'var:(--playerO)',
};

const winCombo = {
  win1: [0, 1, 2],
  win2: [3, 4, 5],
  win3: [6, 7, 8],
  win4: [0, 3, 6],
  win5: [1, 4, 7],
  win6: [2, 5, 8],
  win7: [0, 4, 8],
  win8: [2, 4, 6],
}

/*----- app's state (variables) -----*/

const board = [];
let playerTurn;
let winDrawPlay;


/*----- cached element references -----*/
const squaresEls = document.querySelectorAll('.squares');

/*----- event listeners -----*/

/*----- functions -----*/
init()

function init() {
  gameBoard();
  turn();
  winner();
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
    return playerX; 
}

function winner() {
  return null;
}

function render() {
  if (winner === null) {
    message = (`It is ${playerTurn}/'s turn`)
  } else if (winner === 'T') {
    message = (`It/'s A Tie`)
  } else {
    message = (`Congrats ${playerTurn}! You Win!!`)
  }
}