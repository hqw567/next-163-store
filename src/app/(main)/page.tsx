'use client'

import { RootState } from '@/store'
import { fetchAllProduct, fetchHotProduct } from '@/store/modules/home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Album from '@/components/home/album'
import Banner from '@/components/home/banner'
import SectionBox from '@/components/home/section-box'
import Sub from '@/components/home/sub'
import Tab from '@/components/home/tab'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHotProduct() as any)
    dispatch(fetchAllProduct() as any)
  }, [])

  const { hotProducts, allProducts } = useSelector(
    (state: RootState) => state.home,
  )
  console.log('🚀 ~ file: page.tsx:22 ~ Home ~ allProducts:', allProducts)

  return (
    <div>
      <Banner />
      <Tab />
      <Sub />
      <SectionBox title="编辑推荐" contentData={hotProducts?.hotProduct} />
      <Album />
      <SectionBox title="热门商品" contentData={allProducts?.allProduct} />
    </div>
  )
}
