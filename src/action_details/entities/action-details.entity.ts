import { EntityHelper } from 'src/utils/entity-helper';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Action } from '../../action/entities/action.entity';

@Entity()
export class ActionDetail extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'action_id' }) // Specify the column name
  action_id: number; // This property represents the foreign key

  @Column()
  detail_key: string;

  @Column()
  detail_value: string;
}
