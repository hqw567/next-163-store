import { memo, useEffect } from 'react'

import Image from 'next/image'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { RootState } from '@/store'
import { fetchHomeBanner } from '@/store/modules/home'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Banner = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeBanner() as any)
  }, [])

  const { banners } = useSelector((state: RootState) => state.home)
  console.log('🚀 ~ file: banner.tsx:23 ~ Banner ~ banners:', banners)

  return (
    <div className={`h-[480px]`}>
      <div className=" h-full">
        <Swiper
          className="h-full"
          modules={[Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {banners?.map((item, index) => {
            console.log(
              '🚀 ~ file: banner.tsx:40 ~ {banners?.map ~ item:',
              item,
            )
            return (
              <SwiperSlide className=" " key={item.id}>
                <Link
                  href={item.url}
                  target="_black"
                  style={{ backgroundImage: `url(${item.backendPicStr})` }}
                  className={` flex  h-full w-full select-none  items-center justify-center bg-cover bg-center bg-repeat-x`}
                >
                  <div className="page-wrapper ">
                    <Image
                      className="h-full w-full"
                      src={item.picStr}
                      alt="banner"
                      width={1100}
                      height={480}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
})
Banner.displayName = 'Banner'
export default Banner
