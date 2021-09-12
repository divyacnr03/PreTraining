// Write a code to split the array into 2 based on the paramter passed
// Dont write it as function, just a simple code

// [10,20,86,42,68,94,56]

var inputArray = [10,20,86,42,68,94,56];
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


// j = 3
// outArray2[0] = inputArray[3]

console.log(outArray1) //[10,20,86];
console.log(outArray2)  //[42,68,94,56];

















