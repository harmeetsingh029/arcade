let gameState = {
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

let currentPlayer = gameState.players[0]
let winner = document.getElementById("winner")

function buildInitialState(){
    winner.innerHTML = ""
    for(let i = 0; i < 9; i++){
        let cell = document.getElementsByClassName("cell")[i]
        cell.innerHTML = ""
        cell.classList.remove("taken")
    }
    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 3; k++){
            gameState.board[i][k] = null
        }
    }
    swapPlayer()
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
}


function onBoardClick(event){
    let tdCell = event.target
    //alert(event.target.className)
    cell = event.target.className
    winner
    if(!(tdCell.className.includes("taken"))){
        tdCell.classList.add("taken")
        tdCell.innerText = currentPlayer.toString()
        renderState(tdCell)
    }
}

function checkWin(){
    if(checkRows() || checkColumns() || checkDiagonals()){
        if(currentPlayer === "x"){
            winner.innerHTML = document.getElementById("playerOne") + " Is the winner"
        }
        else{
            winner.innerHTML = document.getElementById("playerTwo") + " Is the winner"
        }
        for(let i = 0; i < 9; i++){
            let cell = document.getElementsByClassName("cell")[i]
            cell.classList.add("taken")
        }
    }
}

function renderState(tdCell){
    if(tdCell.className.includes("one")){
        gameState.board[0][0] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("two")){
        gameState.board[0][1] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("three")){
        gameState.board[0][2] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("four")){
        gameState.board[1][0] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("five")){
        gameState.board[1][1] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("six")){
        gameState.board[1][2] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("seven")){
        gameState.board[2][0] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("eight")){
        gameState.board[2][1] = currentPlayer.toString()
    }
    else if(tdCell.className.includes("nine")){
        gameState.board[2][2] = currentPlayer.toString()
    }
    checkWin()
    swapPlayer()
}

let board = document.getElementById('board')
board.addEventListener('click', onBoardClick)


function checkRows(){
    if(gameState.board[0][1] !== null && gameState.board[0][0] === gameState.board[0][1] && gameState.board[0][1] === gameState.board[0][2]){
       return true
    }  
    else if(gameState.board[1][1] !== null && gameState.board[1][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[1][2]){
        return true
    }
    else if(gameState.board[2][1] !== null && gameState.board[2][0] === gameState.board[2][1] && gameState.board[2][1] === gameState.board[2][2]){
        return true
    }
    else {
        return false
    }
}

function checkColumns(){
    if(gameState.board[1][0] !== null && gameState.board[0][0] === gameState.board[1][0] && gameState.board[1][0] === gameState.board[2][0]){
        return true
     }  
     else if(gameState.board[1][1] !== null && gameState.board[0][1] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][1]){
         return true
     }
     else if(gameState.board[1][2] !== null &&  gameState.board[0][2] === gameState.board[1][2] && gameState.board[1][2] === gameState.board[2][2]){
         return true
     }
     else{
        return false
     }
}

function checkDiagonals(){
    if(gameState.board[1][1] !== null && gameState.board[0][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][2]){
        return true
    }
    else if(gameState.board[1][1] !== null && gameState.board[0][2] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][0]){
        return true
    }
    else{
        return false
    }
}