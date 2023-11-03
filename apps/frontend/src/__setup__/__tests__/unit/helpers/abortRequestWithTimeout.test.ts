import { describe, expect, it } from 'vitest'

import {
  ABORT_TIMEOUT,
  abortRequestWithTimeout
} from '@helpers/abortRequestWithTimeout'

describe('abortRequestWithTimeout', () => {
  it('should call abort after the default timeout', async () => {
    const abortController = new AbortController()

    abortRequestWithTimeout(abortController)

    expect(abortController.signal.aborted).toBeFalsy()
    await new Promise(resolve => {
      setTimeout(resolve, ABORT_TIMEOUT)
    })
    expect(abortController.signal.aborted).toBeTruthy()
  })

  it('should call abort after the specified timeout', async () => {
    const abortController = new AbortController()
    const timeout = 1000

    abortRequestWithTimeout(abortController, timeout)

    expect(abortController.signal.aborted).toBeFalsy()
    await new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
    expect(abortController.signal.aborted).toBeTruthy()
  })
})
