import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

import { sendCustomResponse } from "@utils/response";

export const validationMiddleware = (schema: {
  body?: Joi.Schema;
  query?: Joi.Schema;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body, query } = schema;

    let bodyValidationError;
    let queryValidationError;

    if (body) {
      bodyValidationError = body.validate(req.body).error;
    }

    if (query) {
      queryValidationError = query.validate(req.query).error;
    }

    const error = bodyValidationError || queryValidationError;

    if (!error) {
      next();
    } else {
      const message = error.details[0].message;

      return sendCustomResponse(res, StatusCodes.BAD_REQUEST, {
        success: false,
        message,
        data: null,
      });
    }
  };
};
