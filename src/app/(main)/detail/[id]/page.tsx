// 'use client'

import { getProductDetail } from '@/http'

import NavPath from '@/components/common/nav-path'
import ProductDetail from '@/components/detail/product-detail'

export default async function Detail({ params }: { params: { id: string } }) {
  const data = await getProductDetail(+params.id)
  console.log('🚀 ~ file: page.tsx:6 ~ Detail ~ params.id:', params.id)
  console.log('🚀 ~ file: page.tsx:6 ~ Detail ~ res:', data)
  const { product } = data
  return (
    <div className="">
      <NavPath title={product.name || '商品详情'} isShare />
      <div className="page-wrapper">
        <h1>{product.name}</h1>
        <ProductDetail content={product.descr} name={product.name} />
      </div>
    </div>
  )
}
