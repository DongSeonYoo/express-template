import express from 'express';
import { logger } from '../../configs/logger.config';
import { responseInterceptor } from '../../interceptors/response.interceptor';

export function SetInterceptors(app: express.Application) {
  logger.info('SetInterceptor excute');
  app.use(responseInterceptor());
}
