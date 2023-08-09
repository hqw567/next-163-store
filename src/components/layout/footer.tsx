import Link from 'next/link'
import { memo } from 'react'

const Footer = memo(() => {
  const serviceLinks = [
    {
      title: '服务条款',
      href: 'https://st.music.163.com/official-terms/service',
    },
    {
      title: '隐私政策',
      href: 'https://st.music.163.com/official-terms/service',
    },
    {
      title: '儿童隐私政策',
      href: 'https://st.music.163.com/official-terms/service',
    },
    {
      title: '版权投诉指引',
      href: 'https://st.music.163.com/official-terms/service',
    },
    {
      title: '联系我们',
      href: 'https://st.music.163.com/official-terms/service',
    },
  ]
  const musicImages = [
    {
      title: '独立音乐人',
      bgPosition: '-60px -80px',
      href: 'https://music.163.com/st/musician',
    },
    {
      title: '音乐专栏',
      bgPosition: '0px -80px',
      href: 'https://music.163.com/topic/recruit',
    },
    {
      title: '自媒体',
      bgPosition: '0px 0px',
      href: 'https://music.163.com/topic/selfmedia',
    },
    {
      title: '赞赏',
      bgPosition: '-60px 0px',
      href: 'https://music.163.com/web/reward',
    },
  ]

  return (
    <div className=" mt-10 h-[160px] w-full  bg-[#f2f2f2] text-xs text-[#666]">
      <div className="page-wrapper flex  justify-between">
        <div className=" mt-5 space-y-2">
          <div className="flex text-[#999]">
            {serviceLinks.map((item, index) => {
              return (
                <div key={item.title}>
                  <Link className="hover:underline" href={item.href}>
                    {item.title}
                  </Link>
                  {serviceLinks.length - 1 !== index && <span className="mx-2">|</span>}
                </div>
              )
            })}
          </div>
          <p>网易公司版权所有©1997-2023杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
          <p>
            食品经营许可证 出版物经营许可证 营业执照 网络食品交易第三方平台提供者信息备案: 浙网食A33010041
            进口冷链管理承诺书
          </p>
          <p>粤B2-20090191-18举报邮箱：工业和信息化部备案管理系统网站</p>
        </div>

        <ul className="mt-8 flex space-x-8">
          {musicImages.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  target="_blank"
                  className="block h-[70px] w-[60px] bg-[url(https://s2.music.126.net/store/web/img/foot_enter.png?ee23d1fcf6957433829fd642d5711fd9)] bg-no-repeat text-[0px]"
                  style={{
                    backgroundPosition: item.bgPosition,
                  }}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})
Footer.displayName = 'Footer'
export default Footer
