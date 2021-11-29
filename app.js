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
let taken = 0


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
    let playerNameOne = document.getElementById("playerOne").value
    let playerNameTwo = document.getElementById("playerTwo").value

    document.getElementById("winImage").style.display = "none"
    document.getElementById("turn").style.display = "block"
    document.getElementById("turn").innerHTML = "Player X's turn"

    taken = 0
    swapPlayer()
}

function swapPlayer(){
    if(currentPlayer === 'x'){
        currentPlayer = gameState.players[1]
        document.getElementById("turn").innerHTML = "Player O's turn"
    }
    else{
        currentPlayer = gameState.players[0]
        document.getElementById("turn").innerHTML = "Player X's turn"
    }
    
}


function onBoardClick(event){

    let tdCell = event.target
    cell = event.target.className

    if(!(tdCell.className.includes("taken"))){
        tdCell.classList.add("taken")
        tdCell.innerText = currentPlayer.toString()
        renderState(tdCell)
    }
}

function checkWin(){

    playerNameOne = document.getElementById("playerOne").value
    playerNameTwo = document.getElementById("playerTwo").value

    if(checkRows() || checkColumns() || checkDiagonals()){
        if(currentPlayer === "x"){
            winner.innerHTML = playerNameOne + " is the winner!"
            document.getElementById("winImage").style.display = "block"
            document.getElementById("turn").style.display = "none"
        }
        else{
            winner.innerHTML = playerNameTwo + " is the winner!"
            document.getElementById("winImage").style.display = "block"
            document.getElementById("turn").style.display = "none"
            swapPlayer()
        }
        for(let i = 0; i < 9; i++){
            let cell = document.getElementsByClassName("cell")[i]
            cell.classList.add("taken")
        }
    }
    taken++
    if(taken === 9){
        winner.innerHTML = "It is a draw!"
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