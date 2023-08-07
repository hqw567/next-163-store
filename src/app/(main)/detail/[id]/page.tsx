// 'use client'

import { getProductDetail } from '@/http'

import NavPath from '@/components/common/nav-path'
import CommodityInfo from '@/components/detail/commodity-info'
import PhotoGallery from '@/components/detail/photo-gallery'
import ProductDetail from '@/components/detail/product-detail'
import { Metadata } from 'next'

let metadataData = {
  title: '商品详情 - 云音乐商城 - 音乐购有趣',
}

export const metadata: Metadata = {
  title: metadataData.title,
}

export default async function Detail({ params }: { params: { id: string } }) {
  const data = await getProductDetail(+params.id)
  console.log('🚀 ~ file: page.tsx:6 ~ Detail ~ params.id:', params.id)
  console.log('🚀 ~ file: page.tsx:6 ~ Detail ~ res:', data)
  const { product, coupons } = data
  return (
    <div className="">
      <NavPath title={product.name || '商品详情'} isShare />
      <div className="page-wrapper">
        <div className="flex justify-between">
          <PhotoGallery photos={product.picUrls} />
          <CommodityInfo product={product} coupons={coupons} />
        </div>

        <ProductDetail content={product.descr} name={product.name} />
      </div>
    </div>
  )
}
