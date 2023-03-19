import { useCallback } from 'react'
import { useRegisterUser } from 'src/Application/Hooks/Mutations/useRegisterUser'
import { ApiError } from 'src/Core/Models/ApiError'
import { RegisterUserPayload } from 'src/Core/Types/RegisterUser'
import { setAuthCookies } from 'src/Infrastructure/Cookies'
import { AuthErrorCode } from 'src/Infrastructure/Types/Auth'

import { useAuth } from './useAuth'

export type Register = (variables: RegisterUserPayload) => Promise<void>
export type UseRegister = (options: {
    onSuccess?: () => void
    onError?: (error: ApiError<AuthErrorCode>) => void
    setIsLoading?: (value: boolean) => void
}) => Register

export const useRegister: UseRegister = ({ onSuccess, onError, setIsLoading }) => {
    const { login } = useAuth()
    const { mutate } = useRegisterUser()

    return useCallback(
        async (variables: RegisterUserPayload) => {
            setIsLoading?.(true)
            mutate(variables, {
                onSuccess: (data) => {
                    setIsLoading?.(false)
                    login()
                    setAuthCookies(data.token)
                    onSuccess?.()
                },
                onError: (err) => {
                    setIsLoading?.(false)
                    onError?.(err)
                },
            })
        },
        [setIsLoading, mutate, login, onSuccess, onError]
    )
}
