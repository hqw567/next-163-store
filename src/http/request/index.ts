import { deepMerge } from '../../utils'

import type { RequestConfig, RequestInterceptor } from './type'

class Request {
  defaultConfig: RequestConfig = {}

  interceptors: RequestInterceptor[] = []

  constructor() {}

  initDefaultConfig(config: RequestConfig) {
    this.defaultConfig = config
  }

  request<T>(config: RequestConfig): Promise<T> {
    const finalConfig = this.defaultConfig
      ? deepMerge(this.defaultConfig, config)
      : config

    this.interceptRequest(finalConfig)

    if (this.defaultConfig.baseURL) {
      finalConfig.url = this.defaultConfig.baseURL + config.url
    }

    return fetch(finalConfig.url, finalConfig).then((res) => {
      this.interceptResponse(res)
      return res.json() as Promise<T>
    })
  }

  get<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  interceptRequest(config: RequestConfig) {
    this.interceptors.forEach((interceptor) => {
      interceptor.onRequest(config)
    })
  }

  interceptResponse(response: Response) {
    this.interceptors.forEach((interceptor) => {
      interceptor.onResponse(response)
    })
  }

  use(interceptor: RequestInterceptor) {
    this.interceptors.push(interceptor)
  }
}

export default new Request()
