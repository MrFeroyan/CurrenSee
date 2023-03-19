import { ConnectorResult } from 'src/Infrastructure/Types/Connector'
import {
    CurrencyError,
    GetRatesParams,
    GetRatesResponse,
    STATUS_CODE_TO_ERROR_CODE_MAP,
} from 'src/Infrastructure/Types/Currency'
import { HTTP_METHODS, HttpStatusCode } from 'src/Infrastructure/Types/HttpMethods'

import { getHeaders } from './utils'

export const GET_RATES_ENDPOINT = 'http://localhost:3005/api/currency/live'

export type GetRates = (params: GetRatesParams) => Promise<ConnectorResult<GetRatesResponse, CurrencyError>>

export const getRates: GetRates = async (params) => {
    try {
        const urlParams = new URLSearchParams(params)

        const response = await fetch(`${GET_RATES_ENDPOINT}?${urlParams.toString()}`, {
            method: HTTP_METHODS.GET,
            headers: getHeaders(),
        })

        const data = await response.json()

        if (!response.ok) {
            const code = STATUS_CODE_TO_ERROR_CODE_MAP[response.status as HttpStatusCode] ?? 'UNKNOWN_ERROR'

            return {
                errors: [{ code }],
            }
        }

        return {
            data: data.data,
        }
    } catch {
        return { errors: [{ code: 'UNKNOWN_ERROR' }] }
    }
}
