import { notFound } from 'next/navigation'

import { CategoryView } from './components/category'
import { HTTPMethod } from '@shared/@types/HTTPMethod.ts'
import type { PageProps } from '@shared/@types/next/PageProps.ts'

const SERVER_API = 'http://localhost:4200'
const CATEGORIES_ENDPOINT = 'categories'

export default async function CategoryPage({ params }: PageProps) {
  const id = params.id

  try {
    const url = `${SERVER_API}/${CATEGORIES_ENDPOINT}/${id}`
    const response = await fetch(url, {
      method: HTTPMethod.GET
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
