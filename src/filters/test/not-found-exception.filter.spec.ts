import { NextFunction, Request, Response } from 'express';
import { notFoundExceptionFilter } from '../not-found-exception.filter';
import { NotFoundException } from '../../utils/custom-error.util';

describe('notFoundExceptionFilter를 테스트한다', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeAll(() => {
    req = {
      url: 'some-url',
    } as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as Response;
    next = jest.fn();
  });

  it('404 상태코드와 메시지를 응답한다', () => {
    const notFoundExceptionRequestHandler = notFoundExceptionFilter();
    notFoundExceptionRequestHandler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({
      statusCode: 404,
      message: 'api Not found',
      timestamp: expect.any(Date),
      requestURL: 'some-url',
    });
  });
});
