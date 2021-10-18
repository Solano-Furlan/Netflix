import { Video } from 'src/interfaces/video.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> {}
