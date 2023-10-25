import Image from 'next/image'

import { ProductItemPrice } from '../ProductItemPrice'
import type { CartProduct } from '@interfaces/CartProduct'
import productFallbackPng from '@public/product_fallback.png'
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
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath || productFallbackPng.src}
          alt={title}
          className={styles.image}
          sizes='100%'
          priority
          fill
        />
      </div>
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
