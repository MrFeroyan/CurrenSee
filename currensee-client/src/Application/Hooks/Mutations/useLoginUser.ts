import { useMutation, UseMutationResult } from 'react-query'
import { ApiError } from 'src/Core/Models/ApiError'
import { loginUser, LoginUserParams } from 'src/Infrastructure/Connectors/loginUser'
import { AuthErrorCode, AuthResponse } from 'src/Infrastructure/Types/Auth'

export const mutationFn = async (params: LoginUserParams): Promise<AuthResponse> => {
    const result = await loginUser(params)

    if ('errors' in result) {
        throw new ApiError(result.errors[0].code)
    }

    return result.data
}

export type UseLoginUser = () => UseMutationResult<AuthResponse, ApiError<AuthErrorCode>, LoginUserParams>

export const useLoginUser: UseLoginUser = () => useMutation(mutationFn)
