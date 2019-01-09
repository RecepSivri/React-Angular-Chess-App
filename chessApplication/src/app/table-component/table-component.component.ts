import {Component, OnInit, DoCheck, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit ,DoCheck{

  @Input('ChessTable') table = [];
  @Output('TableEvent') TableEvent=new EventEmitter<{y:number,x:number,piece:string}>()
  tableBottomEdge=[{id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4},{id:5,val:5},{id:6,val:6},{id:7,val:7},{id:8,val:8}];
  tableLeftEdge=[{id:1,val:'A'},{id:2,val:'B'},{id:3,val:'C'},{id:4,val:'D'},{id:5,val:'E'},{id:6,val:'F'},{id:7,val:'G'},{id:8,val:'H'}];


  constructor() { }

  ngOnInit() {

  }
  ngDoCheck(){
  }

  clickTable(input){
    this.TableEvent.emit(
      {
        y:input.y,
        x:input.x,
        piece:input.piece
      }
    )
  }

}
