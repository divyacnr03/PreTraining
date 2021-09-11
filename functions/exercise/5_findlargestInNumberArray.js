// Write a JavaScript function that accept a array of numbers and returns the largest number in the array
// Sample function : findLargestNumber([5, 6, 12, 35, -12])
// Expected return value : 35


// Sample function : findLargestNumber([5])
// Expected return value : 5


// Sample function : findLargestNumber([])
// Expected return value : null

var number = [5, 6, 12, 35, -12]
function findLargestNumber([number]){
    for(var i = 0; i<5 ; i++){
        if(number[i]<number[i++]){
            console.log(number[i++])
        }else{
            console.log(number[i]);
        }
    }
}
console.log(findLargestNumber[5, 6, 12, 35, -12]);