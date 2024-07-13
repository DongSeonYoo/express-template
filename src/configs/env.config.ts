import dotenv from 'dotenv';

dotenv.config();

export const env = {
  //mode
  MODE: process.env.MODE as string,

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN as string,

  //server port
  HTTP_PORT: Number(process.env.HTTP_PORT) as number,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,
};
