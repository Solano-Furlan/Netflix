import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { VideoGenre } from 'src/app/modules/shared/utils/enums/video-genre.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public get VideoGenre(): typeof VideoGenre {
    return VideoGenre;
  }
  faPlay = faPlay;
  constructor() {}

  ngOnInit(): void {}
}
