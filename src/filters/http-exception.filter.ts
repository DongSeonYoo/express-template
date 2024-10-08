import { ErrorRequestHandler } from 'express';
import { TError } from '../interfaces/error.type';
import { HttpException } from '../utils/custom-error.util';
import { IExceptionResponse } from '../interfaces/repsonse.interface';
import { env } from '../configs/env.config';
import { logger } from '../configs/logger.config';

/**
 * Http Exception Middleware
 * @description 개발자가 의도적으로 발생시킨 HttpException을 처리하는 미들웨어
 * @description HttpException이 아닌 다른 에러는 다음 미들웨어로 넘김
 */
export const httpExceptionFilter = (): ErrorRequestHandler => {
  return async (err: TError, req, res, next) => {
    if (!(err instanceof HttpException) || err.statusCode === 500) {
      return next(err);
    }

    if (env.MODE === 'dev') {
      logger.info('httpexceptionfilter excute');
    }

    // 에러 응답형식에 맞게 처리
    const errorResponse: IExceptionResponse = {
      statusCode: err.statusCode,
      message: err.message,
      timestamp: new Date(),
      requestURL: req.url,
    };

    return res.status(err.statusCode).send(errorResponse);
  };
};
