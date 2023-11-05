import Image from 'next/image'

import { ProductItemPrice } from '../ProductItemPrice'
import { useFullSizeImageLoad } from '@hooks/useFullSizeImageLoad'
import type { CartProduct } from '@interfaces/business/CartProduct'
import productFallbackPng from '@public/images/product_fallback.png'
import styles from './ProductItemLeft.module.scss'

export function ProductItemLeft({
  title,
  imagePath,
  fullPrice,
  discountPercentage
}: Pick<
  CartProduct,
  'title' | 'imagePath' | 'fullPrice' | 'discountPercentage'
>) {
  const { style, handleImageOnLoad } = useFullSizeImageLoad()

  return (
    <div className={styles.root}>
      <span className={styles.imageContainer}>
        <Image
          src={imagePath || productFallbackPng.src}
          alt={title}
          className={styles.image}
          sizes='100%'
          priority
          fill
          style={style}
          onLoad={handleImageOnLoad}
        />
      </span>
      <div className={styles.informationContainer}>
        <span className={styles.title}>{title}</span>
        <ProductItemPrice
          fullPrice={fullPrice}
          discountPercentage={discountPercentage}
          className={styles.price}
        />
      </div>
    </div>
  )
}
