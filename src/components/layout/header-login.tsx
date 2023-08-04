import React, { memo } from 'react'

const HeaderLogin = memo(() => {
  return (
    <div className=" relative">
      <div className=" cursor-pointer text-base">登录</div>
    </div>
  )
})
HeaderLogin.displayName = 'HeaderLogin'
export default HeaderLogin
