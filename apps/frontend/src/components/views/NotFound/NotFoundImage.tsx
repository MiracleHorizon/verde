'use client'

import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import type { CSSProperties } from 'react'

import { breakpoints } from '@styles/breakpoints'
import skeletonThinkingPng from '@public/skeleton_thinking.png'

const style: CSSProperties = {
  objectFit: 'cover'
}

export function NotFoundImage() {
  const isTabletSm = useMediaQuery({
    query: `(max-width: ${breakpoints.tabletSm}px)`
  })

  if (isTabletSm) {
    return null
  }

  return (
    <Image
      priority
      style={style}
      src={skeletonThinkingPng.src}
      width={500}
      height={280}
      alt='Not found'
    />
  )
}
