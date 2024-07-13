import 'reflect-metadata';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { env } from './configs/env.config';
import { httpExceptionMiddleware } from './middlewares/http-exception.middleware';
import { notFoundExceptionMiddleware } from './middlewares/not-found-exception.middleware';
import { unhandledExceptionMiddleware } from './middlewares/unhandled-exception.middleware';
import { testRouter } from './routes/test.router';

async function startServer() {
  const app = express();
  const HTTP_PORT = env.HTTP_PORT;

  setGlobalMiddleware(app);
  setRouteMiddleware(app);
  setErrorMiddleware(app);

  app.listen(HTTP_PORT, '0.0.0.0', () => {
    console.log(`server on ${HTTP_PORT}`);
  });
}

startServer();

/**
 * @description 전역 미들웨어 설정
 */
export function setGlobalMiddleware(app: Application) {
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

/**
 * @description 라우터 미들웨어 설정
 */
export function setRouteMiddleware(app: Application) {
  console.log('init route middleware');
  app.use('/test', testRouter);
}

/**
 * @description 에러 미들웨어 설정
 */
export function setErrorMiddleware(app: Application) {
  app.use(notFoundExceptionMiddleware());
  app.use(httpExceptionMiddleware());
  app.use(unhandledExceptionMiddleware());
}
