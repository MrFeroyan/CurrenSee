import React from 'react'

import { Grid } from '@mui/material'

type Props = {
    children: React.ReactNode
}

export const AuthFormItem = ({ children }: Props): JSX.Element => {
    return (
        <Grid item xs={12}>
            {children}
        </Grid>
    )
}
