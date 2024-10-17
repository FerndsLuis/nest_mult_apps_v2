import { Module } from '@nestjs/common';
import { EventCoreModule } from '@app/libs/core';
import { EventResolver } from './event.resolver';

@Module({
  imports: [EventCoreModule],
  providers: [EventResolver],
})
export class EventModule {}
