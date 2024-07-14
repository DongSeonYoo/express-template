import { IExceptionResponse } from '../interfaces/repsonse.interface';
import { HttpStatus } from './http-status.util';

export class HttpException extends Error implements IExceptionResponse {
  requestURL: string;
  statusCode: HttpStatus;
  timestamp: Date;

  constructor(message: string = '', statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

/**
 * @description BadRequestException
 * @status 400
 */
export class BadRequestException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

/**
 * @description UnauthorizedException
 * @status 401
 */
export class UnauthorizedException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}

/**
 * @description NotFoundException
 * @status 404
 */
export class NotFoundException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

/**
 * @description ConflictException
 * @status 409
 */
export class ConflictException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}

/**
 * @description InternalServerErrorException
 * @status 500
 */
export class InternalServerErrorException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
