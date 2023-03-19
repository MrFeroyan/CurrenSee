import React from 'react'
import { FormInputText } from 'src/Infrastructure/ReactHookForm/InputReactHookForm'

type Props = {
    name?: string
    label?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any
    rules?: Record<string, unknown>
}

export const PasswordInput = ({ control, name = 'password', label = 'Password', rules }: Props) => {
    return (
        <FormInputText
            rules={{
                required: { value: true, message: `${label} is required` },
                ...rules,
            }}
            type="password"
            name={name}
            control={control}
            label={label}
        />
    )
}
