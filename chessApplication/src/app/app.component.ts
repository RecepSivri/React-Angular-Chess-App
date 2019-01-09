import { Component ,OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('tr');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  public ngOnInit()
  {

  }
  varDeneme;
    tableContent=[[{id:0,piece:"wrook"},{id:1,piece:"whorse"},{id:2,piece:"wbishop"},{id:3,piece:"wqueen"},
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

  onTableTriggered(value){
    this.varDeneme=value.piece;
  }



}
