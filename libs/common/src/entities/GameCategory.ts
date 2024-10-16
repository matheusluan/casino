// Packages
import {
  Entity,
  CreateDateColumn,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';

// Models
import { Game } from './Game';
import { Category } from './Category';

@Entity({ name: 'game_categories' })
export class GameCategory {
  @PrimaryColumn()
  game_id: number;

  @PrimaryColumn()
  category_id: number;

  @Column({ type: 'int', default: 0, select: false, nullable: false })
  weight: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Game, (game) => game.gameCategories)
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @ManyToOne(() => Category, (category) => category.gameCategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
