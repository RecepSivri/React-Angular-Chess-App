export class PawnService{

  pawnMarkArea(piece,stack,table)
  {
    var point = {X:piece.x, Y:piece.y};
    var x=piece.x;
    var y=piece.y;
    console.log(point)
    stack.push(point);
    if(y-1>=0&&y+1<=7&&x-1>=0&&x+1<=7)
    {
      var orthogonalRight=table[y-1][x+1].piece;
      var orthogonalLeft=table[y-1][x-1].piece;
      var up=table[y-1][x].piece;
      if(orthogonalRight!==undefined&&orthogonalRight[0]==='w'&&orthogonalRight[0].charAt(0)!=='s')
      {
        table[y-1][x+1].selected=true;
      }
      if(orthogonalLeft!==undefined&&orthogonalLeft.split(".")[0].charAt(0)==='w'&&orthogonalLeft.split(".")[0].charAt(0)!=='e')
      {
        table[y-1][x-1].selected=true;
      }
    }

    if(y===6)
    {
      table[y][x].selected=true;
      table[y-1][x].selected=true;
      table[y-2][x].selected=true;
    }
    else
    {
      if(up[0]==='w'&&up[0]!=='s')
      {
        //table[y-1][x].style="height:75px;width:75px;";
      }
      else
      if(y-1>=0)
      {
        table[y][x].selected=true;
        table[y-1][x].selected=true;
      }
    }

  }

}
