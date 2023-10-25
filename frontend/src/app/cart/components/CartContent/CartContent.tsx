'use client'

import { ProductsSection } from './ProductsSection'
import styles from './CartContent.module.scss'

export function CartContent() {
  return (
    <main className={styles.root}>
      <div className={styles.left}>
        <ProductsSection />
      </div>
      <div className={styles.right}></div>
    </main>
  )
}
