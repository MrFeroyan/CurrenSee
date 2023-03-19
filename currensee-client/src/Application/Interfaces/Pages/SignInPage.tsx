import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { SignInForm } from 'src/Application/Interfaces/Organisms/SignInForm'
import { HOME_URL } from 'src/Core/Constants/RouteConstants'

import Grid from '@mui/material/Grid'

import { Wrapper } from './Auth.styled'

export const onLoginSuccess = (navigate: NavigateFunction) => (): void => {
    navigate(HOME_URL)
}

export const SignInPage = (): React.ReactElement => {
    const navigate = useNavigate()

    return (
        <Wrapper container>
            <Grid item xs={3}>
                <SignInForm onLoginSuccess={onLoginSuccess(navigate)} />
            </Grid>
        </Wrapper>
    )
}
