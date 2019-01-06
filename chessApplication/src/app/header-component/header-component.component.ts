import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  public ngOnInit()
  {
    $(window).on('load', function() {
      $("#country_selector").countrySelect({

      });
    });

  }
}
