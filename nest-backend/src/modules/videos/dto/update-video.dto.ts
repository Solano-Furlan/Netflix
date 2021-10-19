import { IsEnum, IsOptional, IsUrl, MaxLength } from 'class-validator';
import { VideoGenre } from 'src/utils/enums/video-genre.enun';

export class UpdateVideoDto {
  @IsOptional()
  @MaxLength(50)
  title: string;

  @IsOptional()
  @MaxLength(450)
  description: string;

  @IsOptional()
  video_url: string;

  @IsOptional()
  image_url: string;

  @IsOptional()
  minutes: number;

  @IsOptional()
  rating: number;

  @IsOptional()
  @IsEnum(VideoGenre)
  genre: VideoGenre;
}
