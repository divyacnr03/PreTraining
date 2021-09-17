// Parsing a JSON Literal
// var student = {
//     name : "vinay",
//     id: 300
//   }

// console.log(typeof (student));
// var stringStudent = JSON.stringify(student)
// console.log(stringStudent)
// console.log( typeof stringStudent)
// // {"name":"vinay","id":300}



// Stringyfy a JSON
 var stringStudent = '{"name":"vinay","id":300}';


console.log( typeof stringStudent)

var studentJson = JSON.parse(stringStudent)
console.log(typeof (studentJson));





