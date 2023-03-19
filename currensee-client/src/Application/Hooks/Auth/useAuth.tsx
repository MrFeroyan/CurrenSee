import Cookies from 'js-cookie'
import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react'
import { AUTH_COOKIE_NAME } from 'src/Core/Constants/CookieConstants'

export type AuthState = {
    isLoggedIn: boolean
}

const defaultAuthState = {
    user: undefined,
    isLoggedIn: Boolean(Cookies.get(AUTH_COOKIE_NAME)),
}

export type AuthContextState = AuthState & {
    login: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContextState | undefined>(undefined)

export type AuthAction =
    | {
          type: 'LOG_IN'
      }
    | {
          type: 'LOG_OUT'
      }

export const authReducer = (_: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                isLoggedIn: true,
            }
        case 'LOG_OUT':
            return {
                isLoggedIn: false,
            }
    }
}

export const AuthProvider = ({ children, state }: { state?: Partial<AuthState>; children: React.ReactNode }) => {
    const [{ isLoggedIn }, dispatch] = useReducer(authReducer, { ...defaultAuthState, ...state })

    const login = useCallback(() => dispatch({ type: 'LOG_IN' }), [dispatch])
    const logout = useCallback(() => dispatch({ type: 'LOG_OUT' }), [dispatch])

    const value = useMemo(
        () => ({
            isLoggedIn,
            login,
            logout,
        }),
        [isLoggedIn, login, logout]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextState => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}
