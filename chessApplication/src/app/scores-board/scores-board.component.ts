import { Component, OnInit } from '@angular/core';
import {PieceService} from "../piece.service";

@Component({
  selector: 'app-scores-board',
  templateUrl: './scores-board.component.html',
  styleUrls: ['./scores-board.component.css']
})
export class ScoresBoardComponent implements OnInit {

  piecename=[]
  constructor(private pieceService: PieceService) { }

  ngOnInit() {
    this.pieceService.piecesLosed.subscribe(
      (name: string) => {
        this.piecename.push(name);
      }
    );
  }

}
