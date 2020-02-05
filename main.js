/*----- constants -----*/
// Defines the board and player colors
var colors = {
  null: 'var(--null)',
  player1: 'var(--player1)',
  player0: 'var:(--playerO)',
};

// Winning combinations
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
// how do I link the colors to this? Freezes browser if not 1 & -1
let playerX = 1;
let playerO = -1;

/*----- cached element references -----*/
var squaresEls = document.querySelectorAll('.squares');
var message = document.querySelector('h1');
let gameEl = document.querySelector('.game-board');

/*----- event listeners -----*/
// selects the squares when clicked(runs turn function)
gameEl.addEventListener('click', turn) 

// replay button
document.querySelector('button').addEventListener('click', init)


/*----- functions -----*/
init()


function init() {
  board = Array(9).fill(null)
  // console.log(board);
  gameBoard();
  playerTurn = playerX;
  winDrawPlay = null;
  render();
}

function getWinner() {
  // loops through the winCombo array to check for  
  for (let i = 0; i < winCombo; i++) {
    // checks board for winning combos looping through the array.  Why does it equal 3?
    if (Math.abs(board[winCombo[i][0]] + board[winCombo[i][1]] + board[winCombo[i][2]]) === 3) {
      return board[winCombo[i][0]]
    } 
  } 
  // Outside of the winCombo loop, if the board contains any null values, the game continues
  if (board.includes(null)) {
    return null
  } 
  // if all squares are taken and no winner, the game is tied
    return 'T'
}

// 
function gameBoard() {
  for (i = 0; i < squaresEls.length; i++) {
    squaresEls[i] = board[i];
  }
  // console.log(board)
}

function turn(e) {
  e.target.innerText = playerTurn;
  // doesn't end when there is a winner & allows boxes to be clicked multiple times
  if (playerTurn === playerX) {
    playerTurn = playerO
  } else {
    playerTurn = playerX
  }
  console.log('playerTurn', playerTurn)
  if (board[e.target.innerText] !== null) return;
  if (winDrawPlay !== null) return;
  winDrawPlay = getWinner();
  // playerTurn *= -1;
  render();
}

function render() {
  board.forEach(function(sq, idx) {
    squaresEls[idx].style.background = colors[sq]
  });
  if (winDrawPlay === null) {
    message.innerHTML = (`It is ${playerTurn}'s turn`)
  } else if (winDrawPlay === 'T') {
    message.innerHTML = (`It's A Tie`)
  } else {
    message.innerHTML = (`Congrats ${playerTurn}! You Win!!`)
  }
}
