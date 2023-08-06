import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
const Tab = memo(() => {
  const tabs = [
    {
      title: 'IP周边',
      href: 'https://music.163.com/store/product/variouskind?cid=1008002&title=IP%E5%91%A8%E8%BE%B9',
      imgSrc:
        'https://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg',
    },
    {
      title: '数码影音',
      href: 'https://music.163.com/store/product/variouskind?cid=1008002&title=IP%E5%91%A8%E8%BE%B9',
      imgSrc:
        'https://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg',
    },
    {
      title: '热销爆品',
      href: 'https://music.163.com/store/product/variouskind?cid=1008002&title=IP%E5%91%A8%E8%BE%B9',
      imgSrc:
        'https://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg',
    },
    {
      title: '云贝商城',
      href: 'https://music.163.com/store/product/variouskind?cid=1008002&title=IP%E5%91%A8%E8%BE%B9',
      imgSrc:
        'https://s2.music.126.net/store/web/img/jifen.png?e222fe7226a160547a54aa5521337c68',
    },
  ]
  return (
    <div className="  border-b">
      <div className="page-wrapper">
        <ul className="flex divide-x text-sm font-bold text-[#333]">
          {tabs.map((item) => {
            return (
              <li key={item.title} className="h-[80px] flex-1">
                <Link
                  href={item.href}
                  target="_black"
                  className="flex h-full w-full items-center justify-center space-x-3"
                >
                  <Image
                    src={item.imgSrc}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})

Tab.displayName = 'Tab'
export default Tab
