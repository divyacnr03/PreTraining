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



function orOperator(a,b){
    if(a === 0){
        if(b === 1){
           return true; 
        } else if(b===0){
            return false;
        } else {
            return true;
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
 return true
}


console.log(orOperator(0,1));
console.log(orOperator(1,1));
console.log(orOperator(0,0));
console.log(orOperator(null,1));