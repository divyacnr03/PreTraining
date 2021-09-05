// Given a varible firstName, lastName
// if firstName = vinay then lastName = 'Shah'
// if firstName = vatsal then lastName = 'Patel'
// if firstName = Gagan then lastName = 'Thakkar'
// if firstName = Ronak then lastName = 'Patel'
// if firstName = sweta then lastName = 'Patel'


var firstname = 'sweta'
var lastName;



// Syntax
// switch (variblename) {
//     case "option1" : do soemthing
//     break;
//     case "option1" : do soemthing
//     break;
//     case "option1" : do soemthing
//     break;
//     case "option1" : do soemthing
//     break;
//     default : do soemthing
//     break;
// }


// switch (firstname) {
//         case "vinay" : lastName = 'Shah'
//         break;
//         case "vatsal" : lastName = 'Patel'
//         break;
//         case "Ronak" : lastName = 'Patel'
//         break;
//         case "sweta" : lastName = 'Patel'
//         break;
//         default : lastName = 'Thakkar'
//         break;
//     }

// -------------------------------------------- -------------------------------------------- 
// Another way of using switch statment

switch (firstname) {
    case "vinay" : lastName = 'Shah'
                    break;
    case "vatsal" : 
    case "Ronak" : 
    case "sweta" : lastName = 'Patel'
                    break;
    default : lastName = 'Thakkar'
                    break;
}


//  if(firstname == 'vinay' ) {
//     lastName = 'Shah'
//  }  else if() {

//  }
    
console.log(lastName)
