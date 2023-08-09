'use client'

import { AppDispatch, RootState } from '@/store'
import { fetchAllProduct, fetchHotProduct } from '@/store/modules/home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Album from '@/components/home/album'
import Banner from '@/components/home/banner'
import SectionBox from '@/components/home/section-box'
import SectionTitle from '@/components/home/section-title'
import Sub from '@/components/home/sub'
import Tab from '@/components/home/tab'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchHotProduct())
    dispatch(fetchAllProduct())
  }, [])

  const { hotProducts, allProducts } = useSelector((state: RootState) => state.home)
  console.log('🚀 ~ file: page.tsx:22 ~ Home ~ allProducts:', allProducts)

  return (
    <div>
      <Banner />
      <Tab />
      <Sub />
      <SectionTitle title="编辑推荐" />
      <SectionBox contentData={hotProducts?.hotProduct} />
      <Album />
      <SectionTitle title="热门商品" />
      <SectionBox contentData={allProducts?.allProduct} />
    </div>
  )
}
