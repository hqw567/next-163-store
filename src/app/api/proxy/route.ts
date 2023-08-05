import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  console.log('request :>> ', request)
  const { searchParams } = new URL(request.url)
  console.log('searchParams :>> ', searchParams)
  if (searchParams.url) {
    const res = await fetch(searchParams.url, {})
    const data = await res.json()
    return NextResponse.json(data)
  }

  return NextResponse.json({ msg: 'hello' })
}
