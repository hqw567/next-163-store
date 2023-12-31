// types.ts
export interface RequestConfig {
  url?: string
  method?: string
  baseURL?: string
  headers?: object
  params?: object
  data?: object | string
  body?: object | string
}
export interface RequestInterceptor {
  onRequest: (config: RequestConfig) => void
  onResponse: (response: Response) => void
}

export interface IResultData<T> {
  code: number
  data: T
}
