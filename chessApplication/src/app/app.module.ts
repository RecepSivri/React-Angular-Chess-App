import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { PieceComponentComponent } from './piece-component/piece-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { ScoresComponentComponent } from './scores-component/scores-component.component';
import { ScoresBoardComponent } from './scores-board/scores-board.component';
import {PieceService} from "./piece.service";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    TableComponentComponent,
    PieceComponentComponent,
    AboutComponentComponent,
    GameComponentComponent,
    ScoresComponentComponent,
    ScoresBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [PieceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
