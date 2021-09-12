// Push a new element to an exisitng array


var inputArray = [10,20,86,42,68,94,56];
var elementTobeAdded = 100;


var lengthOfInputArray = inputArray.length ;
inputArray[lengthOfInputArray] = elementTobeAdded;




// console.log(inputArray) //[10,20,86,42,68,94,56,100];



// create a function  pushArray to  a new element to an exisitng array


var inputArray = [10,20,86,42,68,94,56];
var elementTobeAdded = 100;


function push(input, array){
    var lengthOfInputArray = array.length ;
    array[lengthOfInputArray] = input;
    return array;
}


console.log(push(elementTobeAdded, inputArray)) //[10,20,86,42,68,94,56,100];