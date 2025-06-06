import { Module } from '@nestjs/common';
import { CatalogueService } from './services/catalogue.service';
import { CatalogueController } from './controllers/catalogue.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [PrismaModule, ConfigModule, StorageModule],
  controllers: [CatalogueController],
  providers: [CatalogueService],
})
export class CatalogueModule {}
