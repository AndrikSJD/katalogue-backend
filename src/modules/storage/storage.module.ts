// src/modules/storage/storage.module.ts
import { Module } from '@nestjs/common';
import { ImageService } from './services/images.service';
import { SupabaseService } from './services/storage.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [ImageService, SupabaseService],
  exports: [ImageService, SupabaseService],
})
export class StorageModule {}
