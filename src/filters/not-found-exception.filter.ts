import { RequestHandler } from 'express';
import { HttpStatus } from '../utils/http-status.util';
import { IExceptionResponse } from '../interfaces/repsonse.interface';

/**
 * Not Found Exception Middleware
 * @description api를 찾을 수 없을 때 발생하는 예외를 처리하는 미들웨어
 * @throws NotFoundException
 */
export const notFoundExceptionFilter = (): RequestHandler => {
  return async (req, res, next) => {
    const response: IExceptionResponse = {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'api Not found',
      timestamp: new Date(),
      requestURL: req.url,
    };

    return res.status(response.statusCode).send(response);
  };
};
