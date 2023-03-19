import { HEADER_HEIGHT } from 'src/Application/Constants/styled'
import styled from 'styled-components'

import { AppBar, Toolbar as ToolBarBase } from '@mui/material'

export const HeaderWrapper = styled(AppBar)`
    display: flex;
    justify-content: center;
    text-align: center;
    height: ${HEADER_HEIGHT};
`

export const Toolbar = styled(ToolBarBase)`
    text-align: center;
`
