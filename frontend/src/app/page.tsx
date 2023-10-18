import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { HomeView } from '@components/views/Home'
import { DefaultLayout } from '@components/Layout'
import { HTTPMethod } from '@shared/@types/HTTPMethod.ts'
import { APP_TITLE } from '@shared/const/seo.ts'
import type { ProductCategory } from '@shared/@types/ProductCategory.ts'

export const metadata: Metadata = {
  title: `Главная | ${APP_TITLE}`
}

const SERVER_API = 'http://localhost:4200'
const CATEGORIES_ENDPOINT = 'categories'

export default async function HomePage() {
  try {
    const url = `${SERVER_API}/${CATEGORIES_ENDPOINT}`
    const response = await fetch(url, {
      method: HTTPMethod.GET,
      cache: 'no-cache'
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
