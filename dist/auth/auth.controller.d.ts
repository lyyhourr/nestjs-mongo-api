import { ConflictException } from '@nestjs/common';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signIn(signInDTO: UserDTO): Promise<import("@nestjs/common").UnauthorizedException | {
        access_token: string;
    }>;
    createUser(body: UserDTO): Promise<{
        id: string;
        username: string;
        password: string;
        role: string;
    } | ConflictException>;
    getProfile(req: any): any;
}
