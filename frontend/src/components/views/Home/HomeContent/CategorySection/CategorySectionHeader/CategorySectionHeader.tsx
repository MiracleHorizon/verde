import Link from 'next/link'

import { CategoryImage } from '@components/CategoryImage'
import { ButtonLoadMore } from './ButtonLoadMore'
import { getCategoryRoute } from '@helpers/getCategoryRoute.ts'
import type { ProductCategory } from '@shared/@types/ProductCategory.ts'
import styles from './CategorySectionHeader.module.scss'

export function CategorySectionHeader({
  id,
  title,
  imagePath
}: Pick<ProductCategory, 'id' | 'title' | 'imagePath'>) {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <CategoryImage imagePath={imagePath} />
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
