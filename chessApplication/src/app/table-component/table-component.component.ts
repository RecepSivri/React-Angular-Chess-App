import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  table = [
    [{id:0,piece:"wrook"},{id:1,piece:"whorse"},{id:2,piece:"wbishop"},{id:3,piece:"wqueen"},
      {id:4,piece:"wking"},{id:5,piece:"wbishop"},{id:6,piece:"whorse"},{id:7,piece:"wrook"}],

    [{id:0,piece:"wpawn"},{id:1,piece:"wpawn"},{id:2,piece:"wpawn"},{id:3,piece:"wpawn"},
      {id:4,piece:"wpawn"},{id:5,piece:"wpawn"},{id:6,piece:"wpawn"},{id:7,piece:"wpawn"}],

    [{id:0,piece:"space"},{id:1,piece:"space"},{id:2,piece:"space"},{id:3,piece:"space"},
      {id:4,piece:"space"},{id:5,piece:"space"},{id:6,piece:"space"},{id:7,piece:"space"}],

    [{id:0,piece:"space"},{id:1,piece:"space"},{id:2,piece:"space"},{id:3,piece:"space"},
      {id:4,piece:"space"},{id:5,piece:"space"},{id:6,piece:"space"},{id:7,piece:"space"}],

    [{id:0,piece:"space"},{id:1,piece:"space"},{id:2,piece:"space"},{id:3,piece:"space"},
      {id:4,piece:"space"},{id:5,piece:"space"},{id:6,piece:"space"},{id:7,piece:"space"}],

    [{id:0,piece:"space"},{id:1,piece:"space"},{id:2,piece:"space"},{id:3,piece:"space"},
      {id:4,piece:"space"},{id:5,piece:"space"},{id:6,piece:"space"},{id:7,piece:"space"}],

    [{id:0,piece:"pawn"},{id:1,piece:"pawn"},{id:2,piece:"pawn"},{id:3,piece:"pawn"},
      {id:4,piece:"pawn"},{id:5,piece:"pawn"},{id:6,piece:"pawn"},{id:7,piece:"pawn"}],

    [{id:0,piece:"rook"},{id:1,piece:"horse"},{id:2,piece:"bishop"},{id:3,piece:"queen"},
      {id:4,piece:"king"},{id:5,piece:"bishop"},{id:6,piece:"horse"},{id:7,piece:"rook"}]

  ];

  tableBottomEdge=[{id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4},{id:5,val:5},{id:6,val:6},{id:7,val:7},{id:8,val:8}];
  tableLeftEdge=[{id:1,val:'A'},{id:2,val:'B'},{id:3,val:'C'},{id:4,val:'D'},{id:5,val:'E'},{id:6,val:'F'},{id:7,val:'G'},{id:8,val:'H'}];


  constructor() { }
 deneme="recep sivri"
  ngOnInit() {

  }

}
