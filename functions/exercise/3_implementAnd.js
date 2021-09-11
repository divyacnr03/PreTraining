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


function andOperator(a,b){
    if(a === 0){
        if(b === 1){
           return false; 
        } else if(b===0){
            return false;
        } else {
            return false;
        }
    }
    if(a===1){
        if(b===1){
            return true;
        } else if(b===0){
            return false;
        } else{
            return true;
        }
    }
 return false
}


console.log(andOperator(0,1));
console.log(andOperator(1,1));
console.log(andOperator(0,0));
console.log(andOperator(null,1));