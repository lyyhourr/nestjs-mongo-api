import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDTO, QueryProductDTO } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: ProductDTO, userId: string): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        discount: number;
        imageUrl: string[];
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    findOne(id: string): Promise<{
        User: {
            id: string;
            username: string;
            password: string;
            role: string;
        };
    } & {
        id: string;
        name: string;
        price: number;
        description: string;
        discount: number;
        imageUrl: string[];
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    findAll(productDTO: QueryProductDTO): Promise<({
        User: {
            username: string;
            role: string;
        };
    } & {
        id: string;
        name: string;
        price: number;
        description: string;
        discount: number;
        imageUrl: string[];
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    })[]>;
    update(body: ProductDTO, productId: string): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        discount: number;
        imageUrl: string[];
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        description: string;
        discount: number;
        imageUrl: string[];
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
}
