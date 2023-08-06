import Image from 'next/image'
import Link from 'next/link'

export default function Album() {
  return (
    <Link
      href="https://music.163.com/v/w/album/rank"
      target="_black"
      className="page-wrapper mt-[50px] flex h-[180px] items-center justify-center bg-[#f9f9f9]"
    >
      <div className="w-[730px] text-[#000]">
        <h2 className="flex items-center text-[32px] font-bold">
          <i className="mr-[10px]  inline-block h-[32px] w-[32px] bg-[url(https://s2.music.126.net/store/web/img/digitalicon.png?f6cc74078e9bee20ffb29063f154a238)]"></i>
          <span>数字专辑</span>
        </h2>
        <p className="mt-[9px] text-base text-[#000000b3]">数字专辑</p>
        <p className="mt-[18px] text-[24px] font-bold">{'立 即 购 买 >'}</p>
      </div>
      <div className=" relative h-[120px] w-[210px]">
        <Image
          className=" absolute left-0 top-[13px]"
          src="https://p2.music.126.net/Wz78eriM3xyUnOKT3BRtCA==/109951168771859024.jpg?param=120y120"
          alt=""
          height={100}
          width={100}
        />
        <Image
          className=" absolute left-[55px] top-0"
          src="https://p1.music.126.net/OUmlP_yxMvQpVY5zTcLeTg==/109951168761663302.jpg?param=120y120"
          alt=""
          height={120}
          width={120}
        />
        <i
          style={{ backgroundPosition: '0px -73px' }}
          className=" absolute right-0 top-0 h-[120px] w-[35px] bg-[url(https://s2.music.126.net/store/web/img/sprite/pointlist.png?23a8e94da7fdce320dc58cf2e9d4b11d)]"
        />
      </div>
    </Link>
  )
}
