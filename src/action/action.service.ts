import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from './entities/action.entity';
import {  ActionDetail } from '../action_details/entities/action-details.entity';

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action) private actionRepository: Repository<Action>,
    @InjectRepository(ActionDetail) private readonly actionDetailRepository: Repository<ActionDetail>,
  ) {}

  async createLogActionWithDetails(
        userId: number,
        actionType: string,
        actionDetails: { detail_key: string; detail_value: string }[],
    ): Promise<Action> {

        const action = new Action();
        action.user_id = userId;
        action.action_type = actionType;
        action.timestamp = new Date();

        const savedAction = await this.actionRepository.save(action);

        // Create associated log action details
        for (const detail of actionDetails) {
            const actionDetail = new ActionDetail();
            actionDetail.action_id = savedAction.id;
            actionDetail.detail_key = detail.detail_key;
            actionDetail.detail_value = detail.detail_value;
            await this.actionDetailRepository.save(actionDetail);
        }
    
        return savedAction;
    }
}