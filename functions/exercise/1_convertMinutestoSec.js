// Write a JavaScript function that accepts no of minutes as parameters and prints the no od seconds in the munites
// Sample function : convertMinuteToSeconds(10)
// Expected return value : The number of seconds is 600


var minutes = 10
function convertMinuteToSeconds(minutes){
     return minutes * 60
}

var minutesToSeconds = convertMinuteToSeconds(10);
console.log("The number of seconds is", minutesToSeconds)

