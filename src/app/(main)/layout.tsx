import '@/styles/globals.css'
import '@/styles/tailwindcss.css'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

import ReduxProvider from '@/store/ReduxProvider'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '云音乐商城 - 音乐购有趣',
  keywords:
    '数码影音，beats耳机，击音耳机，漫步者，akg，潮牌，T恤，音乐生活，食品，服饰配件，礼品，礼物，礼盒，鲜花，ip周边，云音乐，商城，云贝',
  description:
    '云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
