const ABORT_TIMEOUT = 15e3

export function abortRequestWithTimeout(
  abortController: AbortController,
  timeout: number = ABORT_TIMEOUT
): ReturnType<typeof setTimeout> {
  return setTimeout(() => {
    abortController.abort()
  }, timeout)
}
