import request from '../request'

request.initDefaultConfig({
  baseURL: 'https://music.163.com/store/api',
})

export const getSortedAndFilterList = async (id: number, options = {}) => {
  return request.get({
    url: '/sortedAndFilter/list?category1Id=' + id,
    ...options,
  })
}

export const postProductSearch = async (data = {}, options = {}) => {
  return request.post({
    url: '/product/search',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
    ...options,
  })
}
