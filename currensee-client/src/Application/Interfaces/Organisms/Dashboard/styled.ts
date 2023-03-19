import { BOX_BORDER, CONTENT_HEIGHT, HEADER_HEIGHT, SUB_HEADER_HEIGHT } from 'src/Application/Constants/styled'
import styled from 'styled-components'

import { Box, Grid, Tab, Tabs } from '@mui/material'
export const DashboardWrapper = styled(Grid)`
    direction: row;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - ${HEADER_HEIGHT});
`

export const DashboardContentWrapper = styled(Grid)`
    direction: row;
    align-items: center;
    justify-content: center;
    height: ${CONTENT_HEIGHT};

    > div {
        height: 100%;
    }

    > div:first-child {
        margin-right: 30px;
    }
`

export const DashboardHeaderTabs = styled(Tabs)`
    height: ${SUB_HEADER_HEIGHT};
`

export const DashboardHeaderTab = styled(Tab)`
    height: ${SUB_HEADER_HEIGHT};
    font-weight: 400 !important;
    font-size: 20px !important;
    text-transform: none !important;
`

export const CurrencyDashboardWrapper = styled(Box)`
    border: ${BOX_BORDER};
    height: 100%;
`
