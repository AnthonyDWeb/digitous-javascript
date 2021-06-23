
// 03 Separate Table

function multiply(num) {
    var result;
    for (var i = 1; i <= 10; i++) {
        result = num * i;
        
        console.log(`${num} x ${i} = ${result}`);
    }
}


function addition(num) {
    var result;
    for (var i = 0; i <= 10; i++) {
        result = num + i;
        console.log(`${num} + ${i} = ${result}`);

    }
}

module.exports = {
    addition,
    multiply,
};