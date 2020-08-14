let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0; // 0 or 1
let symbols = ['O', 'X'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function isWinner() {

    for (const state of winStates) {

        let pos1 = state[0];
        let pos2 = state[1];
        let pos3 = state[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }
    }
    return false;
}


function makeMove(boardPosition) {

    console.log(gameOver);
    if (gameOver) return;

    if (playerTime == 0 && board[boardPosition] == '') {
        board[boardPosition] = symbols[0];
        playerTime = 1;
        addSymbolToBoard(symbols[0], boardPosition);
        gameOver = isWinner();
        if (!gameOver) changeTurnTitle(symbols[1]);

    } else if (playerTime == 1 && board[boardPosition] == '') {
        board[boardPosition] = symbols[1];
        playerTime = 0;
        addSymbolToBoard(symbols[1], boardPosition);
        gameOver = isWinner();
        if (!gameOver) changeTurnTitle(symbols[0]);
    }

    return gameOver;

}

function resetGame() {
    gameOver = false;
    playerTime = 0;
    board = ['', '', '', '', '', '', '', '', ''];
    document.getElementById("currentPlayer").innerHTML = `Player O starts`;
    resetBoard();
}