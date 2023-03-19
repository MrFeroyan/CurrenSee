import { AuthErrorCode, AuthResponse, STATUS_CODE_TO_ERROR_CODE_MAP } from 'src/Infrastructure/Types/Auth'
import { ConnectorResult } from 'src/Infrastructure/Types/Connector'
import { HTTP_METHODS, HttpStatusCode } from 'src/Infrastructure/Types/HttpMethods'

import { getHeaders } from './utils'

export const LOGIN_ENDPOINT = 'http://localhost:3005/api/auth/signIn'

export type LoginUserParams = {
    email: string
    password: string
}

export type LoginUser = (params: LoginUserParams) => Promise<ConnectorResult<AuthResponse, AuthErrorCode>>

export const loginUser: LoginUser = async (params) => {
    try {
        const response = await fetch(LOGIN_ENDPOINT, {
            method: HTTP_METHODS.POST,
            headers: getHeaders(false),
            body: JSON.stringify(params),
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
