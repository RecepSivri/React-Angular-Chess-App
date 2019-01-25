import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponentComponent } from './core/header-component/header-component.component';
import { TableComponentComponent } from './core/table-component/table-component.component';
import { PieceComponentComponent } from './core/piece-component/piece-component.component';
import { AboutComponentComponent } from './core/about-component/about-component.component';
import { GameComponentComponent } from './core/game-component/game-component.component';
import { ScoresComponentComponent } from './core/scores-component/scores-component.component';
import { ScoresBoardComponent } from './core/scores-board/scores-board.component';
import {PieceService} from "./core/Services/piece.service";
import { FlexLayoutModule } from '@angular/flex-layout';
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
    FlexLayoutModule,
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
