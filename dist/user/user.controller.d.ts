import { QueryUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private service;
    constructor(service: UserService);
    findAll(dto: QueryUserDTO): Promise<{
        id: string;
        username: string;
        password: string;
        role: string;
    }[]>;
    delete(id: string): Promise<{
        id: string;
        username: string;
        password: string;
        role: string;
    }>;
}
