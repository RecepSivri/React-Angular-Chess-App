import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  table = [
    [{id:0,piece:"wrook"},{id:1,piece:"wknight"},{id:2,piece:"wbishop"},{id:3,piece:"wqueen"},
      {id:4,piece:"wking"},{id:5,piece:"wbishop"},{id:6,piece:"wknight"},{id:7,piece:"wrook"}],

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

    [{id:0,piece:"rook"},{id:1,piece:"knight"},{id:2,piece:"bishop"},{id:3,piece:"wueen"},
      {id:4,piece:"king"},{id:5,piece:"bishop"},{id:6,piece:"knight"},{id:7,piece:"rook"}]

  ];

  constructor() { }
 deneme="recep sivri"
  ngOnInit() {

  }

}
