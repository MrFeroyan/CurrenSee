import React from 'react'
import { Controller } from 'react-hook-form'

import { TextField } from '@mui/material'

export interface FormInputProps {
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any
    label: string
    rules?: Record<string, unknown>
    type?: string
}

export const FormInputText = ({ name, control, label, rules, type }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    type={type}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                />
            )}
        />
    )
}
