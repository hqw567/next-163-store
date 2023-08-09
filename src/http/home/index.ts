import { stringifyQuery } from '@/utils'
import request from '../request'
import { IResultData } from './../request/type'

import type {
  IAllProductRoot,
  IHotProductRoot,
  IResultBanner,
  ISearchKeyRoot,
  ISearchsuggest,
  IGetSearchKeyParams,
} from './type'

request.initDefaultConfig({
  baseURL: '/music163/store/api',
})

export function getSearchSuggest() {
  return request.get<IResultData<ISearchsuggest>>({
    url: '/searchsuggest/get',
  })
}

export function getHomeBanner() {
  return request.get<IResultBanner>({
    url: '/product/ipbanner?type=0',
  })
}

export function getHotProduct() {
  return request.get<IResultData<IHotProductRoot>>({
    url: '/hotproduct_v2/gets?limit=60&offset=0',
  })
}

export function getAllProduct() {
  return request.get<IResultData<IAllProductRoot>>({
    url: '/allProduct/gets?limit=60&offset=0',
  })
}

export function getSearchKey(data: IGetSearchKeyParams) {
  return request.post<ISearchKeyRoot>({
    url: '/product/search',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringifyQuery(data),
  })
}
