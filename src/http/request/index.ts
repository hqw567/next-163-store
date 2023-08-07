// request.ts

import { deepMerge } from '../../utils'
import type { RequestConfig, RequestInterceptor } from './types'

export interface IResultData<T> {
  code: number
  data: T
}

class Request {
  constructor(public defaultConfig: any) {
    this.defaultConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  interceptors: RequestInterceptor[] = []

  request<T>(config: RequestConfig): Promise<T> {
    // 深度合并默认配置和传入配置
    const finalConfig = deepMerge(this.defaultConfig, config)
    // 请求拦截器
    this.interceptRequest(finalConfig)
    const baseURL = finalConfig.url
    return fetch('/music163/store/api' + baseURL, finalConfig).then((res) => {
      // 响应拦截器
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

const defaultConfig = {
  baseURL: '/api',
}

export default new Request(defaultConfig)
