import React from 'react'

import { Link, Typography } from '@mui/material'

type Props = {
    title: string
    href: string
    message: string
}

export const AuthNavigate = ({ title, href, message }: Props) => {
    return (
        <Typography variant="body2">
            {message}{' '}
            <Link href={href} underline="hover" sx={{ color: 'primary.main' }}>
                {title}
            </Link>
        </Typography>
    )
}
