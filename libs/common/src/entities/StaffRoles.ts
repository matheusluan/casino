import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from './Role';
import { Staff } from './Staff';

@Entity('staff_roles')
export class StaffRoles {
  @PrimaryGeneratedColumn()
  staffId: number;

  @PrimaryGeneratedColumn()
  roleId: number;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Staff, (staff: Staff) => staff.staffRoles)
  @JoinColumn({ name: 'staff_id' })
  staff?: Staff;

  @ManyToOne(() => Role, (role: Role) => role.staffRoles)
  @JoinColumn({ name: 'role_id' })
  role?: Role;
}
