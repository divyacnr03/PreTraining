// Write a JavaScript function that accept a array of numbers and returns the largest number in the array
function findLargestNumber(inputArray){
    var largest = 0;
    if(inputArray[0] == undefined){
        largest=null;
    }
    for(i=0; i<inputArray.length; i++){
        if(inputArray[i] > largest){
            largest = inputArray[i];
        }
    }
    console.log(largest);
}

// Sample function : findLargestNumber([5, 6, 12, 35, -12])
// Expected return value : 35
findLargestNumber([5, 6, 12, 35, -12]);

// Sample function : findLargestNumber([5])
// Expected return value : 5
findLargestNumber([5]);

// Sample function : findLargestNumber([])
// Expected return value : null
findLargestNumber([]);