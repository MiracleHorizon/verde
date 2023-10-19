import { useMemo } from 'react'

import { Header } from '@app/category/[id]/components/Header'
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
        href: `${Route.CATEGORY}/${categoryId}`
      }
    ],
    [categoryId, categoryTitle]
  )

  return <Header title={title} breadcrumbItems={breadcrumbItems} />
}
