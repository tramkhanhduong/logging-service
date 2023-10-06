import { Module } from '@nestjs/common';
import { ActionService } from '../action/action.service';
import { SocketService } from './socket.service';
import { ActionModule } from 'src/action/action.module';

@Module({
  controllers: [],
  imports: [
    ActionModule,
  ],
  providers: [SocketService, ActionService],
})
export class SocketModule {}
