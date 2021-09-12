// Write a code to reverse a array 

// reverseArray([10,20,86,42,68,94,56]) => [56, 94, 68, 42, 86, 20, 10]]

var input = [10,20,86,42,68,94,56];

// 7 
function reverseArray(array){
    var output = [];
    var j = 0 ;
//     for(var i = array.length-1 ; i >= 0; i--){ 
//     output[j] = array [i];
//     j++;
//     }
    var i = array.length-1;
    while(i >= 0){
    output[j] = array[i];
    j++;
    i--;  
}

return output;
}
// i = 6
// output[0] = input[6]
// i = 5
// output[1] = input[5]
// i = 4
// output[2] = input[4]
// i = 3
// output[3] = input[3]
// i = 2
// output[4] = input[2]
// i = 1
// output[5] = input[1]
// i =0
// output[6] = input[0]


console.log(reverse(input)) // [56, 94, 68, 42, 86, 20, 10]


// Try solving without using j

// var input = [10,20,86,42,68,94,56];


function reverse(array){

    var output = [];
    var j = 0 ;
    // for(var i = array.length-1 ; i >= 0; i--){ 
    //     output[j] = input [i];
    //     j++;
    //     // console.log(i)
    var i = array.length-1;
    while(i >= 0){
    output[j] = array[i];
    j++;
    i--;  
}

return output;
}


console.log(reverse(input))



