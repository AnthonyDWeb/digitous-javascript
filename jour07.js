// 01 - File System

var fs = require("fs");

fs.readFile("jour07.txt",function (err,data){
    if (err) {
        console.error(err);
        return;
     }
  
    //  console.log(data.toString());
  });

// 02 - Map Double

var mapArray = [1,2,3,4,5];
var mapDouble = mapArray.map(num => num*2);
// console.log(mapDouble)


// 03 - Map Name

var longName =[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
// console.log(longName.length);

var shortName = longName.map(function (name) {
	return  {
		name: name.firstName + " " + name.lastName
	}
});
// console.log(shortName);

// 04 - Filter Numbers

let tab = [1,"toto",34,"javascrupt",8];
let numbers = tab.filter(function (num){
	if (num % 2 === 0)
	return num 
});
console.log(numbers)

// 05 - Filter Even

var numbers2 = [1,2,3,4,5,6,7,8];
let even = numbers2.filter(num => num % 2 === 0)
// console.log(even)

// 06 - Cake

let cake = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

cake.filter(cake => cake.flavor === "chocolate").map(sold => sold.status = "sold out !");
console.log(cake)