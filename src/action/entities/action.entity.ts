import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { ActionDetail } from 'src/action_details/entities/action-details.entity';

@Entity()
export class Action extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userId: number;

  @Column()
  actionType?: string | null;

  @Column({ type: 'timestamp' })
  timestamp: Date;
}
