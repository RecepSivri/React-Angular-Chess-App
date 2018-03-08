function horseMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    if(y-2>=0 && x+1<8 && table[y-2][x+1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y-2][x+1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y-1>=0 && x+2<8 && table[y-1][x+2].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y-1][x+2].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y+1<8 && x+2<8 && table[y+1][x+2].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y+1][x+2].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y+2<8 && x+1<8 && table[y+2][x+1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y+2][x+1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y+2<8 && x-1>=0 && table[y+2][x-1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y+2][x-1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y+1<8 && x-2>=0 && table[y+1][x-2].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y+1][x-2].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y-1>=0 && x-2>=0 && table[y-1][x-2].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y-1][x-2].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
    if(y-2>=0 && x-1>=0 && table[y-2][x-1].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
        table[y-2][x-1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";

}
function horseMove(stack,table)
{
    var currCoor=stack.pop();
    var oldCoor=stack.pop();
    if(oldCoor.Y-2===currCoor.Y && oldCoor.X+1===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }

    if(oldCoor.Y-1===currCoor.Y && oldCoor.X+2===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }
    if(oldCoor.Y+1===currCoor.Y && oldCoor.X+2===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }
    if(oldCoor.Y+2===currCoor.Y && oldCoor.X+1===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }
    if(oldCoor.Y+2===currCoor.Y && oldCoor.X-1===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }
    if(oldCoor.Y+1===currCoor.Y && oldCoor.X-2===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }
    if(oldCoor.Y-1===currCoor.Y && oldCoor.X-2===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }
    if(oldCoor.Y-2===currCoor.Y && oldCoor.X-1===currCoor.X&& table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1].split(".")[0].charAt(0)!=='w')
    {
        table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
        table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//whorse.png" style="height:35px;width:35px"/>';
    }







}