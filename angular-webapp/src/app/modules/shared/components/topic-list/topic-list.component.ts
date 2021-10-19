import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IVideo } from 'src/app/modules/backend/interfaces/video.interface';
import { VideosService } from 'src/app/modules/backend/services/videos.service';
import { VideoGenre } from '../../utils/enums/video-genre.enum';

export interface HttpClientOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {
  videos!: IVideo[];
  faPlay = faPlay;
  options?: HttpClientOptions;
  @Input() genre!: VideoGenre;
  @Input() title!: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private videosService: VideosService
  ) {}

  ngOnInit() {
    this.videosService.getAllVideos().subscribe((videos) => {
      this.videos = videos;
      console.log(videos);
    });
  }

  play(id: string) {
    this.router.navigate([`/player/${id}`]);
  }
}
