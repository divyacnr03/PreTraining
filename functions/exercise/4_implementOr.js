// Implement the function that returns the same value as || operator without using && operator 
// (CLUE : using nested if conditions ie if inside another if condition)
// Sample function : orOperator(0, 1)
// Expected return value : true


// Sample function : orOperator(1, 1)
// Expected return value : true


// Sample function : orOperator(0, 0)
// Expected return value : false


// Sample function : orOperator(null, 1)
// Expected return value : true

function orOperator(x,y)
{
var x;
var y;

    if(x == 0){
        if(y == 1){
            console.log("True")
        }
    }

    if(x == 1){
        if(y == 0){
            console.log("True")
        }
    }

    if(x == 1){
        if(y == 1){
            console.log("True")
        }
    }
    if(x == 0){
        if(y == 0){
            console.log("False")
        }
    }
    if(x == null){
        if(y == 1){
            console.log("True")
        }
    }
    if(x == 1){
        if(y == null){
            console.log("True")
        }
    }
}
console.log(orOperator(null,1));