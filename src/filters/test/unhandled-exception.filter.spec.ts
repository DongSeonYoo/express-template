import { NextFunction, Request, Response } from 'express';
import { unhandledExceptionFilter } from '../../filters/unhandled-exception.filter';
import { Logger } from 'winston';

describe('unhandledExceptionFilter를 테스트한다', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;
  let mockLogger: Logger;

  beforeAll(() => {
    req = {
      url: 'some-url',
    } as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as Response;
    next = jest.fn();

    mockLogger = {
      debug: jest.fn(),
      error: jest.fn(),
    } as unknown as Logger;
  });

  it('처리되지 못한 에러가 발생하였을 경우 로그를 남긴 후 응답을 보내준다.', () => {
    // given
    const err = new Error('Test Error');
    const unhandledFilter = unhandledExceptionFilter(mockLogger);

    // when
    unhandledFilter(err, req, res, next);

    // then
    expect(mockLogger.error).toHaveBeenCalledWith(
      `[ERROR] - [${new Date()}] [${req.method} ${req.url}] ${err}\n`,
    );
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      statusCode: 500,
      message: 'Internal Server Error',
      timestamp: expect.any(Date),
      requestURL: req.url,
    });
  });
});
