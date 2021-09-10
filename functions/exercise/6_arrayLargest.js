// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function Longest_Country_Name(inputArray){
    var largest = " ";
    for(i=0; i<inputArray.length; i++)
    {
        if (inputArray[i].length > largest.length)
        {
            largest=inputArray[i];
        }
    }
    console.log(largest);
}

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected return value : "United States of America"
Longest_Country_Name(["Australia", "Germany", "United States of America"]);