import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ISuccessResponse } from '../interfaces/repsonse.interface';

const processedResponse = new WeakMap<Response, boolean>();

/**
 * 응답 데이터를 정제하는 인터셉터
 *
 * @returns RequestHandler
 */
export function responseInterceptor<T>(): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const originalSend = res.send;

    res.send = function (body: T): Response {
      if (processedResponse.get(this)) {
        return originalSend.call(this, body);
      }

      const responseData = prepareResponseData<T>(this.statusCode, body, req.url);

      processedResponse.set(this, true);
      return originalSend.call(this, responseData);
    };

    return next();
  };
}

/**
 * 응답 데이터를 정제하는 함수
 *
 * @param statusCode
 * @param body
 * @param requestURL
 * @template T
 *
 * @returns ISuccessResponse<T>
 * @description 응답 데이터를 정제하여 반환, statusCode가 200이 아닐 경우 body를 그대로 반환
 */
function prepareResponseData<T>(
  statusCode: number,
  body: T,
  requestURL: string,
): ISuccessResponse<T> | T {
  if (statusCode === 200) {
    return {
      statusCode,
      message: '',
      timestamp: new Date(),
      requestURL,
      data: body,
    };
  }

  return body;
}
