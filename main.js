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
gameEl.addEventListener('click', turn) 

document.querySelector('button').addEventListener('click', init)


/*----- functions -----*/
init()

function init() {
  board = Array(9).fill(null)
  console.log(board);
  gameBoard();
  playerTurn = playerX;
  winDrawPlay = null;
  render();
}

function getWinner() {
  for (let i = 0; i < winCombo; i++) {
    if (Math.abs(board[winCombo[i][0]] + board[winCombo[i][1]] + board[winCombo[i][2]]) === 3){
      return board[winCombo[i][0]]
    } 
  } 
  if (board.includes(null)) {
    return null
  } 
    return 'T'
}

function gameBoard() {
  for (i = 0; i < squaresEls.length; i++) {
    squaresEls[i] = board[i];
  }
  console.log(board)
}

function turn(e) {
  e.target.innerText = playerTurn;
  if (board[e.target.innerText] !== null) return;
  if (winDrawPlay !== null) return;
  winDrawPlay = getWinner();
  playerTurn *= -1;
  render();
}

function render() {
  board.forEach(function(sq, idx) {
    squaresEls[idx].style.background = colors[sq]
  });
  if (winDrawPlay === null) {
    message.innerHTML = (`It is ${playerTurn}/'s turn`)
  } else if (winDrawPlay === 'T') {
    message.innerHTML = (`It/'s A Tie`)
  } else {
    message.innerHTML = (`Congrats ${playerTurn}! You Win!!`)
  }
}
