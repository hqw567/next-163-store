import Image from 'next/image'
import Link from 'next/link'
export default function SectionItem({
  imgSrc,
  title,
  href,
  couponLabelDesc,
  price,
  vipPrice,
}: {
  imgSrc: string
  title: string
  href: string
  couponLabelDesc: string
  price: number
  vipPrice?: number
}) {
  return (
    <li>
      <Link href={href} className="group block">
        <Image
          className=" h-[263px] w-[263px]"
          src={imgSrc}
          alt={title}
          width={263}
          height={263}
        />
        <p className="mt-2  line-clamp-2 overflow-hidden text-center text-sm text-[#333] ">
          {couponLabelDesc && (
            <span className="mr-1 whitespace-nowrap border border-[#d74d45] px-1 text-[#d74d45]">
              {couponLabelDesc}
            </span>
          )}
          <span className="   group-hover:underline">{title}</span>
        </p>
        <p className="mt-1 text-center text-base text-[#d33a31]">
          ¥{price}{' '}
          {vipPrice && (
            <span className="text-[15px] text-[#fe672e]">
              (黑胶VIP ¥{vipPrice})
            </span>
          )}
        </p>
      </Link>
    </li>
  )
}
