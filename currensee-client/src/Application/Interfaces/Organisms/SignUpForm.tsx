import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRegisterFormSubmit } from 'src/Application/Hooks/Forms/useRegisterSubmit'
import { AuthNavigate } from 'src/Application/Interfaces/Molecules/AuthNavigate'
import { ConfirmButton } from 'src/Application/Interfaces/Molecules/ConfirmButton'
import { EmailInput } from 'src/Application/Interfaces/Molecules/EmailInput'
import { AuthFormItem } from 'src/Application/Interfaces/Molecules/FormItem'
import { FormTitle } from 'src/Application/Interfaces/Molecules/FormTitle'
import { FullNameInput } from 'src/Application/Interfaces/Molecules/FullNameInput'
import { PasswordInput } from 'src/Application/Interfaces/Molecules/PasswordInput'
import { AuthFormWrapper } from 'src/Application/Interfaces/Organisms/AuthFormWrapper'
import { SIGNIN_URL } from 'src/Core/Constants/RouteConstants'
import { RegisterUserPayload } from 'src/Core/Types/SignUpUserPayload'

import { Grid } from '@mui/material'

export interface Props {
    onSuccess: () => void
}

export const SignUpForm = ({ onSuccess }: Props): React.ReactElement => {
    const [isLoading, setIsLoading] = useState(false)

    const { handleSubmit, control, setError, watch } = useForm<RegisterUserPayload>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onRegister = useRegisterFormSubmit({
        setError,
        onSuccess,
        setIsLoading,
    })

    return (
        <AuthFormWrapper>
            <form noValidate onSubmit={handleSubmit(onRegister)}>
                <AuthFormItem>
                    <FormTitle title="Register to CurrenSee" />
                </AuthFormItem>
                <Grid container spacing={2} alignItems="center">
                    <AuthFormItem>
                        <FullNameInput control={control} />
                    </AuthFormItem>
                    <AuthFormItem>
                        <EmailInput control={control} />
                    </AuthFormItem>
                    <AuthFormItem>
                        <PasswordInput
                            control={control}
                            rules={{
                                minLength: {
                                    value: 8,
                                    message: 'Minimum 8 characters are required',
                                },
                            }}
                        />
                    </AuthFormItem>
                    <AuthFormItem>
                        <PasswordInput
                            control={control}
                            name="confirmPassword"
                            label="Confirm Password"
                            rules={{
                                validate: {
                                    value: (value: string) => value === watch('password') || "Passwords don't match",
                                },
                            }}
                        />
                    </AuthFormItem>
                    <AuthFormItem>
                        <ConfirmButton isLoading={isLoading} title="Register" />
                    </AuthFormItem>
                    <AuthFormItem>
                        <AuthNavigate message="Already have an account?" title="Sign in" href={SIGNIN_URL} />
                    </AuthFormItem>
                </Grid>
            </form>
        </AuthFormWrapper>
    )
}
