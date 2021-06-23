// 01 Sum

let numbers =[];

for(var i = 1; i <= 50; i++){
    var randomNumber = Math.round(Math.random() * 100);
    numbers.push(randomNumber);
} 

let totalNumbers = 0;
for (var i = 0; i < numbers.length; i++){
     totalNumbers = totalNumbers + numbers[i] ;
}
// console.log(totalNumbers);

// 02 Max

let numbers2 =[];
let max = 0;
for(var i = 1; i <= 50; i++){
    var randomNumber = Math.round(Math.random() * (200 - 50) + 50);
    numbers2.push(randomNumber);
} 
for(var i = 0; i <= numbers2.length ; i++){
    if (numbers2[i] > max){
        max = numbers2[i];
    } 
    
}

// console.log(numbers2);
// console.log(max);
// console.log(numbers2[1]);
// console.log(numbers2[(0+1)]);
numbers2.slice(1);
numbers2.slice(1);
// console.log(numbers2.slice((0+1)));
// console.log(numbers2[1]);

// console.log(numbers2[1+1])


// 03 Unique

let numbers3 =[];
let min2 = 75;
let max2 = 100;
let final = 0;
for(var i = 1; i <= 50; i++){
    var randomNumber = Math.round(Math.random() * (200 - 50) + 50);
    numbers3.push(randomNumber);
} 
for(var i = 0; i <= numbers3.length ; i++){
    if (numbers3[i] >= min2 && numbers3[i] <= max2){
        final = numbers3[i];
        break;
    } 
    
}

// console.log(numbers3);
// console.log(final)

// 04 Nested Loop

let words =["hello", "goodbye", "yes", "no", "stop", "go go go"];
console.log(words);

for(var i = 0; i <= words.length; i++){
    var words2 = words[i].split(words.length);
    console.log(words2);
}