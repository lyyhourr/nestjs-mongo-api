import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isString,
} from 'class-validator';

export class ProductDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  readonly discount: number;

  @ApiProperty()
  @IsArray()
  readonly imageUrl: string[];

  //   @IsString()
  //   readonly userId: string;
}

export class QueryProductDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  readonly price: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly description: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  readonly discount: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly userId: string;
}
