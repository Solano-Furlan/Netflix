import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/interfaces/video.entity';
import { CreateVideoDto } from './dto/cerate-video.dto';
import { FilterVideosDto } from './dto/filter-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideoRepository } from './videos.repository';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoRepository)
    private videoRepository: VideoRepository,
  ) {}

  async getVideos(filterDto: FilterVideosDto): Promise<Video[]> {
    const query = this.videoRepository.createQueryBuilder('video');

    if (filterDto.genre) {
      query.andWhere('video.genre = :genre', { genre: filterDto.genre });
    }

    if (filterDto.search) {
      query.andWhere(
        'LOWER(video.title) LIKE LOWER(:search) OR LOWER(video.description) LIKE LOWER(:search)',
        { search: `%${filterDto.search}%` },
      );
    }

    const videos = await query.getMany();
    return videos;
  }

  async createTask(createVideoDto: CreateVideoDto): Promise<Video> {
    const video = this.videoRepository.create({
      title: createVideoDto.title,
      description: createVideoDto.description,
      video_url: createVideoDto.video_url,
      image_url: createVideoDto.image_url,
      minutes: createVideoDto.minutes,
      rating: createVideoDto.rating,
      genre: createVideoDto.genre,
    });

    await this.videoRepository.save(video);

    return video;
  }

  async updateVideo(
    id: string,
    updateVideoDto: UpdateVideoDto,
  ): Promise<Video> {
    var video = await this.getVideoById(id);
    (video.title = updateVideoDto.title),
      (video.description = updateVideoDto.description),
      (video.video_url = updateVideoDto.video_url),
      (video.image_url = updateVideoDto.image_url),
      (video.minutes = updateVideoDto.minutes),
      (video.rating = updateVideoDto.rating),
      (video.genre = updateVideoDto.genre),
      await this.videoRepository.save(video);
    return video;
  }

  async getVideoById(id: string): Promise<Video> {
    const found = await this.videoRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    } else {
      return found;
    }
  }

  async deleteVideo(id: string) {
    const result = await this.videoRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
  }
}
