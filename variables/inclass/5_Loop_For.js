
// Declare and assigned  array scores of test
var scores = [-10, -20, 30, 40, 50];
var countOfNegative = 0;


// Print how many negative are there in my array 
// expected output is 2

for(var i = 0 ; i < 5; i = i + 1) {
  // do something
  if (scores [i] < 0 ) {
      countOfNegative = countOfNegative + 1;
  }
}


console.log(countOfNegative)

// -------------------------------------------- -------------------------------------------- 

// Declare and assigned  array scores of test
var scores = [-10, -20, 30, 40, 50];




// Print the array in reverse order 
// expected output is   [ 50, 40 , 30, -20 ,-10]

for(var i = 4; i >=0 ; i--) {
  // do something
  console.log(scores[i])
}

// var i = 4;
// if( i >= 0 ) {
//     console.log(scores[i])
//     i = 3;
// } 
// if( i >=0 ) {
//     console.log(scores[i])
//     i = 2;
// }
// if( i >=0 ) {
//     console.log(scores[i])
//     i = 1;
// }
// if( i >=0 ) {
//     console.log(scores[i])
//     i = 0;
// }




// -------------------------------------------- -------------------------------------------- 

// Declare and assigned  array scores of test
var scores = [-10, -20, 30, 40, 50];
var reverseArray = [];



// assign the value of  the array in reverse order into reverseArray
// expected output is   [ 50, 40 , 30, -20 ,-10]

for(var i = 4; i >=0 ; i--) {
  // do something
  reverseArray[4-i] = scores[i]
}

console.log(reverseArray)