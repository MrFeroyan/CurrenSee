import React from 'react'
import { useLogout } from 'src/Application/Hooks/Auth/useLogout'

import { Button, Typography } from '@mui/material'

import { HeaderWrapper, Toolbar } from './styled'

export const Header = () => {
    const logout = useLogout()

    const title = 'CurrenSee Application'
    const logOut = 'Log Out'

    return (
        <HeaderWrapper position="static">
            <Toolbar>
                <Typography variant="h3" fontWeight={800} sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <Button color="inherit" onClick={logout}>
                    {logOut}
                </Button>
            </Toolbar>
        </HeaderWrapper>
    )
}
