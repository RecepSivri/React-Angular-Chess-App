import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('tr');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  public ngOnInit()
  {

  }
  selectedPiece;
  tableContent=[[{id:0,piece:"wrook",selected:false},{id:1,piece:"whorse",selected:false},{id:2,piece:"wbishop",selected:false},{id:3,piece:"wqueen",selected:false},
    {id:4,piece:"wking",selected:false},{id:5,piece:"wbishop",selected:false},{id:6,piece:"whorse",selected:false},{id:7,piece:"wrook",selected:false}],

    [{id:0,piece:"wpawn",selected:false},{id:1,piece:"wpawn",selected:false},{id:2,piece:"wpawn",selected:false},{id:3,piece:"wpawn",selected:false},
      {id:4,piece:"wpawn",selected:false},{id:5,piece:"wpawn",selected:false},{id:6,piece:"wpawn",selected:false},{id:7,piece:"wpawn",selected:false}],

    [{id:0,piece:"space",selected:false},{id:1,piece:"space",selected:false},{id:2,piece:"space",selected:false},{id:3,piece:"space",selected:false},
      {id:4,piece:"space",selected:false},{id:5,piece:"space",selected:false},{id:6,piece:"space",selected:false},{id:7,piece:"space",selected:false}],

    [{id:0,piece:"space",selected:false},{id:1,piece:"space",selected:false},{id:2,piece:"space",selected:false},{id:3,piece:"space",selected:false},
      {id:4,piece:"space",selected:false},{id:5,piece:"space",selected:false},{id:6,piece:"space",selected:false},{id:7,piece:"space",selected:false}],

    [{id:0,piece:"space",selected:false},{id:1,piece:"space",selected:false},{id:2,piece:"space",selected:false},{id:3,piece:"space",selected:false},
      {id:4,piece:"space",selected:false},{id:5,piece:"space",selected:false},{id:6,piece:"space",selected:false},{id:7,piece:"space",selected:false}],

    [{id:0,piece:"space",selected:false},{id:1,piece:"space",selected:false},{id:2,piece:"space",selected:false},{id:3,piece:"space",selected:false},
      {id:4,piece:"space",selected:false},{id:5,piece:"space",selected:false},{id:6,piece:"space",selected:false},{id:7,piece:"space",selected:false}],

    [{id:0,piece:"pawn",selected:false},{id:1,piece:"pawn",selected:false},{id:2,piece:"pawn",selected:false},{id:3,piece:"pawn",selected:false},
      {id:4,piece:"pawn",selected:false},{id:5,piece:"pawn",selected:false},{id:6,piece:"pawn",selected:false},{id:7,piece:"pawn",selected:false}],

    [{id:0,piece:"rook",selected:false},{id:1,piece:"horse",selected:false},{id:2,piece:"bishop",selected:false},{id:3,piece:"queen",selected:false},
      {id:4,piece:"king",selected:false},{id:5,piece:"bishop",selected:false},{id:6,piece:"horse",selected:false},{id:7,piece:"rook",selected:false}]
  ];

  onTableTriggered(value){
    this.selectedPiece=value;
  }
}
