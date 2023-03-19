import { Router } from "express";

import { getHistoryRates, getLiveRates } from "@controllers/currency";
import { jwtAuthMiddleware } from "@middlewares/auth";
import { validationMiddleware } from "@middlewares/validation";
import { historyRatesValidation, liveRatesValidation } from "@schemas/currency";

const currencyRouter = Router();

currencyRouter.get(
  "/live",
  jwtAuthMiddleware,
  validationMiddleware(liveRatesValidation),
  getLiveRates
);
currencyRouter.get(
  "/history",
  jwtAuthMiddleware,
  validationMiddleware(historyRatesValidation),
  getHistoryRates
);

export default currencyRouter;
