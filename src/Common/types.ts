export interface Result<T> {
    data: T | null;
    error: APIError | null
}

export interface APIError {
    code: string;
    msg: string;
    data: any | null;
}
