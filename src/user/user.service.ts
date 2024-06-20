import { BadRequestException, Injectable, Query } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryUserDTO, UserDTO } from './dto/user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string) {
    return this.prisma.user.findFirst({ where: { username } });
  }

  async create(data: UserDTO) {
    return await this.prisma.user.create({
      data: { ...data },
    });
  }

  async findAll(dto: QueryUserDTO) {
    const where: Prisma.UserWhereInput = {};

    if (dto.username) {
      where.username = { contains: dto.username };
    }
    if (dto.role) {
      where.role = { contains: dto.role };
    }

    return this.prisma.user.findMany({ where });
  }

  async delete(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
