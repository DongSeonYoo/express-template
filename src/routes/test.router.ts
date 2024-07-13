import { Router } from 'express';
import { testService } from '../utils/container.util';
import { asyncWrap } from '../utils/async-wrap.util';

export const testRouter = Router();

console.log('init test router');

/**
 * @endpoint GET /test/prismaClientKnownRequestError
 * @description prismaClientKnownRequestError를 발생시키는 테스트 API
 * @throws Prisma.PrismaClientKnownRequestError
 *
 * @result UnHandledExceptionMiddleware로 빠져서 500으로 응답해야 함
 */
testRouter.get(
  '/prismaClientKnownRequestError',
  asyncWrap(async (req, res, next) => {
    await testService.excutePrismaClientKnownRequestError();
  }),
);

/**
 * @endpoint GET /test/httpException
 * @description httpException을 발생시키는 테스트 API
 * @throws HttpException (BadRequestException)
 *
 * @result HttpExceptionMiddleware로 빠져서 400으로 응답해야 함
 */
testRouter.get(
  '/httpException(BadRequestException)',
  asyncWrap(async (req, res, next) => {
    await testService.excuteHttpException();
  }),
);

/**
 * @endpoint GET /test/internerServerException
 * @description InternerServerException을 발생시키는 테스트 API
 * @throws HttpException (InternalServerErrorException)
 *
 * @result HttpExceptionMiddleware로 빠져서 500으로 응답해야 함
 */
testRouter.get(
  '/httpException(InternalServerErrorException)',
  asyncWrap(async (req, res, next) => {
    await testService.excuteInternalServerErrorException();
  }),
);
