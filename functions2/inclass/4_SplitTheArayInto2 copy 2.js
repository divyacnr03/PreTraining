// Write a code to split the array into 2 based on the paramter passed
// Dont write it as function, just a simple code

// [10,20,86,42,68,94,56]

var inputArray = [10,20,86,42,68,94,56];
function result(array){
    var outArray1= [], outArray2 =[];
    var splitAt = 3;
    var k =0;
    for(var i= 0; i < splitAt; i++){
    outArray1[i] = inputArray[i]
    }

    for(var j= splitAt; j < inputArray.length; j++){
    outArray2[k] = inputArray[j];
    k++;
    }
    return outArray1;
    return outArray2;
}

// j = 3
// outArray2[0] = inputArray[3]

console.log(result([10,20,86,42,68,94,56])) //[10,20,86];
// console.log(result(array))  //[42,68,94,56];

















