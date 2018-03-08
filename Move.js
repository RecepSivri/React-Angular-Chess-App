function move(stackflag,stack,table,clickedButton,y, x) {

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
    var flag=0;
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

        if(piece==="wpawn") {
            flag=1;

            stackflag.push(flag);
            pawnMarkArea(x,y,stack,table)
        }
        if(piece==="wrook") {
            flag=2;
            stackflag.push(flag);
            rookMarkArea(x,y,stack,table)
        }

    }

    if(stack.length===2)
    {
        var a=stackflag.pop()
        if(a===1)
            pawnMove(stack,table)
        if(a===2)
            rookMove(stack,table)
    }


}