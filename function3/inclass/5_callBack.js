// var print = function (a,b,c){
//     console.log("the input is",a);
//     console.log("the input is ",b);
//     console.log("The result is ",c);

// }

// var add = function (a,b){
//     var result  = a + b;
//     print(a,b,result)

// }

// var sub = function (a,b){
//     var result  = a - b;
//     print(a,b,result)

// }


// var mul = function (a,b){
//     var result  = a * b;

//     print(a,b,result)

// }

// var div = function (a,b){
//     var result  = a / b;
//     print(a,b,result)

// }

// add(1,2);
// sub(3,4);
// mul(4,5);
// div(6,3)

// simple example of callback


// var printsTring = function (result){
    
//     console.log("The strings are concatenated to  ",result)
// }

// var printSum = function (result){
//     console.log("The interges are added and the sum is ",result)

// }


// var sum = function (a, b, callback){
//     var result  = a + b;
//     callback(result);
// }   


// sum (10, 20, printSum); // The interges are added and the sum is 30
// sum( "ronak", "patel", printsTring) // The strings are concatenated to ronak patel



// var informIndianGotv = function (employeeName){
//         console.log("Hey India we onboarded ",employeeName)
// }

// var informCanadaGotv = function (employeeName){
//     console.log("Hey canada we onboarded ",employeeName)
// }


// var onboardNewEmployee = function(employeeName, callback){
//     // add the=at employee info db
//     // created id card

//     callback(employeeName)
    
// }




// var informIndianGotv = function (employeeName){
//         console.log("Hey India we onboarded ",employeeName)
// }

// var informCanadaGotv = function (employeeName){
//     console.log("Hey canada we onboarded ",employeeName)
    
// }


// var onboardNewEmployee = function(employeeName, callback){
//     // add the=at employee info db
//     // created id card
//     var y = employeeName;
//     var x = callback;
//     x();
//     callback(employeeName)
// }


// onboardNewEmployee("sweta", informCanadaGotv)

// onboardNewEmployee("mukesh", informIndianGotv)



// // example bank payments in the online order


// royalBankPayment(){
//     console.log("debitting Money from royalBank")
// }

// sbi(){
//     console.log("debitting Money from sbi")
// }


// function amazonOrderPlaed(){
//     console.log("Amazon order placed")
// }

// var uberCabBooked = function(){
//     console.log("uberCabBooked")
// }

// var x = "uberCabBooked";


// // amazon
// royalBankPayment(amazonOrderPlaed)
// // order succeful page


// // uber
// sbi()
// // cab is booked succeful page

// // etsy
// royalBankPayment()
// // order is placed


// // amazon   -- Royal Banks, SBI


// // uber -- Royal Banks, SBI


// // etsy  -- Royal Banks, SBI

















// inbuilt example - setTimeout

console.log("Before timeout")

var something = function (){
    console.log("something")
}

setTimeout( something , 10000)





