import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { GameCategory } from './GameCategory';

@Entity('game')
@Unique(['code'])
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  thumbnail?: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(
    () => GameCategory,
    (gameCategories: GameCategory) => gameCategories.game,
  )
  gameCategories?: GameCategory[];
}
