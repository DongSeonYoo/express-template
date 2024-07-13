import express from 'express';
import { notFoundExceptionFilter } from '../../filters/not-found-exception.filter';
import { httpExceptionFilter } from '../../filters/http-exception.filter';
import { unhandledExceptionFilter } from '../../filters/unhandled-exception.filter';

/**
 * @description 에러 미들웨어 설정
 */
export function setExceptionFilter(app: express.Application) {
  app.use(notFoundExceptionFilter());
  app.use(httpExceptionFilter());
  app.use(unhandledExceptionFilter());
}
