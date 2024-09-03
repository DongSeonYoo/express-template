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

  SetGlobalMiddleware(app);
  SetInterceptors(app);
  SetInterceptors(app);
  SetRouteMiddleware(app);
  SetExceptionFilter(app);

  return app;
}

startServer().then((app) => {
  app.listen(env.HTTP_PORT, '127.0.0.1', () => {
    logger.log('info', `server on ${env.HTTP_PORT}`);
  });
});
