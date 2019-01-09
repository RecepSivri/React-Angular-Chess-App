import {Component, EventEmitter, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-piece-component',
  templateUrl: './piece-component.component.html',
  styleUrls: ['./piece-component.component.css']
})
export class PieceComponentComponent implements OnInit {

  @Input() deneme;
  constructor() { }


  ngOnInit() {
  }

}
