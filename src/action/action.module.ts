import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionDetail } from 'src/action_details/entities/action-details.entity';
import { Action } from './entities/action.entity';
import { ActionService } from './action.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Action, ActionDetail])
    ],
    providers: [ActionService, ActionDetail],
    exports: [ActionService, TypeOrmModule.forFeature([Action, ActionDetail])]
})
export class ActionModule {}
