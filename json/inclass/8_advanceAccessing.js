// // simple destructuring
// var student = {
//   name : "vinay",
//   id: 300
// }


// // var name = student.name;
// // var id = student.name;

// var { name, id} = student;

// console.log(name, id)


// // desturcting with a different name

// var student = {
//   name : "vinay",
//   id: 300
// }


// // var studentName = student.name;
// // var studentId = student.name;

// var { name : studentName, id: studentId} = student;

// console.log(studentName, studentId)



// // array
// var someArray = [10, 20];
// var [ a ,b ] = someArray;
// console.log(a,b)









// Sending Objects are function arguments

// var student = {
//   name : "vinay",
//   id: 300
// }


// function printStudentDetails (studentInfromation){
//   console.log("The student name is " + studentInfromation.name + " Id is " + studentInfromation.id)
//   console.log(`The student name is  ${studentInfromation.name}  Id is ${studentInfromation.id}`)
// }

// printStudentDetails(student)
// printStudentDetails({
//   name : "vinay",
//   id: 300
// })


// var soemthing = "something"
// console.log(`the value of  ${soemthing}  if printed`)


// destructuring can be (and often is) used directly for extracting parameters passed to a function.

var student = {
  name : "vinay",
  id: 300
}


function printStudentDetails ({ name , id }){
  console.log(`The student name is  ${name}  Id is ${id}`)
}

printStudentDetails(student)



