// Input : You have a array of integers, display sum of all the elements of the array

var inputArray = [10,20,30]
var sum = 0;

for(var i=0; i <= 2 ; i++) {
    sum = inputArray[i] + sum;
    

}

console.log("The sum is",sum);

// Expected Output:
// The sum is 60