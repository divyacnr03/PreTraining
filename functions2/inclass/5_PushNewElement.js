// Push a new element to an exisitng array


var inputArray = [10, 20, 86, 42, 68, 94, 56];
var elementTobeAdded = 100;


var lengthOfInputArray = inputArray.length;
inputArray[lengthOfInputArray] = elementTobeAdded;




// console.log(inputArray) //[10,20,86,42,68,94,56,100];



// create a function  pushArray to  a new element to an exisitng array


var inputArray = [10, 20, 86, 42, 68, 94, 56];
var elementTobeAdded = 100;


function push(input, array) {
    // var lengthOfInputArray = array.length ;
    // array[lengthOfInputArray] = input;
    // return array;

    var result = [];
    // for (var i = 0; i < array.length; i++) {
    //     result[i] = array[i];
    //     if (i === array.length - 1) {
    //         result[i+1] = input;
    //     }
    // }
    var i = 0;
    while (i < array.length) {
        result[i] = array[i];
        if (i === array.length - 1) {
            result[i + 1] = input;
        }
        i++;
    } return result;
}


console.log(push(elementTobeAdded, inputArray)) //[10,20,86,42,68,94,56,100];