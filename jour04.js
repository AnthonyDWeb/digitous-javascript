//  Exercice 1

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
// console.log(cat)
// console.log(cat.age)

if (isCute = true) {
    // console.log("So Cuuuuuuuuute !")
}

//  Exercice 2

var cat2 = {
    name: "Chatoune",
    age: 1,
    isCute: false,
}

var cats = [cat, cat2];

// console.log(cats[0]["age"])
// console.log(cats[0].age)

// console.log(cats[1]["isCute"])
// console.log(cats[1].isCute)

//  Exercice 3

function checkIfEven(num) {
    if (num % 2 === 0) {
        // console.log("even");
    } else {
        // console.log("Odd");
    }
}

checkIfEven(6)
checkIfEven(1)
checkIfEven(79)
checkIfEven(188860)


//  Exercice 4

function compare(num1, num2) {
    if (num1 > num2) {
        // console.log(`${num1} is bigger`)
    } else if (num1 < num2) {
        // console.log(`${num2} is bigger`)
    } else {
        // console.log("Both are the same")
    }
}

compare(8, 3)
compare(9, 9)
compare(661, 662)
compare(4, (8 / 2))

//  Exercice 5
function addUp(num) {
    var numAdd = 0;
    for (var i = 0; i <= num; i++) {
        numAdd = numAdd + i;
    }
    return numAdd;
}

// console.log(`num egal ${addUp(12)}`)


//  Exercice 6

var hours;
var minutes;
var secondes;

function format(num) {
    hours = Math.floor(num / 3600);
    minutes = Math.floor((num - (hours * 3600)) / 60);
    secondes = Math.floor((num - (hours * 3600) - (minutes * 60)));
    var time = `${hours}:${minutes}:${secondes}`
    return time
}

function format2(num) {
    var hours2 = Math.floor(num / 3600);
    var rest = num % 3600;
    var minutes2 = Math.floor(rest / 60);
    var secondes2 = rest % 60
    var time2 = `${hours2}:${minutes2}:${secondes2}`
    return time2;
}




// console.log(format2(3700))


//  Bonus 1

function generatePassword(num) {
    var password = "";
    for (i = 0; i <= 6; i++) {
        var randomNum = 65 + Math.round(Math.random() * (26 - 1));
        if (randomNum > 65 || randomNum < 90) {
            password += String.fromCharCode(randomNum);
        } else {
            i--;
        }
    }
    return password;
}

// console.log(generatePassword());


//  Bonus 2
var player1 = 0;
var player2 = 0;
function launchDice(numberOfDice) {

    for (var i = 0; i <= numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        player1 = player1 + dice;
    } for (var i = 0; i <= numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        player2 = player2 + dice;
    }

    if (player1 < player2) {
        console.log(`player 1 : ${player1}, player 2 : ${player2} -> The winner is Player 2`);
    } else if (player1 > player2) {
        console.log(`player 1 : ${player1}, player 2 : ${player2} -> The winner is Player 1`);
    } else {
        console.log(`player 1 : ${player1}, player 2 : ${player2} -> Try again`);
    }
}

launchDice(5);