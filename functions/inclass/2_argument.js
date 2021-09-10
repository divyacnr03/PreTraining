// Expected output
// Print the simple interest of
// when principal = 100
// rate of interst = 10%
//  term is 1 year
// For the same Principal, what would be the simple insterst if rate of interest increased by 1 % and term increased by 2 year

var principal = 100;
var interest = 10;
var term = 1;

function calculateSimpleInterest(principal, interest, term){

        console.log( "SI is ",principal * interest * term)

}


// function calculateSimpleInterest(p, i, t){

//     console.log( "SI is ",p * i * t)

// }

calculateSimpleInterest(interest , principal, term);
calculateSimpleInterest(100, 20, 1);


interest = interest + 1;
term = term + 2;

calculateSimpleInterest(principal, interest, term);


