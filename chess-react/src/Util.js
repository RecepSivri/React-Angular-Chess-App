var pawnMarkArea = require('./Pawn.js').pawnMarkArea;
var pawnMove = require('./Pawn.js').pawnMove;
var queenMarkArea = require('./Queen.js').queenMarkArea;
var queenMove = require('./Queen.js').queenMove;
var horseMarkArea = require('./Horse.js').horseMarkArea;
var horseMove = require('./Horse.js').horseMove;
var rookMarkArea = require('./Rook.js').rookMarkArea;
var rookMove = require('./Rook.js').rookMove;
var bishopMarkArea = require('./Bishop.js').bishopMarkArea;
var bishopMove = require('./Bishop.js').bishopMove;
var kingMarkArea = require('./King.js').kingMarkArea;
var kingMove = require('./King.js').kingMove;
function move(y, x,table,stack,stackFlag) {


    for(let i = 0; i< 8; ++i){
        for(let j = 0; j< 8; ++j){
            table[i][j].inputStyle={
                width: "75px",
                height: "75px"
            }
        }
    }


    var flag=0;
    if(stack.length===1)
    {
        var clicked2=table[y][x].piece;
        if(clicked2!==undefined&&clicked2.charAt(0)==='w')
        {
            stack.pop();
        }
        else
        {
            var point2 = {X:x, Y:y};
            stack.push(point2);
        }


    }
    var clicked=table[y][x].piece;
    if(clicked!==undefined)
    {
        var piece=clicked.split(".")[0];

        if(piece==="wpawn") {
            flag=1;

            stackFlag.push(flag);
            pawnMarkArea(x,y,stack,table)
        }
        if(piece==="wrook") {
            flag=2;
            stackFlag.push(flag);
            rookMarkArea(x,y,stack,table)
        }
        if(piece==="whorse") {
            flag=3;
            stackFlag.push(flag);
            horseMarkArea(x,y,stack,table)
        }
        if(piece==="wbishop") {
            flag=4;
            stackFlag.push(flag);
            bishopMarkArea(x,y,stack,table)
        }
        if(piece==="wqueen") {
            flag=5;
            stackFlag.push(flag);
            queenMarkArea(x,y,stack,table)
        }
        if(piece==="wking") {
            flag=6;
            stackFlag.push(flag);
            kingMarkArea(x,y,stack,table)
        }


    }

    if(stack.length===2)
    {
        var a= stackFlag.pop()
        if(a===1)
            pawnMove(stack,table)
        if(a===2)
            rookMove(stack,table)
        if(a===3)
            horseMove(stack,table)
        if(a===4)
            bishopMove(stack,table)
        if(a===5)
            queenMove(stack,table)
        if(a===6)
            kingMove(stack,table)

    }

}

exports.move = move;
