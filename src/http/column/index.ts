import request from '../request'

request.initDefaultConfig({
  baseURL: 'https://music.163.com/store/api',
})

export const getSpecial = async (
  query: {
    limit: number
    offset: number
    specialTopicId: number
    count: boolean
  },
  options = {},
) => {
  return request.get({
    url: '/special/getdetail?' + new URLSearchParams(query as any).toString(),
    ...options,
  })
}
