import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/libs/core';
import { EventModule } from './event/event.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env1', isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PrismaModule,
    EventModule,
  ],
})
export class App1Module {}
