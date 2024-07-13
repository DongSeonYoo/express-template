import 'reflect-metadata';
import express from 'express';
import { env } from './configs/env.config';
import { setGlobalMiddleware } from './utils/loaders/global-middleware.loader';
import { setRouteMiddleware } from './utils/loaders/route-middleware.loader';
import { setExceptionFilter } from './utils/loaders/exception-filter.loader';
import { logger } from './configs/logger.config';

async function startServer() {
  const app = express();
  const HTTP_PORT = env.HTTP_PORT;

  setGlobalMiddleware(app);
  setRouteMiddleware(app);
  setExceptionFilter(app);

  app.listen(HTTP_PORT, '0.0.0.0', () => {
    logger.log('info', `server on ${HTTP_PORT}`);
  });
}

startServer();
