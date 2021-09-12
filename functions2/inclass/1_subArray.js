// Write a code to create subarray from a array

// 0         1       2        3       4

// console.log(slice(animals,2));
// expected output: Array ["camel", "duck", "elephant"]

// console.log(slice(animals,2, 4));
// expected output: Array ["camel", "duck"]

// console.log(slice(animals,1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]





// for(var i=0; i< animals.length; i++){
//     if(i >= index){
//         result[j] = animals[i];
//         j++;
//     }

// }
// var i =0;
// if (i >= 2)
// var i =1;
// if (i >= 2)
// var i =2;
// if (i >= 2)
// result[0] = animals[2];
// var i =3;
// if (i >= 2)
// result[1] = animals[3];
// var i =4;
// if (i >= 2)
// result[2] = animals[4];






// -----------------------------------

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
function subArray(array, index, maxInteration) {
    var result = []; // Output array
    var j = 0;
    var max = maxInteration || array.length;
    // for (var i = index; i < max; i++) {
    //     result[j] = array[i];
    //     j++;
    // }
    var i = index;
    while (i < max) {
        result[j] = array[i];
        j++;
        i++;
    }
    return result;
}

// i= 2; j=0;
// result[0] = animals[2];
// i= 3; j=1;
// result[1] = animals[3];
// i= 4; j=2;
// result[4] = animals[2];


console.log(subArray(animals, 2, 4)) // ["camel", "duck", "elephant"]










