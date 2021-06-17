//  Exercice 1
 
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
// console.log(cat)
// console.log(cat.age)

if ( isCute = true) {
    // console.log("So Cuuuuuuuuute !")
}

//  Exercice 2

var cat2 = {
    name: "Chatoune",
    age: 1,
    isCute: false,
}

var cats = [cat,cat2];

// console.log(cats[0]["age"])
// console.log(cats[0].age)

// console.log(cats[1]["isCute"])
// console.log(cats[1].isCute)

//  Exercice 3

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(6)
checkIfEven(1)
checkIfEven(79)
checkIfEven(188860)


//  Exercice 4

function compare(num1,num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`)
    } else if (num1 < num2) {
        console.log(`${num2} is bigger`)
    } else {
        console.log("Both are the same")
    }
} 

compare(8,3)
compare(9,9)
compare(661,662)
compare(4,(8/2))

//  Exercice 5
function addUp(num) {
    var numAdd = 0;
    for (var i = 0; i <= num; i++ ) {
        numAdd = numAdd + i;
    } 
    return numAdd;
}

console.log(`num egal ${addUp(12)}`)


//  Exercice 6

var hours;
var minutes;
var secondes;

function format(num){
    hours = Math.floor(num / 3600);
    minutes = Math.floor((num - (hours * 3600)) /60);
    secondes = Math.floor((num - (hours * 3600) - (minutes * 60)));
    var time = `${hours}:${minutes}:${secondes}`
    return time
}

console.log(format(3700))
//  Bonus
//  Bonus