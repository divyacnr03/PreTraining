// Implement the function that returns the same value as && operator without using && operator 
// (CLUE : using nested if conditions ie if inside another if condition)
// Sample function : andOperator(0, 1)
// Expected return value : false


// Sample function : andOperator(1, 1)
// Expected return value : true


// Sample function : andOperator(0, 0)
// Expected return value : false


// Sample function : andOperator(null, 1)
// Expected return value : false


function andOperator(x,y)
{
var x;
var y;

    if(x == 0){
        if(y == 0){
            console.log("false")
        }
    }

    if(x == 0){
        if(y == 1){
            console.log("false")
        }
    }

    if(x == 1){
        if(y == 0){
            console.log("false")
        }
    }
    if(x == 1){
        if(y == 1){
            console.log("True")
        }
    }
    if(x == null){
        if(y == 1){
            console.log("false")
        }
    }
    if(x == 1){
        if(y == null){
            console.log("false")
        }
    }
}
console.log(andOperator(null,1));