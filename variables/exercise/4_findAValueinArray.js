// Consider you have a array of integers, and you want to check if a particular number is present in the array, if present print the index of the element
// if not found print "element not found"

 var list = [10, 20, 30, 40 ,50]

 x= 30;

// expected output : display is "Element found at 1"



// var list = [10, 20, 30, 40 ,50]
// var x = 90
// expected output : display is "element not found1"


switch (x){
    case list[0]:
        
        console.log("The index number is 0");
        break;
    case list[1]:
        
        console.log("The index number is 1");
        break;
    case list[2]:
       
        console.log("The index number is 2");
        break;
    case list[3]:
        
        console.log("The index number is 3");
        break;
    case list[4]:
        
        console.log("The index number is 4");
        break;

    default: 
    console.log("Element not found");
    break;
        
}