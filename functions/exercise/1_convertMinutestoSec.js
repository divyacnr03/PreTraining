// Write a JavaScript function that accepts no of minutes as parameters and prints the no od seconds in the munites
// Sample function : convertMinuteToSeconds(10)
// Expected return value : The number of seconds is 600
function minutesToSeconds(minutes){
    var seconds = minutes * 60;
    return seconds;

}

var inputMinutes = prompt("Enter minutes: ");
var result = minutesToSeconds(inputMinutes);
console.log(result);


