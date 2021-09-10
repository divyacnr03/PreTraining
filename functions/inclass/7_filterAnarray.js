
// Sending array as a parameter
// Given a array of numbers, return a another array which contains only even numbers from original array
// Sample function : filerEvenNumbers([1, 23, 4, 6, 7])
// Expected return value : [4,6]

// function filterEvenNumbers(inputArray) {
//     var result = [];
//     var j = 0;
//     for (var i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] % 2 == 0) {
//             result[j] = inputArray[i];
//             j++;
//         }
//     }
//     return result;
// }


function filterEvenNumbers(array) {
    var result = [];
    var j = 0 ;
    for (var i = 0; i < array.length; i++) {
        if( array[i] % 2 === 0){
            result[j] = array[i];
            j++;
        }

    }


    return result;

}



var output1 = filterEvenNumbers([1, 23, 4, 6, 7])
var output2 = filterEvenNumbers([12, 23, 41, 615, 72, 46, 14])

console.log(output1) // [4,6]
console.log(output2) // [12, 72, 46, 14]




