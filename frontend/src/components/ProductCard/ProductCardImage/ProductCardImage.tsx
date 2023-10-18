import { useMemo } from 'react'
import Image from 'next/image'

import { ProductCardVariant, type Props } from '@components/ProductCard'
import productFallbackPng from '@public/product_fallback.png'
import styles from './ProductCardImage.module.scss'

const defaultSizes = {
  width: 196,
  height: 168
}
const smallSizes = {
  width: 150,
  height: 137
}

export function ProductCardImage({
  title,
  imagePath,
  variant
}: Pick<Props, 'title' | 'imagePath' | 'variant'>) {
  const imageSizes = useMemo(() => {
    if (!variant || variant === ProductCardVariant.DEFAULT) {
      return defaultSizes
    }

    return smallSizes
  }, [variant])

  return (
    <div className={styles.root}>
      <Image
        priority
        src={imagePath || productFallbackPng.src}
        alt={title}
        className={styles.image}
        {...imageSizes}
      />
    </div>
  )
}
