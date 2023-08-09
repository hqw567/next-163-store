import request from '../request'
import { IHotProductRoot } from './../home/type'
import { IResultData } from './../request/type'
import { IGetProductDetailRoot } from './type'

request.initDefaultConfig({
  baseURL: 'https://music.163.com/store/api',
})

export async function getProductDetail(id: number, options = {}) {
  return request.get<IGetProductDetailRoot>({
    url: `/product/detail?id=${id}`,
    ...options,
  })
}

export async function getHotProductS(
  params: {
    limit: number
    offset: number
  },
  options = {},
) {
  return request.get<IResultData<IHotProductRoot>>({
    url: `/hotproduct_v2/gets?limit=${params.limit}&offset=${params.offset}`,
    ...options,
  })
}
