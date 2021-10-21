import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVideo } from 'src/app/modules/backend/interfaces/video.interface';
import { VideosService } from 'src/app/modules/backend/services/videos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  term!: string;
  videos!: IVideo[];
  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.term = this.route.snapshot.paramMap.get('term') as string;
    this.videos = await this.videosService
      .getVideosSearch(this.term)
      .toPromise();
  }

  play(id: string) {
    this.router.navigate([`/player/${id}`]);
  }
}
