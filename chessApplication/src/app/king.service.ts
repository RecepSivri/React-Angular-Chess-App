import {Injectable} from "@angular/core";
import {PieceService} from "./piece.service";

@Injectable()

export class KingService{

  constructor(private pieceService: PieceService){}

  kingMarkArea(piece,stack,table)
  {
    stack.push(piece);
    var x=piece.x;
    var y=piece.y;
    table[y][x].selected=true;

    if(y-1>=0&&x-1>=0&&(table[y-1][x-1].piece[0]==='w' || table[y-1][x-1].piece[0]==='s'))
    {
      table[y-1][x-1].selected=true;
    }
    if(y+1<8&&x+1<8&&(table[y+1][x+1].piece[0]==='w'||table[y+1][x+1].piece[0]==='s'))
    {
      table[y+1][x+1].selected=true;
    }
    if(y+1<8&&(table[y+1][x].piece[0]==='w'||table[y+1][x].piece[0]==='s'))
    {
      table[y+1][x].selected=true;
    }
    if(y-1>=0&&(table[y-1][x].piece[0]==='w'||table[y-1][x].piece[0]==='s'))
    {
      table[y-1][x].selected=true;
    }
    if(y-1>=0&&x+1<8&&(table[y-1][x+1].piece[0]==='w'||table[y-1][x+1].piece[0]==='s'))
    {
      table[y-1][x+1].selected=true;
    }
    if(x+1<8&&(table[y][x+1].piece[0]==='w'||table[y][x+1].piece[0]==='s'))
    {
      table[y][x+1].selected=true;
    }
    if(x-1>=0&&(table[y][x-1].piece[0]==='w'||table[y][x-1].piece[0]==='s'))
    {
      table[y][x-1].selected=true;
    }
    if(y+1<8&&x-1>=0&&(table[y+1][x-1].piece[0]==='w' || table[y+1][x-1].piece[0]==='s'))
    {
      table[y+1][x-1].selected=true;
    }

  }

  kingMove(stack,table)
  {
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    if(currCoor.piece[0]=='w')
      this.pieceService.piecesLosed.next(currCoor.piece);

    var distance=(currCoor.x-oldCoor.x)*(currCoor.x-oldCoor.x)+(currCoor.y-oldCoor.y)*(currCoor.y-oldCoor.y)
    if(distance<=2&&(table[currCoor.y][currCoor.x].piece[0]==='w'||table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'king';
    }
  }

}
