// console.log(process.argv)
var args = process.argv.slice(2)

// 01 Calculator

// function calculate(a, b, c) {
//     var result;
//     if (b === "+") {
//         result = a + c;
//     } else if (b === "-") {
//         result = a - c;
//     } else if (b === "x") {
//         result = a * c;
//     } else if (b === "/") {
//         result = a / c;
//     }
//     return `Le resultat est ${result}`;
// }

// console.log(calculate(parseInt(args[0]), args[1], parseInt(args[2])));

// 02 Table


let { addition, multiply } = require("./tableUtils.js");

// multiply(parseInt(args[0]))
// console.log("  ----------   ")
// addition(parseInt(args[0]));



// 04 Guess

var prompt = require("prompt");
prompt.start();

var mysteryNum = Math.round(Math.random() * (100 - 1) + 1);
// console.log(randomPrice)

function play() {
    prompt.get({ name: "player", description: "Quel est le nombre mystère ?" }, function (err, res) {
    

        if (res.player < mysteryNum) {
            console.log("It's more ! Try again!");
            play();

        } else if (res.player > mysteryNum) {
            console.log("It's less ! Try again!");
            play();

        } else if (res.player == mysteryNum) {
            console.log("Bingo ! You did it!");

        } else {
            console.log("error, enter a number please");
            play();
        }
    })
}

play()