import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import UserModel from "@db/user";
import { generateJWT } from "@utils/auth";
import {
  sendCustomResponse,
  sendErrorResponse,
  sendSuccessResponse,
  sendUnauthorizedResponse,
} from "@utils/response";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const alreadyExists = await UserModel.count({ where: { email } });

    if (alreadyExists) {
      return sendCustomResponse(res, StatusCodes.CONFLICT, {
        success: false,
        message: "Email alryeady taken",
        data: null,
      });
    }

    const user = await UserModel.create({
      fullName: req.body.fullName as string,
      email: req.body.email as string,
      password: bcrypt.hashSync(req.body.password, 12),
    });

    return sendSuccessResponse(res, { token: generateJWT(user.id) });
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return sendUnauthorizedResponse(res, "Invalid email or password");
    }

    return sendSuccessResponse(res, { token: generateJWT(user.id) });
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};
