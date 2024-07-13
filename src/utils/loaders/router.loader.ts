import express from 'express';
import { testRouter } from '../../routes/test.router';
/**
 * @description 라우터 미들웨어 설정
 */
export function setRouteMiddleware(app: express.Application) {
  console.log('init route middleware');
  app.use('/test', testRouter);
}
