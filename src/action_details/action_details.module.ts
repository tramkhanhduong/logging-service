import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionDetailsService } from './action_details.service';
import { ActionDetail } from './entities/action-details.entity';
@Module({
    imports: [TypeOrmModule.forFeature([ActionDetail])],
    providers: [ActionDetailsService],
    exports: [],
})
export class ActionDetailsModule {}
