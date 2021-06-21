// 01 Comptons 

var min  = 50;
var max = 200;

while (min <= max){
    if (min % 2 === 0) {
        // console.log(min);
    }   
  
     min++; 
} 

// 02 Try again

var dice = null;
var count = 0;

while (dice != 6) {
    dice = Math.floor(Math.random() * (6 - 1 + 1) +1);
    // console.log(dice)
    count++;
} 

// console.log(count);

// 03  Course

let ussainBolt = 0;
let tysonGay = 0;
let numberOfTry = 0;


while (ussainBolt < 100 || tysonGay < 100) {

    ussainBolt = ussainBolt + Math.floor(Math.random() * (10 - 1 + 1) +1);
    tysonGay = tysonGay + Math.floor(Math.random() * (10 - 1 + 1) +1);
    numberOfTry++;

} 
if (ussainBolt < 100) {
    // console.log("Ussain Bolt vainqueur")
} else {
    // console.log("Tyson Gay vainqueur")
}
// console.log(numberOfTry)

// 04 Des boites 

"console.log(box2) -> 5/5"
"console.log(box1) -> 2/-8"

// 05 Encore de Boites

"console.log(box1 + i) -> "
"console.log(i) -> 0"
"console.log(box1) -> 7"