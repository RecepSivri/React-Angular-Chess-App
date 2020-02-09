
function rookMarkArea(x,y,stack,table)
{
    var point = {X:x, Y:y};
    stack.push(point);
    table[y][x].inputStyle={
        width: "75px",
        height: "75px",
        border: "1px solid green"
    }

    var k=y-1;
    while(k>=0&&table[k][x].piece.charAt(0)==='')
    {
        table[k][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        --k;
    }
    if(k>=0&&table[k][x].piece.charAt(0)!==''&&table[k][x].piece.charAt(0)!=='w')
        table[k][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }

    var l=x-1;
    while(l>=0&&table[y][l].piece.charAt(0)==='')
    {
        table[y][l].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        --l;
    }
    if(l>=0&&table[y][l].piece.charAt(0)!==''&&table[y][l].piece.charAt(0)!=='w')
        table[y][l].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }

    var j=x+1;
    while(j<8&&table[y][j].piece.charAt(0)==='')
    {
        table[y][j].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        ++j;
    }
    if(j<8&&table[y][j].piece.charAt(0)!==''&&table[y][j].piece.charAt(0)!=='w')
        table[y][j].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }

    var i=y+1;
    while(i<8&&table[i][x].piece.charAt(0)==='')
    {
        table[i][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }
        ++i;
    }
    if(i<7&&table[i][x].piece.charAt(0)!==''&&table[i][x].piece.charAt(0)!=='w')
        table[i][x].inputStyle={
            width: "75px",
            height: "75px",
            border: "1px solid green"
        }

}
function rookMove(stack,table)
{
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    if(currCoor.X===oldCoor.X)
    {
        if(currCoor.Y<oldCoor.Y)
        {
            var i=currCoor.Y+1;
            while(i<oldCoor.Y&&table[i][currCoor.X].piece.charAt(0)==='')
                ++i;
            if(i===oldCoor.Y)
            {
                if(oldCoor.Y&&table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].piece = 'wrook';
                    table[oldCoor.Y][oldCoor.X].piece='';
                }
            }
        }
        if(currCoor.Y>oldCoor.Y)
        {
            var i=oldCoor.Y+1;
            while(i<currCoor.Y&&table[i][currCoor.X].piece.charAt(0)==='')
                ++i;
            if(i===currCoor.Y)
            {
                if(currCoor.Y&&table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].piece = 'wrook';
                    table[oldCoor.Y][oldCoor.X].piece='';
                }
            }
        }
    }

    if(currCoor.Y===oldCoor.Y)
    {
        if(currCoor.X<oldCoor.X)
        {
            var i=currCoor.X+1;
            while(i<oldCoor.X&&table[currCoor.Y][i].piece.charAt(0)==='')
                ++i;
            if(i===oldCoor.X)
            {
                if(oldCoor.X&&table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].piece = 'wrook';
                    table[oldCoor.Y][oldCoor.X].piece='';
                }
            }
        }
        if(currCoor.X>oldCoor.X)
        {
            var i=oldCoor.X+1;
            while(i<currCoor.X&&table[currCoor.Y][i].piece.charAt(0)==='')
                ++i;
            if(i===currCoor.X)
            {
                if(currCoor.X&&table[currCoor.Y][currCoor.X].piece.charAt(0)!=='w')
                {
                    table[currCoor.Y][currCoor.X].piece = 'wrook';
                    table[oldCoor.Y][oldCoor.X].piece='';
                }
            }
        }
    }

}

exports.rookMarkArea = rookMarkArea;
exports.rookMove = rookMove;
