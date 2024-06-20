import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService, { provide: APP_GUARD, useClass: AuthGuard }],
  imports: [PrismaModule],
})
export class ProductModule {}
