import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from '../interfaces/video.interface';
import { HttpClient } from '@angular/common/http';
import { VideoGenre } from '../../shared/utils/enums/video-genre.enum';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  baseUrl = 'http://127.0.0.1:3000';
  RESOURCE_NAME = 'videos';
  constructor(private http: HttpClient) {}

  getAllVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`${this.baseUrl}/${this.RESOURCE_NAME}`);
  }

  getVideosByGenre(genre: VideoGenre): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(
      `${this.baseUrl}/${this.RESOURCE_NAME}?genre=${genre}`
    );
  }

  getVideosSearch(term: string): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(
      `${this.baseUrl}/${this.RESOURCE_NAME}?search=${term}`
    );
  }

  updateVideo(id: string, video: IVideo): Observable<IVideo> {
    return this.http.patch<IVideo>(
      `${this.baseUrl}/${this.RESOURCE_NAME}/${id}`,
      video
    );
  }
}
