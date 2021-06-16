// 01 Array

var fruits = ["Mango","Lemon","Blueberry"];
// console.log(fruits);
// console.table(fruits);




// 02 Access

var ingredients = ["Eggs","Milk","Butter"];
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("Butter"));




// 03 Add and Remove

var object = ["Pen","Book","Lamp"];

object.unshift("Chair");
// console.log(object);

object.pop(object);
// console.log(object);

object.push("Laptop");
// console.log(object);

object.shift(object);
// console.log(object);




// 04 Order

var number = [4,10,8,12,6];

// console.log(number.reverse());
// console.log(number.sort((a,b) => a - b));


// 05 Boucle

var total = 0;
var limit = 10;

for (i = 0; i <= limit; i += 1) {
    total = total + i ;
    // console.log(i + " total = " + total);
}


// 06 Sentence

var sentence = "Hello Konexio !";
var tabSentence = sentence.split("");
var tabReverse = [];
for (var i = tabSentence.length; i >= 0 ; i --) {
    tabReverse.push(tabSentence[i])
}
// console.log(tabReverse.join(" "));


//  Bonus 1


//  Bonus 2


//  Bonus 3



