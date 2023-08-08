import { getHotProductS } from '@/http'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
export default async function ProductDetail({
  content,
  name,
}: {
  content: any[]
  name: string
}) {
  const { data } = await getHotProductS({ limit: 4, offset: 0 })
  return (
    <div id="detail-box" className=" mt-[66px] flex justify-between">
      <div className=" w-[700px]">
        <h3 className="mb-5 border-b border-[#333] pb-[17px] text-[22px] font-bold text-[#333]">
          商品详情
        </h3>
        <div>
          {content.length &&
            content.map((item, index) => {
              if (item.type === 1) {
                return (
                  <p className="py-1 text-sm text-[#666]" key={index}>
                    {parse(item.resource)}
                  </p>
                )
              }
              if (item.type === 2) {
                return (
                  <div key={index}>
                    <Image
                      className=" h-auto w-full"
                      src={item.resource}
                      width={700}
                      height={1500}
                      alt={name}
                    />
                  </div>
                )
              }
            })}
        </div>
      </div>
      <div className=" w-[340px]">
        <h3 className="mb-5 border-b border-[#333] pb-[17px] text-[22px]  text-[#333]">
          热门商品
        </h3>
        <ul>
          {data.hotProduct.map((item, index) => {
            return (
              <li key={index} className="mb-5">
                <Link
                  href={`/detail/${item.productId}`}
                  className="group inline-flex"
                >
                  <div className="shrink-0 bg-[#f9f9f9]">
                    <Image
                      className=" "
                      src={item.products.coverUrl}
                      alt={item.products.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="ml-2  inline-flex  flex-col justify-between">
                    <p className="line-clamp-2 text-sm text-[#333] ">
                      {item.products.couponLabelDesc && (
                        <span className="border border-[#d33a31] text-[#d33a31]">
                          {item.products.couponLabelDesc}
                        </span>
                      )}{' '}
                      <span className="group-hover:underline">
                        {' '}
                        {item.products.name}
                      </span>
                    </p>
                    <p className="text-[#d33a31]">￥{item.products.minPrice}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
