import { Subject } from 'rxjs'
import { ApiError } from 'src/Core/Models/ApiError'

export const errorSubject = new Subject<string>()

export const callErrorSubject = (error: unknown): void => {
    const e = error as ApiError<unknown>

    if (e.code === 'UNKNOWN_ERROR') {
        errorSubject.next(e.code as string)
    }
}
