const game = {
    score: 0,
    currentSequence: [],
    buttonNames:['otter','hippo','frog','crow'],
    isComputerTurn: true,
};

const player = {
    lastMove: '',
    movesThisTurn: 0,
};

//When page is loaded
window.onload = function exampleFunction(){
    //$('#welcome').modal('show');
    //Loops through player buttons and add event listeners
    for (let button of document.getElementsByClassName('player-bttn')) {
        button.addEventListener('click', (e) => {
            //Don't do anything is it is computers turn
            if (!game.isComputerTurn) {
                player.lastMove = getButtonID(e.target);
                //Flash button so user knows click was successful
                addAndRemoveLightClass(player.lastMove);
                //increase player move this turn for later comparion
                player.movesThisTurn = player.movesThisTurn + 1;
                if (checkLastMove(player.lastMove)){
                    //check if player has made all needed guesses for this round
                    if (player.movesThisTurn >= game.currentSequence.length){
                        //turn complete with no mistakes
                        //reset player object
                        player.lastMove = '';
                        player.movesThisTurn = 0;
                        //increase game score by 1
                        increaseScoreByOne(game.score);
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
        //stop page and form data refresh
        e.preventDefault();
        //change submit button text to sent
        document.getElementById('email-submit').value = "Sent!";
        //change it back agai after 3 seconds
        setTimeout(() => {
            document.getElementById('email-submit').value = "Submit";
        }, 3000)
        
        //initialise email data array
        let data = [];

        //create data Constructor with form data
        const formData = new FormData(form);
        //extract data from data Constructor 
        for (const pair of formData.entries()) {
            data.push(pair[1]);
        }    
        //reset form feilds
        form.reset();
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
    //reset game object attributes in case not first game
    if (game.currentSequence.length == 0){
        resetScore();
    }
    game.isComputerTurn = true;
    //disable new game button
    document.getElementById('bttn-new-game').disabled = true;
    //add a turn to the current Sequence
    addRandomButtonChoice();
    //show the player the current sequence
    showCurrentSequence(game.currentSequence);
}

/**
 * Updates game score by one then call updateScore to update score shown in DOM
 */
function increaseScoreByOne(score) {
    game.score = score + 1;
    updateScore();
}

/**
 * Sets game score to 0 then calls updateScore to update score shown in DOM
 */
function resetScore() {
    game.score = 0;
    updateScore();
}

/**
 * Adds random choice to currentSequence from game choices
 */
function addRandomButtonChoice() {
    game.currentSequence.push(game.buttonNames[Math.floor(Math.random()*game.buttonNames.length)]);
}

/**
 * Gets ID from element. If ID is null gets ID of element parent.
 * returns string of ID after - charater. 
 */
function getButtonID(button){
    let buttonID = button.getAttribute('id');
    //If icon click get buttonID and capture which button is parent
    if (buttonID == null){
        buttonID = e.target.parentElement.getAttribute('id');
    }
    //remove 'bttn' from button ID and capture move in player object
    buttonID = buttonID.split('-')[1];
    return buttonID;
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
function checkLastMove(playerMove) {
    if (playerMove === game.currentSequence[player.movesThisTurn - 1]){
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
    game.currentSequence = [];

    player.lastMove = '';
    player.movesThisTurn = 0;

    document.getElementById('bttn-new-game').disabled = false;

    $('#game-over').modal('show');
}



/**
 * Credit 4, facebook SDK documentaion. 
 * Called via onclick attribute on footer button and #facebook-bttn
 */
function facebookShare() {
    FB.ui({
        method: 'share',
        href: 'https://kilbey-lyle.github.io/memory-game/',
        hashtag: `#ClickIt!`,
      }, function(response){});
    
}

module.exports = { game, player, newTurn, checkLastMove, updateScore, gameOver };

