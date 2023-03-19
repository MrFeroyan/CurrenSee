import { useEffect } from 'react'
import { getAuthCookie, setAuthCookies } from 'src/Infrastructure/Cookies'

import { useAuth } from './useAuth'
import { useLogout } from './useLogout'

export const useInitAuth = (): null => {
    const { login } = useAuth()
    const logout = useLogout()

    useEffect(() => {
        const authToken = getAuthCookie()

        if (authToken) {
            setAuthCookies(authToken)
            return login()
        }

        return logout()
    }, [login, logout])

    return null
}
