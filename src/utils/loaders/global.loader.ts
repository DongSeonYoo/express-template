import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { env } from '../../configs/env.config';

/**
 * @description 전역 미들웨어 설정
 */
export function setGlobalMiddleware(app: express.Application) {
  console.log('init global middleware');
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    }),
  );
}
