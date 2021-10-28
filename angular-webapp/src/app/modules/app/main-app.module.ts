import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MainAppRoutingModule } from './main-app-routing.module';
import { RouterModule } from '@angular/router';
import { MainAppLayout } from './main-app.layout';

@NgModule({
  declarations: [HomePage, SearchPage, MainAppLayout],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    FormsModule,
    FontAwesomeModule,
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
    SharedModule,
  ],
})
export class MainAppModule {}
