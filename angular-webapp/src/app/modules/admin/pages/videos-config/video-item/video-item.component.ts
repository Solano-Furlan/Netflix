import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IVideo } from 'src/app/modules/backend/interfaces/video.interface';
import FastCopy from 'fast-copy';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VideosService } from 'src/app/modules/backend/services/videos.service';
@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent implements OnInit {
  @Input() video!: IVideo;
  video_copy!: IVideo;
  JSON = JSON;
  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.video_copy = FastCopy(this.video);
  }

  async saveChanges() {
    await this.videosService
      .updateVideo(this.video.id!, this.video)
      .toPromise()
      .then((v) => {
        this.video_copy = FastCopy(this.video);
      });
  }
}
