import { env } from '../configs/env.config';
import { logger } from '../configs/logger.config';
import { IExceptionResponse } from '../interfaces/repsonse.interface';
import { HttpStatus } from '../utils/http-status.util';
import { ErrorRequestHandler } from 'express';

/**
 * Unhandled Exception Middleware
 * @description 처리되지 않은 예외를 처리하는 미들웨어
 */
export const unhandledExceptionFilter = (): ErrorRequestHandler => {
  return async (err: Error, req, res, next) => {
    if (env.MODE === 'dev') {
      logger.debug('unhandledExceptionFilter excute', err);
    }

    /**
     * 클라이언트한테는 서버 내부 에러를 굳이 보내줄 필요가 없음
     * warn레벨의 로그로 남기고 에러 응답을 보내주는게 좋을것 같음
     */
    const errorResponse: IExceptionResponse = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal Server Error',
      timestamp: new Date(),
      requestURL: req.url,
    };

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(errorResponse);
  };
};
