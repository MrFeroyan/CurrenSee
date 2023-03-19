import { RegisterUserPayload } from 'src/Core/Types/RegisterUser'
import { getHeaders } from 'src/Infrastructure/Connectors/utils'
import { AuthErrorCode, AuthResponse, STATUS_CODE_TO_ERROR_CODE_MAP } from 'src/Infrastructure/Types/Auth'
import { ConnectorResult } from 'src/Infrastructure/Types/Connector'
import { HTTP_METHODS, HttpStatusCode } from 'src/Infrastructure/Types/HttpMethods'

export const REGISTER_ENDPOINT = 'http://localhost:3005/api/auth/signUp'

export type RegisterUser = (params: RegisterUserPayload) => Promise<ConnectorResult<AuthResponse, AuthErrorCode>>

export const registerUser: RegisterUser = async (
    params: RegisterUserPayload
): Promise<ConnectorResult<AuthResponse, AuthErrorCode>> => {
    try {
        const response = await fetch(REGISTER_ENDPOINT, {
            method: HTTP_METHODS.POST,
            headers: getHeaders(false),
            body: JSON.stringify({
                email: params.email,
                fullName: params.fullName,
                password: params.password,
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            const code = STATUS_CODE_TO_ERROR_CODE_MAP[response.status as HttpStatusCode] ?? 'UNKNOWN_ERROR'

            return {
                errors: [{ code }],
            }
        }

        return {
            data: data.data,
        }
    } catch {
        return { errors: [{ code: 'UNKNOWN_ERROR' }] }
    }
}
