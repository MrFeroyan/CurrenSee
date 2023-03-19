import React from 'react'
import { Currencies } from 'src/Core/Constants/Currencies'

import { Grid, Typography } from '@mui/material'

type Props = {
    base: Currencies
    target: Currencies
    rate: number
}

function getFormattedNow() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.toLocaleString('default', { month: 'short' })
    const day = currentDate.getDate().toString().padStart(2, '0')
    const hours = currentDate.getHours().toString().padStart(2, '0')
    const minutes = currentDate.getMinutes().toString().padStart(2, '0')
    const seconds = currentDate.getSeconds().toString().padStart(2, '0')

    const formattedDate = `${year} ${month} ${day} ${hours}:${minutes}:${seconds}`
    return formattedDate
}

export const RateDetails = ({ base, target, rate }: Props): JSX.Element => {
    const title = 'Your rate:'
    const rateDetails = `${base} 1 = ${target} ${rate.toFixed(4)}`
    const lastUpdated = `Last updated: ${getFormattedNow()}`

    return (
        <Grid container direction="column" sx={{ marginTop: '20px' }}>
            <Typography variant="subtitle2">{title}</Typography>
            <Typography variant="h5">{rateDetails}</Typography>
            <Typography variant="subtitle2">{lastUpdated}</Typography>
        </Grid>
    )
}
