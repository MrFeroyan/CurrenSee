import { HistoryRanges } from "@constants/enums";

export const getFormattedStartDate = (range: HistoryRanges): string => {
  const RANGE_TO_MONTHS_MAP: Record<HistoryRanges, number> = {
    [HistoryRanges.LastMonth]: 1,
    [HistoryRanges.Last3Months]: 3,
    [HistoryRanges.Last6Months]: 6,
    [HistoryRanges.LastYear]: 12,
  };

  const date = new Date();
  date.setMonth(date.getMonth() - RANGE_TO_MONTHS_MAP[range]);

  const [formatedDate] = date.toISOString().split("T");

  return formatedDate;
};
