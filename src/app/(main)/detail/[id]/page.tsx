// 'use client'

import { getProductDetail } from '@/http'

import NavPath from '@/components/common/nav-path'
import CommodityInfo from '@/components/detail/commodity-info'
import PhotoGallery from '@/components/detail/photo-gallery'
import ProductDetail from '@/components/detail/product-detail'
import TopBar from '@/components/detail/top-bar'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const id = +params.id
  const data = await getProductDetail(id)
  const { product } = data
  return {
    title: product.name,
    description: product.suggestWord,
    openGraph: {
      title: product.name,
      description: product.suggestWord,
    },
  }
}

export default async function Detail({ params }: { params: { id: string } }) {
  const data = await getProductDetail(+params.id)
  const { product, coupons } = data
  return (
    <div className="">
      <TopBar product={product} />
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
