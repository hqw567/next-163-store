import request from '../request'
import { IResultData } from './../request/index'

import type {
  IAllProductRoot,
  IHotProductRoot,
  IResultBanner,
  ISearchsuggest,
} from './type'

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
