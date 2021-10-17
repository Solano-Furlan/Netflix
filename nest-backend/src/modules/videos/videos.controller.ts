import { Controller, Get } from '@nestjs/common';

@Controller('videos')
export class VideosController {
  constructor() {}

  @Get()
  getVideos(): string {
    return 'Videos';
  }
}
