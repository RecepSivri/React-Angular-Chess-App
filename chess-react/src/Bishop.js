function bishopMarkArea(x,y,stack,table)
{

    var point = {X:x, Y:y};
    stack.push(point);
    table[y][x].inputStyle={
        width: "75px",
        height: "75px",
        border: "1px solid green"
    }
    var i=x-1;
    var j=y-1;
    while(i>=0&&j>=0&&table[j][i].piece.charAt(0)==='')
    {
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        --i;
        --j;
    }
    if(i>=0&&j>=0&&table[j][i].piece.charAt(0)!=='w'&&table[j][i].piece.charAt(0)!=='')
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    var i=x+1;
    var j=y-1;
    while(i<8&&j>=0&&table[j][i].piece.charAt(0)==='')
    {
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        ++i;
        --j;
    }
    if(i<8&&j>=0&&table[j][i].piece.charAt(0)!=='w'&&table[j][i].piece.charAt(0)!=='')
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    var i=x-1;
    var j=y+1;
    while(i>=0&&j<8&&table[j][i].piece.charAt(0)==='')
    {
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        --i;
        ++j;
    }
    if(i>=0&&j<8&&table[j][i].piece.charAt(0)!=='w'&&table[j][i].piece.charAt(0)!=='')
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
    var i=x+1;
    var j=y+1;
    while(i<8&&j<8&&table[j][i].piece.charAt(0)==='')
    {
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        ++i;
        ++j;
    }
    if(i<8&&j<8&&table[j][i].piece.charAt(0)!=='w'&&table[j][i].piece.charAt(0)!=='')
        table[j][i].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
}
function bishopMove(stack,table) {
    var currCoor = stack.pop();
    var oldCoor = stack.pop();

    var x1 = currCoor.X;
    var y1 = currCoor.Y;

    var x2 = oldCoor.X;
    var y2 = oldCoor.Y;


    var i;
    var j
    if(x1<x2 && y1<y2)
    {
        i=x1+1;
        j=y1+1;
        while(i<x2&&j<y2&&table[j][i].piece.charAt(0)==='')
        {
            ++j;
            ++i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].piece = 'wbishop';
            table[oldCoor.Y][oldCoor.X].piece='';
        }
    }

    if(x1>x2 && y1>y2)
    {
        i=x1-1;
        j=y1-1;
        while(i>x2&&j>y2&&table[j][i].piece.charAt(0)==='')
        {
            --j;
            --i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].piece = 'wbishop';
            table[oldCoor.Y][oldCoor.X].piece='';
        }
    }
    if(x1<x2 && y1>y2)
    {
        i=x1+1;
        j=y1-1;
        while(i<x2&&j>y2&&table[j][i].piece.charAt(0)==='')
        {
            --j;
            ++i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].piece = 'wbishop';
            table[oldCoor.Y][oldCoor.X].piece='';
        }
    }
    if(x1>x2 && y1<y2)
    {
        i=x1-1;
        j=y1+1;
        while(i>x2&&j<y2&&table[j][i].piece.charAt(0)==='')
        {
            ++j;
            --i;
        }
        if(i==x2&&j==y2)
        {

            table[currCoor.Y][currCoor.X].piece = 'wbishop';
            table[oldCoor.Y][oldCoor.X].piece='';
        }
    }

}
exports.bishopMarkArea = bishopMarkArea;
exports.bishopMove = bishopMove;
