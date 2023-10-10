import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ActionService } from './action/action.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly actionService: ActionService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create-user-action')
  async createLogActionEvent(data: { user_id: number; action_type: string; action_details: { detail_key: string; detail_value: string }[] }) {
      return await this.actionService.createLogActionWithDetails(data.user_id, data.action_type, data.action_details);
  }
}
