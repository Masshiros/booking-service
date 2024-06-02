import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateSessionTemplateDto {
  @MinLength(20)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Min(5)
  @IsNumber()
  @IsNotEmpty()
  duration: number;
}
