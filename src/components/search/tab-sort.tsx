import { useState } from 'react'

export default function TabSort({ onItemClick }: { onItemClick: (sort: string) => void }) {
  const [sort, setSort] = useState([
    {
      title: '综合',
      checked: true,
    },
    {
      title: '价格低到高',
      sort: 'price_asc',
      checked: false,
    },
    {
      title: '价格高到低',
      sort: 'price_desc',
      checked: false,
    },
  ])
  const handleOnclick = (index: number) => {
    const newSort = sort.map((item, i) => {
      if (i === index) {
        item.checked = true
      } else {
        item.checked = false
      }
      return item
    })
    onItemClick(sort[index].sort || '')
    setSort(newSort)
  }
  return (
    <div className="page-wrapper  my-[30px] flex items-center text-[#888888]">
      {sort.map((item, index) => {
        return (
          <>
            <li
              key={index}
              onClick={() => handleOnclick(index)}
              data-checked={item.checked}
              className={` cursor-pointer  list-none hover:font-bold hover:text-[#333] data-[checked=true]:font-bold data-[checked=true]:text-[#333]`}
            >
              {item.title}
            </li>
            {sort.length - 1 !== index && (
              <i className="mx-3 block h-[21px] w-[4px] bg-[url(https://s2.music.126.net/store/web/img/point.png?9fb7de096e47efb5133c8df01d531dbc)] bg-center bg-no-repeat"></i>
            )}
          </>
        )
      })}
    </div>
  )
}
