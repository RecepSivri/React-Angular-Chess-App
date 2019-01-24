import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GameComponentComponent} from  './game-component/game-component.component'
import {AboutComponentComponent} from  './about-component/about-component.component'
import {ScoresComponentComponent} from  './scores-component/scores-component.component'
const routes: Routes = [{path:'',component:GameComponentComponent},
  {path:'about',component:AboutComponentComponent},
  {path:'home',component:GameComponentComponent,children:[{path:':id',component:AboutComponentComponent},{path:':id/edit',component:ScoresComponentComponent}]},
  {path:'scores',component:ScoresComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
