function pawnMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    if(y-1>=0&&y+1<=7&&x-1>=0&&x+1<=7)
    {
        var orthogonalRight=table[y-1][x+1].piece;
        var orthogonalLeft=table[y-1][x-1].piece;
        var up=table[y-1][x].piece;
        if(orthogonalRight!==undefined&&orthogonalRight.charAt(0)!=='w'&&orthogonalRight.charAt(0)!=='')
        {
            table[y-1][x+1].inputStyle={
                width: "75px",
                height: "75px",
                border: "1px solid green"
            }
        }
        if(orthogonalLeft!==undefined&&orthogonalLeft.charAt(0)!=='w'&&orthogonalLeft.charAt(0)!=='')
        {
            table[y-1][x-1].inputStyle={
                width: "75px",
                height: "75px",
                border: "1px solid green"
            }
        }

        table[y][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }

    if(y===6)
    {
        table[y][x].inputStyle = {
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        table[y-1][x].inputStyle = {
            width: "75px",
            height: "75px",
            border: "1px solid green"

        }
        table[y-2][x].inputStyle = {
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    else
    {
        if(up!==undefined&&up.charAt(0)!=='w'&&up.charAt(0)!=='')
        {
            //table[y-1][x].style="height:75px;width:75px;";
        }
        else
        if(y-1>=0)
        {
            table[y][x].inputStyle = {
                width: "75px",
                height: "75px",
                border: "1px solid green"
            }
            table[y-1][x].inputStyle = {
                width: "75px",
                height: "75px",
                border: "1px solid green"
            }
        }
    }


}

function pawnMove(stack,table) {
    var currCoor = stack.pop();
    var oldCoor = stack.pop();
    var clickedMove = table[oldCoor.Y][oldCoor.X].piece
    if (clickedMove !== undefined) {
        var pieceMove = clickedMove;
        if (pieceMove === "wpawn") {
            if (oldCoor.Y == 6 && currCoor.Y == 4 && oldCoor.X == currCoor.X) {
                table[oldCoor.Y][oldCoor.X].inputStyle = {
                    width: "75px",
                    height: "75px"
                }
                table[oldCoor.Y][oldCoor.X].piece = "";
                table[currCoor.Y][currCoor.X].piece = "wpawn";
            } else {
                if (oldCoor.Y - currCoor.Y == 1 && oldCoor.X - currCoor.X == 1) {
                    var orthogonalLeft = table[currCoor.Y][currCoor.X].piece;
                    if (orthogonalLeft !== undefined && orthogonalLeft.charAt(0) !== 'w' && orthogonalLeft.charAt(0) !== '') {
                        table[currCoor.Y][currCoor.X].piece = 'wpawn';
                        table[oldCoor.Y][oldCoor.X].piece = '';
                    }
                }
                if (oldCoor.Y - currCoor.Y == 1 && oldCoor.X - currCoor.X == -1) {
                    var orthogonalRight = table[currCoor.Y][currCoor.X].piece
                    if (orthogonalRight !== undefined && orthogonalRight.charAt(0) !== 'w' && orthogonalRight.charAt(0) !== '') {
                        table[currCoor.Y][currCoor.X].piece = 'wpawn';
                        table[oldCoor.Y][oldCoor.X].piece = '';
                    }
                }

                if (oldCoor.Y - currCoor.Y == 1 && oldCoor.X == currCoor.X) {
                    var up = table[currCoor.Y][currCoor.X].piece;
                    if (!(up !== undefined && up.split(".")[0].charAt(0) !== 'w' && up.split(".")[0].charAt(0) !== '')) {
                        table[oldCoor.Y][oldCoor.X].inputStyle = {
                            width: "75px",
                            height: "75px"
                        }
                        table[oldCoor.Y][oldCoor.X].piece = '';
                        table[currCoor.Y][currCoor.X].piece = 'wpawn';
                    }

                }
            }

        }

    }
}
exports.pawnMarkArea = pawnMarkArea;
exports.pawnMove = pawnMove;
