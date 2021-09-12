// Given a array of numbers, return a another array indicating if the array element are even or odd
// Sample function : mapEvenOdd([1, 23, 4, 6, 7])
// Expected return value : ['odd', 'odd', 'even', 'even', 'odd ]



// function mapEvenOdd(inputArray){
//     if(i ==)
// }


// var result = mapEvenOdd([1, 23, 4, 6, 7]);

var inputArray = [1, 23, 4, 6, 7];
var outArray = [];


for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 == 0) {
        outArray[i] = 'even';
    } else {
        outArray[i] = 'odd';
    }

}


// i = 0
// j = 0
// outArray [j] = 'odd'
// i = 1
// j = 1
// outArray [j] = 'odd'
// i = 2
// j = 2
// outArray [j] = 'even'
// i = 3
// j = 3
// outArray [j] = 'even'


console.log(outArray) // ['odd', 'odd', 'even', 'even', 'odd ]