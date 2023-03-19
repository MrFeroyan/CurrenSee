import { RefObject } from 'react'
import { FieldValues, UseFormSetError } from 'react-hook-form'
import { ErrorType } from 'src/Core/Types/Error'

export function setErrorToField<T extends FieldValues>(setError: UseFormSetError<T>, errors: ErrorType<T>[]): void {
    errors.map((error: ErrorType<T>) => setError(error.fieldname, { message: error.message }))
}

export const dispatchSubmitEvent = (formRef: RefObject<HTMLFormElement>): void => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
}
