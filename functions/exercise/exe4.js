function orOperator(x,y)
{
var x;
var y;

    if(x == 0){
        if(y == 1){
            console.log("True")
        }
    }

    if(x == 1){
        if(y == 0){
            console.log("True")
        }
    }

    if(x == 1){
        if(y == 1){
            console.log("True")
        }
    }
    if(x == 0){
        if(y == 0){
            console.log("False")
        }
    }
    if(x == null){
        if(y == 1){
            console.log("True")
        }
    }
    if(x == 1){
        if(y == null){
            console.log("True")
        }
    }
}
console.log(orOperator(null,1));