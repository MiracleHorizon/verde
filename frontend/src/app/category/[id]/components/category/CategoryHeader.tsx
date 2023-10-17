import { Header } from '@app/category/[id]/components/Header'
import { Route } from '@shared/@types/Route.ts'
import type { BreadcrumbItem } from '@ui/Breadcrumb'
import type { ProductCategory } from '@shared/@types/ProductCategory.ts'

const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Главная', href: Route.HOME },
  { title: 'Категория 1', href: Route.CATEGORY + '/1' },
  { title: 'Категория 2', href: Route.CATEGORY + '/2' }
]

export function CategoryHeader({ title }: Pick<ProductCategory, 'title'>) {
  return <Header title={title} breadcrumbItems={breadcrumbItems} />
}
