import { Request, Response } from "express";

import { APPEAR_FIRST_CURRENCY } from "@constants/constants";
import { Currencies, HistoryRanges } from "@constants/enums";
import {
  getHistoryRates as getHistoryRatesBase,
  getLiveRates as getLiveRatesBase,
} from "@providers/currencyApi";
import { toFixedNumber } from "@utils/currency";
import { sendErrorResponse, sendSuccessResponse } from "@utils/response";

export const getLiveRates = async (req: Request, res: Response) => {
  try {
    const { base, target } = req.query;

    const data = await getLiveRatesBase(base as Currencies);

    const {
      [target as string as Currencies]: targetRate,
      [APPEAR_FIRST_CURRENCY]: appearFirstItem,
      ...rest
    } = data;

    const formatedData = {
      rate: toFixedNumber(targetRate, 4),
      list: [
        ...(![base, target].includes(APPEAR_FIRST_CURRENCY) && appearFirstItem
          ? [
              {
                currency: APPEAR_FIRST_CURRENCY,
                value: toFixedNumber(appearFirstItem, 4),
              },
            ]
          : []),
        ...Object.entries(rest as Record<Currencies, number>).map(
          ([key, value]) => ({
            currency: key,
            value: toFixedNumber(value, 4),
          })
        ),
      ],
    };

    return sendSuccessResponse(res, formatedData);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};

export const getHistoryRates = async (req: Request, res: Response) => {
  try {
    const { base, target, range } = req.query;

    const data = await getHistoryRatesBase(
      base as Currencies,
      target as Currencies,
      range as unknown as HistoryRanges
    );

    const formatted = Object.entries(data)
      // .reverse()
      .map(([key, item]) => ({
        date: key,
        rate: Object.values(item as Record<string, number>)[0],
      }));

    return sendSuccessResponse(res, formatted);
  } catch (err) {
    sendErrorResponse(res, err);
  }
};
