import React, { useState } from 'react'
import { useGetRates } from 'src/Application/Hooks/Queries/useGetRates'
import { CurrencyDashboard } from 'src/Application/Interfaces/Organisms/CurrencyDashboard'
import { TodaysRates } from 'src/Application/Interfaces/Organisms/TodayRates'
import { Currencies } from 'src/Core/Constants/Currencies'

import { CircularProgress, Grid } from '@mui/material'

import { DashboardContentWrapper, DashboardWrapper } from './styled'

export const Dashboard = (): JSX.Element => {
    const [base, setBase] = useState<Currencies>(Currencies.USD)
    const [target, setTarget] = useState<Currencies>(Currencies.CHF)

    const { data, isLoading } = useGetRates({ base, target })

    return (
        <DashboardWrapper container>
            {isLoading && <CircularProgress />}
            {data && (
                <DashboardContentWrapper container wrap="nowrap">
                    <Grid item xs={6}>
                        <CurrencyDashboard
                            base={base}
                            setBase={setBase}
                            target={target}
                            setTarget={setTarget}
                            rate={data.rate}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TodaysRates base={base} rates={data.list} />
                    </Grid>
                </DashboardContentWrapper>
            )}
        </DashboardWrapper>
    )
}
