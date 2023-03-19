import React, { SyntheticEvent, useState } from 'react'
import { useGetHistoryRates } from 'src/Application/Hooks/Queries/useGetHistoryRates'
import { HistoryChart } from 'src/Application/Interfaces/Organisms/HistoryChart'
import { Currencies } from 'src/Core/Constants/Currencies'
import { HistoryRanges } from 'src/Core/Constants/HistoryRanges'

import { CircularProgress, Tabs } from '@mui/material'

import { RatesRangeTab, SpinnerWrapper } from './styled'

export type Props = {
    base: Currencies
    target: Currencies
}

export const RatesHistory = ({ base, target }: Props): JSX.Element => {
    const [selected, setSelected] = useState<HistoryRanges>(HistoryRanges.LastMonth)
    const { data, isLoading } = useGetHistoryRates({
        base,
        target,
        range: selected,
    })

    const handleTabChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
        event.preventDefault()
        setSelected(newValue)
    }

    const RANGES_TO_LABEL_MAP: Record<HistoryRanges, string> = {
        [HistoryRanges.LastMonth]: 'Last month',
        [HistoryRanges.Last3Months]: 'Last 3 months',
        [HistoryRanges.Last6Months]: 'Last 6 months',
        [HistoryRanges.LastYear]: 'Last 12 month',
    }

    return (
        <>
            <Tabs
                value={selected}
                onChange={handleTabChange}
                sx={{
                    backgroundColor: 'white',
                    marginBottom: '20px',
                }}
            >
                <RatesRangeTab label={RANGES_TO_LABEL_MAP[HistoryRanges.LastMonth]} />
                <RatesRangeTab label={RANGES_TO_LABEL_MAP[HistoryRanges.Last3Months]} />
                <RatesRangeTab label={RANGES_TO_LABEL_MAP[HistoryRanges.Last6Months]} />
                <RatesRangeTab label={RANGES_TO_LABEL_MAP[HistoryRanges.LastYear]} />
            </Tabs>
            {isLoading && (
                <SpinnerWrapper>
                    <CircularProgress />
                </SpinnerWrapper>
            )}
            {data && <HistoryChart data={data} />}
        </>
    )
}
