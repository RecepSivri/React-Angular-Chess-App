import {Component, EventEmitter, OnInit, Input, OnChanges} from '@angular/core';

import {PawnService} from "../pawn.service";

@Component({
  selector: 'app-piece-component',
  templateUrl: './piece-component.component.html',
  styleUrls: ['./piece-component.component.css'],
  providers: [PawnService]
})
export class PieceComponentComponent implements OnInit ,OnChanges {

  @Input() ActionedPiece;
  @Input() chessTable;
  playStack=[];
  constructor(private pawnService:PawnService) { }


  ngOnInit() {
  }

  ngOnChanges() {
    this.moveGame(this.playStack,this.ActionedPiece,this.chessTable)
    console.log(this.chessTable)
  }

  moveGame(playStack,obj,table){

    for(var i=0;i<table.length;++i)
      for(var j=0;j<table[i].length;++j)
        table[i][j].selected=false;

    if(obj!=undefined)
    {
        if(playStack.length==1)
        {
          if(obj.piece[0]!=='w')
            playStack.pop();
          else
            playStack.push(obj)
        }

        var clicked=obj.piece;

      if(clicked==="pawn") {
        this.pawnService.pawnMarkArea(obj,playStack,table)

      }


    }




  }

}
