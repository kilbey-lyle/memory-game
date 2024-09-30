/**
 * @jest-environment jsdom
 */
if (
    typeof globalThis.TextEncoder === "undefined" ||
    typeof globalThis.TextDecoder === "undefined"
) {
    const utils = require("util");
    globalThis.TextEncoder = utils.TextEncoder;
    globalThis.TextDecoder = utils.TextDecoder;
    globalThis.Uint8Array = Uint8Array;
}
const { game } = require("./game");
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
})


