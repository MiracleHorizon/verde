import Image from 'next/image'

import { useFullSizeImageLoad } from '@hooks/useFullSizeImageLoad'
import type { Order } from '@interfaces/Order'
import productFallbackPng from '@public/images/product_fallback.png'
import styles from './OrderCardProductList.module.scss'

const MAX_DISPLAY_PRODUCTS = 5

export function OrderCardProductList({ products }: Pick<Order, 'products'>) {
  const { style, handleImageOnLoad } = useFullSizeImageLoad()

  return (
    <ul className={styles.root}>
      {products.slice(0, MAX_DISPLAY_PRODUCTS).map(product => (
        <li key={product.id} className={styles.item}>
          <Image
            width={34}
            height={34}
            src={product.imagePath || productFallbackPng.src}
            alt={product.title}
            className={styles.itemImage}
            style={style}
            onLoad={handleImageOnLoad}
          />
        </li>
      ))}
      {products.length > MAX_DISPLAY_PRODUCTS && (
        <div className={styles.productsRestBadge}>
          +{products.length - MAX_DISPLAY_PRODUCTS}
        </div>
      )}
    </ul>
  )
}
