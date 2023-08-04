import request from './request'

export function fetchSearchSuggest() {
  return request.get({
    url: '/searchsuggest/get',
  })
}
