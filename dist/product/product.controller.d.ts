import { ProductDTO, QueryProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    findMany(dto: QueryProductDTO): Promise<({
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
    createProduct(productDTO: ProductDTO, req: any): Promise<{
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
    update(body: ProductDTO, id: string): Promise<{
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
