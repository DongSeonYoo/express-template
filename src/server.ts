import 'reflect-metadata';
import express from 'express';
import { env } from './configs/env.config';
import { setGlobalMiddleware } from './utils/loaders/global.loader';
import { setRouteMiddleware } from './utils/loaders/router.loader';
import { setExceptionFilter } from './utils/loaders/error-middleware.loader';

async function startServer() {
  const app = express();
  const HTTP_PORT = env.HTTP_PORT;

  setGlobalMiddleware(app);
  setRouteMiddleware(app);
  setExceptionFilter(app);

  app.listen(HTTP_PORT, '0.0.0.0', () => {
    console.log(`server on ${HTTP_PORT}`);
  });
}

startServer();
