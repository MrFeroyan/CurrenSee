import { BOX_BORDER, CONTENT_HEIGHT } from 'src/Application/Constants/styled'
import styled from 'styled-components'

import { Box as BoxBase, Paper as PaperBase } from '@mui/material'

export const Box = styled(BoxBase)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Paper = styled(PaperBase)`
    border: ${BOX_BORDER};
    min-width: ${CONTENT_HEIGHT};
`
