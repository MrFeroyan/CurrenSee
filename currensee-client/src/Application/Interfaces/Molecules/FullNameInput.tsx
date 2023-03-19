import React from 'react'
import { FormInputText } from 'src/Infrastructure/ReactHookForm/InputReactHookForm'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any
}

export const FullNameInput = ({ control }: Props) => {
    return (
        <FormInputText
            rules={{
                required: { value: true, message: 'Full Name is required' },
                minLength: {
                    value: 3,
                    message: 'Invalid Full Name',
                },
            }}
            name="fullName"
            control={control}
            label="Full Name"
        />
    )
}
