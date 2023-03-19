import jwt, { JwtPayload } from "jsonwebtoken";

import { envConfig } from "@config/env";

type Payload = { id: string } & JwtPayload;

export const verifyToken = (token: string): Payload | null => {
  try {
    jwt.verify(token, envConfig.JWT_SECRET);

    return jwt.decode(token) as Payload;
  } catch (err) {
    return null;
  }
};

export const generateJWT = (id: number): string => {
  const payload = { id };

  return jwt.sign(payload, envConfig.JWT_SECRET, {
    expiresIn: "2d",
  });
};
