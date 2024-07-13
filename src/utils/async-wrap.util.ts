import { Request, Response, NextFunction, RequestHandler } from 'express';

export const asyncWrap = (cb: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(cb(req, res, next)).catch(next);
  };
};
