let game = {
    score: 0,
    currentSequence: [],
    buttonNames:['otter','hippo','frog','crow'],
    isComputerTurn: true,
};

let player = {
    lastMove: '',
    movesThisTurn: 0,
};

//When page is loaded
window.onload = function exampleFunction(){
    $('#welcome').modal('show');
    //Loops through player buttons and add event listeners
    for (let button of document.getElementsByClassName('player-bttn')) {
        button.addEventListener('click', (e) => {
            //Don't do anything is it is computers turn
            if (!game.isComputerTurn) {
                //Capture button which has been pressed by player
                let buttonID = e.target.getAttribute('id');
                //If icon click get buttonID and capture which button is parent
                if (buttonID == null){
                    buttonID = e.target.parentElement.getAttribute('id');
                }
                //remove 'bttn' from button ID and capture move in player object
                player.lastMove = buttonID.split('-')[1];
                //Flash button so user knows click was successful
                addAndRemoveLightClass(player.lastMove);
                //increase player move this turn for later comparion
                player.movesThisTurn = player.movesThisTurn + 1;
                if (checkLastMove()){
                    //check if player has made all needed guesses for this round
                    if (player.movesThisTurn >= game.currentSequence.length){
                        //turn complete with no mistakes
                        //reset player object
                        player.lastMove = '';
                        player.movesThisTurn = 0;
                        //increase game score by 1
                        game.score++;
                        updateScore();
                        //start new turn to re intiate funcitonal loop
                        newTurn();
                    }
                } else {
                    gameOver();
                }
            } 
        });
    }
    //get form element
    const form = document.getElementById("form-modal");

    //add event listener for form submit
    form.addEventListener('submit', (e) => {
        //initialise email data array
        let data = [];
        
        //stop page and form data refresh
        e.preventDefault();

        //create data Constructor with form data
        const formData = new FormData(form);

        //extract data from data Constructor 
        for (const pair of formData.entries()) {
            data.push(pair[1]);
        }    
        
        //initialise emailjs intergration
        emailjs.init({
            publicKey: "NMysIGh66f5ASQ-TM",
        });

        //request email send
        emailjs.send("service_eduzpyv","template_hgeoi5r",{
            to_email: data[1],
            player_name: data[0],
            score: game.score,
            });
    });
    //get all checkboxes
    let checkboxes = document.getElementsByClassName('form-checkbox');
    //for each check box add an event listen for click
    for (let box of checkboxes) {
        box.addEventListener('click', (e) => {
            //if box is clicked whhile not check show alert
            if (box.checked){
                window.alert('Feature Not Implimented');
            }
        });
    }
    //get email modal link from game over model and add event listening
    document.getElementById('email-bttn').addEventListener('click', () => {
        //Hide game over modal and show email modal
        $('#game-over').modal('hide');
        $('#email-modal').modal('show');
    });
};

/**
 * Sets isComputerTurn to true
 * disbales new game button.
 * adds a new button name to current Sequence.
 * Then initiates showCurrentSequence.
 */
function newTurn() {
    game.isComputerTurn = true;
    //disable new game button
    document.getElementById('bttn-new-game').onclick = null;
    //add a turn to the current Sequence
    game.currentSequence.push(game.buttonNames[Math.floor(Math.random()*game.buttonNames.length)]);
    //show the player the current sequence
    showCurrentSequence(game.currentSequence);
}

/**
 * params:Array
 * Loops through array on an interval passing each itme of array to addAndRemoveLightClass()
 * Once loop is complete, sets isComputerTurn to false.
 */
function showCurrentSequence(currentSequence){

    let i = 0;
    let loop = setInterval(() => {
        addAndRemoveLightClass(currentSequence[i]);
        i++;
        if (i >= currentSequence.length){
            game.isComputerTurn = false;
            clearInterval(loop);
        }
    }, 600);
}

/**
 * Takes in a button name and adds class 'light'. then waits 400ms and removes light class.
 */
function addAndRemoveLightClass(button){
    document.getElementById(`bttn-${button}`).classList.add('light');
    setTimeout(() => {
        document.getElementById(`bttn-${button}`).classList.remove('light');
    }, 400);
}

/**
 * compares lastMove string in player object to equivently move in currentSequence
 */
function checkLastMove() {
    if (player.lastMove === game.currentSequence[player.movesThisTurn - 1]){
        return true;
    } else {
        return false;
    }
}

/**
 * Updates HTML element with Id scroe to current game score
 */
function updateScore() {
    document.getElementById('score').textContent = game.score;
}

/**
 * Resets to default values for game and player object.
 * Once compelte updates the scores, enables new game button, and shows game over modal.
 */
function gameOver () {
    game.isComputerTurn = true;
    game.score = 0;
    game.currentSequence = [];

    player.lastMove = '';
    player.movesThisTurn = 0;

    updateScore();
    document.getElementById('bttn-new-game').setAttribute('onclick', 'newTurn()');
    $('#game-over').modal('show');
}



//Credit 4, facebook SDK documentaion 
function facebookShare() {
    FB.ui({
        method: 'share',
        href: 'https://kilbey-lyle.github.io/memory-game/',
        hashtag: `#ClickIt!`,
      }, function(response){});
    
}

module.exports = { game, player, newTurn };

