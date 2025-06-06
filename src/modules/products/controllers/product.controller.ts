import { Module } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { PrismaModule } from 'src/database/prisma.module';
import { ProductController } from '../product.module';
import { SupabaseService } from 'src/modules/storage/services/storage.service';
import { ConfigModule } from '@nestjs/config';
import { StorageModule } from '../../storage/storage.module';

@Module({
  imports: [PrismaModule, ConfigModule, StorageModule],
  controllers: [ProductController],
  providers: [ProductService, SupabaseService],
})
export class ProductModule {}
