import { ResolvingMetadata, Metadata } from 'next'

import { getSpecial } from '@/http/column'

import Image from 'next/image'
import SectionBox from '@/components/home/section-box'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  const { id } = params

  if (!isNaN(Number(+id))) {
    const { data } = await getSpecial({
      limit: 60,
      offset: 0,
      specialTopicId: +id,
      count: true,
    })
    const { name, products } = data
    return {
      title: name,
      description: products[0].suggestWord,
      openGraph: {
        title: name,
        description: products[0].suggestWord,
      },
    }
  }
  return {}
}

export default async function column({ params, searchParams }: Props) {
  const { id } = params
  const { data } = await getSpecial({
    limit: 60,
    offset: 0,
    specialTopicId: +id,
    count: true,
  })
  return (
    <>
      <div className="page-wrapper mb-[50px] mt-[40px]">
        <Image src={data.webPic} alt={data.name} width={1100} height={320} />
      </div>
      <SectionBox contentData={data.products} />
    </>
  )
}
