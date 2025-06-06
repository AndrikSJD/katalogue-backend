import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/categories.controller';
import { CategoryService } from './services/categories.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
