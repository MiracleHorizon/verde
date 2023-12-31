import Image from 'next/image'

import { useFullSizeImageLoad } from '@hooks/useFullSizeImageLoad'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import type { UserOrderProduct } from '@interfaces/user/UserOrderProduct'
import productFallbackPng from '@public/images/product_fallback.png'
import styles from './OrderProductItem.module.scss'

export function OrderProductItem({
  title,
  imagePath,
  quantity,
  totalCost
}: UserOrderProduct) {
  const { style, handleImageOnLoad } = useFullSizeImageLoad()
  const formattedTotalCost = formatCurrencyWithThinSpace(totalCost)
  const quantityTitle = `${quantity} шт`

  return (
    <li className={styles.root}>
      <div className={styles.content}>
        <span className={styles.imageContainer}>
          <Image
            priority
            src={imagePath || productFallbackPng.src}
            alt={title}
            sizes='100%'
            fill
            className={styles.image}
            style={style}
            onLoad={handleImageOnLoad}
          />
        </span>
        <article className={styles.mainInformation}>
          <span title={title}>{title}</span>
          <span title={quantityTitle} className={styles.quantity}>
            {quantityTitle}
          </span>
        </article>
      </div>
      <span title={formattedTotalCost} className={styles.totalCost}>
        {formattedTotalCost}
      </span>
    </li>
  )
}
