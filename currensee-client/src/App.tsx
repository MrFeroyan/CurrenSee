import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useInitAuth } from 'src/Application/Hooks/Auth/useInitAuth'
import { UnknownErrorModal } from 'src/Application/Interfaces/Organisms/UnknownErrorModal'
import { Routes } from 'src/Application/Routes/Routes'
import { errorSubject } from 'src/Application/Subjects/ErrorSubject'

import './App.css'

export const App = (): React.ReactElement => {
    useInitAuth()

    const [isOpenUnknownErrorModal, setIsOpenUnknownErrorModal] = useState(false)

    useEffect(() => {
        errorSubject.subscribe(() => setIsOpenUnknownErrorModal(true))

        return () => {
            errorSubject.unsubscribe()
        }
    }, [setIsOpenUnknownErrorModal])

    return (
        <>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <UnknownErrorModal open={isOpenUnknownErrorModal} onClose={() => setIsOpenUnknownErrorModal(false)} />
        </>
    )
}
