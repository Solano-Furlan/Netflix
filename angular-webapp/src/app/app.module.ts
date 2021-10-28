import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HeroIconModule,
  informationCircle,
  search,
  bell,
  thumbUp,
  thumbDown,
  arrowLeft,
  x,
  trash,
  play,
  externalLink,
  plus,
  chevronDown,
} from 'ng-heroicon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerPage } from './modules/app/pages/player/player.page';
import { VideosService } from './modules/backend/services/videos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, PlayerPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeroIconModule.withIcons({
      informationCircle,
      search,
      bell,
      thumbUp,
      arrowLeft,
      thumbDown,
      x,
      trash,
      plus,
      externalLink,
      play,
      chevronDown,
    }),
    FontAwesomeModule,
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
