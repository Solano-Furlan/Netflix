import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { VideoRepository } from './videos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VideoRepository])],
  providers: [VideosService],
  controllers: [VideosController],
})
export class VideoModule {}
