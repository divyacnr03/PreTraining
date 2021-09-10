// Implement the function that returns the same value as && operator without using && operator 
// (CLUE : using nested if conditions ie if inside another if condition)

function andOperator(x, y){
    if (x == null)
    {
        x=0;
    }
    
    if (x == 0){
        console.log("False")
    }
    else {
        if(y == 0){
            console.log("False")
        }
        else {
            console.log("True")
        }
    }
}

// Sample function : andOperator(0, 1)
// Expected return value : false
andOperator(0, 1);

// Sample function : andOperator(1, 1)
// Expected return value : true
andOperator(1, 1);

// Sample function : andOperator(0, 0)
// Expected return value : false
andOperator(0, 0);

// Sample function : andOperator(null, 1)
// Expected return value : false
andOperator(null, 1);