import { RequestHandler } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { HttpStatus } from '../utils/http-status.util';

export const validate = (validations: ValidationChain[]): RequestHandler => {
  return async (req, res, next) => {
    const validationPromises = validations.map((validation) => validation.run(req));
    await Promise.all(validationPromises);

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const validationError = errors
      .array()
      .map((error) => `[${error['location']}] ${error['path']}: ${error['msg']}`);

    return res.status(HttpStatus.BAD_REQUEST).send({
      validationError,
    });
  };
};
