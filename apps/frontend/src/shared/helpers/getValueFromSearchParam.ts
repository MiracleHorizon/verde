export function getValueFromSearchParam(
  searchParam: string | string[]
): string {
  return Array.isArray(searchParam) ? searchParam[0] : searchParam
}
