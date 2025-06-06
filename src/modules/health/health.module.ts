// src/health/health.module.ts
import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [HealthController],
  providers: [PrismaService],
})
export class HealthModule {}
