import { Module } from '@nestjs/common';
import { EventCoreService } from './event-core.service';

@Module({
  providers: [EventCoreService],
  exports: [EventCoreService],
})
export class EventCoreModule {}
