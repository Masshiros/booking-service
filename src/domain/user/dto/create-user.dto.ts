import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from 'src/share/decorator/match.decorator';
import { EUserRole } from 'src/share/interface';

export class CreateUserDto {
  @ApiProperty({
    example: 'abc@example.com',
    description: 'Email',
    format: 'Email',
    uniqueItems: true,
    minLength: 6,
    maxLength: 255,
    nullable: false,
  })
  @MaxLength(255)
  @MinLength(6)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MaxLength(20)
  @MinLength(8)
  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  password: string;

  @MaxLength(20)
  @MinLength(8)
  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  @Match('password')
  password2: string;
  
  @MaxLength(20)
  @MinLength(1)
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @MaxLength(20)
  @MinLength(1)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  phone: string;
  @IsString()
  @IsNotEmpty()
  timezoneCode: string;

  @IsEnum([EUserRole.client, EUserRole.coach, EUserRole.owner])
  @IsString()
  @IsNotEmpty()
  role: string;
}
