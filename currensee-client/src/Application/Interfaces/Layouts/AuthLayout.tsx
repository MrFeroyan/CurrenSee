import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { HOME_URL } from 'src/Core/Constants/RouteConstants'

export type Props = {
    isAuthenticated: boolean
}

export const AuthLayout = ({ isAuthenticated }: Props) => {
    if (isAuthenticated) {
        return <Navigate to={HOME_URL} replace={true} />
    }

    return <Outlet />
}
