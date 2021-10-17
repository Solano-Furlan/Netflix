import { Module } from '@nestjs/common';
import { VideoService } from './videos.service';
import { VideosController } from './videos.controller';

@Module({
  providers: [VideoService],
  controllers: [VideosController],
})
export class VideoModule {}
