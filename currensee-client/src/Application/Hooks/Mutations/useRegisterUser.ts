import { useMutation, UseMutationResult } from 'react-query'
import { ApiError } from 'src/Core/Models/ApiError'
import { RegisterUserPayload } from 'src/Core/Types/RegisterUser'
import { registerUser } from 'src/Infrastructure/Connectors/registerUser'
import { AuthErrorCode, AuthResponse } from 'src/Infrastructure/Types/Auth'

export const mutationFn =
    () =>
    async (params: RegisterUserPayload): Promise<AuthResponse> => {
        const result = await registerUser(params)

        if ('errors' in result) {
            throw new ApiError(result.errors[0].code)
        }

        return result.data
    }

export type UseRegisterUser = () => UseMutationResult<AuthResponse, ApiError<AuthErrorCode>, RegisterUserPayload>

export const useRegisterUser: UseRegisterUser = () => {
    return useMutation(mutationFn())
}
