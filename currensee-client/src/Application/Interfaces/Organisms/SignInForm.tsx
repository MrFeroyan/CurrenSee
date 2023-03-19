import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoginFormSubmit } from 'src/Application/Hooks/Forms/useLoginSubmit'
import { AuthNavigate } from 'src/Application/Interfaces/Molecules/AuthNavigate'
import { ConfirmButton } from 'src/Application/Interfaces/Molecules/ConfirmButton'
import { EmailInput } from 'src/Application/Interfaces/Molecules/EmailInput'
import { ErrorItem } from 'src/Application/Interfaces/Molecules/ErrorItem'
import { AuthFormItem } from 'src/Application/Interfaces/Molecules/FormItem'
import { FormTitle } from 'src/Application/Interfaces/Molecules/FormTitle'
import { PasswordInput } from 'src/Application/Interfaces/Molecules/PasswordInput'
import { AuthFormWrapper } from 'src/Application/Interfaces/Organisms/AuthFormWrapper'
import { SIGNUP_URL } from 'src/Core/Constants/RouteConstants'
import { SignInUserPayload } from 'src/Core/Types/SignInUserPayload'

import { Grid } from '@mui/material'

export interface Props {
    onLoginSuccess: () => void
}

export const SignInForm = ({ onLoginSuccess }: Props): React.ReactElement => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const { handleSubmit, control, watch } = useForm<SignInUserPayload>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    useEffect(() => {
        const subscription = watch(() => setIsError(false))
        return () => subscription.unsubscribe()
    }, [watch])

    const onLogin = useLoginFormSubmit({
        onLoginSuccess,
        setIsLoading,
        setIsError,
    })

    return (
        <AuthFormWrapper>
            <form noValidate onSubmit={handleSubmit(onLogin)}>
                <AuthFormItem>
                    <FormTitle title="Login to CurrenSee" />
                </AuthFormItem>
                <Grid container spacing={2} alignItems="center">
                    <AuthFormItem>
                        <EmailInput control={control} />
                    </AuthFormItem>
                    <AuthFormItem>
                        <PasswordInput control={control} />
                    </AuthFormItem>
                    <AuthFormItem>{isError && <ErrorItem message="Email or password are incorrect" />}</AuthFormItem>
                    <AuthFormItem>
                        <ConfirmButton isLoading={isLoading} title="Login" />
                    </AuthFormItem>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <AuthNavigate message="Don't have an account?" title="Sign up" href={SIGNUP_URL} />
                    </Grid>
                </Grid>
            </form>
        </AuthFormWrapper>
    )
}
