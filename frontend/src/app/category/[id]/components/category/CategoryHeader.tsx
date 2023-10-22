import { Header } from '@app/category/[id]/components/Header'
import { Route } from '@enums/Route'
import type { BreadcrumbItem } from '@ui/Breadcrumb'
import type { ProductCategory } from '@interfaces/ProductCategory'

const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Главная', href: Route.HOME }
]

export function CategoryHeader({ title }: Pick<ProductCategory, 'title'>) {
  return <Header title={title} breadcrumbItems={breadcrumbItems} />
}
