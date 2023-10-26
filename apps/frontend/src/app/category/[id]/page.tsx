import { notFound } from 'next/navigation'

import { CategoryView } from './components/category'
import { SubcategoryView } from './components/subcategory'
import { HTTPMethod } from '@enums/HTTPMethod'
import type { PageProps } from '@interfaces/next/PageProps'
import type { ProductSubcategory } from '@interfaces/ProductSubcategory'

const SERVER_API = 'http://localhost:4200'
const CATEGORIES_ENDPOINT = 'categories'
const SUBCATEGORIES_ENDPOINT = 'subcategories'

export default async function CategoryPage({
  params,
  searchParams
}: PageProps) {
  const categoryId = params.id
  const subcategoryParam = searchParams.subcategory

  if (!subcategoryParam) {
    try {
      const url = `${SERVER_API}/${CATEGORIES_ENDPOINT}/${categoryId}`
      const response = await fetch(url, {
        method: HTTPMethod.GET,
        cache: 'no-cache'
      })

      if (!response.ok) {
        notFound()
      }

      const data = await response.json()

      return <CategoryView {...data} />
    } catch {
      notFound()
    }
  }

  try {
    const subcategoryId = Array.isArray(subcategoryParam)
      ? subcategoryParam[0]
      : subcategoryParam
    const url = `${SERVER_API}/${SUBCATEGORIES_ENDPOINT}/${subcategoryId}`
    const response = await fetch(url, {
      method: HTTPMethod.GET,
      cache: 'no-cache'
    })

    if (!response.ok) {
      notFound()
    }

    const data: ProductSubcategory = await response.json()

    if (data.categoryId.toString() !== categoryId) {
      notFound()
    }

    return <SubcategoryView {...data} />
  } catch {
    notFound()
  }
}
