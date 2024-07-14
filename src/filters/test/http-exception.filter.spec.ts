import { NextFunction, Request, Response } from 'express';
import { httpExceptionFilter } from '../../filters/http-exception.filter';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '../../utils/custom-error.util';

describe('httpExceptionFilter를 테스트한다', () => {
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

  describe('httpException을 상속받고 있는 에러를 던졌을 경우 HttpExceptionFilter가 호출된다', () => {
    it('BadRequestException을 던졌을 경우', () => {
      // given
      const err = new BadRequestException('BadRequestException');

      // when
      const httpFilter = httpExceptionFilter();
      httpFilter(err, req, res, next);

      // then
      expect(res.status).toHaveBeenCalledWith(err.statusCode);
      expect(res.send).toHaveBeenCalledWith({
        statusCode: err.statusCode,
        message: err.message,
        timestamp: expect.any(Date),
        requestURL: req.url,
      });
    });

    it('UnauthorizedException을 던졉을 경우', () => {
      // given
      const err = new UnauthorizedException('UnauthorizedException');

      // when
      const httpFilter = httpExceptionFilter();
      httpFilter(err, req, res, next);

      // then
      expect(res.status).toHaveBeenCalledWith(err.statusCode);
      expect(res.send).toHaveBeenCalledWith({
        statusCode: err.statusCode,
        message: err.message,
        timestamp: expect.any(Date),
        requestURL: req.url,
      });
    });

    it('NotFoundException을 던졌을 경우', () => {
      // given
      const err = new NotFoundException('NotFoundException');

      // when
      const httpFilter = httpExceptionFilter();
      httpFilter(err, req, res, next);

      // then
      expect(res.status).toHaveBeenCalledWith(err.statusCode);
      expect(res.send).toHaveBeenCalledWith({
        statusCode: err.statusCode,
        message: err.message,
        timestamp: expect.any(Date),
        requestURL: req.url,
      });
    });

    it('ConflictException을 던졌을 경우', () => {
      // given
      const err = new ConflictException('ConflictException');

      // when
      const httpFilter = httpExceptionFilter();
      httpFilter(err, req, res, next);

      // then
      expect(res.status).toHaveBeenCalledWith(err.statusCode);
      expect(res.send).toHaveBeenCalledWith({
        statusCode: err.statusCode,
        message: err.message,
        timestamp: expect.any(Date),
        requestURL: req.url,
      });
    });

    it('InternalServerErrorException을 던졌을 경우에는 다음 미들웨어로 넘어간다', () => {
      // given
      const err = new InternalServerErrorException('InternalServerErrorException');

      // when
      const httpFilter = httpExceptionFilter();
      httpFilter(err, req, res, next);

      // then
      expect(next).toHaveBeenCalled();
    });
  });

  it('HttpException이 아닌 에러인 경우 다음 미들웨어로 넘어간다', () => {
    // given
    const err = new Error('unexpected error occured');

    // when
    const httpFilter = httpExceptionFilter();
    httpFilter(err, req, res, next);

    // given
    expect(next).toHaveBeenCalled();
  });
});
