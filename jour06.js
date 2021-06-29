// 01 Format



function formatDate(string){
   var date = `${new Date(string).getDate()}/${new Date(string).getMonth() +1}/${new Date(string).getFullYear()}`;
   if ((new Date(string).getMonth()+1) < 10){
        date = `${new Date(string).getDate()}/0${(new Date(string).getMonth()+1)}/${new Date(string).getFullYear()}`;

   } if (new Date(string).getDate() < 10){
    date = `0${new Date(string).getDate()}/${new Date(string).getMonth() +1}/${new Date(string).getFullYear()}`;
    }
        return date;
} 

console.log(formatDate("2000-10-03"));


// 02 Age

function formatYears(string){
    var year = new Date().getFullYear() - (new Date(string).getFullYear());
        if (new Date().getMonth() < new Date(string).getMonth()){
            year = year - 1;
        }
         return year;
 } 

 console.log(formatYears("1993-10-13"));


//  03 Validator


let prompt = require("prompt");

var properties = [
  {
    name: "username",
    validator: /^[a-zA-Z0-9\s\-]+$/,
    warning: "Le username ne doit contenir que des lettres, espaces et tirets"
  },
  {
    name: "password",
    length: 6,
    // hidden: true ,
    validator: /^[a-zA-Z0-9\s\-]+$/,
    warning: "Le password ne doit contenir que des lettres, espaces et tirets"
 },
{
    name: "E-mail",
    validator: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,

}
];

prompt.start(); 

function onErr(err) {
  console.log(err);
  return 1;
}

prompt.get(properties, function (err, res) {
  if (err) {
		return onErr(err);
	}

  console.log("Données reçues :");
  console.log("=> Username : " + res.username);
  console.log("=> Password : " + res.password);
});

var regex = /[a-z0-9-]/g ;


