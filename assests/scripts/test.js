/**
 * @jest-environment jsdom
 */
const $ = require('jquery');
global.$ = global.jQuery = $;
$.fn.modal = jest.fn();

if (
    typeof globalThis.TextEncoder === "undefined" ||
    typeof globalThis.TextDecoder === "undefined"
) {
    const utils = require("util");
    globalThis.TextEncoder = utils.TextEncoder;
    globalThis.TextDecoder = utils.TextDecoder;
    globalThis.Uint8Array = Uint8Array;
}
const { game, player, newTurn, checkLastMove, gameOver, increaseScoreByOne, resetScore, getButtonID, addAndRemoveLightClass, showCurrentSequence } = require("./game");
const { JSDOM } = require("jsdom");

let fs = require("fs");

beforeAll (() => {
    let fileContents = fs.readFileSync("./index.html", "utf-8");
    // Initialize JSDOM
    const dom = new JSDOM(fileContents);
    
    // Make the `document` and `window` objects global
    global.document = dom.window.document;
    global.window = dom.window;
    document.open();
    document.write(fileContents);
    document.close();
})

describe ("game object contains the correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentSequence key exists", () => {
        expect("currentSequence" in game).toBe(true);
    });
    test("buttonNames key exists", () => {
        expect("buttonNames" in game).toBe(true);
    });
    test("isComputerTurn key exists", () => {
        expect("isComputerTurn" in game).toBe(true);
    });   
})

describe ("player object contains the correct keys", () => {
    test("lastMove key exists", () => {
        expect("lastMove" in player).toBe(true);
    });
    test("movesThisTurn key exists", () => {
        expect("movesThisTurn" in player).toBe(true);
    }); 
})

describe ("New Turn initiatation", () => {
    afterEach(() => {
        game.currentSequence = [];
        game.isComputerTurn = true;
    });
    test("Set comptuer turn to true", () => {
        game.isComputerTurn = false;
        newTurn();
        expect(game.isComputerTurn).toBe(true);        
    });
    test("New game button is disabled", () => {
        let disabled = document.getElementById('bttn-new-game').disabled;
        expect(disabled).toBe(true);
    });
    test("Move added to current sequence", () => {
        newTurn();
        expect(game.currentSequence.length).toBe(1);
    });
    test("if a new game should set score to zero", () => {
        game.score = 1;
        newTurn();
        expect(game.score).toBe(0);
    });
    test("if a not new game should score should not be changed", () => {
        game.score = 5;
        game.currentSequence.push('hippo')
        newTurn();
        expect(game.score).toBe(5);
    });
})

describe ("Check move function", () => {
    beforeEach(() => {
        player.lastMove = 'hippo'
        player.movesThisTurn = 1;
    });
    afterEach(() => {
        game.currentSequence = [];
    });
    test("if move matches return true", () => {
         game.currentSequence.push('hippo');
         expect(checkLastMove('hippo')).toBe(true);
    });
    test("if move doesn't matche return false", () => {
        game.currentSequence.push('hippo');
        expect(checkLastMove('frog')).toBe(false);
   });
})

describe ("Changing score", () => {
    beforeEach(() => {
        game.score = 5;
    });
    test("score should be increased by one", () => {
         increaseScoreByOne(game.score);
         expect(game.score).toBe(6);
    });
    test("score feild should be increased by one", () => {
        increaseScoreByOne(game.score);
        expect(document.getElementById('score').textContent).toBe("6");
    });
    test("score should be set to zero", () => {
        resetScore();
        expect(game.score).toBe(0);
    });
    test("score feild should be set to zero", () => {
        resetScore();
        expect(document.getElementById('score').textContent).toBe("0");
    });
});

describe ("gameOver Function", () => {
    test("Set comptuer turn to true", () => {
        game.isComputerTurn = false;
        gameOver();
        expect(game.isComputerTurn).toBe(true);
    });
    test("Set current sequence to an empty array", () => {
        game.currentSequence = ['hippo', 'otter'];
        gameOver();
        expect(game.currentSequence.length).toBe(0);
    });
    test("Set player last move to an empty string", () => {
        player.lastMove = 'otter';
        gameOver();
        expect(player.lastMove.length).toBe(0);
    });
    test("Set player last move to an empty string", () => {
        player.lastMove = 'otter';
        gameOver();
        expect(player.lastMove.length).toBe(0);
    });
    test("Enables new game button", () => {
        gameOver();
        let disabled = document.getElementById('bttn-new-game').disabled;
        expect(disabled).toBe(false);
    });
});

describe ("get Button ID function", () => {
    test("Get correct button ID if button clicked", () => {
        let buttonClicked = document.getElementById('bttn-hippo');
        let funcReturn = getButtonID(buttonClicked);
        expect(funcReturn).toBe('hippo');
    });
    test("Get correct button ID if button icon clicked", () => {
        let iconClicked = document.getElementById('bttn-hippo').children[0];
        let funcReturn = getButtonID(iconClicked);
        expect(funcReturn).toBe('hippo');
    });
});

describe ("Show current Sequence function", () => {
    beforeEach(() => {
        game.currentSequence = game.buttonNames;
        jest.useFakeTimers();
    });
    test("Calls passed in function", () => {
        const mock_addAndRemoveLightClass = jest.fn();
        showCurrentSequence(game.currentSequence, mock_addAndRemoveLightClass);
        jest.runAllTimers();
        expect(mock_addAndRemoveLightClass).toHaveBeenCalled();
    });
    test("Hippo button can have light class set", () => {
        let classNames = document.getElementById('bttn-hippo').className.split(' ');
        console.log(typeof(classNames));
        showCurrentSequence(game.currentSequence, addAndRemoveLightClass);
        jest.runAllTimers();
        expect('light' in classNames).toBe(true);
    });
    test("Times looped equals lengh of current sequence", () => {
        const mock_addAndRemoveLightClass = jest.fn();

        showCurrentSequence(game.currentSequence, mock_addAndRemoveLightClass);
        jest.runAllTimers();
        expect(mock_addAndRemoveLightClass).toHaveBeenCalledTimes(4);

        game.currentSequence = ['hippo'];
        showCurrentSequence(game.currentSequence, mock_addAndRemoveLightClass);
        jest.runAllTimers();
        expect(mock_addAndRemoveLightClass).toHaveBeenCalledTimes(5);

        game.currentSequence = ['hippo', 'otter'];
        showCurrentSequence(game.currentSequence, mock_addAndRemoveLightClass);
        jest.runAllTimers();
        expect(mock_addAndRemoveLightClass).toHaveBeenCalledTimes(7);
    });

});