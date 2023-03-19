import React from 'react'

import { Button } from '@mui/material'

type Props = {
    title: string
    isLoading: boolean
}

export const ConfirmButton = ({ isLoading, title }: Props) => {
    return (
        <Button
            type="submit"
            disabled={isLoading}
            sx={{
                bgcolor: isLoading ? 'grey.500' : 'primary.main',
                color: 'white',
                '&:hover': {
                    bgcolor: isLoading ? 'grey.500' : 'primary.dark',
                },
            }}
        >
            {title}
        </Button>
    )
}
