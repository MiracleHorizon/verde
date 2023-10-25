'use client'

import { ButtonClearCart } from '@components/user/ButtonClearCart'
import { useCartStore } from '@stores/cart'
import { RussianPluralizer } from '@utils/RussianPluralizer'
import styles from './ProductsSectionHeader.module.scss'

const getPluralizedProductNoun = (num: number): string => {
  const productPluralizer = new RussianPluralizer({
    singularForm: 'товар',
    fewForm: 'товара',
    pluralForm: 'товаров'
  })

  try {
    return productPluralizer.pluralizeNoun(num)
  } catch {
    return ''
  }
}

export function ProductsSectionHeader() {
  const totalPositions = useCartStore(state => state.totalPositions())

  return (
    <header className={styles.root}>
      <div className={styles.informationContainer}>
        <article className={styles.titleArticle}>
          <h3 className={styles.title}>Ваш заказ</h3>
        </article>
        <span className={styles.totalPositions}>
          {getPluralizedProductNoun(totalPositions)}
        </span>
      </div>
      <ButtonClearCart className={styles.buttonClear} />
    </header>
  )
}
