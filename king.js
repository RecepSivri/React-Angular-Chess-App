function kingMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    table[y][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y-1>=0&&x-1>=0&&table[y-1][x-1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y-1][x-1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(y+1<8&&x+1<8&&table[y+1][x+1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y+1][x+1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(y+1<8&&table[y+1][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y+1][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(y-1>=0&&table[y-1][x].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y-1][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(y-1>=0&&x+1<8&&table[y-1][x+1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y-1][x+1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(x+1<8&&table[y][x+1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y][x+1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(x-1>=0&&table[y][x-1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y][x-1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }
    if(y-1>=0&&x-1>=0&&table[y-1][x-1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[y-1][x-1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    }


}
function kingMove(stack,table)
{
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    var distance=(currCoor.X-oldCoor.X)*(currCoor.X-oldCoor.X)+(currCoor.Y-oldCoor.Y)*(currCoor.Y-oldCoor.Y)
    if(distance<=2&&table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//wking.png" style="height:35px;width:35px"/>';
    }
}