import express from 'express';
import { testRouter } from '../../routes/test.router';
import { logger } from '../../configs/logger.config';
/**
 * @description 라우터 미들웨어 설정
 */
export function SetRouteMiddleware(app: express.Application) {
  logger.info('Router Middleware Init');
  app.use('/test', testRouter);
}
