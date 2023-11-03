export const ABORT_TIMEOUT = 15e3

/**
 * @param abortController - the instance of the AbortController to be used for aborting the request.
 * @param timeout - the time (in milliseconds) after which the request will be
 * automatically aborted. The default value is set to 15 seconds.
 */
export function abortRequestWithTimeout(
  abortController: AbortController,
  timeout: number = ABORT_TIMEOUT
): ReturnType<typeof setTimeout> {
  return setTimeout(() => {
    abortController.abort()
  }, timeout)
}
