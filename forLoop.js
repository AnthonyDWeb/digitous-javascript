// 01 Somme des Carrés

var num = 0;
for (var i= 5; i<= 10; i++){
    num = num + (i*i);
    // console.log(num);
}

// 02 Comptons

var multipleOfNumber = 7;
var modulo = 0;
var min = 100;
var max = 1000;
for (var i = min; i <= max; i++){
    if (i % multipleOfNumber === 0 ) {
        modulo = (modulo +1);
    }
}
// console.log(modulo)

// 03 Chanceux

let luckyLaunchDice = 20;
var number = 0;
var dice = Math.round(Math.random() * (6-1) +1);

for( var i = 0; i <= luckyLaunchDice; i++){
    if (i >= 5){
        number = number + dice;
    }

}
// console.log(number)

// 04 Des boites 

"console.log(box1 + box2)" -> ( 5 + 5);
"console.log(box1)" -> 5/5;
"console.log(box2)" -> 17/18;
"console.log(i)" -> 12/13;

// 05 Des setiob

dans for "console.log(box1)" -> 12;
"console.log(box1)" -> 24/21/18/15;
"console.log(i)" -> 12/9/6/3;

// 06 Encore des boites

"console.log(box1 + i)" -> 0/-3;
"console.log(box2 + i)" -> 3/2;
"console.log(box1)" -> -0/-1/-1/-2;
"console.log(box2)" -> 4/4/5/5;
"console.log(i)" -> 0/-1/-2/-3;
