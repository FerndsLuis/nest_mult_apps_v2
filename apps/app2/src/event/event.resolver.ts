import { Resolver, Query } from '@nestjs/graphql';
import { Event } from './types/event.type';
import { EventCoreService } from '@app/libs/core/event/event-core.service';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventCoreService) {}

  @Query(() => [Event])
  async findAll() {
    return this.eventService.findAll();
  }
}
