import Link from 'next/link'

import { CategoryImage } from '@components/CategoryImage'
import { ButtonLoadMore } from './ButtonLoadMore'
import { getCategoryRoute } from '@helpers/getCategoryRoute'
import type { ProductCategory } from '@interfaces/business/ProductCategory'
import styles from './CategorySectionHeader.module.scss'

export function CategorySectionHeader({
  id,
  title,
  imagePath
}: Pick<ProductCategory, 'id' | 'title' | 'imagePath'>) {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <CategoryImage imagePath={imagePath} className={styles.image} />
        <article className={styles.titleArticle}>
          <Link href={getCategoryRoute(id)} className={styles.title}>
            {title}
          </Link>
        </article>
      </div>
      <ButtonLoadMore id={id} />
    </header>
  )
}
