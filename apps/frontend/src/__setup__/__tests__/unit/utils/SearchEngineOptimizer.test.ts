import { describe, expect, it } from 'vitest'

import { SearchEngineOptimizer } from '@utils/SearchEngineOptimizer'
import { APP_DESCRIPTION, APP_KEYWORDS } from '@constants/seo'

describe('SearchEngineOptimizer', () => {
  it('should return generated basic metadata for SEO ', () => {
    const title1 = 'Категория 1'
    const searchEngineOptimizer1 = new SearchEngineOptimizer({
      title: title1
    })
    const metadata1 = searchEngineOptimizer1.getBasicMetaData()

    expect(metadata1.title).toBe(title1)
    expect(metadata1.description).toBe(APP_DESCRIPTION)
    expect(metadata1.keywords).toStrictEqual(
      APP_KEYWORDS.map(keyword => keyword.toLocaleLowerCase())
    )

    const title2 = 'Категория 2'
    const description2 = 'Описание второй категории'
    const keywords2 = ['Ключевое слово 1', 'Ключевое слово 2']
    const searchEngineOptimizer2 = new SearchEngineOptimizer({
      title: title2,
      description: description2,
      keywords: keywords2
    })
    const metadata2 = searchEngineOptimizer2.getBasicMetaData()

    expect(metadata2.title).toBe(title2)
    expect(metadata2.description).toBe(
      [APP_DESCRIPTION, description2].join('. ')
    )
    for (const keyword of keywords2) {
      expect(metadata2.keywords).toContain(keyword.toLocaleLowerCase())
    }
  })
})
