import fetch from "node-fetch";

import { envConfig } from "@config/env";
import { CURRENCY_API_BASE_URL } from "@constants/constants";
import { Currencies, HistoryRanges } from "@constants/enums";
import { getTargetCurrencies } from "@utils/currency";
import { getFormattedStartDate } from "@utils/date";

export const getLiveRates = async (
  base: Currencies = Currencies.USD
): Promise<Record<Currencies, number>> => {
  const url = new URL(`${CURRENCY_API_BASE_URL}/latest`);
  url.searchParams.append("base_currency", base);
  url.searchParams.append("currencies", getTargetCurrencies(base).join(","));

  const response = await fetch(url.href, {
    method: "GET",
    headers: {
      apikey: envConfig.CURRENCY_API_KEY as string,
    },
  });

  return (await response.json()).data as Promise<Record<Currencies, number>>;
};

export const getHistoryRates = async (
  base: Currencies = Currencies.USD,
  target: Currencies = Currencies.GBP,
  range: HistoryRanges = HistoryRanges.Last3Months
) => {
  const url = new URL(`${CURRENCY_API_BASE_URL}/historical`);
  url.searchParams.append("base_currency", base);
  url.searchParams.append("currencies", target);
  url.searchParams.append("date_from", getFormattedStartDate(range));

  const response = await fetch(url.href, {
    method: "GET",
    headers: {
      apikey: envConfig.CURRENCY_API_KEY as string,
    },
  });

  return (await response.json()).data;
};
