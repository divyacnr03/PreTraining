// Write a JavaScript function that accepts 2 parameters and returns a sum of the 2 parameter if they are number and concate them is they are strings
// Sample function : sum(10, 20)
// Expected return value : 30



// Sample function : sum('sweta', 'patel')
// Expected return value : swetapatel



// Sample function : sum(10, 'sweta')
// Expected return value : 10sweta

function sum(x,y){
    return x + y
}

var addition = sum (10, 20);
console.log(addition);

var addition = sum ('sweta', 'patel');
console.log(addition);

var addition = sum (10, 'sweta');
console.log(addition);

