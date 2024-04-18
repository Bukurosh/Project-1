function checkWinner() {
  const cells = document.querySelectorAll('.cell');
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].innerText !== '' && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
      return cells[a].innerText;
    }
  }

  return null;
}

function handleMove(cell) {
  if (cell.innerText === '') {
    cell.innerText = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + ' yeap you win');
      resetGame();
    } else if (isBoardFull()) {
      alert('It is a tie');
      resetGame();
    } else {

      if(currentPlayer === 'X') {
        currentPlayer =  'O';
      } else {
        currentPlayer = 'X';
      }
    }
  }
}

function isBoardFull() {
  const cells = document.querySelectorAll('.cell');
  for (let cell of cells) {
    if (cell.innerText === '') {
      return false;
    }
  }
  return true;
}

function resetGame() {
  const cells = document.querySelectorAll('.cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
  currentPlayer = 'O';
}

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => handleMove(cell));
});

document.getElementById('press').addEventListener('click', resetGame);

let currentPlayer = 'X';
