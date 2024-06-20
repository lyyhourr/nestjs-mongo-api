import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QueryUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('user')
// apply bearer auth
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  findAll(@Query() dto: QueryUserDTO) {
    return this.service.findAll(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
