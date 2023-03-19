import React from 'react'
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import { useAuth } from 'src/Application/Hooks/Auth/useAuth'
import { AppLayout } from 'src/Application/Interfaces/Layouts/AppLayout'
import { AuthLayout } from 'src/Application/Interfaces/Layouts/AuthLayout'
import { HomePage } from 'src/Application/Interfaces/Pages/HomePage'
import { SignInPage } from 'src/Application/Interfaces/Pages/SignInPage'
import { SignUpPage } from 'src/Application/Interfaces/Pages/SignUpPage'
import { HOME_URL, SIGNIN_PATH, SIGNUP_PATH } from 'src/Core/Constants/RouteConstants'

export const Routes: React.FC = (): JSX.Element => {
    const { isLoggedIn } = useAuth()

    return (
        <ReactRouterRoutes>
            <Route path="*" element={<AuthLayout isAuthenticated={isLoggedIn} />}>
                <Route path={SIGNIN_PATH} element={<SignInPage />} />
                <Route path={SIGNUP_PATH} element={<SignUpPage />} />
            </Route>

            <Route path="*" element={<AppLayout isAuthenticated={isLoggedIn} />}>
                <Route path="*" element={<HomePage />} />
            </Route>

            <Route path="*" element={<Navigate to={HOME_URL} />} />
        </ReactRouterRoutes>
    )
}
