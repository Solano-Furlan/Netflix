import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosConfigPage } from './pages/videos-config/videos-config.page';
import { VideoItemComponent } from './pages/videos-config/video-item/video-item.component';
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
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayout } from './admin.layout';

@NgModule({
  declarations: [VideosConfigPage, VideoItemComponent, AdminLayout],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
  ],
})
export class AdminModule {}
