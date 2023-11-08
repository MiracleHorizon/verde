import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { HomeView } from '@components/views/Home'
import { DefaultLayout } from '@components/Layout'
import { APP_TITLE } from '@constants/seo'
import { HTTPMethod } from '@enums/HTTPMethod'
import type { ProductCategory } from '@interfaces/business/ProductCategory'

export const metadata: Metadata = {
  title: `Главная | ${APP_TITLE}`
}

export default async function HomePage() {
  try {
    const url = process.env.SERVER_API + '/categories'
    const response = await fetch(url, {
      method: HTTPMethod.GET,
      cache: 'force-cache',
      next: {
        tags: ['categories/root']
      }
    })

    if (!response.ok) {
      notFound()
    }

    const data: ProductCategory[] = await response.json()

    return (
      <DefaultLayout>
        <HomeView categories={data} />
      </DefaultLayout>
    )
  } catch {
    notFound()
  }
}
