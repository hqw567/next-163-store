import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (url) {
    const fetchURL = decodeURIComponent(url)
    try {
      const res = await fetch(fetchURL)
      const data = await res.json()
      return NextResponse.json(data)
    } catch (error) {
      console.log('🚀 ~ file: route.ts:15 ~ GET ~ error:', error)
    }
  }

  return NextResponse.json({ msg: '不合法的参数' })
}

function isJson(str: string) {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}
