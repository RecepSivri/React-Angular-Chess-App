import { Component, OnInit,OnChanges } from '@angular/core';
import {log} from "util";
import { TranslateService } from '@ngx-translate/core';
declare var $: any;
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
  }


  public ngOnInit()
  {
    this.switchLanguage('tr')
    var a=function(){
      this.switchLanguage('tr')

    }
    var b=function(){
      this.switchLanguage('en')
    }

    $(window).on('load', function() {
      $("#country_selector").countrySelect({

      })



    });

    $("#country_selector").change(function() {

      if(this.value=='Tr')
        a();
      if(this.value=='Us')
        b()


    });


  }
  public ngOnChanges(){
    console.log("asdasdsad")
  }
}
