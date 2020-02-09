function kingMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    table[y][x].inputStyle={
        width: "75px",
        height: "75px",
        border: "1px solid green"
    };
    if(y-1>=0&&x-1>=0&&table[y-1][x-1].piece.charAt(0)!=='w')
    {
        table[y-1][x-1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(y+1<8&&x+1<8&&table[y+1][x+1].piece.charAt(0)!=='w')
    {
        table[y+1][x+1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(y+1<8&&table[y+1][x].piece.charAt(0)!=='w')
    {
        table[y+1][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(y-1>=0&&table[y-1][x].piece.charAt(0)!=='w')
    {
        table[y-1][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(y-1>=0&&x+1<8&&table[y-1][x+1].piece.charAt(0)!=='w')
    {
        table[y-1][x+1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(x+1<8&&table[y][x+1].piece.charAt(0)!=='w')
    {
        table[y][x+1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(x-1>=0&&table[y][x-1].piece.charAt(0)!=='w')
    {
        table[y][x-1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }
    if(y-1>=0&&x-1>=0&&table[y-1][x-1].piece.charAt(0)!=='w')
    {
        table[y-1][x-1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }

    if(y+1<8&&x-1>=0&&table[y+1][x-1].piece.charAt(0)!=='w')
    {
        table[y+1][x-1].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    }


}
function kingMove(stack,table)
{
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    var distance=(currCoor.X-oldCoor.X)*(currCoor.X-oldCoor.X)+(currCoor.Y-oldCoor.Y)*(currCoor.Y-oldCoor.Y)
    if(distance<=2&&table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].piece='';
        table[currCoor.Y][currCoor.X].piece = 'wking';
    }
}

exports.kingMarkArea = kingMarkArea;
exports.kingMove = kingMove;
