import { ApiProperty } from '@nestjs/swagger';

export class SessionTemplateResponseDto {
  @ApiProperty({
    type: Number,
    required: true,
    description: 'The id of the session template',
    example: 1,
  })
  id: number;
  @ApiProperty({
    type: String,
    required: true,
    description: 'The name of the session template',
    example: 'Session template 1',
  })
  name: string;
  @ApiProperty({
    type: String,
    required: true,
    description: 'The duration of the session template in minute',
    example: 30,
  })
  duration: number;
  @ApiProperty({
    type: String,
    required: true,
    description: 'Session template status',
    example: true,
  })
  isActive: boolean;
  @ApiProperty({
    type: String,
    required: true,
    description: 'The date and time the session template was created',
    example: true,
  })
  createdAt: Date;
  @ApiProperty({
    type: String,
    required: true,
    description: 'The date and time the session template was edited',
    example: true,
  })
  updatedAt: Date;
}
