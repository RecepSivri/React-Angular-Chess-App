export class BishopService{

  bishopMarkArea(piece,stack,table)
  {

    var x=piece.x;
    var y=piece.y;
    stack.push(piece);
    table[y][x].selected=true;
    var i=x-1;
    var j=y-1;
    while(i>=0&&j>=0&&table[j][i].piece[0]==='s')
    {
      table[j][i].selected=true;
      --i;
      --j;
    }
    if(i>=0&&j>=0&&table[j][i].piece[0]==='w')
      table[j][i].selected=true;
     i=x+1;
     j=y-1;
    while(i<8&&j>=0&&table[j][i].piece[0]==='s')
    {
      table[j][i].selected=true;
      ++i;
      --j;
    }
    if(i<8&&j>=0&&table[j][i].piece[0]==='w')
      table[j][i].selected=true;

    i=x-1;
    j=y+1;
    while(i>=0&&j<8&&table[j][i].piece[0]==='s')
    {
      table[j][i].selected=true;
      --i;
      ++j;
    }
    if(i>=0&&j<8&&table[j][i].piece[0]==='w')
      table[j][i].selected=true;
    i=x+1;
    j=y+1;
    while(i<8&&j<8&&table[j][i].piece[0]==='s')
    {
      table[j][i].selected=true;
      ++i;
      ++j;
    }
    if(i<8&&j<8&&table[j][i].piece[0]==='w')
      table[j][i].selected=true;
  }

   bishopMove(stack,table) {


    var currCoor = stack.pop();
    var oldCoor = stack.pop();

    var x1 = currCoor.x;
    var y1 = currCoor.y;

    var x2 = oldCoor.x;
    var y2 = oldCoor.y;


    var i;
    var j
    if(x1<x2 && y1<y2)
    {
      i=x1+1;
      j=y1+1;
      while(i<x2&&j<y2&&table[j][i].piece[0]==='s')
      {
        ++j;
        ++i;
      }
      if(i==x2&&j==y2)
      {

        table[currCoor.y][currCoor.x].piece='bishop';
        table[oldCoor.y][oldCoor.x].piece='space';
      }
    }

    if(x1>x2 && y1>y2)
    {
      i=x1-1;
      j=y1-1;
      while(i>x2&&j>y2&&table[j][i].piece[0]==='s')
      {
        --j;
        --i;
      }
      if(i==x2&&j==y2)
      {

        table[currCoor.y][currCoor.x].piece='bishop';
        table[oldCoor.y][oldCoor.x].piece='space';
      }
    }
    if(x1<x2 && y1>y2)
    {
      i=x1+1;
      j=y1-1;
      while(i<x2&&j>y2&&table[j][i].piece[0]==='s')
      {
        --j;
        ++i;
      }
      if(i==x2&&j==y2)
      {

        table[currCoor.y][currCoor.x].piece='bishop';
        table[oldCoor.y][oldCoor.x].piece='space';
      }
    }
    if(x1>x2 && y1<y2)
    {
      i=x1-1;
      j=y1+1;
      while(i>x2&&j<y2&&table[j][i].piece[0]==='s')
      {
        ++j;
        --i;
      }
      if(i==x2&&j==y2)
      {

        table[currCoor.y][currCoor.x].piece='bishop';
        table[oldCoor.y][oldCoor.x].piece='space';
      }
    }

  }

}
