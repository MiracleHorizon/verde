import Link from 'next/link'

import { IconChevronRight } from '@ui/icons/IconChevronRight'
import { getCategoryRoute } from '@helpers/getCategoryRoute'
import type { ProductCategory } from '@interfaces/business/ProductCategory'
import styles from './ButtonLoadMore.module.scss'

export function ButtonLoadMore({ id }: Pick<ProductCategory, 'id'>) {
  return (
    <Link href={getCategoryRoute(id)} className={styles.root}>
      Все
      <IconChevronRight className={styles.icon} />
    </Link>
  )
}
