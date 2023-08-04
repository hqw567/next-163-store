// types.ts
export interface RequestConfig {
  url?: string
  method?: string
  baseURL?: string
  headers?: object
  params?: object
  data?: object | string
}
export interface RequestInterceptor {
  onRequest: (config: RequestConfig) => void
  onResponse: (response: Response) => void
}
