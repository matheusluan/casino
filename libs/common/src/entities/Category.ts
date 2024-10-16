// Packages
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Models
import { Game } from './Game';
import { GameCategory } from './GameCategory';

@Entity({ name: 'categories' })
@Unique(['code'])
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column('boolean', { default: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  games: Game[];

  @OneToMany(
    () => GameCategory,
    (gameCategories: GameCategory) => gameCategories.category,
  )
  gameCategories?: GameCategory[];
}
