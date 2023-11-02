import type { Metadata } from 'next'

import { APP_DESCRIPTION, APP_KEYWORDS } from '@constants/seo'
import type { SeoPayload } from '@interfaces/SeoPayload'

type BasicMetadata = Pick<Metadata, 'title' | 'keywords' | 'description'>

export class SearchEngineOptimizer {
  private readonly title: string
  private readonly description?: string
  private readonly keywords?: string[]

  constructor({ title, description, keywords }: SeoPayload) {
    this.title = title
    this.description = description
    this.keywords = keywords
  }

  public getBasicMetaData(): BasicMetadata {
    const metadata = {
      title: this.title,
      description: this.writeDescription(),
      keywords: this.getUniqueKeywords()
    }

    if (this.description) {
      metadata.description = `${APP_DESCRIPTION}. ${this.description}`
    }

    return metadata
  }

  private writeDescription(): string {
    if (!this.description) {
      return APP_DESCRIPTION
    }

    return `${APP_DESCRIPTION}. ${this.description}`
  }

  private getUniqueKeywords(): string[] {
    return [...new Set(this.getLowercaseKeywords())]
  }

  private getLowercaseKeywords(): string[] {
    const keywords = APP_KEYWORDS.concat(this.keywords || [])
    return keywords.map(keyword => keyword.toLowerCase())
  }
}
