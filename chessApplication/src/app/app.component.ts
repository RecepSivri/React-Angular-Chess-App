import { Component, OnInit  } from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chessApplication';

  public ngOnInit()
  {
    $(document).ready(function(){
      $("button").click(function(){
        var div = $("div");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '5em'}, "slow");
      });
    });
  }


  constructor(translate: TranslateService) {




    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('tr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('tr');


  }
}
