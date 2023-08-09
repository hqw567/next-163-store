import Link from 'next/link'

export default function NavPath({ title, isShare }: { title: string; isShare?: boolean }) {
  return (
    <div className="page-wrapper mb-[15px]">
      <div className=" flex items-center justify-between  border-b border-[#333333] pb-[19px] pt-[30px]">
        <ul className="flex font-bold">
          <li className=" text-[#333] hover:underline">
            <Link href="/">首页</Link>
          </li>
          <i className="ml-2 mr-1 block h-[26px] w-[16px] translate-y-1 bg-[url(https://s2.music.126.net/store/web/img/ar.png?1dc401504564c622f57c35ff862ec129)] bg-no-repeat"></i>
          <li className=" text-[#999] ">{title}</li>
        </ul>
        {isShare && (
          <div
            style={{ backgroundPosition: '0 2px' }}
            className="h-[21px] w-[59px] cursor-pointer bg-[url(https://s2.music.126.net/store/web/img/share.png?2e67a0b6b589dbf90cee2f54764912ca)] bg-no-repeat text-right text-[#666] hover:underline"
          >
            分享
          </div>
        )}
      </div>
    </div>
  )
}
