// 01 - Countries

let countrieNames = [];
// console.log(countrieNames)
let axios = require("axios");

axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => {
        countrieNames = res.data.map(countrie => countrie.name)
        // console.log(countrieNames.join(" - "));
        
        // for (var i=0; i < res.data.length; i++){
        //     countrieNames.push(res.data[i].name);
        // } console.log(countrieNames);
    })


// 02 - Chuck Noris

// console.log(chuck)
function getFact(){
axios.get("https://api.chucknorris.io/jokes/random")
   .then(res => console.log(res.data.value));
    
}
// getFact();

// 03 - Pokemon
function catchPokemon(num){
   let pokemonId = "https://pokeapi.co/api/v2/pokemon/"+num;
axios.get(pokemonId)
.then(res => console.log(`id : ${num} \nname: ${res.data.name}`))
}
catchPokemon(151)