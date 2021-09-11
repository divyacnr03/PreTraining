// Write a JavaScript function that accept a array of numbers and returns the largest number in the array
// Sample function : findLargestNumber([5, 6, 12, 35, -12])
// Expected return value : 35


// Sample function : findLargestNumber([5])
// Expected return value : 5


// Sample function : findLargestNumber([])
// Expected return value : null

function findLargestNumber(array){
    var result=[];
    var largestNum = null;

    for(var i =0;i< array.length;i++)
    {
        for(var j=0;j< array.length;j++)
        {
            if(array[i]>array[j])
            {
                largestNum = array[i];
            }    
        }
    }

    if (array.length === 1) {
        largestNum = array[0];
    }

    return largestNum;
}


console.log(findLargestNumber([5, 6, 12, 35, -12]))

console.log(findLargestNumber([5]))

console.log(findLargestNumber([]))




