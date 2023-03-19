import { useQuery, UseQueryResult } from 'react-query'
import { Currencies } from 'src/Core/Constants/Currencies'
import { HistoryRanges } from 'src/Core/Constants/HistoryRanges'
import { ApiError } from 'src/Core/Models/ApiError'
import { getHustoryRates } from 'src/Infrastructure/Connectors/getHistoryRates'
import { CurrencyError, GetHistoryRatesResponse } from 'src/Infrastructure/Types/Currency'

export const queryFn =
    ({ base, target, range }: { base: Currencies; target: Currencies; range: HistoryRanges }) =>
    async (): Promise<GetHistoryRatesResponse> => {
        const result = await getHustoryRates({ base, target, range })

        if ('errors' in result) {
            throw new ApiError(result.errors[0].code)
        }

        return result.data
    }

export type UseGetHistoryRates = (_: {
    base: Currencies
    target: Currencies
    range: HistoryRanges
}) => UseQueryResult<GetHistoryRatesResponse, ApiError<CurrencyError>>

export const useGetHistoryRates: UseGetHistoryRates = ({ base, target, range }) => {
    return useQuery({
        queryFn: queryFn({ base, target, range }),
        queryKey: [base, target, range],
    })
}
