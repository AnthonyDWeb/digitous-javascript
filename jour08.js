// 01 - Countries

let countrieNames = [];
console.log(countrieNames)
let axios = require("axios");

axios.get("https://restcountries.eu/rest/v2/all").then(res => countrieNames=res.data[0].name);
console.log(countrieNames);

// 02 - Chuck Noris

// 0 - Pokemon