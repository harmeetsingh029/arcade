let gameState = {
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

let currentPlayer = gameState.players[0]

function buildInitialState(){
    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 3; k++){
            gameState.board[i][k] = null
        }
    }  
}

function swapPlayer(){
    if(currentPlayer === 'x'){
        currentPlayer = gameState.players[1]
    }
    else{
        currentPlayer = gameState.players[0]
    }
}




function getNames(){
    let playerNameOne = document.getElementById("playerOne")
    let playerNameTWo = document.getElementById("playerTwo")
    //alert(playerNameOne.value + playerNameTWo.value)
}

function renderState(){
    if(gameState.board)
    gameState.board[0][0] = currentPlayer.toString()
    swapPlayer()
}

function onBoardClick(event){
    let tdCell = event.target
    //alert(event.target.className)
    cell = event.target.className

    if(!(tdCell.className.includes("taken"))){
        tdCell.classList.add("taken")
        tdCell.innerText = currentPlayer.toString()
        renderState()
    }
}

let board = document.getElementById('board')
board.addEventListener('click', onBoardClick)
