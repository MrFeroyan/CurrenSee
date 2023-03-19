import { BOX_BORDER } from 'src/Application/Constants/styled'
import styled from 'styled-components'

import { Box, Typography } from '@mui/material'

export const TodayRatesWrapper = styled(Box)`
    border: ${BOX_BORDER};
    height: 100%;
`

export const Title = styled(Typography)`
    font-size: 20px !important;
`

export const RateItemBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RateItemBodyBox = styled(Box)`
    display: flex;
    alignitems: center;
    flex: 1;
`
