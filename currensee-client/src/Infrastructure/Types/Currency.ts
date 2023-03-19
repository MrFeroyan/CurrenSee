import { Currencies } from 'src/Core/Constants/Currencies'
import { HistoryRanges } from 'src/Core/Constants/HistoryRanges'

import { HTTP_STATUSES, HttpStatusCode } from './HttpMethods'

export type GetRatesResponse = {
    rate: number
    list: { currency: Currencies; value: number }[]
}

export type GetHistoryRatesResponse = { date: string; rate: number }[]

export type CurrencyError = 'WRONG_CREDENTIALS' | 'UNAUTHORIZED' | 'INTERNAL_SERVER_ERROR' | 'UNKNOWN_ERROR'

export const STATUS_CODE_TO_ERROR_CODE_MAP: Partial<Record<HttpStatusCode, CurrencyError>> = {
    [HTTP_STATUSES.UNAUTHORIZED]: 'UNAUTHORIZED',
    [HTTP_STATUSES.BAD_REQUEST]: 'WRONG_CREDENTIALS',
    [HTTP_STATUSES.INTERNAL_SERVER_ERROR]: 'INTERNAL_SERVER_ERROR',
}

export type GetRatesParams = {
    base: Currencies
    target: Currencies
}

export type GetHistoryRatesParams = {
    base: Currencies
    target: Currencies
    range: HistoryRanges
}
