import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from 'src/Application/Interfaces/Organisms/Header'
import { SIGNIN_URL } from 'src/Core/Constants/RouteConstants'

export type Props = {
    isAuthenticated: boolean
}

export const AppLayout = ({ isAuthenticated }: Props) => {
    if (!isAuthenticated) {
        return <Navigate to={SIGNIN_URL} />
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
