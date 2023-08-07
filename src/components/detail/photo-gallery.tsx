'use client'

import Image from 'next/image'
import { useState } from 'react'
export default function PhotoGallery({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState(0)

  return (
    <div>
      <div>
        <Image src={photos[current]} alt={''} width={440} height={440} />
      </div>
      <div>
        {photos.map((photo: any, index: number) => (
          <li key={index}>
            <Image
              src={photo}
              alt={''}
              width={76}
              height={76}
              onClick={() => setCurrent(index)}
            />
          </li>
        ))}
      </div>
    </div>
  )
}
