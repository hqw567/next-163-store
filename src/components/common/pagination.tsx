import { useEffect, useState } from 'react'

interface Props {
  total: number
  pageSize: number
  onPageChange: (page: number) => void
  currentPage?: number
  initialPage?: number
}

const Pagination: React.FC<Props> = ({
  total,
  pageSize,
  onPageChange,
  currentPage = 1,
  initialPage = 1,
}) => {
  const [current, setCurrent] = useState(initialPage)

  const pageCount = Math.ceil(total / pageSize)
  if (current > pageCount) {
    setCurrent(1)
  }
  useEffect(() => {
    setCurrent(currentPage)
  }, [currentPage])

  const pages = getPageNumbers(pageCount, current)

  function getPageNumbers(totalPages: number, current: number) {
    const pages: (number | '...')[] = []

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let left = Math.max(1, current - 2)
      let right = Math.min(current + 2, totalPages)

      if (current - 1 <= 2) {
        right = Math.min(1 + 4, totalPages) // Fix right calculation
      }

      if (totalPages - current <= 2) {
        left = Math.max(totalPages - 4, 1) // Fix left calculation
      }

      for (let i = left; i <= right; i++) {
        pages.push(i)
      }

      if (current - 1 >= 4) {
        pages.unshift('...')
      }

      if (totalPages - current >= 4) {
        pages.push('...')
      }

      if (left !== 1) {
        pages.unshift(1)
      }

      if (right !== totalPages) {
        pages.push(totalPages)
      }
    }
    return pages
  }

  function handlePageChange(page: number) {
    if (page < 1 || page > pageCount || page === current) return

    setCurrent(page)
    onPageChange(page)
  }
  return (
    <div className=" my-5 flex justify-center space-x-2 text-sm text-[#333]">
      <button
        className=" disabled:opacity-55 h-[32px]  w-[32px] bg-[url(https://s2.music.126.net/store/web/img/prev2.png?7dd50aef805afba38769cea56ab8a63f)] bg-no-repeat disabled:cursor-not-allowed"
        disabled={current === 1}
        onClick={() => handlePageChange(current - 1)}
      >
        <span className=" sr-only">上一页</span>
      </button>
      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={index} className="ellipsis">
              ...
            </span>
          )
        }
        return (
          <button
            data-checked={page === current}
            key={index}
            onClick={() => handlePageChange(page as number)}
            disabled={page === current}
            className={
              'flex h-[32px] cursor-pointer items-center justify-center border border-[#ededed] px-[12px] hover:border-[#666]  data-[checked=true]:bg-[#d33a31] data-[checked=true]:text-white'
            }
          >
            {page}
          </button>
        )
      })}

      <button
        className=" disabled:opacity-55 h-[32px] w-[32px]  bg-[url(https://s2.music.126.net/store/web/img/next2.png?50443d7eb0917e39acf5f5d08330531f)] bg-no-repeat disabled:cursor-not-allowed"
        disabled={current === pageCount}
        onClick={() => handlePageChange(current + 1)}
      >
        <span className=" sr-only"></span>
      </button>
    </div>
  )
}

export default Pagination
