import { RequestHandler } from 'express';
import { asyncWrap } from '../utils/async-wrap.util';
import { NotFoundException } from '../utils/custom-error.util';

/**
 * Not Found Exception Middleware
 * @description api를 찾을 수 없을 때 발생하는 예외를 처리하는 미들웨어
 * @throws NotFoundException
 */
export const notFoundExceptionFilter = (): RequestHandler => {
  return asyncWrap(async (req, res, next) => {
    throw new NotFoundException('api Not found');
  });
};
