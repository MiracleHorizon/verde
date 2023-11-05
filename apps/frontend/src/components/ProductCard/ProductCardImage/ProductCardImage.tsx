'use client'

import { useMemo, useRef } from 'react'
import Image from 'next/image'

import { useFullSizeImageLoad } from '@hooks/useFullSizeImageLoad'
import type { Props } from '@components/ProductCard'
import productFallbackPng from '@public/images/product_fallback.png'
import imageLoadFailSvg from '@public/svg/image-load-fail.svg'
import styles from './ProductCardImage.module.scss'

export function ProductCardImage({
  title,
  imagePath,
  variant
}: Pick<Props, 'title' | 'imagePath' | 'variant'>) {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const { style, handleImageOnLoad } = useFullSizeImageLoad()

  const imageSizes = useMemo(() => {
    if (!variant || variant === 'default') {
      return {
        width: 196,
        height: 168
      }
    }

    return {
      width: 150,
      height: 137
    }
  }, [variant])

  const handleImageOnError = () => {
    const image = imageRef.current

    if (!image) return

    const failSvgSrc = imageLoadFailSvg.src

    image.src = failSvgSrc
    image.srcset = failSvgSrc
  }

  return (
    <div className={styles.root}>
      <Image
        ref={imageRef}
        src={imagePath || productFallbackPng.src}
        alt={title}
        priority
        {...imageSizes}
        className={styles.image}
        style={style}
        onLoad={handleImageOnLoad}
        onError={handleImageOnError}
      />
    </div>
  )
}
