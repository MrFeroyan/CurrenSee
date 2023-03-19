import { useLogin } from 'src/Application/Hooks/Auth/useLogin'

type LoginDetails = {
    email: string
    password: string
}

type LoginFormSubmit = ({ email, password }: LoginDetails) => Promise<void>

export const useLoginFormSubmit = ({
    onLoginSuccess,
    setIsLoading,
    setIsError,
}: {
    onLoginSuccess: () => void
    setIsLoading: (value: boolean) => void
    setIsError: (value: boolean) => void
}): LoginFormSubmit => {
    return useLogin({
        onSuccess: onLoginSuccess,
        onError: () => {
            setIsError(true)
        },
        setIsLoading,
    })
}
