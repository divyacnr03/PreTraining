var number = [5, 6, 12, 35, -12]
function findLargestNumber(number){
    var result = []

    for(var i = 0; i<5 ; i++){
        if(number[i]<number[i++]){
            result = (number[i++])
        }else{
            console.log(number[i]);
        }
    }
}
console.log(findLargestNumber[5, 6, 12, 35, -12]);