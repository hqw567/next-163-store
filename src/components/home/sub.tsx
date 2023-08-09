import Image from 'next/image'
import Link from 'next/link'

export default function Sub() {
  const subs = [
    {
      href: '/column/55001',
      imgSrc: 'https://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg',
    },
    {
      href: '/column/68001',
      imgSrc: 'https://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg',
    },
  ]
  return (
    <div className=" page-wrapper mt-[40px] flex space-x-4">
      {subs.map((item, index) => {
        return (
          <Link href={item.href} key={index} className="h-[300px] w-[542px]">
            <Image src={item.imgSrc} alt="sub" className="h-full w-full" width={542} height={300} />
          </Link>
        )
      })}
    </div>
  )
}
