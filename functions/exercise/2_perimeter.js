// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

var length = 6;
var width = 7;

function findPerimeter(length, width){
    return (length + width) * 2
}

var perimeter = findPerimeter(6, 7);
console.log(perimeter)

var perimeter = findPerimeter(20, 10);
console.log(perimeter)

var perimeter = findPerimeter(2, 9);
console.log(perimeter)

