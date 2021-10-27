import { VideoGenre } from '../../shared/utils/enums/video-genre.enum';

export interface IVideo {
  id?: string;
  title?: string;
  description?: string;
  video_url?: string;
  image_url?: string;
  minutes?: number;
  rating?: number;
  genre?: VideoGenre;
  trailer_url?: string;
  relevance?: number;
}
