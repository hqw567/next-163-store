'use client'

import React, { memo, useEffect, useState } from 'react'

import styles from './layout.module.scss'
import { fetchSearchSuggest } from '@/http'
const HeaderSearch = memo(() => {
  const [value, setValue] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    // fetchSearchSuggest().then((res) => {
    //   console.log('res :>> ', res)
    // })
  }, [])

  return (
    <div className="relative">
      <div className={` bg-sprite-1 ${styles['header-search']} `}>
        <input type="text" value={value} onChange={handleOnChange} />
      </div>
      <div className=" absolute left-0 top-[40px] w-[300px] text-sm shadow-xl ">
        <div className=" border-b border-stone-300 px-5 py-2 font-bold">
          热门搜索
        </div>
        <ul className="  text-stone-400">
          <li className="cursor-pointer px-5 py-2 hover:bg-stone-100">
            真的无线
          </li>
        </ul>
      </div>
    </div>
  )
})
HeaderSearch.displayName = 'HeaderSearch'
export default HeaderSearch
