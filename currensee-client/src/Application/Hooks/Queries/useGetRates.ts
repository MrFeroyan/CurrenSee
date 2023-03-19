import { useQuery, UseQueryResult } from 'react-query'
import { Currencies } from 'src/Core/Constants/Currencies'
import { ApiError } from 'src/Core/Models/ApiError'
import { getRates } from 'src/Infrastructure/Connectors/getRates'
import { CurrencyError, GetRatesResponse } from 'src/Infrastructure/Types/Currency'

export const queryFn =
    ({ base, target }: { base: Currencies; target: Currencies }) =>
    async (): Promise<GetRatesResponse> => {
        const result = await getRates({ base, target })

        if ('errors' in result) {
            throw new ApiError(result.errors[0].code)
        }

        return result.data
    }

export type UseGetRates = (_: {
    base: Currencies
    target: Currencies
}) => UseQueryResult<GetRatesResponse, ApiError<CurrencyError>>

export const useGetRates: UseGetRates = ({ base, target }) => {
    return useQuery({
        queryFn: queryFn({ base, target }),
        queryKey: [base, target],
    })
}
