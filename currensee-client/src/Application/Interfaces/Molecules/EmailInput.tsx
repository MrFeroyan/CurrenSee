import React from 'react'
import { EMAIL_REGEXP } from 'src/Core/Constants/ValidationConstants'
import { FormInputText } from 'src/Infrastructure/ReactHookForm/InputReactHookForm'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any
}

export const EmailInput = ({ control }: Props) => {
    return (
        <FormInputText
            rules={{
                required: { value: true, message: 'Email is required' },
                pattern: {
                    value: EMAIL_REGEXP,
                    message: 'Invalid Email',
                },
            }}
            name="email"
            control={control}
            label="Email"
        />
    )
}
