export class HorseService{

  horseMarkArea(piece,stack,table)
  {

    var x=piece.x;
    var y=piece.y;
    stack.push(piece);

    if(y-2>=0 && x+1<8 && (table[y-2][x+1].piece[0]==='w' || table[y-2][x+1].piece[0]==='s'))
      table[y-2][x+1].selected=true;
    if(y-1>=0 && x+2<8 && (table[y-1][x+2].piece[0]==='w'||table[y-1][x+2].piece[0]==='s'))
      table[y-1][x+2].selected=true;
    if(y+1<8 && x+2<8 && (table[y+1][x+2].piece[0]==='w' ||table[y+1][x+2].piece[0]==='s'))
      table[y+1][x+2].selected=true;
    if(y+2<8 && x+1<8 && (table[y+2][x+1].piece[0]==='w'|| table[y+2][x+1].piece[0]==='s'))
      table[y+2][x+1].selected=true;
    if(y+2<8 && x-1>=0 && (table[y+2][x-1].piece[0]==='w' ||  table[y+2][x-1].piece[0]==='s'))
      table[y+2][x-1].selected=true;
    if(y+1<8 && x-2>=0 && (table[y+1][x-2].piece[0]==='w' || table[y+1][x-2].piece[0]==='s'))
      table[y+1][x-2].selected=true;
    if(y-1>=0 && x-2>=0 && (table[y-1][x-2].piece[0]==='w' || table[y-1][x-2].piece[0]==='s'))
      table[y-1][x-2].selected=true;
    if(y-2>=0 && x-1>=0 && (table[y-2][x-1].piece[0]==='w' || table[y-2][x-1].piece[0]==='s'))
      table[y-2][x-1].selected=true;

  }

  horseMove(stack,table)
  {
    var currCoor=stack.pop();
    var oldCoor=stack.pop();
    if(oldCoor.y-2===currCoor.y && oldCoor.x+1===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }

    if(oldCoor.y-1===currCoor.y && oldCoor.x+2===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }
    if(oldCoor.y+1===currCoor.y && oldCoor.x+2===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }
    if(oldCoor.y+2===currCoor.y && oldCoor.x+1===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }
    if(oldCoor.y+2===currCoor.y && oldCoor.x-1===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }
    if(oldCoor.y+1===currCoor.y && oldCoor.x-2===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }
    if(oldCoor.y-1===currCoor.y && oldCoor.x-2===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }
    if(oldCoor.y-2===currCoor.y && oldCoor.x-1===currCoor.x&& (table[currCoor.y][currCoor.x].piece[0]==='w' || table[currCoor.y][currCoor.x].piece[0]==='s'))
    {
      table[oldCoor.y][oldCoor.x].piece='space';
      table[currCoor.y][currCoor.x].piece = 'horse';
    }

  }

}
