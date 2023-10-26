export function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null
}
