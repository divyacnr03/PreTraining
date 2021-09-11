// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected return value : "United States of America"

function Longest_Country_Name(array){
    var result;
    for(var i=0; i<array.length; i++)
        {
            for(var j=0; j<array.length; j++)
            {
                if(array[i].length>array[j].length)
                {
                    result = array[i]
                }
            }
        }
        return result;
}

var longestName = Longest_Country_Name(["Australia", "Germany", "United States of America"]);
console.log(longestName);




