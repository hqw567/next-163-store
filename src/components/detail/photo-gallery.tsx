'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
export default function PhotoGallery({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState(0)
  const [maskPos, setMaskPos] = useState({ x: 0, y: 0 })
  const img = useRef(null)
  const maskSize = 220
  const containerSize = 440

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = e.currentTarget
      const containerRect = container.getBoundingClientRect()

      const offsetX = e.clientX - containerRect.left
      const offsetY = e.clientY - containerRect.top

      const x = Math.min(
        Math.max(0, offsetX - maskSize / 2),
        containerSize - maskSize,
      )
      const y = Math.min(
        Math.max(0, offsetY - maskSize / 2),
        containerSize - maskSize,
      )

      setMaskPos({ x, y })
    },
    [containerSize],
  )

  return (
    <div className="w-[440px]">
      <div className="group relative mb-2" onMouseMove={handleMouseMove}>
        <Image src={photos[current]} alt={''} width={440} height={440} />
        <div
          ref={img}
          style={{ left: maskPos.x, top: maskPos.y }}
          className={`absolute  h-[220px] w-[220px] cursor-move bg-[url(https://s2.music.126.net/store/web/img/s-mask.png?d5483ad14a5b9995f9f9c76c4d696c72)] bg-no-repeat opacity-0 group-hover:opacity-100`}
        ></div>
        <div className=" absolute left-[450px] top-0  z-[9999] hidden h-[530px] w-[530px] overflow-hidden bg-[#f9f9f9] group-hover:block ">
          <Image
            style={{
              transform: `translate(-${maskPos.x * 2}px, -${maskPos.y * 2}px)`,
            }}
            className=" absolute h-[1060px] w-[1060px] max-w-none"
            src={photos[current]}
            alt={''}
            width={1060}
            height={1060}
          />
        </div>
      </div>
      <ul className="flex w-full space-x-[15px] overflow-hidden">
        {photos.map((photo: any, index: number) => (
          <li
            data-index={index}
            data-current={current === index}
            key={index}
            className="h-[76px] w-[76px] shrink-0 border-[#d33a31] hover:border-2 data-[current=true]:border-2"
          >
            <Image
              className="h-full w-full"
              src={photo}
              alt={''}
              width={76}
              height={76}
              onClick={() => setCurrent(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
