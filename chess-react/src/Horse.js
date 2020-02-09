function horseMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    if(y-2>=0 && x+1<8 && table[y-2][x+1].piece.charAt(0)!=='w')
        table[y-2][x+1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y-1>=0 && x+2<8 && table[y-1][x+2].piece.charAt(0)!=='w')
        table[y-1][x+2].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y+1<8 && x+2<8 && table[y+1][x+2].piece.charAt(0)!=='w')
        table[y+1][x+2].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y+2<8 && x+1<8 && table[y+2][x+1].piece.charAt(0)!=='w')
        table[y+2][x+1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y+2<8 && x-1>=0 && table[y+2][x-1].piece.charAt(0)!=='w')
        table[y+2][x-1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y+1<8 && x-2>=0 && table[y+1][x-2].piece.charAt(0)!=='w')
        table[y+1][x-2].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y-1>=0 && x-2>=0 && table[y-1][x-2].piece.charAt(0)!=='w')
        table[y-1][x-2].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    if(y-2>=0 && x-1>=0 && table[y-2][x-1].piece.charAt(0)!=='w')
        table[y-2][x-1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }

}
function horseMove(stack,table)
{
    var currCoor=stack.pop();
    var oldCoor=stack.pop();
    if(oldCoor.Y-2===currCoor.Y && oldCoor.X+1===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }

    if(oldCoor.Y-1===currCoor.Y && oldCoor.X+2===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }
    if(oldCoor.Y+1===currCoor.Y && oldCoor.X+2===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }
    if(oldCoor.Y+2===currCoor.Y && oldCoor.X+1===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }
    if(oldCoor.Y+2===currCoor.Y && oldCoor.X-1===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }
    if(oldCoor.Y+1===currCoor.Y && oldCoor.X-2===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }
    if(oldCoor.Y-1===currCoor.Y && oldCoor.X-2===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }
    if(oldCoor.Y-2===currCoor.Y && oldCoor.X-1===currCoor.X&& table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece = ''
        table[currCoor.Y][currCoor.X].piece = 'whorse'
    }

}

exports.horseMarkArea = horseMarkArea;
exports.horseMove = horseMove;
