import { ApiParam, ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'username must be at least 3 characters' })
  @MaxLength(6, { message: 'username must be at most 6 characters' })
  readonly username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'username must be at least 3 characters' })
  @MaxLength(6, { message: 'username must be at most 6 characters' })
  readonly password: string;
}

export class QueryUserDTO {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  readonly username: string;

  @ApiProperty({ required: false, enum: ['USER', 'ADMIN'] })
  @IsEnum(['USER', 'ADMIN'])
  @IsOptional()
  readonly role: string;
}
