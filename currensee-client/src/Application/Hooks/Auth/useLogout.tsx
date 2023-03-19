import { useCallback } from 'react'
import { deleteAuthCookies } from 'src/Infrastructure/Cookies'

import { useAuth } from './useAuth'

export type Logout = () => void
export type UseLogout = () => Logout

export const useLogout: UseLogout = () => {
    const { logout } = useAuth()

    return useCallback(() => {
        deleteAuthCookies()
        logout()
    }, [logout])
}
