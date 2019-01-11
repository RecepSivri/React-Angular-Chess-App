export class RookService{

  rookMarkArea(piece,stack,table)
  {
    stack.push(piece);
    var x=piece.x;
    var y=piece.y;
    table[y][x].selected=true;

    var k=y-1;
    while(k>=0&&table[k][x].piece[0].charAt(0)==='s')
    {
      table[k][x].selected=true;
      --k;
    }
    if(k>=0&&table[k][x].piece[0]!=='s'&&table[k][x].piece[0]==='w')
      table[k][x].selected=true;

    var l=x-1;
    while(l>=0&&table[y][l].piece[0]==='s')
    {
      table[y][l].selected=true;
      --l;
    }
    if(l>=0&&table[y][l].piece[0]!=='s'&&table[y][l].piece[0]==='w')
      table[y][l].selected=true;

    var j=x+1;
    while(j<8&&table[y][j].piece[0]==='s')
    {
      table[y][j].selected=true;
      ++j;
    }
    if(j<8&&table[y][j].piece[0]!=='s'&&table[y][j].piece[0]==='w')
      table[y][j].selected=true;

    var i=y+1;
    while(i<8&&table[i][x].piece[0]==='s')
    {
      table[i][x].selected=true;
      ++i;
    }
    if(i<7&&table[i][x].piece[0]!=='s'&&table[i][x].piece[0]==='w')
      table[i][x].selected=true;
  }

  rookMove(stack,table)
  {
    console.log("asdsa")
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    if(currCoor.x===oldCoor.x)
    {
      if(currCoor.y<oldCoor.y)
      {
        var i=currCoor.y+1;
        while(i<oldCoor.y&&table[i][currCoor.x].piece[0]==='s')
          ++i;
        if(i===oldCoor.y)
        {
          if(oldCoor.y&&(table[currCoor.y][currCoor.x].piece[0]==='w'||table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='rook';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }
      if(currCoor.y>oldCoor.y)
      {
        var i=oldCoor.y+1;
        while(i<currCoor.y&&table[i][currCoor.x].piece[0]==='s')
          ++i;
        if(i===currCoor.y)
        {
          if(currCoor.y&&(table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='rook';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }
    }

    if(currCoor.y===oldCoor.y)
    {
      if(currCoor.x<oldCoor.x)
      {
        var i=currCoor.x+1;
        while(i<oldCoor.x&&table[currCoor.y][i].piece[0]==='s')
          ++i;
        if(i===oldCoor.x)
        {
          if(oldCoor.x&&(table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='rook';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }
      if(currCoor.x>oldCoor.x)
      {
        var i=oldCoor.x+1;
        while(i<currCoor.x&&table[currCoor.y][i].piece[0]==='s')
          ++i;
        if(i===currCoor.x)
        {
          if(currCoor.x&&(table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='rook';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }
    }

  }
}
