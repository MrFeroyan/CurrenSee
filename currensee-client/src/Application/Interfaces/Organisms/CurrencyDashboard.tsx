import React, { useState } from 'react'
import { RateDetails } from 'src/Application/Interfaces/Molecules/RateDetails'
import { CurrencyDashboardWrapper } from 'src/Application/Interfaces/Organisms/Dashboard/styled'
import { RateForm } from 'src/Application/Interfaces/Organisms/RateForm'
import { Currencies } from 'src/Core/Constants/Currencies'
import { DashboardState } from 'src/Core/Constants/DashboardState'

import { Divider, Grid } from '@mui/material'

import { DashboardHeader } from './DashboardHeader'
import { RatesHistory } from './RatesHistory'

type Props = {
    base: Currencies
    setBase: (val: Currencies) => void
    target: Currencies
    setTarget: (val: Currencies) => void
    rate: number
}

export const CurrencyDashboard = (props: Props): JSX.Element => {
    const [selected, setSelected] = useState<DashboardState>(DashboardState.Live)

    return (
        <CurrencyDashboardWrapper>
            <DashboardHeader selected={selected} setSelected={setSelected} />
            <Grid container paddingX={6} paddingY={2} direction="column">
                {selected === DashboardState.Live ? (
                    <>
                        <RateForm {...props} />
                        <Divider />
                        <RateDetails base={props.base} target={props.target} rate={props.rate} />
                    </>
                ) : (
                    <RatesHistory base={props.base} target={props.target} />
                )}
            </Grid>
        </CurrencyDashboardWrapper>
    )
}
