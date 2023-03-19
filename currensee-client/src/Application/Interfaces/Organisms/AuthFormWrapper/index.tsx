import React from 'react'

import { Box, Paper } from './styled'

type Props = {
    children: React.ReactNode
}

export const AuthFormWrapper = ({ children }: Props): React.ReactElement => {
    return (
        <Box>
            <Paper sx={{ padding: 4 }}>{children}</Paper>
        </Box>
    )
}
