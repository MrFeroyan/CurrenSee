import React from 'react'

import { Typography } from '@mui/material'

type Props = {
    title: string
}

export const FormTitle = ({ title }: Props): JSX.Element => {
    return (
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
            {title}
        </Typography>
    )
}
