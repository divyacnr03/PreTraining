// // Declaring varibles inside a function

// var principal = 100;
// var interest = 10;
// var term = 1;

// function calculateSimpleInterest(principal, interest, term){
//     var simpleInterest ;

//     simpleInterest = principal * interest * term
//     return simpleInterest;

// }

// var si1 = calculateSimpleInterest(principal, interest, term);
// console.log(si1)




// function printHelloWorld(){
//     console.log("Hello world !!!"); 
   
// }

// function printName(name){
//     console.log("My name is " + name); 
   
// }


// // Syntax of function invocation
// printHelloWorld();
// printName("vinay");
// printHelloWorld();
// printName("ronak");
// printHelloWorld();





// loops inside a function
// print Hello world 5 times

// function printHellowWorld(){
//     for( var i =0; i < 5; i++){
//         console.log("hello world")
//     }
// }

// printHellowWorld();





// loops inside a function
// print Hello world 5 times
// print -----------
// print Hello world 3 times

// function printHellowWorld(index){
//     for( var i =0; i < index; i++){
//         console.log("hello world")
//     }
// }

// printHellowWorld(5);
// console.log("---------------")
// printHellowWorld(3);



// write a fucntion to add 2 number
function add(x, y){
    var z ;
    z = x + y;
    // console.log("the sum is ",z)
    return z;
}


var summ = add(10,5);
console.log("the sum is ",summ)