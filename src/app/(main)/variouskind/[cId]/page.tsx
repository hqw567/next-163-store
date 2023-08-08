'use client'
import type { Metadata } from 'next'

import { getSortedAndFilterList, postProductSearch } from '@/http/variouskind'

import Image from 'next/image'

import NavPath from '@/components/common/nav-path'
import Pagination from '@/components/common/pagination'
import SectionBox from '@/components/home/section-box'
import TabSort from '@/components/search/tab-sort'
import SortTabbar from '@/components/variouskind/sort-tabbar'

type Props = {
  params: { cId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: '数码影音',
}

export default function variouskind({ params, searchParams }: Props) {
  const { cId } = params
  const { title } = searchParams
  let filterRes
  let productRes
  const limit = 60
  const offset = 0
  const current = 0
  postProductSearch({
    limit,
    offset,
    category_1: title,
  }).then((result) => {
    productRes = result
  })

  getSortedAndFilterList(+cId).then((result) => {
    filterRes = result
  })

  const handleTabSortClick = (sort: string | null) => {}
  function handlePageChange(page: number) {}

  if (productRes) {
    const { data: filterData } = filterRes
    console.log(
      '🚀 ~ file: page.tsx:50 ~ variouskind ~ filterData:',
      filterData,
    )
    const { products: productData } = productRes
    return (
      <>
        <NavPath title={title as string} />
        {filterData && <SortTabbar sortData={filterData.data} />}
        <TabSort onItemClick={(sort) => handleTabSortClick(sort)} />
        <SectionBox contentData={productData.products} />
        {productData.size !== 0 && (
          <Pagination
            total={productData.size}
            pageSize={limit}
            initialPage={current}
            currentPage={current}
            onPageChange={handlePageChange}
          />
        )}
      </>
    )
  }
}
