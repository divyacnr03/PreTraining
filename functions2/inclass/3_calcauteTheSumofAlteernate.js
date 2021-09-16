// Write a function to return the sum of only the alternate array elements
// var inputArray = [10,20,86,42,68,94,56];
// var sumOfOddIndexNumber = 0;

// for(var i = 1 ; i < inputArray.length; i = i + 2){
//     sumOfOddIndexNumber += inputArray[i]
// }

// // i = 1
// // sumOfOddIndexNumber = sumOfOddIndexNumber + inputArray[1]
// // inputArray[1] + inputArray[3] + inputArray[5]


// // console.log(sumOfOddIndexNumber)  // 20 + 42 + 94

var inputArray = [10,20,86,42,68,94,56];








// Write a function to return a array that increases teh value of every 3 element by 1
var inputArray = [10,20,86,42,68,94,56];
var outputArray = [];
var j =0;

for(var i = 2; i < inputArray.length; i = i+3){
     outputArray[j] = inputArray[i] + 1;
     j++;
}


// 2, 5, 8
// outputArray[0] = inputArray[2]
// outputArray[1] = inputArray[5]

// console.log(outputArray)  // [87, 95]





// Write a function to return a array that increases teh value of every 3 element by 1
var inputArray = [10,20,86,42,68,94,56];
var outputArray = [];
var j = 2;

// for(var i = 0;  i < inputArray.length ;  i++){
    
//     if(i == j){
//         outputArray[i] = inputArray[i] + 1;
//         j = j + 3;
//     } else {
//         outputArray[i] = inputArray[i];
//     }

// }


// for(var i = 0;  i < inputArray.length ;  i++){
    
//     if(i === 2 || i === 5 ){
//         outputArray[i] = inputArray[i] + 1;
//     } else {
//         outputArray[i] = inputArray[i];
//     }

// }

// i =0 ;
// outputArray[0] = inputArray[0]
// i =1 ;
// outputArray[1] = inputArray[1]
// i =2 ;
// outputArray[2] = inputArray[2] + 1
// i =3 ;
// outputArray[3] = inputArray[3]
// i =4 ;
// outputArray[4] = inputArray[4]
// i =5 ;
// outputArray[5] = inputArray[5] + 1



console.log(outputArray)  // [10,20,87,42,68,95,56];







