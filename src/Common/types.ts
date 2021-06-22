export interface Result<T> {
    data: T | null;
    error: Error | null
}
