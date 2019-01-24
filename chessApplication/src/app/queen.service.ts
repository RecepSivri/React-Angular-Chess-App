
import {Injectable} from "@angular/core";
import {PieceService} from "./piece.service";

@Injectable()
export class QueenService{

  constructor(private pieceService: PieceService){}

  queenMarkArea(piece,stack,table)
  {
    stack.push(piece);
    var x=piece.x;
    var y=piece.y;
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





    var k=y-1;
    while(k>=0&&table[k][x].piece[0]==='s')
    {
      table[k][x].selected=true;
      --k;
    }
    if(k>=0&&table[k][x].piece[0]==='w')
      table[k][x].selected=true;

    var l=x-1;
    while(l>=0&&table[y][l].piece[0]==='s')
    {
      table[y][l].selected=true;
      --l;
    }
    if(l>=0&&table[y][l].piece[0]==='w')
      table[y][l].selected=true;

    j=x+1;
    while(j<8&&table[y][j].piece[0]==='s')
    {
      table[y][j].selected=true;
      ++j;
    }
    if(j<8&&table[y][j].piece[0]==='w')
      table[y][j].selected=true;

    i=y+1;
    while(i<8&&table[i][x].piece[0]==='s')
    {
      table[i][x].selected=true;
      ++i;
    }
    if(i<7&&table[i][x].piece[0]==='w')
      table[i][x].selected=true;


  }

  queenMove(stack,table)
  {
    var currCoor=stack.pop();
    var oldCoor=stack.pop();

    if(currCoor.piece[0]=='w')
      this.pieceService.piecesLosed.next(currCoor.piece);

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

            table[currCoor.y][currCoor.x].piece='queen';
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
          if(currCoor.y&&(table[currCoor.y][currCoor.x].piece[0]==='w'||table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='queen';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }


    if(currCoor.y===oldCoor.y)
    {
      if(currCoor.x<oldCoor.x)
      {
        var i=currCoor.x+1;
        while(i<oldCoor.x&&table[i][currCoor.x].piece[0]==='s')
          ++i;
        if(i===oldCoor.x)
        {
          if(oldCoor.x&&(table[currCoor.y][currCoor.x].piece[0]==='w'||table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='queen';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }
      if(currCoor.x>oldCoor.x)
      {
        var i=oldCoor.x+1;
        while(i<currCoor.x&&table[i][currCoor.x].piece[0]==='s')
          ++i;
        if(i===currCoor.x)
        {
          if(currCoor.x&&(table[currCoor.y][currCoor.x].piece[0]==='w'||table[currCoor.y][currCoor.x].piece[0]==='s'))
          {
            table[currCoor.y][currCoor.x].piece='queen';
            table[oldCoor.y][oldCoor.x].piece='space';
          }
        }
      }
    }
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
      while(i<x2&&j<y2&&table[i][currCoor.x].piece[0]==='s')
      {
        ++j;
        ++i;
      }
      if(i==x2&&j==y2)
      {

        table[currCoor.y][currCoor.x].piece='queen';
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

        table[currCoor.y][currCoor.x].piece='queen';
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

        table[currCoor.y][currCoor.x].piece='queen';
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

        table[currCoor.y][currCoor.x].piece='queen';
        table[oldCoor.y][oldCoor.x].piece='space';
      }
    }

  }


}
