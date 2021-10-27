import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/modules/backend/interfaces/video.interface';
import { VideosService } from 'src/app/modules/backend/services/videos.service';

@Component({
  selector: 'app-videos-config',
  templateUrl: './videos-config.page.html',
  styleUrls: ['./videos-config.page.scss'],
})
export class VideosConfigPage implements OnInit {
  videos!: IVideo[];
  constructor(private videosService: VideosService) {}

  async ngOnInit(): Promise<void> {
    this.videos = await this.videosService.getAllVideos().toPromise();
  }
}
