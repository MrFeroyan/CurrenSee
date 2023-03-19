import React from 'react'
import { SUB_HEADER_HEIGHT } from 'src/Application/Constants/styled'
import { FlagCAD } from 'src/Application/Interfaces/Icons/FlagCAD'
import { FlagCHF } from 'src/Application/Interfaces/Icons/FlagCHF'
import { FlagEUR } from 'src/Application/Interfaces/Icons/FlagEUR'
import { FlagGBP } from 'src/Application/Interfaces/Icons/FlagGBP'
import { FlagJPY } from 'src/Application/Interfaces/Icons/FlagJPY'
import { FlagMXN } from 'src/Application/Interfaces/Icons/FlagMXN'
import { FlagUSD } from 'src/Application/Interfaces/Icons/FlagUSD'
import { Currencies } from 'src/Core/Constants/Currencies'
import { GetRatesResponse } from 'src/Infrastructure/Types/Currency'

import { AppBar, Box, Divider, Grid, Toolbar, Typography } from '@mui/material'

import { RateItemBodyBox, RateItemBox, Title, TodayRatesWrapper } from './styled'

export type IconType = ({ width, height }: { width?: number | undefined; height?: number | undefined }) => JSX.Element

export const CURRENCY_TO_FLAG_MAP: Record<Currencies, IconType> = {
    USD: FlagUSD,
    EUR: FlagEUR,
    JPY: FlagJPY,
    GBP: FlagGBP,
    CHF: FlagCHF,
    CAD: FlagCAD,
    MXN: FlagMXN,
}

const RateItem = ({ currency, value, isLast }: { currency: Currencies; value: number; isLast: boolean }) => {
    const Icon = CURRENCY_TO_FLAG_MAP[currency]

    return (
        <Grid item xs={12}>
            <RateItemBox sx={{ px: 4 }}>
                <Icon />
                <RateItemBodyBox sx={{ ml: 2 }}>
                    <Typography variant="h6">{currency}</Typography>
                    <Typography variant="h6" sx={{ flex: 1, textAlign: 'right' }}>
                        {value.toFixed(4)}
                    </Typography>
                </RateItemBodyBox>
            </RateItemBox>
            {!isLast && (
                <Box sx={{ px: 2 }}>
                    <Divider sx={{ my: 1.5 }} />
                </Box>
            )}
        </Grid>
    )
}

export const TodaysRates = ({ base, rates }: { base: Currencies; rates: GetRatesResponse['list'] }) => {
    const title = "Today's rates"
    const subTitle = `1 ${base} =`

    return (
        <TodayRatesWrapper>
            <AppBar position="static">
                <Toolbar sx={{ height: SUB_HEADER_HEIGHT }}>
                    <Title sx={{ flexGrow: 1 }}>{title}</Title>
                    <Title>{subTitle}</Title>
                </Toolbar>
            </AppBar>
            <Box sx={{ py: 2 }}>
                <Grid container>
                    {rates.map((rate, index) => (
                        <RateItem
                            key={rate.currency}
                            currency={rate.currency as Currencies}
                            value={rate.value}
                            isLast={index === rates.length - 1}
                        />
                    ))}
                </Grid>
            </Box>
        </TodayRatesWrapper>
    )
}
