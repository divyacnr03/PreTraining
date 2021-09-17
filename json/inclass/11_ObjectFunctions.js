// Deleting kay value pair in JSON

var student = {
  name : "vinay",
  id: 300
}

delete student.name;

// syntax
// delete ObjectName.KeyName

console.log(student)











// property names


// var calculator = {
//     a : 10,
//     b : 20,
//     sum : function ({ a, b}) {
//         console.log(`sum of a and b is ${a+b}`)
//     },
//     subtract : function ({ a, b}) {
//         console.log(`Diff of a and b is ${a-b}`)
//     },
//     multiply : function ({ a, b}) {
//         console.log(`a * b is  ${a * b}`)
//     },
//     divide : function ({ a, b}) {
//         console.log(`a / b ${a / b}`)
//     },
// }

// // Object.keys(JsonName)

// Object.keys(calculator)
// console.log(Object.keys(calculator))




// Create array from Object

var calculator = {
    a : 10,
    b : 20,
    sum : function ({ a, b}) {
        console.log(`sum of a and b is ${a+b}`)
    },
    subtract : function ({ a, b}) {
        console.log(`Diff of a and b is ${a-b}`)
    },
    multiply : function ({ a, b}) {
        console.log(`a * b is  ${a * b}`)
    },
    divide : function ({ a, b}) {
        console.log(`a / b ${a / b}`)
    },
}

// Object.keys(JsonName)

var arrayOfCalc = Object.entries(calculator)
// console.log(Object.entries(calculator))
// [
//     [ 'a', 10 ],
//     [ 'b', 20 ],
//     [ 'sum', [Function: sum] ],
//     [ 'subtract', [Function: subtract] ],
//     [ 'multiply', [Function: multiply] ],
//     [ 'divide', [Function: divide] ]
// ]

console.log(arrayOfCalc[1][1])



