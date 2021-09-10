
// Write a function formateDate that receives dd, mm, yy/yyyy , formate as paramter, and returns the date formated based on format

// Sample function : formateDate(12, 01, 20, 'dd-mm-yy')
// Expected return value : 12-01-20


// Sample function : formateDate(12, 01, 20, 'mm-dd-yy')
// Expected return value : 01-12-20


function formateDate(dd , mm, yy, formate){
    var result;
    if( formate === 'dd-mm-yy'){
        result = dd + '-' + mm + '-' + yy;
    } else {
        result = mm + '-' + dd + '-' + yy;
    }
    return result;
}



var date1 =  formateDate(12, 01, 20, 'dd-mm-yy')
var date2 =  formateDate(12, 01, 20, 'mm-dd-yy')

console.log(date1) // 12-01-20
console.log(date2) // 01-12-20



// function formateDate(dd , mm, yy, formate){

//     if( formate === 'dd-mm-yy'){
//         return dd + '-' + mm + '-' + yy;
//     } else {
//         return mm + '-' + dd + '-' + yy;
//     }
// }

// function formateDate(dd , mm, yy, formate){
//     return formate === 'dd-mm-yy' ?  dd + '-' + mm + '-' + yy :  mm + '-' + dd + '-' + yy;
    
// }