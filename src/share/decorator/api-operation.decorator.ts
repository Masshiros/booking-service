import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
interface ApiOperatorDecoratorOptions {
  type: any;
  summary: string;
  description: string;
}
export function ApiOperatorDecorator({
  type,
  summary,
  description,
}: ApiOperatorDecoratorOptions) {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiResponse({
      type,
      description,
    }),
    ApiUnauthorizedResponse({ description: 'Token is invalid' }),
    ApiForbiddenResponse({ description: 'Do not have permission' }),
    ApiBadRequestResponse({ description: 'Invalid data' }),
    ApiUnprocessableEntityResponse({ description: 'Invalid data' }),
    ApiInternalServerErrorResponse({
      description: 'Internal server error, please try later',
    }),
  );
}
