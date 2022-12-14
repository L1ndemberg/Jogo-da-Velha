// Variáveis
let board = ["","","","","","","","",""];
let playerTime = 0;
let symbol = ['o', 'x']
let gameOver = false;


let button_reset = document.getElementById("botaoR");
    // adicionou um evento click
button_reset.addEventListener("click", function () {
    // reseto os valores do game
    board = ["","","","","","","","",""];
    playerTime = 0;
    gameOver = false;
    // pego todos os squares do jogo no html
    let squares = document.querySelectorAll(".square");

    for (let i = 0; i < squares.length; i++) {
    // altero o innerHTML para vazio removendo todos os conteúdos 
        squares[i].innerHTML = "";
    }
});

function handleMove(position) {

    if (gameOver) {
        return;
    }
    if (board[position] == ''){
        board[position] = symbol[playerTime];

        gameOver = isWin();
    
   
    if (gameOver == false) {
    //  Também poderia ser assim. Um if ternário.
    // playerTime = (playerTime == 0) ? 1 : 0;
    // Esse é a mesma coisa desse de baixo
     if (playerTime == 0) {         
        playerTime = 1;
    } else {
        playerTime = 0;
     }
}
}
    return gameOver;
}

function isWin() {
    // Voce pode declara essa variavel la em cima(Em baixo do gameOver)
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for (let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
                return true;
            }

    }
    return false;
}