function move(stack,table,clickedButton,y, x) {

    for(var i=0;i<8;++i)
    {
        for(var j=0;j<8;++j)
        {
            if((i+j)%2==0)
                table[i][j].style="background:#969696;height:75px;width:75px";
            else
                table[i][j].style="height:75px;width:75px"
        }

    }

    if(stack.length===1)
    {
        var clicked2=clickedButton.innerHTML.toString().split("//")[1];
        if(clicked2!==undefined&&clicked2.split(".")[0].charAt(0)==='w')
        {
            stack.pop();
        }
        else
        {
            var point2 = {X:x, Y:y};
            stack.push(point2);
        }


    }
    var clicked=clickedButton.innerHTML.toString().split("//")[1];
    if(clicked!==undefined)
    {
        var piece=clicked.split(".")[0];

        if(piece==="wpawn")
        {
            var point = {X:x, Y:y};
            stack.push(point);
            var orthogonalRight=table[y-1][x+1].innerHTML.toString().split("//")[1];
            var orthogonalLeft=table[y-1][x-1].innerHTML.toString().split("//")[1];
            var up=table[y-1][x].innerHTML.toString().split("//")[1];
            if(orthogonalRight!==undefined&&orthogonalRight.split(".")[0].charAt(0)!=='w'&&orthogonalRight.split(".")[0].charAt(0)!=='e')
            {
                table[y-1][x+1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
            }
            if(orthogonalLeft!==undefined&&orthogonalLeft.split(".")[0].charAt(0)!=='w'&&orthogonalLeft.split(".")[0].charAt(0)!=='e')
            {
                table[y-1][x-1].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
            }

            if(y===6)
            {
                table[y][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
                table[y-1][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
                table[y-2][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
            }
            else
            {
                if(up!==undefined&&up.split(".")[0].charAt(0)!=='w'&&up.split(".")[0].charAt(0)!=='e')
                {
                    //table[y-1][x].style="height:75px;width:75px;";
                }
                else
                if(y-1>=0)
                {
                    table[y][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
                    table[y-1][x].style="height:75px;width:75px;border-color:blue;borderwidth:6px";
                }
            }


        }

    }

    if(stack.length===2)
    {
        var currCoor=stack.pop();
        var oldCoor=stack.pop();
        var clickedMove=table[oldCoor.Y][oldCoor.X].innerHTML.toString().split("//")[1];
        if(clickedMove!==undefined)
        {
            var pieceMove = clickedMove.split(".")[0];
            if(pieceMove==="wpawn")
            {
                if(oldCoor.Y==6&&currCoor.Y==4&&oldCoor.X==currCoor.X)
                {
                    table[oldCoor.Y][oldCoor.X].style="height:75px;width:75px;";
                    table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
                    table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//wpawn.png" style="height:35px;width:35px"/>';
                }
                else
                {
                    if(oldCoor.Y-currCoor.Y==1&&oldCoor.X-currCoor.X==1)
                    {
                        var orthogonalLeft=table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1];
                        if(orthogonalLeft!==undefined&&orthogonalLeft.split(".")[0].charAt(0)!=='w'&&orthogonalLeft.split(".")[0].charAt(0)!=='e')
                        {
                            table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//wpawn.png" style="height:35px;width:35px"/>';
                            table[oldCoor.Y][oldCoor.X].innerHTML = '<img src="img//empty.png" style="height:35px;width:35px"/>';
                        }
                    }
                    if(oldCoor.Y-currCoor.Y==1&&oldCoor.X-currCoor.X==-1)
                    {
                        var orthogonalRight=table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1];
                        if(orthogonalRight!==undefined&&orthogonalRight.split(".")[0].charAt(0)!=='w'&&orthogonalRight.split(".")[0].charAt(0)!=='e')
                        {
                            table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//wpawn.png" style="height:35px;width:35px"/>';
                            table[oldCoor.Y][oldCoor.X].innerHTML = '<img src="img//empty.png" style="height:35px;width:35px"/>';
                        }
                    }

                    if(oldCoor.Y-currCoor.Y==1&&oldCoor.X==currCoor.X)
                    {
                        var up=table[currCoor.Y][currCoor.X].innerHTML.toString().split("//")[1];
                        if(!(up!==undefined&&up.split(".")[0].charAt(0)!=='w'&&up.split(".")[0].charAt(0)!=='e'))
                        {
                            table[oldCoor.Y][oldCoor.X].style="height:75px;width:75px;";
                            table[oldCoor.Y][oldCoor.X].innerHTML='<img src="img//empty.png" style="height:35px;width:35px"/>';
                            table[currCoor.Y][currCoor.X].innerHTML = '<img src="img//wpawn.png" style="height:35px;width:35px"/>';
                        }

                    }
                }

            }

        }


    }


}