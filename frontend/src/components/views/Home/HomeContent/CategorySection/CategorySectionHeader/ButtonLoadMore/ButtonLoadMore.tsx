import Link from 'next/link'

import { ProductCategory } from '@shared/@types/ProductCategory.ts'
import { IconChevronRight } from '@ui/icons/IconChevronRight.tsx'
import { getCategoryRoute } from '@helpers/getCategoryRoute.ts'
import styles from './ButtonLoadMore.module.scss'

export function ButtonLoadMore({ id }: Pick<ProductCategory, 'id'>) {
  return (
    <Link href={getCategoryRoute(id)} className={styles.root}>
      Все
      <IconChevronRight className={styles.icon} />
    </Link>
  )
}
