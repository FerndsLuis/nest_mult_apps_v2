import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventCoreService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEventInput: CreateEventInput) {
    return this.prisma.event.create({ data: createEventInput });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: string, updateEventInput: UpdateEventInput) {
    return this.prisma.event.update({
      where: { id: id },
      data: { ...updateEventInput },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
