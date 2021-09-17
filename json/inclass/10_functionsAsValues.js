
// Simple function


// var student = {
//     name: "vinay",
//     id: 300,
//     printDetails: function ({ name, id }) {
//         console.log("the student details", name, id)
//     }
// }


// student.printDetails(student)







// Calculator


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


// calculator.sum(calculator)
// calculator.subtract(calculator)
// calculator.multiply(calculator)
// calculator.divide(calculator)

var userInput =  'sum';   // sum, subtract, mulpiply, divide




// if(userInput == 'sum'){
// 	calculator.sum(calculator);
// } else if(userInput == 'subtract'){
// 	calculator.subtract(calculator);
// }else if(userInput == 'multiply'){
// 	calculator.multiply(calculator);
// }else {
// 	calculator.divide(calculator);
// }


calculator[userInput](calculator);










