import type { Metadata } from 'next'

import { CategoryView } from './components/category'
import { SubcategoryView } from './components/subcategory'
import { fetchCategory } from './api/fetchCategory'
import { fetchSubcategory } from './api/fetchSubcategory'
import { fetchCategoryMetadata } from './api/fetchCategoryMetadata'
import { fetchSubcategoryMetadata } from './api/fetchSubcategoryMetadata'
import { getValueFromSearchParam } from '@helpers/getValueFromSearchParam'
import type { PageProps } from '@interfaces/next/PageProps'
import type { GenerateMetadataParams } from '@interfaces/next/GenerateMetadataParams'

export async function generateMetadata({
  params,
  searchParams
}: GenerateMetadataParams): Promise<Metadata> {
  const subcategoryParam = searchParams.subcategory

  if (subcategoryParam) {
    const subcategoryId = getValueFromSearchParam(subcategoryParam)

    return fetchSubcategoryMetadata(subcategoryId)
  }

  return fetchCategoryMetadata(params.id)
}

export default async function CategoryPage({
  params,
  searchParams
}: PageProps) {
  const subcategoryParam = searchParams.subcategory

  if (subcategoryParam) {
    const subcategoryId = getValueFromSearchParam(subcategoryParam)
    const subcategory = await fetchSubcategory(subcategoryId)

    return <SubcategoryView {...subcategory} />
  }

  const categoryId = params.id
  const category = await fetchCategory(categoryId)

  return <CategoryView {...category} />
}
