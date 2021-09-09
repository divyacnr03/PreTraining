// // && ||

var isFlagTrue = true;
var isFlagFalse = false; 



    //  a    b    &&   ||
    //  1    0    0    1
    //  0    1    0    1
    //  1    1    1    1
    //  0    0    0    0

// if(isFlagTrue && isFlagFalse) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }



// if(isFlagTrue || isFlagFalse) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }



// var a = 10;
// var b = 20; 


// if( a < 20 && b > 100) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }



// if( a < 20 || b > 100) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }




// if( a < 20 || b > 100 || 20 < 200 ) {   
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }



// if( a < 20 && b > 100 && 20 < 200 ) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }


// if( a < 20 &&  b > 100 || a < b ) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }


var inputArray ;

if( inputArray)
console.log(inputArray.length);

var i=0;


if( inputArray){
    while ( i < inputArray.length ){
        console.log(inputArray[i]);
    }
}


while (inputArray  && i < inputArray.length ){
    console.log(inputArray[i]);
}