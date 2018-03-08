function bishopMarkArea(x,y,stack,table)
{

    var point = {X:x, Y:y};
    stack.push(point);
    table[y][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x-1;
    var j=y-1;
    while(i>=0&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        --i;
        --j;
    }
    if(i>=0&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x+1;
    var j=y-1;
    while(i<8&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        ++i;
        --j;
    }
    if(i<8&&j>=0&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x-1;
    var j=y+1;
    while(i>=0&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        --i;
        ++j;
    }
    if(i>=0&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    var i=x+1;
    var j=y+1;
    while(i<8&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
    {
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
        ++i;
        ++j;
    }
    if(i<8&&j<8&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w'&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='e')
        table[j][i].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
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
            while(i<x2&&j<y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
            {
                ++j;
                ++i;
            }
            if(i==x2&&j==y2)
            {

                table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wbishop.png" style="height:35px;width:35px"/>';
                table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
            }
        }

        if(x1>x2 && y1>y2)
        {
            i=x1-1;
            j=y1-1;
            while(i>x2&&j>y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
            {
                --j;
                --i;
            }
            if(i==x2&&j==y2)
            {

                table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wbishop.png" style="height:35px;width:35px"/>';
                table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
            }
        }
        if(x1<x2 && y1>y2)
        {
            i=x1+1;
            j=y1-1;
            while(i<x2&&j>y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
            {
                --j;
                ++i;
            }
            if(i==x2&&j==y2)
            {

                table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wbishop.png" style="height:35px;width:35px"/>';
                table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
            }
        }
        if(x1>x2 && y1<y2)
        {
            i=x1-1;
            j=y1+1;
            while(i>x2&&j<y2&&table[j][i].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)==='e')
            {
                ++j;
                --i;
            }
            if(i==x2&&j==y2)
            {

                table[currCoor.Y][currCoor.X].innerHTML='<img src="img//wbishop.png" style="height:35px;width:35px"/>';
                table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
            }
        }

}