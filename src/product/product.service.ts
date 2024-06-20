import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDTO, QueryProductDTO } from './dto/product.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(body: ProductDTO, userId: string) {
    return this.prisma.product.create({ data: { ...body, userId } });
  }

  async findOne(id: string) {
    return this.prisma.product.findFirst({
      where: { id },
      include: { User: true },
    });
  }

  async findAll(productDTO: QueryProductDTO) {
    let where: Prisma.ProductWhereInput = {};
    if (productDTO.name) {
      where.name = { contains: productDTO.name };
    }
    if (productDTO.price) {
      where.price = { equals: productDTO.price };
    }
    if (productDTO.discount) {
      where.discount = { equals: productDTO.discount };
    }
    if (productDTO.userId) {
      where.userId = { equals: productDTO.userId };
    }
    return this.prisma.product.findMany({
      where,
      include: { User: { select: { username: true, role: true } } },
    });
  }

  async update(body: ProductDTO, productId: string) {
    return this.prisma.product.update({ where: { id: productId }, data: body });
  }
  async delete(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
