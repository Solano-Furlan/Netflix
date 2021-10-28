import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';

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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopicListComponent,
    FooterComponent,
    HeaderComponent,
    CircleButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
  exports: [
    TopicListComponent,
    FooterComponent,
    HeaderComponent,
    CircleButtonComponent,
  ],
})
export class SharedModule {}
