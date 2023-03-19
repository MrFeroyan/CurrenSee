import styled from 'styled-components'

import { Grid, TextField as TextFieldBase } from '@mui/material'

export const RateFormWrapper = styled(Grid)`
    display: flex;
    direction: column;
    min-height: 250px;
`

export const RateRowWrapper = styled(Grid)`
    display: flex;
    direction: row;
    justify-content: space-between;
    alignitems: stretch;
`

export const RateRowTitle = styled.span``

export const RateRowItem = styled(Grid)``

export const TextField = styled(TextFieldBase)`
    min-width: 350px;
`
