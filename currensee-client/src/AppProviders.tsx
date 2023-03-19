import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from 'src/Application/Hooks/Auth/useAuth'
import { callErrorSubject } from 'src/Application/Subjects/ErrorSubject'

import { App } from './App'

export const AppProviders: React.FC = (): React.ReactElement => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnMount: false,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                onError: callErrorSubject,
            },
            mutations: {
                onError: callErrorSubject,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App />
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
