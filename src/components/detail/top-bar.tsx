'use client'
import type { Coupon, product } from '@/http/detail/type'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function TopBar({ product }: { product: product }) {
  const topBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        const commodityInfoPurchaseEl = document.getElementById(
          'commodity-info-purchase',
        )
        const detailBoxTop = commodityInfoPurchaseEl?.offsetTop || 0
        const scrollTop = document.documentElement.scrollTop
        topBarRef.current.dataset.active =
          scrollTop > detailBoxTop ? 'true' : 'false'
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={topBarRef}
      id="top-bar"
      className=" fixed left-0 top-0 z-[9999] h-[70px] w-full -translate-y-full border-b border-[#ededed] bg-white transition data-[active=true]:translate-y-0"
    >
      <div className="page-wrapper flex h-full items-center justify-between">
        <div className="flex">
          <Image
            src={product.coverUrl}
            alt={product.name}
            width={50}
            height={50}
          />
          <div className="ml-4 w-[634px] text-base">
            <h2 className="  line-clamp-1 h-[26px]">{product.name}</h2>
            <p className=" text-[#d33a31]">￥{product.skus[0].price}</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="flex h-[40px] w-[170px] items-center justify-center border-2 border-[#d33a31] text-[18px] text-[#d33a31]">
            立即购买
          </button>
          <button className="flex h-[40px] w-[170px] items-center justify-center bg-[#d33a31] text-[18px] text-white">
            加入购物车
          </button>
        </div>
      </div>
    </div>
  )
}
