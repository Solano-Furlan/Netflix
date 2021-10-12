import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HeroIconModule,
  informationCircle,
  search,
  bell,
  thumbUp,
  thumbDown,
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
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    FooterComponent,
    TopicListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeroIconModule.withIcons({
      informationCircle,
      search,
      bell,
      thumbUp,
      thumbDown,
      plus,
      chevronDown,
    }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
