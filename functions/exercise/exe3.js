function andOperator(x,y)
{
var x;
var y;

    if(x == 0){
        if(y == 0){
            console.log("false")
        }
    }

    if(x == 0){
        if(y == 1){
            console.log("false")
        }
    }

    if(x == 1){
        if(y == 0){
            console.log("false")
        }
    }
    if(x == 1){
        if(y == 1){
            console.log("True")
        }
    }
    if(x == null){
        if(y == 1){
            console.log("false")
        }
    }
    if(x == 1){
        if(y == null){
            console.log("false")
        }
    }
}
console.log(andOperator(null,1));