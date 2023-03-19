import Cookies, { CookieAttributes } from 'js-cookie'
import { AUTH_COOKIE_EXPIRES_IN_DAYS, AUTH_COOKIE_NAME } from 'src/Core/Constants/CookieConstants'

const COOKIES_EXPIRES_IN_DAYS_DEFAULT = 30

type CreateCookieConfig = (options: { expires: number }) => CookieAttributes

export const createCookieConfig: CreateCookieConfig = (options) => {
    const { expires } = options

    return {
        expires: +(expires ?? COOKIES_EXPIRES_IN_DAYS_DEFAULT),
        secure: true,
    }
}

export const getAuthCookie = (): string | undefined => Cookies.get(AUTH_COOKIE_NAME)

export const setAuthCookie = (jwt: string): void => {
    Cookies.set(AUTH_COOKIE_NAME, jwt, createCookieConfig({ expires: AUTH_COOKIE_EXPIRES_IN_DAYS }))
}

export const setAuthCookies = (jwt: string): void => {
    setAuthCookie(jwt)
}

export const deleteAuthCookies = (): void => {
    Cookies.remove(AUTH_COOKIE_NAME, createCookieConfig({ expires: AUTH_COOKIE_EXPIRES_IN_DAYS }))
}
