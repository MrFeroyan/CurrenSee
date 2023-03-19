import React from 'react'
import { SignUpForm } from 'src/Application/Interfaces/Organisms/SignUpForm'
import { HOME_URL } from 'src/Core/Constants/RouteConstants'

import { Grid } from '@mui/material'

import { Wrapper } from './Auth.styled'

export const onSignUpSuccess = (): void => {
    window.location.href = HOME_URL
}

export const SignUpPage = (): JSX.Element => {
    return (
        <Wrapper container>
            <Grid item xs={3}>
                <SignUpForm onSuccess={onSignUpSuccess} />
            </Grid>
        </Wrapper>
    )
}
