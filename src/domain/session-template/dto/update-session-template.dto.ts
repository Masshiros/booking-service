import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateSessionTemplateDto {
  @ApiProperty({
    type: String,
    required: true,
    description: ' The name of session template',
    example: 'Session template 1',
  })
  @MinLength(20)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    type: String,
    required: true,
    description: ' The duration of session template in minute',
    example: 30,
  })
  @Min(5)
  @IsNumber()
  @IsNotEmpty()
  duration?: number;
}
