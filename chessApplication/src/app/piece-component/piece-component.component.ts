import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-piece-component',
  templateUrl: './piece-component.component.html',
  styleUrls: ['./piece-component.component.css']
})
export class PieceComponentComponent implements OnInit {

  @Output() onPlayed=new EventEmitter<{y:number ,x:number,piece:string }>();
  constructor() { }

  x=0;
  y=0;
  piece="";

  onPlay(){
    this.onPlayed.emit({
      x:this.x,
      y:this.y,
      piece:this.piece
    })
  }

  ngOnInit() {
  }

}
