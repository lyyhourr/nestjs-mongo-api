import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { Public } from './meta-data/meta-data';

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @Post('login')
  signIn(@Body() signInDTO: UserDTO) {
    return this.authService.signIn(signInDTO);
  }

  @Post('register')
  async createUser(@Body() body: UserDTO) {
    const existingUser = await this.userService.findOne(body.username);
    if (existingUser) {
      return new ConflictException('username already taken');
    }
    return this.userService.create(body);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
