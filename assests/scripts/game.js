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
    //disable new game button
    document.getElementById('bttn-new-game').onclick = null;
    //add a turn to the current Sequence
    game.currentSequence.push(game.buttonNames[Math.floor(Math.random()*game.buttonNames.length)]);
    //show the player the current sequence
    showCurrentSequence(game.currentSequence);
    playerTurn();
}

function playerTurn() {
    game.isComputerTurn = false  
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
    }, 400);
}

function gameOver () {
    game.isComputerTurn = true;
    game.score = 0;
    updateScore();
    game.currentSequence = [];

    document.getElementById('bttn-new-game').setAttribute('onclick', 'newTurn()');

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
    }, 600);
}

function updateScore() {
    document.getElementById('score').textContent = game.score;
}   

for (let button of document.getElementsByClassName('player-bttn')) {
    button.addEventListener('click', (e) => {
        if (!game.isComputerTurn) {
            let buttonID = e.target.getAttribute('id');
            if (buttonID == null){
                buttonID = e.target.parentElement.getAttribute('id');
            }
            player.lastMove = buttonID.split('-')[1];
            addAndRemoveLightClass(player.lastMove);
            player.movesThisTurn = player.movesThisTurn + 1;
            if (checkLastMove()){
                if (player.movesThisTurn >= game.currentSequence.length){
                    console.log('move corrcet turn complete');
                    player.lastMove = '';
                    player.movesThisTurn = 0;
                    game.score++;
                    updateScore();
                    newTurn();
                }
            } else {
                console.log('move incorrect')
                gameOver();
            }
        }
    })
}

