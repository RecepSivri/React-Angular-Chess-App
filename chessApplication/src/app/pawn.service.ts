import {Injectable} from "@angular/core";
import {PieceService} from "./piece.service";

@Injectable()
export class PawnService{

  constructor(private pieceService: PieceService){}
  pawnMarkArea(piece,stack,table)
  {

    var x=piece.x;
    var y=piece.y;
    stack.push(piece);

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

  pawnMove(stack,table)
  {
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    if(currCoor.piece[0]=='w')
      this.pieceService.piecesLosed.next(currCoor.piece);
      var pieceMove = table[oldCoor.y][oldCoor.x].piece;
      if(pieceMove==="pawn")
      {

        if(oldCoor.y==6&&currCoor.y==4&&oldCoor.x==currCoor.x)
        {
          table[oldCoor.y][oldCoor.x].piece='space';
          table[currCoor.y][currCoor.x].piece = 'pawn';
        }
        else
        {
          if(oldCoor.y-currCoor.y==1&&oldCoor.x-currCoor.x==1)
          {
            var orthogonalLeft=table[currCoor.y][currCoor.y];
            if(orthogonalLeft!==undefined&&orthogonalLeft.piece[0]==='w')
            {
              table[currCoor.y][currCoor.x].piece = 'pawn';
              table[oldCoor.y][oldCoor.x].piece = 'space';
            }
          }
          if(oldCoor.y-currCoor.y==1&&oldCoor.x-currCoor.x==-1)
          {
            var orthogonalRight=table[currCoor.y][currCoor.x];
            if(orthogonalRight!==undefined&&orthogonalRight.piece[0]==='w')
            {
              table[currCoor.y][currCoor.x].piece = 'pawn';
              table[oldCoor.y][oldCoor.x].piece = 'space';
            }
          }

          if(oldCoor.y-currCoor.y==1&&oldCoor.x==currCoor.x)
          {
            var up=table[currCoor.y][currCoor.x];
            if((up.piece[0]==='w' || up.piece[0]==='s'))
            {
              table[oldCoor.y][oldCoor.x].piece='space';
              table[currCoor.y][currCoor.x].piece = 'pawn';
            }

          }
        }

      }

    }



}
