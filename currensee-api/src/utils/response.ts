import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

type ResponseData = {
  success: boolean;
  message: string;
  data: Record<string, unknown> | Array<Record<string, unknown>> | null;
};

export const sendErrorResponse = (res: Response, error: unknown): void => {
  // eslint-disable-next-line no-console
  console.log(error);

  sendCustomResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, {
    success: false,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    data: null,
  });
};

export const sendSuccessResponse = (
  res: Response,
  data: ResponseData["data"] = null
): void => {
  sendCustomResponse(res, StatusCodes.OK, {
    success: true,
    message: ReasonPhrases.OK,
    data,
  });
};

export const sendUnauthorizedResponse = (
  res: Response,
  message: string = ReasonPhrases.UNAUTHORIZED
): void => {
  sendCustomResponse(res, StatusCodes.UNAUTHORIZED, {
    success: false,
    message,
    data: null,
  });
};

export const sendNotFoundResponse = (res: Response): void => {
  sendCustomResponse(res, StatusCodes.NOT_FOUND, {
    success: false,
    message: ReasonPhrases.NOT_FOUND,
    data: null,
  });
};

export const sendCustomResponse = (
  res: Response,
  statusCode: number,
  data: ResponseData | null
): void => {
  res.status(statusCode).json(data);
};
