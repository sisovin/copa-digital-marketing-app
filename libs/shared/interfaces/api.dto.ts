export interface ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface ApiRequest<T> {
  payload: T;
}
