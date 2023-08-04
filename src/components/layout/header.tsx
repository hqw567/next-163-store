import React, { memo } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import HeaderSearch from './header-search'
import HeaderLogin from './header-login'

import styles from './layout.module.scss'

const Header = memo(() => {
  return (
    <div className="page-wrapper  flex h-[73px] items-center justify-between">
      <div className={['bg-sprite-1', styles.logo].join(' ')}></div>
      <div className="flex space-x-8">
        <HeaderSearch />
        <Link
          href="/"
          className={`bg-sprite-1 ${styles['header-cart']} block h-10 w-10`}
        />
        <HeaderLogin />
      </div>
    </div>
  )
})
Header.displayName = 'Header'
export default Header
