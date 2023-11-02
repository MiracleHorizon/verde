import { notFound } from 'next/navigation'

import { abortRequestWithTimeout } from '@helpers/abortRequestWithTimeout'
import { HTTPMethod } from '@enums/HTTPMethod'
import type { MetadataResponse } from '../interfaces/MetadataResponse'

const baseAPI = process.env.SERVER_API + '/categories'

export async function fetchCategoryMetadata(
  id: string
): Promise<MetadataResponse> {
  const url = baseAPI + '/' + id + '/metadata'
  const abortController = new AbortController()
  const abortTimer = abortRequestWithTimeout(abortController)

  try {
    const response = await fetch(url, {
      method: HTTPMethod.GET,
      cache: 'force-cache',
      signal: abortController.signal,
      next: {
        tags: ['category/' + id + '/metadata']
      }
    })

    if (!response.ok || abortController.signal.aborted) {
      notFound()
    }

    return await response.json()
  } catch {
    notFound()
  } finally {
    clearTimeout(abortTimer)
  }
}
