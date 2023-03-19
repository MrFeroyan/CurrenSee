import { FieldPath, FieldValues } from 'react-hook-form'

export interface ErrorType<T extends FieldValues> {
    fieldname: FieldPath<T>
    message: string
}
