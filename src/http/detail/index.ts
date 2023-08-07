import { IHotProductRoot } from './../home/type'
import { IResultData } from './../request/index'
import { IGetProductDetailRoot } from './type'

export async function getProductDetail(
  id: number,
  options = {},
): Promise<IGetProductDetailRoot> {
  const url = `https://music.163.com/store/api/product/detail?id=${id}`
  const res = await fetch(url, options)
  return res.json()
}

export async function getHotProductS(
  params: {
    limit: number
    offset: number
  },
  options = {},
): Promise<IResultData<IHotProductRoot>> {
  const url = `https://music.163.com/store/api/hotproduct_v2/gets?limit=${params.limit}&offset=${params.offset}`
  const res = await fetch(url, options)
  return res.json()
}
