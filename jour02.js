// // 01 NUMBER

// var myNumber = 102;
// var myDecimalNumber =13.9;
// console.log( myNumber,"\n",myDecimalNumber);

// // 02 CONVERT
// var basic = 34;
// var stringified = basic.toString();
// console.log(stringified);
    
//     // 03 ROUND

// var num = 1.5; 
// var rounded1 = num.toFixed();
// var rounded2 = Math.round(num);
// console.log(rounded1);
// console.log(rounded2);

//     // 04 ARITHMETIQUE

// var test = 12;
// var bis = 5;
// console.log(test + bis)


// test *= 2;
// console.log(test + bis);

// bis += 5;
// console.log(test + bis);

// test = (bis + test) /2;
// console.log(test + bis);

// test -=10;
// console.log(test + bis);

// //  05 COMPARAISON

// test = 143;
// bis = 219;

// console.log(test < bis)
// console.log(test > bis)
// console.log(test === bis)
// console.log(test !== bis)

// //  06 CONDITION 1

// var limit = 50;
// var score = 64;
// let result;

// function resultGame() {
   
//     if ( score >= limit ) {
//         result = "Ok Good!";
//     } else { 
//         result = "Oh Noooh";
//     }
//     return result;
// }
// console.log(resultGame());

// score = 20;
// console.log(resultGame());

// // 07 CONDITION 2 

// var password = "azerty";
// let security;
// function securepassword() {

// if ( password.length > 5) {
//     security = "Password is secure !";
// } else {
//     security = "Password is not secure !";
// }
// return security;
// }
// console.log(securepassword())

// // 08 CONDITION 3


// // function condition(){
//     let testCondition;
//     if ( password.length > 5 && score >= limit  ){
//         testCondition = "Everything is GOOD !";
//     } else if ( password.length > 5 || score >= limit  ) {        
//         testCondition = "Something is GOOD !";
//     } else {
//         testCondition = "Nothing is GOOD !";
//     } 
// //     return testCondition;
// // }

// console.log(testCondition)

// //  BONUS 1

// var min = 1;
// var max = 6;
// var randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
// if (randomNumber === 6) {
//     console.log( randomNumber + " " + "Yes, I win !")
// } else {
//     console.log( randomNumber + " " + "So, cloose !")
// }

// //  BONUS 2

// var month = "January"

// // function season() {
//     switch(month){
//         case "December": 
//         case "January": 
//         case "February":
//         console.log("Winter");
//         break;

//         case "March" :
//         case "April": 
//         case  "May":
//         console.log("Spring");
//         break;

//         case "June" :
//         case  "July":
//         case  "August":
//         console.log("Summer");
//         break;

//         case "September": 
//         case  "October" :
//         case  "November":
//         console.log("Autumn");
//         break;

//         default:"Fall";
//     }
// }

// month = June


//  BONUS 3

var roundedNumber = 4.8;

if (roundedNumber - Math.floor(roundedNumber) > 0.5) {
    roundedNumber = Math.ceil(roundedNumber);
} else { roundedNumber = Math.floor(roundedNumber)

}
console.log(roundedNumber)


if (roundedNumber - ((roundedNumber.toString()).substring(0)) > 0.5) {
    roundedNumber = ((roundedNumber + 1).toString()).substring(0);
    console.log( roundedNumber)
} else { roundedNumber = (roundedNumber.toString()).substring(0);

}
console.log(roundedNumber)

// BONUS 4

