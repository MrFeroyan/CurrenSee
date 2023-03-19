export type ConnectorError<P> = {
    code: P
}

export type ConnectorResult<T, P> = { data: T } | { errors: ConnectorError<P>[]; data?: T }
