// Write a JavaScript function that accept a array of numbers and returns the largest number in the array
// Sample function : findLargestNumber([5, 6, 12, 35, -12])
// Expected return value : 35


// Sample function : findLargestNumber([5])
// Expected return value : 5


// Sample function : findLargestNumber([])
// Expected return value : null


function findLargestNumber(array) {
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 0) {
    return null;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return array[i];
    }
  }
}

console.log(findLargestNumber([5, 6, 12, 35, -12]));
console.log(findLargestNumber([5]));
console.log(findLargestNumber([]));