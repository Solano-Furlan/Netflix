import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from '../interfaces/video.interface';
import { HttpClient } from '@angular/common/http';

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
}
