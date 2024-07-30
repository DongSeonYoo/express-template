import 'reflect-metadata';
import express from 'express';
import { env } from './configs/env.config';
import { SetGlobalMiddleware } from './utils/loaders/global-middleware.loader';
import { SetRouteMiddleware } from './utils/loaders/route-middleware.loader';
import { SetExceptionFilter } from './utils/loaders/exception-filter.loader';
import { logger } from './configs/logger.config';
import { SetInterceptors } from './utils/loaders/interceptor.loader';

async function startServer() {
  const app = express();
  const HTTP_PORT = env.HTTP_PORT;

  SetGlobalMiddleware(app);
  SetInterceptors(app);
  SetInterceptors(app);
  SetRouteMiddleware(app);
  SetExceptionFilter(app);

  app.listen(HTTP_PORT, '0.0.0.0', () => {
    logger.log('info', `server on ${HTTP_PORT}`);
  });
}

startServer();
