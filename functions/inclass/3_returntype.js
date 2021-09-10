//Syntax to return a value

// Print the simple interest of
// when principal = 100
// rate of interst = 10%
//  term is 1 year
// For the same Principal, what would be the simple insterst if rate of interest increased by 1 % and term increased by 2 year

var principal = 100;
var interest = 10;
var term = 1;

function calculateSimpleInterest(principal, interest, term){

    return principal * interest * term;

}



// console.log("the SI is ", calculateSimpleInterest(principal, interest, term))


// interest = interest + 1;
// term = term + 2;

// console.log("the SI is ", calculateSimpleInterest(principal, interest, term))



// assigning the return value to a variable


var si1 = calculateSimpleInterest(principal, interest, term);


interest = interest + 1;
term = term + 2;

var si2 = calculateSimpleInterest(principal, interest, term);

console.log(si1, si2)




// using the return value in a statment


