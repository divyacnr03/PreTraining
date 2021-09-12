// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected return value : "United States of America"



function longestCountryName(inputArray){
    var largestWord = inputArray[0];
    var lengthOfLargestWord = inputArray[0].length;

    for( var i = 1; i < inputArray.length; i++){
        if( lengthOfLargestWord < inputArray[i].length ){
            lengthOfLargestWord = inputArray[i].length ;
            largestWord = inputArray[i];
        }

    }

    return largestWord;
}


// var i = 1 ; largestWord = Australia, lengthOfLargestWord = 9
// if( 9 < 7)
// var i = 2 ; largestWord = Australia, lengthOfLargestWord = 9
// if( 9 < 24)
// largestWord = United States of America, lengthOfLargestWord = 24
// if( 24 < 5)







console.log(longestCountryName(["Australia", "Germany", "United States of America","India"]))  // "United States of America"