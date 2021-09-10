// Implement the function that returns the same value as || operator without using && operator 
// (CLUE : using nested if conditions ie if inside another if condition)
function orOperator(x, y){
    if (x == null)
    {
        x=0;
    }
    if (y == null)
    {
        y=0;
    }
    
    if (x == 0){
        if(y == 0){
            console.log("False")
        }
        else {
            console.log("True")
        }
    }
    else {
        console.log("True")
    }
}

// Sample function : orOperator(0, 1)
// Expected return value : true
orOperator(0, 1);

// Sample function : orOperator(1, 1)
// Expected return value : true
orOperator(1, 1);

// Sample function : orOperator(0, 0)
// Expected return value : false
orOperator(0, 0);

// Sample function : orOperator(null, 1)
// Expected return value : true
orOperator(null, 1);