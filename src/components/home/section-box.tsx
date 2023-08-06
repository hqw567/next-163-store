import SectionItem from './section-item'

export default function SectionBox({
  title,
  contentData,
}: {
  title: string
  contentData: any[] | undefined
}) {
  return (
    <section className="page-wrapper mt-[50px]">
      <h2 className="mb-4 text-2xl font-bold text-[#333]">{title}</h2>
      <ul className="grid grid-cols-4 gap-x-[16px] gap-y-[30px] ">
        {contentData?.map((item) => {
          return (
            <SectionItem
              title={item.name}
              key={item.id}
              imgSrc={item.coverUrl || item.products?.coverUrl}
              couponLabelDesc={
                item.couponLabelDesc || item.products?.couponLabelDesc
              }
              price={item.minPrice || item.products?.minPrice}
              vipPrice={item.vipMinPrice}
              href={`https://music.163.com/store/product/detail?id=${item.id}`}
            />
          )
        })}
      </ul>
    </section>
  )
}
