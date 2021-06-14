// 01 hello world

console.log("Hello World");

// 02 String

var test = "My name is Anthony";

console.log(test);

// 03 Concatenation

var name = "Anthony";

console.log("Nice to meet you" + " " + name);

// 04 String Length

var testlength = "I'm very long !";

console.log(testlength.length);

// 05 Replace

var food = "Croissant is meh";

console.log(food);

food = food.replace("meh","so good");

console.log(food);

//  06 Up and Down

var basic = "This is Cool";
var basicUp = basic.toLocaleUpperCase();
var basicDown = basic.toLocaleLowerCase();

console.log(basic, "\n", basicUp , "\n", basicDown);

// 07 Split

var word = "Banana";
var word2 = "is good";
var word3 = word + " " + word2;
var letter = word.split("");
var letter2 = word3.split(" ")

console.log(letter);
console.log(letter2);

// 08 Template

var age = 27;
var template = `I'm ${age} years old and I finish all the execices ! Now let's go with bonus`
;
console.log(template);

//  BONUS

    // part1
var sub1 = template.substr(0,15);
var sub2 = template.substr(15);
var sub3 = template.substring(3,19);
var sub4 = template.substring(19);


console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);

    // Part2

var changed = template
// var searching = "a"
var wanted = changed.replace(/a/g,"o");
wanted = wanted.replace(/e/g, "a")

console.log(wanted)
