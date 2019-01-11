import {Component, EventEmitter, OnInit, Input, OnChanges} from '@angular/core';

import {PawnService} from "../pawn.service";
import {HorseService} from "../horse.service";
import {RookService} from "../rook.service";

@Component({
  selector: 'app-piece-component',
  templateUrl: './piece-component.component.html',
  styleUrls: ['./piece-component.component.css'],
  providers: [PawnService,HorseService,RookService]
})
export class PieceComponentComponent implements OnInit ,OnChanges {

  @Input() ActionedPiece;
  @Input() chessTable;
  playStack=[];
  flagStack=[];
  constructor(private pawnService:PawnService,private horseService:HorseService,private rookService:RookService) { }


  ngOnInit() {
  }

  ngOnChanges() {
    this.moveGame(this.playStack,this.ActionedPiece,this.chessTable)

  }

  moveGame(playStack,obj,table){

    for(var i=0;i<table.length;++i)
      for(var j=0;j<table[i].length;++j)
        table[i][j].selected=false;

    if(obj!=undefined)
    {
        if(playStack.length==1)
        {
          if(obj.piece[0]!=='s'&&obj.piece[0]!=='w')
            playStack.pop();
          else
            playStack.push(obj)

          console.log(playStack[0])
          console.log(playStack[1])
        }

        var clicked=obj.piece;

        if(clicked==="pawn") {
          var flag=1;
          this.flagStack.push(flag);
          this.pawnService.pawnMarkArea(obj,playStack,table)

        }

        if(clicked==="horse") {
          var flag=2;
          this.flagStack.push(flag);
          this.horseService.horseMarkArea(obj,playStack,table)

        }

        if(clicked==="rook") {
          var flag=3;
          this.flagStack.push(flag);
          this.rookService.rookMarkArea(obj,playStack,table)

        }

      if(playStack.length==2)
      {

          var a=this.flagStack.pop()
          if(a===1)
            this.pawnService.pawnMove(this.playStack,table)

          if(a===2)
            this.horseService.horseMove(this.playStack,table)

          if(a===3)
          {
            this.rookService.rookMove(this.playStack,table)
            console.log("rook move")
          }

      }


    }




  }

}
