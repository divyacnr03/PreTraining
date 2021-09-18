//     1 2 3 4 5 6 7 8 -- x
// 1   _ _ _ _ _ _ _ _
// 2   _ _ _ _ _ _ _ _
// 3   _ _ _ _ _ _ _ _
// 4   _ _ _ _ _ _ _ _
// 5   _ _ _ _ _ _ _ _
// 6   _ _ _ _ _ _ _ _
// 7   _ _ _ _ _ _ _ _
// 8   _ _ _ _ _ _ _ _
// Y 



// X ; 7
// y : 2


// Moving the the queen
// 1) Queen can move horizaontally
// 2) Queen can move vertical


// 4) Queen's current location is representatd by x and y




// write 6 functions - moveRight, moveLeft, moveUp, moveDown

// write one function - isMovementAllowed()  to check if the movement is allowed
// For eg if x : 8 and y : 8 and now you invokde moveRight, then the queen wil out of the chessBoard, so this opertaion should not be possible
// "Operation not permitted"

// moveRight()
// Expected output is "Operation not permitted" and x : 8 and y : 8



var queen = {
    x : 8,
    y: 8,
    moveRight : function({x,y}){
        console.log("queen can move Right", x+1 , y)
    },
    moveLeft : function({x,y}){
        console.log("queen can move Left", x-1 , y)
    },
    moveUp : function({x,y}){
        console.log("queen can move Up", x, y-1)
    },
    moveDown : function({x,y}){
        console.log("queen can move Down", x, y+1)
    },
    isMovementAllowed : function({x,y}) {
        if( x === 8 && y === 8 ){
            return true
        }
        
    }
    // moveRight, moveLeft, moveUp, moveDown, isMovementAllowed

}


function playerTurn(move){
      if(move === 'moveRight' || move === 'moveDown'){
      if(queen.isMovementAllowed(queen) === true){
        console.log("Operation not permitted")
      }
    }    
      
      queen[move](queen)
      
}
    

playerTurn('moveRight')
playerTurn('moveLeft')
playerTurn('moveUp')
playerTurn('moveDown')