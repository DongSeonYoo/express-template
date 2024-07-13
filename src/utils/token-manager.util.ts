import jwt from 'jsonwebtoken';
import { env } from '../configs/env.config';
import { ITokenPayload } from '../interfaces/token-payload.interface';

export namespace TokenManager {
  export const generate = (userInfo: ITokenPayload) => {
    const issuer = 'DongSeonYoo';

    return jwt.sign(userInfo, env.JWT_SECRET_KEY, {
      issuer,
    });
  };

  export const verify = (token: string): ITokenPayload | null => {
    try {
      const payload = <ITokenPayload>jwt.verify(token, env.JWT_SECRET_KEY);
      if (typeof payload === 'string') {
        return null;
      }

      return payload;
    } catch (error) {
      return null;
    }
  };
}
