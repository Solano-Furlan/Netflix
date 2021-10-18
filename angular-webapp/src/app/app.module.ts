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
  plus,
  chevronDown,
} from 'ng-heroicon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './modules/app/pages/home/home.page';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { TopicListComponent } from './modules/shared/components/topic-list/topic-list.component';
import { PlayerPage } from './modules/app/pages/player/player.page';
import { CircleButtonComponent } from './modules/shared/components/circle-button/circle-button.component';
import { VideosService } from './modules/backend/services/videos.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    FooterComponent,
    TopicListComponent,
    PlayerPage,
    CircleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    HeroIconModule.withIcons({
      informationCircle,
      search,
      bell,
      thumbUp,
      arrowLeft,
      thumbDown,
      plus,
      chevronDown,
    }),
    FontAwesomeModule,
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
