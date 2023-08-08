export const getSortedAndFilterList = async (id: number, options = {}) => {
  const res = await fetch(
    'https://music.163.com/store/api/sortedAndFilter/list?category1Id=' + id,
    options,
  )
  return res.json()
}

export const postProductSearch = async (data = {}, options = {}) => {
  const res = await fetch('https://music.163.com/store/api/product/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
    ...options,
  })
  return res.json()
}
