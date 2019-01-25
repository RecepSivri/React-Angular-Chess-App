import { Component, OnInit } from '@angular/core';
import {PieceService} from "../Services/piece.service";
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-scores-board',
  templateUrl: './scores-board.component.html',
  styleUrls: ['./scores-board.component.css']
})
export class ScoresBoardComponent implements OnInit {

  piecename=[]
  piecename2=[]
  constructor(private pieceService: PieceService) { }

  ngOnInit() {
    this.pieceService.piecesLosed.subscribe(
      (name: string) => {
        if(this.piecename.length<8)
          this.piecename.push(name);
        else
          this.piecename2.push(name);
      }
    );
  }

}
