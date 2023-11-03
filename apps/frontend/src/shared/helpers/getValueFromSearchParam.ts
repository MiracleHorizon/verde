export function getValueFromSearchParam(
  searchParam: string | string[]
): string {
  if (!Array.isArray(searchParam)) {
    return searchParam
  }

  if (searchParam.length === 0) {
    return ''
  }

  return searchParam[0]
}
