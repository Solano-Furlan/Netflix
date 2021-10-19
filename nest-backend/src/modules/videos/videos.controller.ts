import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Video } from 'src/interfaces/video.entity';
import { CreateVideoDto } from './dto/cerate-video.dto';
import { FilterVideosDto } from './dto/filter-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get()
  async getVideos(@Query() filterDto: FilterVideosDto): Promise<Video[]> {
    return this.videosService.getVideos(filterDto);
  }

  @Post()
  createVideo(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videosService.createTask(createVideoDto);
  }

  @Patch('/:id')
  updateVideo(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto,
  ): Promise<Video> {
    return this.videosService.updateVideo(id, updateVideoDto);
  }

  @Get('/:id')
  getVideoById(@Param('id') id: string): Promise<Video> {
    return this.videosService.getVideoById(id);
  }

  @Delete('/:id')
  deleteVideo(@Param('id') id: string): Promise<void> {
    return this.videosService.deleteVideo(id);
  }
}
