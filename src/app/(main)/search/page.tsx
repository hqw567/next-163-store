'use client'

import { AppDispatch, RootState } from '@/store'
import { fetchSearchKey } from '@/store/modules/search'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SectionBox from '@/components/home/section-box'
import NavPath from '@/components/common/nav-path'
import TabSort from '@/components/search/tab-sort'
import Pagination from '@/components/common/pagination'
export default function Search() {
  const searchParams = useSearchParams()
  console.log('searchParams.g', searchParams.get('q'))
  const q = decodeURIComponent(searchParams.get('q') || '')
  const dispatch = useDispatch<AppDispatch>()
  const limit = 60

  const [current, setCurrent] = useState(1)
  function handlePageChange(page: number) {
    setCurrent(page)
    // setOffset((page - 1) * limit)
    console.log(
      '🚀 ~ file: page.tsx:25 ~ handlePageChange ~ page - 1) * limit:',
      (page - 1) * limit,
    )
    dispatch(fetchSearchKey({ key: q, offset: (page - 1) * limit, limit }))
    handleScrollToTop()
  }

  useEffect(() => {
    if (q) {
      // setOffset(0)
      setCurrent(1)
      dispatch(fetchSearchKey({ key: q, offset: 0, limit }))
    }
  }, [q])

  const { searchProducts, searchTotal } = useSelector(
    (state: RootState) => state.search,
  )
  const handleTabSortClick = (sort: string | null) => {
    // setOffset(0)
    setCurrent(1)
    dispatch(fetchSearchKey({ key: q, sort: sort || '', offset: 0, limit }))
  }
  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <NavPath title={q} />
      <TabSort onItemClick={(sort) => handleTabSortClick(sort)} />
      <SectionBox contentData={searchProducts} />

      <Pagination
        total={searchTotal}
        pageSize={limit}
        initialPage={current}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
