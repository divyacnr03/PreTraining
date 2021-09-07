// Consider you have a array of integers, and you want to check if a particular number is present in the array, if present print the index of the element
// if not found print "element not found"

// var list = [10, 20, 30, 40 ,50]
// var x = 20
// expected output : display is "Element found at 1"


// var list = [10, 20, 30, 40, 50]
// var x = 20

for (var i = 0; i <= list.length; i++) {
    if (list[i] == x) {
        console.log(list[i]);
        console.log("Element found at " + i);
    }
}


// var list = [10, 20, 30, 40 ,50]
// var x = 90
// expected output : display is "element not found1"

var list = [10, 20, 30, 40, 50]
var x = 90

for (var i = 0; i <= list.length; i++) {
    if (list[i] == x) {
        console.log(list[i]);
        console.log("Element not found");
    }
    console.log("Element not found");

}