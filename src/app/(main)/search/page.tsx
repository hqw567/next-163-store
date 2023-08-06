'use client'

import { RootState } from '@/store'
import { fetchSearchKey } from '@/store/modules/search'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SectionBox from '@/components/home/section-box'

export default function Search() {
  const searchParams = useSearchParams()
  console.log('searchParams.g', searchParams.get('q'))
  const q = decodeURIComponent(searchParams.get('q') || '')
  const dispatch = useDispatch()

  useEffect(() => {
    if (q) {
      dispatch(fetchSearchKey(q) as any)
    }
  }, [q])

  const { searchKeys } = useSelector((state: RootState) => state.search)

  return (
    <div>
      <SectionBox contentData={searchKeys} />
    </div>
  )
}
