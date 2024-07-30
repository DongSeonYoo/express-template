import { Router } from 'express';
import { DependencyManager } from '../utils/dependency-manager.util';
import { asyncWrap } from '../utils/async-wrap.util';
import { TestService } from '../services/test.service';

export const testRouter = Router();

const testService = DependencyManager.getContainer(TestService);

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
  '/httpException',
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
  '/httpException',
  asyncWrap(async (req, res, next) => {
    await testService.excuteInternalServerErrorException();
  }),
);

/**
 * @endpoint GET /test/success
 * @description 성공 응답을 반환하는 테스트 API
 *
 * @result 200으로 응답해야 함
 */
testRouter.get(
  '/success',
  asyncWrap(async (req, res, next) => {
    const result = await testService.successTest();

    return res.send(result);
  }),
);
