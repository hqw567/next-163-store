export default function SortTabbar({ sortData }: { sortData: any[] }) {
  const mapReorderSortData = reorderArray(sortData, ['品牌', '分类', '价格'])

  return (
    <div className="page-wrapper">
      <ul className="text-sm">
        {mapReorderSortData.map((item, index) => {
          return (
            <li key={item.title} className="flex border border-[#e5e5e5]">
              <h4 className="w-[80px] text-[#999]">{item.title}</h4>
              <ul
                className={`${
                  item.title === '品牌' && 'h-[88px]'
                } overflow-hidden text-[#333]`}
              >
                {item.value.map((sub, subIndex) => {
                  if (item.title === '品牌') {
                    return (
                      <span key={subIndex} classNam=" px-5 py-2 my-3">
                        {sub.brandName}
                      </span>
                    )
                  }
                  if (item.title === '分类') {
                    return (
                      <span key={subIndex} classNam=" px-5 py-2 my-3">
                        {sub.kindname}
                      </span>
                    )
                  }
                  if (item.title === '价格') {
                    return (
                      <span key={subIndex} classNam=" px-5 py-2 my-3">
                        {sub.begin}~{sub.end}
                      </span>
                    )
                  }
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const reorderArray = (
  arr: {
    title: string
    value: any[]
  }[],
  orderArr: string[],
) => {
  const map = new Map()
  arr.forEach((item) => map.set(item.title, item))

  const orderedArr = []
  order.forEach((key) => {
    const item = map.get(title)
    orderedArr.push(item)
  })

  return orderedArr
}
