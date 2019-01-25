import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-scores-component',
  templateUrl: './scores-component.component.html',
  styleUrls: ['./scores-component.component.css']
})
export class ScoresComponentComponent implements OnInit {

  user:{id:number,name:string};
  constructor(private router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id:this.activatedRouter.params['id'],
      name:this.activatedRouter.params['name']
    }
    this.activatedRouter.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'],
        this.user.name=params['name']
      }
    )
  }

  navigate(){
    this.router.navigate(['home'])
  }

  reload(){
    this.router.navigate(['scores'],{relativeTo:this.activatedRouter})
  }


}
