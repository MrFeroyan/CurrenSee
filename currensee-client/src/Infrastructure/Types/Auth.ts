import { HTTP_STATUSES, HttpStatusCode } from './HttpMethods'

export type AuthResponse = {
    token: string
}

export type AuthErrorCode = 'WRONG_CREDENTIALS' | 'CONFLICT' | 'INTERNAL_SERVER_ERROR' | 'UNKNOWN_ERROR'

export const STATUS_CODE_TO_ERROR_CODE_MAP: Partial<Record<HttpStatusCode, AuthErrorCode>> = {
    [HTTP_STATUSES.UNAUTHORIZED]: 'WRONG_CREDENTIALS',
    [HTTP_STATUSES.CONFLICT]: 'CONFLICT',
    [HTTP_STATUSES.FORBIDDEN]: 'WRONG_CREDENTIALS',
    [HTTP_STATUSES.BAD_REQUEST]: 'WRONG_CREDENTIALS',
    [HTTP_STATUSES.INTERNAL_SERVER_ERROR]: 'INTERNAL_SERVER_ERROR',
}

export type RegisterUserParams = {
    email: string
    fullName: string
    password: string
}
