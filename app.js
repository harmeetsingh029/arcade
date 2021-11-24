let gameState = {
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

function buildInitialState(){
    for(let i = 0; i < 3; i++){
        for(let k = 0; k < 3; k++){
            gameState.board[i][k] = null
        }
    }
}

let currentPlayer = gameState.players[0]
