import React from 'react'

import { Typography } from '@mui/material'

type Props = {
    message: string
}

export const ErrorItem = ({ message }: Props): JSX.Element => {
    return (
        <Typography variant="body2" sx={{ color: 'error.main' }}>
            {message}
        </Typography>
    )
}
