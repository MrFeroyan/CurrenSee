import Joi from "joi";

import { Currencies, HistoryRanges } from "@constants/enums";

export const liveRatesValidation = {
  query: Joi.object().keys({
    base: Joi.string()
      .valid(...Object.values(Currencies))
      .required(),
    target: Joi.string()
      .valid(...Object.values(Currencies))
      .required(),
  }),
};

export const historyRatesValidation = {
  query: Joi.object().keys({
    base: Joi.string()
      .valid(...Object.values(Currencies))
      .required(),
    target: Joi.string()
      .valid(...Object.values(Currencies))
      .required(),
    range: Joi.number()
      .valid(...Object.values(HistoryRanges))
      .required(),
  }),
};
