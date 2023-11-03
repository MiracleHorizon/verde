/**
 * @param value - the value to be checked.
 */
export function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null
}
