export interface BaseResponse<T> {
  Data: T;
  Result: boolean
  Message: string;
}
