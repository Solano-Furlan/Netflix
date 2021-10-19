import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { VideoGenre } from 'src/utils/enums/video-genre.enun';

export class FilterVideosDto {
  @IsOptional()
  @IsEnum(VideoGenre)
  genre?: VideoGenre;

  @IsOptional()
  @IsNotEmpty()
  search?: string;
}
