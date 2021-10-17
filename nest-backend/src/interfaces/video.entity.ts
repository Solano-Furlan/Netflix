import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  video_url: string;

  @Column()
  image_url: string;

  @Column()
  minutes: string;

  @Column()
  rating: number;
}
