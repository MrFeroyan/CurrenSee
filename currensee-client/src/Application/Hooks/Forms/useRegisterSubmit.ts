import { UseFormSetError } from 'react-hook-form'
import { useRegister } from 'src/Application/Hooks/Auth/useRegister'
import { setErrorToField } from 'src/Application/Utils/FormUtility'
import { ErrorType } from 'src/Core/Types/Error'
import { RegisterUserPayload } from 'src/Core/Types/SignUpUserPayload'
import { AuthErrorCode } from 'src/Infrastructure/Types/Auth'

type UseRegisterFormSubmit = ({
    setError,
    onSuccess,
    setIsLoading,
}: {
    setError: UseFormSetError<RegisterUserPayload>
    onSuccess: () => void
    setIsLoading: (value: boolean) => void
}) => (data: RegisterUserPayload) => Promise<void>

const FIELDS_ERROR_MAP: Partial<Record<AuthErrorCode, ErrorType<RegisterUserPayload>>> = {
    CONFLICT: { fieldname: 'email', message: 'Email is already taken' },
}

export const useRegisterFormSubmit: UseRegisterFormSubmit = ({ setError, onSuccess, setIsLoading }) => {
    return useRegister({
        onSuccess,
        onError: (error) => {
            if (FIELDS_ERROR_MAP[error.code]) {
                setErrorToField(setError, [FIELDS_ERROR_MAP[error.code]] as ErrorType<RegisterUserPayload>[])
            }
        },
        setIsLoading,
    })
}
