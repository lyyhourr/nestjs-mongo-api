import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(dto: UserDTO) {
    const user = await this.userService.findOne(dto.username);
    if (!user) {
      return new UnauthorizedException();
    }
    const { id, username } = user;
    const payload = { id, username };
    // convert user data to JWT token
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
