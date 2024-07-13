import { RequestHandler } from 'express';
import { asyncWrap } from '../utils/async-wrap.util';
import { NotFoundException } from '../utils/custom-error.util';
import { env } from '../configs/env.config';

/**
 * Not Found Exception Middleware
 * @description api를 찾을 수 없을 때 발생하는 예외를 처리하는 미들웨어
 * @throws NotFoundException
 */
export const notFoundExceptionMiddleware = (): RequestHandler => {
  return asyncWrap(async (req, res, next) => {
    if (env.MODE === 'dev') {
      console.log('error in notFoundExceptionMiddleware');
    }

    throw new NotFoundException('api Not found');
  });
};
