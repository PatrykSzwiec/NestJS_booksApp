import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({})
export class UsersModule {}
