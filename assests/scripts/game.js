let game = {
    score: 0,
    currentSequence: [],
    buttonNames:['otter','hippo','frog','crow'],
    isComputerTurn: true,
    eventListenersAdded: false,
}

let player = {
    lastMove: '',
    movesThisTurn: 0,
}


//runGame
function newTurn() {
    game.isComputerTurn = true;
    //add a turn to the current Sequence
    game.currentSequence.push(game.buttonNames[Math.floor(Math.random()*game.buttonNames.length)]);
    //show the player the current sequence
    showCurrentSequence(game.currentSequence);
    playerTurn();
}

function playerTurn() {
    game.isComputerTurn = false
    if (!game.eventListenersAdded){
        for (let button of document.getElementsByClassName('player-bttn')) {
            button.addEventListener('click', (e) => {
                if (!game.isComputerTurn){
                    player.lastMove = e.target.getAttribute('id').split('-')[1];
                    player.movesThisTurn =+ 1;
                    if (!checkLastMove()){
                        gameOver();
                    } else {
                        player.lastMove = '';
                        player.movesThisTurn = 0;
                        updateScore();
                        newTurn();
                    }
                }
            })
        }
    }
}

function checkLastMove() {
    if (player.lastMove === game.currentSequence[player.movesThisTurn - 1]){
        return true;
    } else {
        return false;
    }
}

function addAndRemoveLightClass(button){
    document.getElementById(`bttn-${button}`).classList.add('light');
    setTimeout(() => {
        document.getElementById(`bttn-${button}`).classList.remove('light')
    }, 500);
}

function gameOver () {
    game.isComputerTurn = true;
    game.score = 0;
    game.currentSequence = [];

    player.lastMove = '';
    player.movesThisTurn = 0;
    console.log('game over');
}

function showCurrentSequence(currentSequence){

    let i = 0
    let loop = setInterval(() => {
        addAndRemoveLightClass(currentSequence[i]);
        i++;
        if (i >= currentSequence.length){
            clearInterval(loop);
        }
    }, 700);
}

function updateScore() {
    game.score =+ 1;
    console.log(game.score);
}   
            
            
                // if input doesn't equal currentSequence gameOver
                    //reset game values
                    //trigger gameoverpopUp
                //if no incorrect input before end of list newTurn
                    //updateScore to plus 1
                    //runGame


