import { useMemo } from 'react'

import { Header } from '@app/category/[id]/components/Header'
import { getCategoryRoute } from '@helpers/getCategoryRoute'
import { Route } from '@enums/Route'
import type { BreadcrumbItem } from '@ui/Breadcrumb'
import type { ProductSubcategory } from '@interfaces/ProductSubcategory'

export function SubcategoryHeader({
  title,
  categoryId,
  categoryTitle
}: Pick<ProductSubcategory, 'title' | 'categoryId' | 'categoryTitle'>) {
  const breadcrumbItems: BreadcrumbItem[] = useMemo(
    () => [
      {
        title: 'Главная',
        href: Route.HOME
      },
      {
        title: categoryTitle,
        href: getCategoryRoute(categoryId)
      }
    ],
    [categoryId, categoryTitle]
  )

  return <Header title={title} breadcrumbItems={breadcrumbItems} />
}
