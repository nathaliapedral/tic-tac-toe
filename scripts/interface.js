document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');
    // console.log(squares);

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    let reset = document.getElementById("reset");
    reset.addEventListener('click', resetGame);

});

function handleClick(event) {

    let boardPosition = event.target.id;

    if (makeMove(boardPosition)) {
        setTimeout(() => {
            displayWinner();
        }, 10);
    };
};

function resetBoard() {
    let board = document.querySelectorAll(".square");

    board.forEach((square) => {
        square.innerHTML = ``;
    })

}


function addSymbolToBoard(symbol, position) {
    let square = document.getElementById(position);
    square.innerHTML = `<div class="player${symbol}"></div>`;

};

function changeTurnTitle(symbol) {
    let playerTurn = document.getElementById('currentPlayer');
    playerTurn.innerHTML = `Player ${symbol} turn`;
};

function displayWinner() {

    if (playerTime == 1) {
        alert("Game over! Player O won!");
    } else {
        alert("Game over! Player X won!");
    };
};