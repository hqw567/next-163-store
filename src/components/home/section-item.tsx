import Image from 'next/image'
import Link from 'next/link'
export default function SectionItem({
  imgSrc,
  title,
  href,
  couponLabelDesc,
  price,
  vipPrice,
  status,
  originalCost,
  tags,
}: {
  imgSrc: string
  title: string
  href: string
  couponLabelDesc: string
  price: number
  vipPrice?: number
  status: number
  originalCost: number
  tags: string[]
}) {
  return (
    <li>
      <Link href={href} className="group  block">
        <div className="relative">
          <Image className=" h-[263px] w-[263px]" src={imgSrc} alt={title} width={263} height={263} />
          {status === -1 && (
            <div
              style={{
                backgroundPosition: '0 -157px',
              }}
              className="absolute left-[50%] top-[50%] h-[100px] w-[100px] -translate-x-[50%] -translate-y-[50%] bg-[url(https://s2.music.126.net/store/web/img/sprite/modules.png?f4ccdb3408d3839e3cb02703efaa03fc)] bg-no-repeat"
            ></div>
          )}
          {originalCost !== price && originalCost && (
            <div className=" absolute left-5 top-5 flex h-[60px] w-[60px] flex-col items-center justify-center  rounded-full bg-[#d33a31] text-white">
              <p className=" text-[15px] leading-[17px]">￥{price}</p>
              <p className=" text-[13px]  line-through opacity-70">￥{originalCost}</p>
            </div>
          )}
        </div>
        <p className="mt-2  line-clamp-2 overflow-hidden text-center text-sm text-[#333] ">
          {couponLabelDesc && (
            <span className="mr-1 whitespace-nowrap border border-[#d74d45] px-1 text-xs text-[#d74d45]">
              {couponLabelDesc}
            </span>
          )}
          {tags?.length > 0 && (
            <span className="mr-1 whitespace-nowrap border border-[#d74d45] px-1 text-xs text-[#d74d45]">{tags}</span>
          )}
          <span className="   group-hover:underline">{title}</span>
        </p>
        <p className="mt-1 text-center text-base text-[#d33a31]">
          ¥{price} {vipPrice && <span className="text-[15px] text-[#fe672e]">(黑胶VIP ¥{vipPrice})</span>}
        </p>
      </Link>
    </li>
  )
}
