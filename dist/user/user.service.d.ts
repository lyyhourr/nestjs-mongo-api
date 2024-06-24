import { PrismaService } from 'src/prisma/prisma.service';
import { QueryUserDTO, UserDTO } from './dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(username: string): Promise<{
        id: string;
        username: string;
        password: string;
        role: string;
    }>;
    create(data: UserDTO): Promise<{
        id: string;
        username: string;
        password: string;
        role: string;
    }>;
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
