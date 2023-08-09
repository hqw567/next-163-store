'use client'

import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/store'
import { fetchSearchSuggest } from '@/store/modules/home'
import { useRouter } from 'next/navigation'
import styles from './layout.module.scss'
const HeaderSearch = memo(() => {
  const [value, setValue] = useState<string>('')
  const [focused, setFocused] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSearchsuggestClick = (key: string) => {
    setValue(key)
    handleGoSearch(key)
    setFocused(false)
  }
  useEffect(() => {
    dispatch(fetchSearchSuggest())
  }, [])

  const handleGoSearch = (value: string) => {
    router.push(`/search?q=${value}`)
  }
  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGoSearch(value)
      setFocused(false)
      // 执行你需要的逻辑
    }
  }
  const { searchsuggest } = useSelector((state: RootState) => state.home)

  return (
    <div className="relative ">
      <div className={` bg-sprite-1 ${styles['header-search']} `}>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDownEnter}
          placeholder={searchsuggest?.defaultKey}
        />
      </div>
      <div className={`${!focused && 'hidden'} absolute  left-0 top-[40px] z-50 w-[300px] bg-white text-sm shadow-xl`}>
        <div className=" border-b border-stone-300 px-5 py-2 font-bold">热门搜索</div>
        <ul className="  text-stone-400">
          {searchsuggest?.configKey.map((item: any, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer px-5 py-2 hover:bg-stone-100"
                onMouseDown={() => onSearchsuggestClick(item[index + 1])}
              >
                {item[index + 1]}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})
HeaderSearch.displayName = 'HeaderSearch'
export default HeaderSearch
