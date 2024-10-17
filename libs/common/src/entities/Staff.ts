import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { StaffRoles } from './StaffRoles';
import { Role } from './Role';
import { hash } from 'bcrypt';
@Entity('staff')
@Unique(['email'])
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => StaffRoles, (staffRoles) => staffRoles.role)
  staffRoles?: Role[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
