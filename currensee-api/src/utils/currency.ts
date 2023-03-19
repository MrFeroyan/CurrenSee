import { Currencies } from "@constants/enums";

export const getTargetCurrencies = (base: Currencies): Currencies[] =>
  Object.values(Currencies).filter((item) => item !== base);

export const toFixedNumber = (num: number, digits: number) => {
  const pow = Math.pow(10, digits);

  return Math.round(num * pow) / pow;
};
