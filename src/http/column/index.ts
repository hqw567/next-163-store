export const getSpecial = async (
  query: {
    limit: number
    offset: number
    specialTopicId: number
    count: boolean
  },
  options = {},
) => {
  const res = await fetch(
    'https://music.163.com/store/api/special/getdetail?' +
      new URLSearchParams(query as any).toString(),
    options,
  )
  return res.json()
}
