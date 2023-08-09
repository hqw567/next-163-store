import SectionItem from './section-item'

export default function SectionBox({ contentData }: { contentData: any[] | undefined }) {
  return (
    <section className="page-wrapper">
      <ul className="grid grid-cols-4 gap-x-[16px] gap-y-[30px] ">
        {contentData?.map((item) => {
          return (
            <SectionItem
              title={item.name}
              key={item.id}
              imgSrc={item.coverUrl || item.products?.coverUrl}
              couponLabelDesc={item.couponLabelDesc || item.products?.couponLabelDesc}
              tags={item.tags}
              originalCost={item.originalCost}
              status={item.status}
              price={item.minPrice || item.products?.minPrice}
              vipPrice={item.vipMinPrice}
              href={`/detail/${item.id > 2000000 ? item.id : item.products?.id}`}
            />
          )
        })}
      </ul>
    </section>
  )
}
