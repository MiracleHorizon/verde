'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { getSubcategoryRoute } from '@helpers/getSubcategoryRoute.ts'
import type { ProductSubcategory } from '@shared/@types/ProductSubcategory.ts'
import styles from './SubcategoryHeader.module.scss'

export function SubcategoryHeader({
  id,
  title
}: Pick<ProductSubcategory, 'id' | 'title'>) {
  const params = useParams()
  const categoryId = Array.isArray(params.id) ? params.id[0] : params.id
  const href = getSubcategoryRoute(categoryId, id)

  return (
    <header className={styles.root}>
      <article className={styles.titleArticle}>
        <Link href={href} className={styles.title}>
          {title}
        </Link>
      </article>
    </header>
  )
}
