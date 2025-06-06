import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { CatalogueModule } from './modules/catalogues/catalogue.module';
import { ProductModule } from './modules/products/controllers/product.controller';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './modules/categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    CatalogueModule,
    ProductModule,
    HealthModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
