export class ApiError<T> extends Error {
    constructor(public code: T, message?: string) {
        super(message)
    }

    get name(): string {
        return this.constructor.name
    }
}
