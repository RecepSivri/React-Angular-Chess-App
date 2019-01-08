import { Component, OnInit,OnChanges } from '@angular/core';
import {log} from "util";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit ,OnChanges {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    console.log(language)
  }


  public ngOnInit()
  {




  }
  public ngOnChanges(){
    console.log("asdasdsad")
  }
}
