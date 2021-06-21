//  01

var cat ={
    name: "Garfield",
    age: 3,
    isCute: true,
}

// console.log(cat);
// console.log(cat.age);
// console.log(cat["age"]);

if (cat.isCute){
    // console.log("So, cuute !");
}

// 02

var cat2 ={
    name: "Lilou",
    age: 1,
    isCute: false,
};

var cats = [cat, cat2];

// console.log(cats[0].age);
// console.log(cats[0]["age"]);

// console.log(cats[1].isCute);
var cequetuveux = "isCute"
cat2.isCute = true;
// console.log(cats[1][cequetuveux]);


// 03

function checkIfEven(num, message){
    if (num % 2 === 0){
        console.log(message)
    } else {
        console.log("odd")
    }
}

// checkIfEven(6 ,"j'ai reussis")

// 04

function compare(num1, num2){
    if ( num1 > num2 ) {
       console.log("num1 is bigger")
    } else if (num1 < num2 ){
        console.log("num2 is bigger")
    } else {
        console.log("both are the same !")
    }
}

// compare(6,3)
// compare(6,6)
// compare(4,8)

// 05



function addUp(num){
    var total = 0;

    for(var i = 1; i <= num; i++){
        total = total + i;
    }

    return total;
}

var x = addUp(12);
// console.log(`le total est ${x}`)

