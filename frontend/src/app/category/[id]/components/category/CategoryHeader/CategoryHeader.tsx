import { Breadcrumb, type BreadcrumbItem } from '@ui/Breadcrumb'
import { Route } from '@shared/@types/Route.ts'
import type { ProductCategory } from '@shared/@types/ProductCategory.ts'
import styles from './CategoryHeader.module.scss'

const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Главная', href: Route.HOME },
  { title: 'Категория 1', href: Route.CATEGORY + '/1' },
  { title: 'Категория 2', href: Route.CATEGORY + '/2' }
]

export function CategoryHeader({ title }: Pick<ProductCategory, 'title'>) {
  return (
    <header className={styles.root}>
      <Breadcrumb
        items={breadcrumbItems}
        className={styles.breadcrumb}
        withFinishingSeparator
      />
      <article className={styles.titleArticle}>
        <h1 className={styles.title}>{title}</h1>
      </article>
    </header>
  )
}
