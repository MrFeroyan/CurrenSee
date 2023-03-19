import Cookies from 'js-cookie'
import { AUTH_COOKIE_NAME } from 'src/Core/Constants/CookieConstants'

export const getHeaders = (withAuth = true): HeadersInit => {
    return {
        'Content-Type': 'application/json',
        accept: 'application/json',
        ...(withAuth ? { Authorization: 'Bearer ' + Cookies.get(AUTH_COOKIE_NAME) } : {}),
    }
}
