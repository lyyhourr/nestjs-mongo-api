import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductDTO, QueryProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  findMany(@Query() dto: QueryProductDTO) {
    return this.service.findAll(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  createProduct(@Body() productDTO: ProductDTO, @Request() req) {
    return this.service.create(productDTO, req.user.id);
  }

  @Put(':id')
  update(@Body() body: ProductDTO, @Param('id') id: string) {
    return this.service.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
