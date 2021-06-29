let prompt = require("prompt");
let word = ["alphabet", "ninja"];
let randomWord = word[Math.round(Math.random() * word.length)];
console.log(randomWord)
console.log(randomWord.replace(randomWord(randomWord.indexOf("string")), "_"));
prompt.start();


function pendu() {
    prompt.get({ name: "letter", description: "Quel est le mot mystère ?" }, function (err, res) {
        
        if (res.letter === randomWord.indexOf("string")) {
            pendu();
        } else {
            console.log("no!")
        }
    }
    )
}
pendu()
