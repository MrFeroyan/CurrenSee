import { NextFunction, Request, Response } from "express";

import UserModel from "@db/user";
import { verifyToken } from "@utils/auth";
import { sendErrorResponse, sendUnauthorizedResponse } from "@utils/response";

export const jwtAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return sendUnauthorizedResponse(res);
    }

    const token = bearerToken.slice(7);
    const payload = verifyToken(token);
    if (!payload) {
      return sendUnauthorizedResponse(res);
    }

    const { id } = payload;

    const user = await UserModel.findOne({ where: { id } });

    if (!user) {
      return sendUnauthorizedResponse(res);
    }

    return next();
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};
