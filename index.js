
let currPlayer = "X";
let isWinner = false;
let winningOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const allSquares = document.querySelectorAll(".square");
const resetButton = document.querySelector('.reset');
const message = document.querySelector(".message");

allSquares.forEach((square, index) => {
  square.addEventListener("click", () => handleClick(square, index));
});

const handleClick = (square, index) => {
  if (square.textContent !== "" || isWinner) {
    return;
  }

  if (currPlayer === "X") {
    square.textContent = "X";
  } else {
    square.textContent = "0";
  }

  isWinner = hasWinner(allSquares);

  if (!isWinner) {
    currPlayer = currPlayer === "X" ? "0" : "X";
  }

  const isEmpty = isBoardEmpty(allSquares);

  if (isWinner) {
    message.textContent = `Winner is Player ${currPlayer}!`;
  } else if (!isWinner && !isEmpty) {
    message.textContent = "It's a Tie!";
  }

  console.log(isWinner, message, isEmpty);
};

const hasWinner = squares => {
  let isWinner = false;
  winningOptions.forEach(option => {
    let a = option[0];
    let b = option[1];
    let c = option[2];
    if (
      squares[a].textContent &&
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent
    ) {
      isWinner = true;
    }
  });
  return isWinner;
};

const isBoardEmpty = squares => {
  let hasEmptySquare = false;
  squares.forEach(square => {
    if (square.textContent === "") {
      hasEmptySquare = true;
    }
  });
  return hasEmptySquare;
};

function handleReset(){
    currPlayer = 'X';
    isWinner = false;
    allSquares.forEach(square=>{
        square.textContent = ''
    })

    message.textContent = ''
}


resetButton.addEventListener('click', handleReset)
