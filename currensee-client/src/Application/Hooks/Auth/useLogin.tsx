import { useCallback } from 'react'
import { useLoginUser } from 'src/Application/Hooks/Mutations/useLoginUser'
import { ApiError } from 'src/Core/Models/ApiError'
import { LoginUserParams } from 'src/Infrastructure/Connectors/loginUser'
import { setAuthCookies } from 'src/Infrastructure/Cookies'
import { AuthErrorCode } from 'src/Infrastructure/Types/Auth'

import { useAuth } from './useAuth'

export type Login = (variables: LoginUserParams) => Promise<void>
export type UseLogin = (options: {
    onSuccess?: () => void
    onError?: (error: ApiError<AuthErrorCode>) => void
    setIsLoading: (value: boolean) => void
}) => Login

export const useLogin: UseLogin = ({ onSuccess, onError, setIsLoading }) => {
    const { login } = useAuth()
    const { mutate } = useLoginUser()

    return useCallback(
        async (variables: LoginUserParams) => {
            setIsLoading(true)
            mutate(variables, {
                onSuccess: (data) => {
                    setIsLoading(false)

                    login()
                    setAuthCookies(data.token)

                    onSuccess?.()
                },
                onError: (err) => {
                    setIsLoading(false)
                    onError?.(err)
                },
            })
        },
        [login, mutate, onSuccess, onError, setIsLoading]
    )
}
