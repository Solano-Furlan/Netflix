import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { VideoGenre } from 'src/utils/enums/video-genre.enun';

export class CreateVideoDto {
  @MaxLength(50)
  @IsNotEmpty()
  title: string;

  @MaxLength(450)
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  video_url: string;

  @IsNotEmpty()
  image_url: string;

  @IsNotEmpty()
  minutes: number;

  @IsNotEmpty()
  rating: number;

  @IsNotEmpty()
  @IsEnum(VideoGenre)
  genre: VideoGenre;
}
